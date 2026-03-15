import { useEffect, useRef } from "react";

interface GlowCursorProps {
  color?: string;
  size?: number;
}

const GlowCursor = ({ color = "0, 164, 220", size = 300 }: GlowCursorProps) => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;
    parent.style.position = "relative";

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.opacity = "1";
      el.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, rgba(${color}, 0.08), transparent 70%)`;
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [color, size]);

  return (
    <div
      ref={glowRef}
      className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0"
      style={{ zIndex: 2 }}
    />
  );
};

export default GlowCursor;
