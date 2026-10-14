"use client";

import React, { useRef, useState, useMemo } from "react";
import { RoutePoint, ROUTE_5K_POINTS, ROUTE_5K_META } from "../data/routeData";

interface ElevationProfileProps {
  onHoverPoint?: (point: RoutePoint | null) => void;
  activeHoverPoint?: RoutePoint | null;
}

export default function ElevationProfile({
  onHoverPoint,
  activeHoverPoint,
}: ElevationProfileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverData, setHoverData] = useState<{
    x: number;
    y: number;
    point: RoutePoint;
  } | null>(null);

  const points = ROUTE_5K_POINTS;

  const { minEle, maxEle, totalDist, pathD, areaD, width, height, padding, getX, getY } =
    useMemo(() => {
      const w = 1000;
      const h = 200;
      const pad = { top: 25, right: 30, bottom: 35, left: 55 };

      const minE = Math.min(...points.map((p) => p.ele));
      const maxE = Math.max(...points.map((p) => p.ele));
      const totD = points[points.length - 1].distKm;

      // Add 10m margin for top/bottom chart breathing room
      const yMin = Math.floor(minE - 10);
      const yMax = Math.ceil(maxE + 10);

      const chartW = w - pad.left - pad.right;
      const chartH = h - pad.top - pad.bottom;

      const getX = (distKm: number) => pad.left + (distKm / totD) * chartW;
      const getY = (ele: number) =>
        pad.top + chartH - ((ele - yMin) / (yMax - yMin)) * chartH;

      const pathCoords = points.map((p) => `${getX(p.distKm)},${getY(p.ele)}`);
      const linePath = `M ${pathCoords.join(" L ")}`;

      const areaPath = `M ${getX(0)},${pad.top + chartH} L ${pathCoords.join(
        " L "
      )} L ${getX(totD)},${pad.top + chartH} Z`;

      return {
        minEle: minE,
        maxEle: maxE,
        totalDist: totD,
        pathD: linePath,
        areaD: areaPath,
        width: w,
        height: h,
        padding: pad,
        chartW,
        chartH,
        yMin,
        yMax,
        getX,
        getY,
      };
    }, [points]);

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clientX / rect.width));
    const targetDist = ratio * totalDist;

    // Find nearest point
    let nearest = points[0];
    let minDiff = Math.abs(nearest.distKm - targetDist);
    for (let i = 1; i < points.length; i++) {
      const diff = Math.abs(points[i].distKm - targetDist);
      if (diff < minDiff) {
        minDiff = diff;
        nearest = points[i];
      }
    }

    const posX = getX(nearest.distKm);
    const posY = getY(nearest.ele);

    setHoverData({ x: posX, y: posY, point: nearest });
    if (onHoverPoint) {
      onHoverPoint(nearest);
    }
  };

  const handlePointerLeave = () => {
    setHoverData(null);
    if (onHoverPoint) {
      onHoverPoint(null);
    }
  };

  // If activeHoverPoint passed from parent, use that to show indicator
  const currentDisplay = hoverData || (activeHoverPoint ? {
    x: getX(activeHoverPoint.distKm),
    y: getY(activeHoverPoint.ele),
    point: activeHoverPoint,
  } : null);

  const yTicks = [740, 760, 780, 800];
  const xTicks = [0, 1, 2, 3, 4, 5.2];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#051f1c]/80 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#8baa37] animate-pulse" />
          <h3 className="text-sm md:text-base font-black uppercase tracking-wider text-white">
            Elevation Profile <span className="text-[#8baa37]">(5K Route)</span>
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 text-white/80">
            Gain: <span className="text-[#8baa37] font-bold">{ROUTE_5K_META.elevationGain}</span>
          </div>
          <div className="bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 text-white/80">
            Min: <span className="text-white font-bold">{ROUTE_5K_META.minElevation}</span>
          </div>
          <div className="bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 text-white/80">
            Max: <span className="text-white font-bold">{ROUTE_5K_META.maxElevation}</span>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden select-none touch-none">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto cursor-crosshair"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <defs>
            <linearGradient id="elevationGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8baa37" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#8baa37" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8baa37" stopOpacity="0.0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines - horizontal */}
          {yTicks.map((val) => {
            const chartH = height - padding.top - padding.bottom;
            const yMin = Math.floor(minEle - 10);
            const yMax = Math.ceil(maxEle + 10);
            const yPos = padding.top + chartH - ((val - yMin) / (yMax - yMin)) * chartH;
            return (
              <g key={val}>
                <line
                  x1={padding.left}
                  y1={yPos}
                  x2={width - padding.right}
                  y2={yPos}
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding.left - 10}
                  y={yPos + 4}
                  textAnchor="end"
                  fill="rgba(255,255,255,0.4)"
                  fontSize="11"
                  fontFamily="sans-serif"
                >
                  {val}m
                </text>
              </g>
            );
          })}

          {/* Grid lines - vertical (Distance in KM) */}
          {xTicks.map((km) => {
            const chartW = width - padding.left - padding.right;
            const xPos = padding.left + (km / totalDist) * chartW;
            return (
              <g key={km}>
                <line
                  x1={xPos}
                  y1={padding.top}
                  x2={xPos}
                  y2={height - padding.bottom}
                  stroke="rgba(255,255,255,0.06)"
                />
                <text
                  x={xPos}
                  y={height - padding.bottom + 18}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {km} km
                </text>
              </g>
            );
          })}

          {/* Gradient area under elevation curve */}
          <path d={areaD} fill="url(#elevationGrad)" />

          {/* Main elevation line */}
          <path
            d={pathD}
            fill="none"
            stroke="#8baa37"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />

          {/* Water station milestone marker at ~2.5km */}
          {(() => {
            const chartW = width - padding.left - padding.right;
            const xWs = padding.left + (2.5 / totalDist) * chartW;
            return (
              <g>
                <line
                  x1={xWs}
                  y1={padding.top}
                  x2={xWs}
                  y2={height - padding.bottom}
                  stroke="#38bdf8"
                  strokeDasharray="3 3"
                  strokeWidth="1.5"
                />
                <text
                  x={xWs}
                  y={padding.top - 6}
                  textAnchor="middle"
                  fill="#38bdf8"
                  fontSize="10"
                  fontWeight="bold"
                >
                  💧 WS (2.5K)
                </text>
              </g>
            );
          })()}

          {/* Active pointer guide line & point */}
          {currentDisplay && (
            <g>
              <line
                x1={currentDisplay.x}
                y1={padding.top}
                x2={currentDisplay.x}
                y2={height - padding.bottom}
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <circle
                cx={currentDisplay.x}
                cy={currentDisplay.y}
                r="6"
                fill="#ffffff"
                stroke="#8baa37"
                strokeWidth="3"
                filter="url(#glow)"
              />
            </g>
          )}
        </svg>

        {/* Floating Tooltip following cursor */}
        {currentDisplay && (
          <div
            className="absolute pointer-events-none z-20 bg-black/90 border border-[#8baa37] text-white text-xs px-3 py-2 rounded-lg shadow-2xl backdrop-blur-md transform -translate-x-1/2 -translate-y-full"
            style={{
              left: `${(currentDisplay.x / width) * 100}%`,
              top: `${(currentDisplay.y / height) * 100}%`,
              marginTop: "-12px",
            }}
          >
            <div className="font-black text-[#8baa37] flex items-center gap-1.5 whitespace-nowrap">
              <span>📍 {currentDisplay.point.distKm.toFixed(2)} KM</span>
            </div>
            <div className="text-white/80 font-bold whitespace-nowrap">
              Elev: {Math.round(currentDisplay.point.ele)} m
            </div>
            <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-[#8baa37] rotate-45" />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-white/50">
        <span>💡 Gerakkan kursor atau sentuh grafik untuk melihat posisi rute di peta.</span>
        <span className="hidden sm:inline">Titik Awal & Akhir: Alun-Alun Wonosobo</span>
      </div>
    </div>
  );
}
