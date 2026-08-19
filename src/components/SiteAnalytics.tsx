"use client";

import { useEffect } from "react";

function sendMetric(metric: string, value = 1) {
  if (navigator.doNotTrack === "1") return;

  const payload = JSON.stringify({ path: window.location.pathname, metric, value });
  const blob = new Blob([payload], { type: "application/json" });

  if (navigator.sendBeacon?.("/api/metrics", blob)) return;

  void fetch("/api/metrics", {
    method: "POST",
    body: payload,
    headers: { "Content-Type": "application/json" },
    keepalive: true,
  });
}

export function SiteAnalytics() {
  useEffect(() => {
    sendMetric("page_view");

    const onLoad = () => {
      const [nav] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (nav) {
        sendMetric("load_ms", Math.round(nav.loadEventEnd));
      }
    };

    window.addEventListener("load", onLoad, { once: true });

    let observer: PerformanceObserver | undefined;
    if ("PerformanceObserver" in window) {
      try {
        observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            sendMetric("lcp_ms", Math.round(entry.startTime));
          }
        });
        observer.observe({ type: "largest-contentful-paint", buffered: true });
      } catch {
        // Unsupported in this browser.
      }
    }

    return () => {
      window.removeEventListener("load", onLoad);
      observer?.disconnect();
    };
  }, []);

  return null;
}
