"use client";

import { useEffect, useId, useRef } from "react";

const MAIN_PATH =
  "M230 395 C270 458 305 535 350 615 C382 672 421 706 466 644 C514 579 548 458 611 361 C658 289 721 299 758 373 C798 453 819 524 858 611";
const INNER_PATH =
  "M438 654 C487 628 524 571 577 531 C622 497 668 508 710 484";

export default function AnimatedLogo({ size = 62 }: { size?: number }) {
  const uid = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const progressRef = useRef(0);
  const runningRef = useRef(true);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const main = svg.querySelector<SVGPathElement>(".va-plot-line");
    const inner = svg.querySelector<SVGPathElement>(".va-plot-inner");
    const dot = svg.querySelector<SVGCircleElement>(".va-plot-dot");
    const clipRect = svg.querySelector<SVGRectElement>(".va-plot-clip-rect");
    if (!main || !inner || !dot || !clipRect) return;

    const mainLen = main.getTotalLength();
    const innerLen = inner.getTotalLength();
    main.style.strokeDasharray = `${mainLen}`;
    inner.style.strokeDasharray = `${innerLen}`;

    let frame = 0;
    const tick = () => {
      if (!runningRef.current) return;
      progressRef.current += 0.008;
      if (progressRef.current > 1.12) progressRef.current = 0;
      const p = Math.min(progressRef.current, 1);
      main.style.strokeDashoffset = `${mainLen * (1 - p)}`;
      inner.style.strokeDashoffset = `${innerLen * (1 - Math.max(0, (p - 0.12) / 0.88))}`;
      const point = main.getPointAtLength(mainLen * p);
      dot.setAttribute("cx", String(point.x));
      dot.setAttribute("cy", String(point.y));
      clipRect.setAttribute("width", String(1024 * (0.04 + p * 1.04)));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { runningRef.current = false; cancelAnimationFrame(frame); };
  }, []);

  const gradId = `vaGrad-${uid}`;
  const innerGradId = `vaInner-${uid}`;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ position: "absolute", top: 14, right: 16, filter: "drop-shadow(0 6px 16px rgba(106,66,232,0.45))" }}
    >
      <defs>
        <linearGradient id={gradId} x1="210" y1="475" x2="825" y2="560" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B6DFF" />
          <stop offset="52%" stopColor="#6A42E8" />
          <stop offset="100%" stopColor="#F24FA0" />
        </linearGradient>
        <linearGradient id={innerGradId} x1="405" y1="675" x2="705" y2="515" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1858F5" />
          <stop offset="60%" stopColor="#7044E6" />
          <stop offset="100%" stopColor="#D84DBA" />
        </linearGradient>
        <clipPath id={`vaClip-${uid}`}>
          <rect className="va-plot-clip-rect" x="0" y="0" width="0" height="1024" />
        </clipPath>
      </defs>
      <path
        className="va-plot-track"
        d={MAIN_PATH}
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="62"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g clipPath={`url(#vaClip-${uid})`}>
        <path className="va-plot-line" d={MAIN_PATH} fill="none" stroke={`url(#${gradId})`} strokeWidth="62" strokeLinecap="round" strokeLinejoin="round" />
        <path className="va-plot-inner" d={INNER_PATH} fill="none" stroke={`url(#${innerGradId})`} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle className="va-plot-dot" cx="230" cy="395" r="32" fill="#7345E1" />
    </svg>
  );
}
