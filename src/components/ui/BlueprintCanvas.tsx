"use client";

import { useRef, useEffect, useCallback } from "react";
import { generateBlueprint, renderBlueprint } from "@/lib/blueprintGenerator";

interface BlueprintCanvasProps {
  seed: string;
  className?: string;
}

export default function BlueprintCanvas({
  seed,
  className = "",
}: BlueprintCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    if (w === 0 || h === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const commands = generateBlueprint(seed, w, h);
    renderBlueprint(ctx, commands);
  }, [seed]);

  useEffect(() => {
    draw();

    const container = containerRef.current;
    if (!container) return;

    let timeout: ReturnType<typeof setTimeout>;
    const observer = new ResizeObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(draw, 150);
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [draw]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
