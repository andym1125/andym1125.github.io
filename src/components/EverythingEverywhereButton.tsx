import React, { useRef, useEffect, useState } from 'react';

interface EverythingEverywhereButtonProps {
  onClick: () => void;
  animateOnHover?: boolean;
}

interface Star {
  x: number;
  y: number;
  z: number;
  prevX?: number;
  prevY?: number;
}

export const EverythingEverywhereButton: React.FC<EverythingEverywhereButtonProps> = ({
  onClick,
  animateOnHover = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const button = canvas.parentElement;
      if (button) {
        canvas.width = button.offsetWidth;
        canvas.height = button.offsetHeight;
      }
    };
    updateCanvasSize();

    // Initialize stars
    const numStars = 24;
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
      });
    }
    starsRef.current = stars;

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Only animate if always on, or if hovering when hover mode is enabled
      const shouldAnimate = !animateOnHover || isHovered;

      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Center point
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        if (shouldAnimate) {
          // Move star away (increase z) - reversing direction
          star.z += 4;

          // Reset star if it gets too far
          if (star.z >= canvas.width) {
            star.z = 0;
            star.x = Math.random() * canvas.width - canvas.width / 2;
            star.y = Math.random() * canvas.height - canvas.height / 2;
            // Clear previous position to avoid connecting old and new positions
            star.prevX = undefined;
            star.prevY = undefined;
          }
        }

        // Project 3D to 2D
        const scale = 200 / (200 + star.z);
        const x2d = star.x * scale + centerX;
        const y2d = star.y * scale + centerY;

        // Draw star trail
        if (star.prevX !== undefined && star.prevY !== undefined && shouldAnimate) {
          ctx.beginPath();
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(x2d, y2d);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = scale * 2;
          ctx.stroke();
        }

        // Draw star point
        const size = Math.max(0, scale * 2);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();

        // Store position for trail
        star.prevX = x2d;
        star.prevY = y2d;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateOnHover, isHovered]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold text-sm overflow-hidden"
      style={{ position: 'fixed' }}
      aria-label="Everything, Everywhere, All at Once"
    >
      {/* Starfield Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #1a0033 0%, #000000 100%)' }}
      />

      {/* Button Content */}
      <div className="relative z-10 flex flex-col items-center gap-1 text-white">
        <span className="text-xs">🌀</span>
        <span>Everything,</span>
        <span>Everywhere,</span>
        <span>All at Once</span>
        <span className="text-xs text-gray-200 font-normal mt-1">(flash warning)</span>
      </div>
    </button>
  );
};

export default EverythingEverywhereButton;
