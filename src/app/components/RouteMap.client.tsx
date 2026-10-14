"use client";

import React, { useEffect, useRef, useState } from "react";
import { RoutePoint, ROUTE_5K_POINTS, ROUTE_CHECKPOINTS } from "../data/routeData";

// Define minimal Leaflet types for window.L
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    L: any;
  }
}

interface RouteMapProps {
  activePoint?: RoutePoint | null;
}

export default function RouteMap({ activePoint }: RouteMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeMarkerRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const polylineRef = useRef<any>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Load Leaflet CSS and JS dynamically from CDN
  useEffect(() => {
    let isMounted = true;

    const loadLeafletAssets = async () => {
      if (typeof window === "undefined") return;

      // Check if Leaflet CSS is already injected
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);
      }

      // If Leaflet JS is already loaded
      if (window.L) {
        if (isMounted) setIsLoaded(true);
        return;
      }

      // Check if script is already present
      let script = document.getElementById("leaflet-script") as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "leaflet-script";
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.async = true;
        document.body.appendChild(script);
      }

      script.addEventListener("load", () => {
        if (isMounted) setIsLoaded(true);
      });

      script.addEventListener("error", () => {
        if (isMounted) setLoadError(true);
      });
    };

    loadLeafletAssets();

    return () => {
      isMounted = false;
    };
  }, []);

  // Initialize Map once Leaflet is loaded
  useEffect(() => {
    if (!isLoaded || !mapContainerRef.current || mapInstanceRef.current || !window.L) return;

    const L = window.L;

    // Center on Wonosobo
    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      scrollWheelZoom: false, // Prevent accidental scrolling when page scrolls
    });

    mapInstanceRef.current = map;

    // Add Zoom Control at bottom right
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Add Tile Layer (OpenStreetMap Humanitarian / HOT tiles - high contrast and responsive, identical to UGM)
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team',
    }).addTo(map);

    // LatLng coordinates array
    const latLngs = ROUTE_5K_POINTS.map((p) => [p.lat, p.lon]);

    // Outline polyline (dark glow background)
    L.polyline(latLngs, {
      color: "#051f1c",
      weight: 8,
      opacity: 0.9,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);

    // Main route polyline (vibrant lime matching brand)
    const polyline = L.polyline(latLngs, {
      color: "#8baa37",
      weight: 5,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);

    polylineRef.current = polyline;

    // Fit map bounds to route with comfortable padding
    const bounds = polyline.getBounds();
    map.fitBounds(bounds, {
      padding: [45, 45],
    });

    // Custom DivIcon helper
    const createCustomIcon = (bgColor: string, text: string, iconHtml: string) => {
      return L.divIcon({
        className: "custom-map-pin",
        html: `
          <div style="display: flex; align-items: center; gap: 6px; background: ${bgColor}; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-weight: 800; font-size: 11px; letter-spacing: 0.5px; box-shadow: 0 4px 14px rgba(0,0,0,0.4); border: 2px solid #ffffff; transform: translate(-50%, -100%); white-space: nowrap; cursor: pointer;">
            <span>${iconHtml}</span>
            <span>${text}</span>
          </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });
    };

    // 1. Start & Finish Marker (Alun-Alun Wonosobo)
    const startPt = ROUTE_CHECKPOINTS[0];
    const startIcon = createCustomIcon(
      "#1a6860",
      "START / FINISH",
      "🏁"
    );
    const startMarker = L.marker([startPt.lat, startPt.lon], { icon: startIcon }).addTo(map);
    startMarker.bindPopup(`
      <div style="padding: 6px; font-family: sans-serif; color: #111;">
        <div style="font-weight: 900; color: #1a6860; font-size: 13px;">🚩 START & FINISH LINE</div>
        <div style="font-size: 12px; margin-top: 2px; font-weight: 600;">Alun-Alun Wonosobo</div>
        <div style="font-size: 11px; color: #666; margin-top: 4px;">Elevasi: ~797 m • KM 0.0 / KM 5.2</div>
      </div>
    `);

    // 2. Water Station 1 Marker (KM 2.5)
    const wsPt = ROUTE_CHECKPOINTS[1];
    const wsIcon = createCustomIcon(
      "#0284c7",
      "WATER STATION (KM 2.5)",
      "💧"
    );
    const wsMarker = L.marker([wsPt.lat, wsPt.lon], { icon: wsIcon }).addTo(map);
    wsMarker.bindPopup(`
      <div style="padding: 6px; font-family: sans-serif; color: #111;">
        <div style="font-weight: 900; color: #0284c7; font-size: 13px;">💧 WATER STATION & MEDIS 1</div>
        <div style="font-size: 12px; margin-top: 2px; font-weight: 600;">Pos Hidrasi & Penanganan Medis</div>
        <div style="font-size: 11px; color: #666; margin-top: 4px;">Titik KM: 2.5 KM • Elevasi: 749 m</div>
      </div>
    `);

    // 3. Dynamic Tracking Marker for hover/touch
    const trackingIcon = L.divIcon({
      className: "tracking-map-pin",
      html: `
        <div style="width: 22px; height: 22px; background: #8baa37; border: 3px solid #ffffff; border-radius: 50%; box-shadow: 0 0 16px #8baa37, 0 4px 10px rgba(0,0,0,0.6); transform: translate(-50%, -50%); animation: pulse 1.5s infinite;"></div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    const activeMarker = L.marker([startPt.lat, startPt.lon], {
      icon: trackingIcon,
      zIndexOffset: 1000,
      opacity: 0,
    }).addTo(map);

    activeMarkerRef.current = activeMarker;

    // Enable scroll wheel zoom only when user clicks/focuses inside map
    map.on("focus", () => map.scrollWheelZoom.enable());
    map.on("blur", () => map.scrollWheelZoom.disable());

    // Clean up on unmount
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [isLoaded]);

  // Synchronize active tracking marker with hovered point from Elevation chart
  useEffect(() => {
    if (!activeMarkerRef.current || !mapInstanceRef.current) return;

    if (activePoint) {
      activeMarkerRef.current.setLatLng([activePoint.lat, activePoint.lon]);
      activeMarkerRef.current.setOpacity(1);
    } else {
      activeMarkerRef.current.setOpacity(0);
    }
  }, [activePoint]);

  // Reset / Recenter View
  const handleRecenter = () => {
    if (mapInstanceRef.current && polylineRef.current) {
      mapInstanceRef.current.fitBounds(polylineRef.current.getBounds(), {
        padding: [45, 45],
        duration: 0.8,
      });
    }
  };

  // Toggle Fullscreen on map container
  const handleToggleFullscreen = () => {
    const el = mapContainerRef.current?.parentElement;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#051f1c]">
      {/* Map Header bar */}
      <div className="absolute top-4 left-4 z-[400] flex items-center gap-2">
        <div className="bg-[#051f1c]/90 border border-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-white text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-[#8baa37] animate-ping" />
          <span>RUTE 5K • ALUN-ALUN WONOSOBO</span>
        </div>
      </div>

      {/* Map Action Controls */}
      <div className="absolute top-4 right-4 z-[400] flex items-center gap-2">
        <button
          type="button"
          onClick={handleRecenter}
          title="Fokus Rute"
          className="bg-[#051f1c]/90 hover:bg-[#8baa37] hover:text-black border border-white/15 text-white p-2 md:px-3 md:py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-200 text-xs font-bold flex items-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="hidden md:inline">Reset View</span>
        </button>

        <button
          type="button"
          onClick={handleToggleFullscreen}
          title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
          className="bg-[#051f1c]/90 hover:bg-[#8baa37] hover:text-black border border-white/15 text-white p-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-200"
        >
          {isFullscreen ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 14 10 20"></polyline>
              <polyline points="20 10 14 10 14 4"></polyline>
              <line x1="14" y1="10" x2="21" y2="3"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Map canvas */}
      <div
        ref={mapContainerRef}
        className="w-full h-[360px] sm:h-[480px] lg:h-[580px] z-0 focus:outline-none"
      />

      {/* Loading Skeleton */}
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#051f1c] text-white">
          <div className="w-10 h-10 border-4 border-[#8baa37]/20 border-t-[#8baa37] rounded-full animate-spin mb-3" />
          <span className="text-xs uppercase tracking-widest font-bold text-white/70">
            MEMUAT PETA RUTE 5K...
          </span>
        </div>
      )}

      {/* Error state */}
      {loadError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#051f1c] text-white p-6 text-center">
          <p className="text-sm font-bold text-red-400 mb-2">Peta gagal dimuat secara online</p>
          <p className="text-xs text-white/60 mb-4">
            Pastikan koneksi internet aktif untuk memuat peta satelit OpenStreetMap.
          </p>
          <a
            href="/gpx/RUTE+5K+-+HKN+FUN+RUN+2026.gpx"
            download="RUTE+5K+-+HKN+FUN+RUN+2026.gpx"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8baa37] text-black font-bold text-xs rounded-full uppercase"
          >
            Unduh Berkas GPX Langsung
          </a>
        </div>
      )}
    </div>
  );
}
