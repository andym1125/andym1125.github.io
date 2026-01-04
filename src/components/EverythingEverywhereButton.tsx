import React, { useRef, useEffect, useState } from 'react';

interface EverythingEverywhereButtonProps {
  onClick: () => void;
}

interface Star {
  angle: number;
  distance: number;
  speed: number;
  flashProgress: number;
  flashColor: string;
  // Floating mode properties
  floatX?: number;
  floatY?: number;
  floatVx?: number;
  floatVy?: number;
  markedForRemoval?: boolean;
  // Click flash properties
  clickFlashProgress?: number;
  clickFlashState?: 'flashing' | 'hidden' | 'none'; // State machine for click animation
  hiddenFrameCount?: number; // Per-star counter for frames to stay hidden
}

export const EverythingEverywhereButton: React.FC<EverythingEverywhereButtonProps> = ({
  onClick
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const isClickFlashingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match the max expanded size (240px * 1.5 = 360px)
    // This ensures crisp rendering at full scale
    const updateCanvasSize = () => {
      const size = 360;
      canvas.width = size;
      canvas.height = size;
    };
    updateCanvasSize();

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = canvas.width / 2;
    const innerRadius = 67; // Keep inner black circle at original size (200/3 ≈ 67)

    // Flash colors
    const flashColors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#00ff80', '#ff8000'];

    // Initialize stars in floating mode (18 stars)
    const numFloatingStars = 18;
    const stars: Star[] = [];
    for (let i = 0; i < numFloatingStars; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = innerRadius + Math.random() * (outerRadius - innerRadius);
      stars.push({
        angle,
        distance,
        speed: 0.5 + Math.random() * 1,
        flashProgress: 0,
        flashColor: flashColors[Math.floor(Math.random() * flashColors.length)],
        // Initialize floating properties
        floatX: centerX + Math.cos(angle) * distance,
        floatY: centerY + Math.sin(angle) * distance,
        floatVx: (Math.random() - 0.5) * 0.3,
        floatVy: (Math.random() - 0.5) * 0.3,
        markedForRemoval: false
      });
    }
    starsRef.current = stars;

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw outer ring with radial opacity blur (fades to transparent at edges)
      const gradient = ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, outerRadius);
      gradient.addColorStop(0, 'rgba(20, 0, 40, 0)');
      gradient.addColorStop(0.4, 'rgba(30, 0, 60, 0.4)');
      gradient.addColorStop(0.7, 'rgba(20, 0, 40, 0.3)');
      gradient.addColorStop(1, 'rgba(10, 0, 30, 0)'); // Fade to transparent at edges
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star, index) => {
        // Handle click flash animation state machine
        if (star.clickFlashState === 'flashing' && star.clickFlashProgress !== undefined && star.clickFlashProgress > 0) {
          star.clickFlashProgress -= 0.05;
          if (star.clickFlashProgress <= 0) {
            // Flash complete, transition to hidden state
            star.clickFlashState = 'hidden';
            star.clickFlashProgress = 0;
            star.hiddenFrameCount = 0; // Initialize per-star hidden frame counter
          }
        } else if (star.clickFlashState === 'hidden') {
          // Count frames while hidden (about 6 frames at 60fps = 100ms)
          if (star.hiddenFrameCount !== undefined && star.hiddenFrameCount < 6) {
            star.hiddenFrameCount++;
          } else {
            // Hidden period complete, respawn the star
            const canvas = canvasRef.current;
            if (canvas) {
              const centerX = canvas.width / 2;
              const centerY = canvas.height / 2;
              const outerRadius = canvas.width / 2;

              star.angle = Math.random() * Math.PI * 2;
              star.distance = outerRadius;
              star.flashProgress = 0;
              star.floatX = centerX + Math.cos(star.angle) * star.distance;
              star.floatY = centerY + Math.sin(star.angle) * star.distance;
              star.floatVx = (Math.random() - 0.5) * 0.3;
              star.floatVy = (Math.random() - 0.5) * 0.3;
              star.clickFlashState = 'none';
            }
          }

          // Check if all stars finished the entire click sequence
          if (stars.every(s => s.clickFlashState === 'none' || s.clickFlashState === undefined)) {
            isClickFlashingRef.current = false;
          }
        }

        if (isHoveredRef.current) {
          // ZOOMING MODE: Stars move inward and flash at center

          // Move star inward continuously (pause during click flash)
          if (star.flashProgress <= 0 && !isClickFlashingRef.current) {
            star.distance -= star.speed;

            // Check if star hit the inner circle
            if (star.distance <= innerRadius) {
              star.flashProgress = 1; // Start flash
            }
          }

          // Animate flash
          if (star.flashProgress > 0) {
            star.flashProgress -= 0.05;
            if (star.flashProgress <= 0) {
              // Reset star at outer edge after flash completes
              star.distance = outerRadius;
              star.angle = Math.random() * Math.PI * 2;
              star.flashColor = flashColors[Math.floor(Math.random() * flashColors.length)];
              star.flashProgress = 0;
            }
          }

          // Calculate star position from polar coordinates
          const x = centerX + Math.cos(star.angle) * star.distance;
          const y = centerY + Math.sin(star.angle) * star.distance;

          // Draw click flash if active (takes priority) - LARGER explosion effect
          // Don't draw normal star or regular flash during click flash
          if (star.clickFlashState === 'flashing' && star.clickFlashProgress && star.clickFlashProgress > 0) {
            const flashRadius = 5 + (1 - star.clickFlashProgress) * 15; // Larger: 5-20px
            const flashGradient = ctx.createRadialGradient(x, y, 0, x, y, flashRadius);
            flashGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            flashGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.9)');
            flashGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.6)');
            flashGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = flashGradient;
            ctx.beginPath();
            ctx.arc(x, y, flashRadius, 0, Math.PI * 2);
            ctx.fill();

            // Add bright core for extra intensity
            ctx.fillStyle = 'rgba(255, 255, 255, ' + star.clickFlashProgress + ')';
            ctx.beginPath();
            ctx.arc(x, y, flashRadius * 0.3, 0, Math.PI * 2);
            ctx.fill();
          } else if (!isClickFlashingRef.current && star.flashProgress > 0) {
            const flashRadius = 2.5 + (1 - star.flashProgress) * 6.25;
            const flashGradient = ctx.createRadialGradient(x, y, 0, x, y, flashRadius);
            flashGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            flashGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.9)');
            flashGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.6)');
            flashGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = flashGradient;
            ctx.beginPath();
            ctx.arc(x, y, flashRadius, 0, Math.PI * 2);
            ctx.fill();

            // Add bright core for extra intensity
            ctx.fillStyle = 'rgba(255, 255, 255, ' + star.flashProgress + ')';
            ctx.beginPath();
            ctx.arc(x, y, flashRadius * 0.3, 0, Math.PI * 2);
            ctx.fill();
          } else if (star.clickFlashState !== 'hidden' && !isClickFlashingRef.current && star.distance > innerRadius) {
            // Draw normal star (only if not hidden, not flashing, not click-flashing, and outside inner circle)
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // FLOATING MODE: Stars drift randomly like underwater particles
          if (star.markedForRemoval && !star.clickFlashProgress) {
            // Flash and fade out
            if (star.flashProgress > 0) {
              star.flashProgress -= 0.05;
            }

            const flashRadius = 2.5 + (1 - star.flashProgress) * 6.25;
            const flashGradient = ctx.createRadialGradient(star.floatX!, star.floatY!, 0, star.floatX!, star.floatY!, flashRadius);
            flashGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            flashGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.9)');
            flashGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.6)');
            flashGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = flashGradient;
            ctx.beginPath();
            ctx.arc(star.floatX!, star.floatY!, flashRadius, 0, Math.PI * 2);
            ctx.fill();
          } else if (index < numFloatingStars) {
            // Only animate the first 18 stars in floating mode
            // Update position with random drift (pause during click flash)
            if (!isClickFlashingRef.current) {
              star.floatX! += star.floatVx!;
              star.floatY! += star.floatVy!;
            }

            // Bounce off edges with circular boundary
            const dx = star.floatX! - centerX;
            const dy = star.floatY! - centerY;
            const distFromCenter = Math.sqrt(dx * dx + dy * dy);

            if (distFromCenter > outerRadius - 5) {
              // Reverse velocity when hitting outer edge
              const angle = Math.atan2(dy, dx);
              star.floatVx = -Math.cos(angle) * 0.3;
              star.floatVy = -Math.sin(angle) * 0.3;
            } else if (distFromCenter < innerRadius + 5) {
              // Reverse velocity when hitting inner edge
              const angle = Math.atan2(dy, dx);
              star.floatVx = Math.cos(angle) * 0.3;
              star.floatVy = Math.sin(angle) * 0.3;
            }

            // Add small random wobble for underwater effect
            star.floatVx! += (Math.random() - 0.5) * 0.02;
            star.floatVy! += (Math.random() - 0.5) * 0.02;

            // Limit velocity
            const speed = Math.sqrt(star.floatVx! ** 2 + star.floatVy! ** 2);
            if (speed > 0.5) {
              star.floatVx! = (star.floatVx! / speed) * 0.5;
              star.floatVy! = (star.floatVy! / speed) * 0.5;
            }

            // Draw click flash if active (takes priority) - LARGER explosion effect
            // Don't draw normal star during click flash
            if (star.clickFlashState === 'flashing' && star.clickFlashProgress && star.clickFlashProgress > 0) {
              const flashRadius = 5 + (1 - star.clickFlashProgress) * 15; // Larger: 5-20px
              const flashGradient = ctx.createRadialGradient(star.floatX!, star.floatY!, 0, star.floatX!, star.floatY!, flashRadius);
              flashGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
              flashGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.9)');
              flashGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.6)');
              flashGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
              ctx.fillStyle = flashGradient;
              ctx.beginPath();
              ctx.arc(star.floatX!, star.floatY!, flashRadius, 0, Math.PI * 2);
              ctx.fill();

              // Add bright core for extra intensity
              ctx.fillStyle = 'rgba(255, 255, 255, ' + star.clickFlashProgress + ')';
              ctx.beginPath();
              ctx.arc(star.floatX!, star.floatY!, flashRadius * 0.3, 0, Math.PI * 2);
              ctx.fill();
            } else if (star.clickFlashState !== 'hidden' && !isClickFlashingRef.current) {
              // Draw floating star (only when not hidden and not in click flash state)
              ctx.fillStyle = 'white';
              ctx.beginPath();
              ctx.arc(star.floatX!, star.floatY!, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      });

      // Remove stars marked for removal after flash completes
      if (!isHoveredRef.current) {
        starsRef.current = stars.filter(star => !star.markedForRemoval || star.flashProgress > 0);
      }

      // Draw inner black circle
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw text in center
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (isHoveredRef.current) {
        // Expanded mode: show full text
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('Everything,', centerX, centerY - 15);
        ctx.fillText('Everywhere,', centerX, centerY);
        ctx.fillText('All at Once', centerX, centerY + 15);

        ctx.font = '10px sans-serif';
        ctx.fillText('(flash warning)', centerX, centerY + 30);
      } else {
        // Default mode: show "psst!"
        ctx.font = 'bold 18px sans-serif';
        ctx.fillText('psst!', centerX, centerY);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handle hover state transitions
  useEffect(() => {
    isHoveredRef.current = isHovered;
    const stars = starsRef.current;
    if (!stars) return;

    if (isHovered) {
      // Transition to ZOOMING MODE: Add 18 more stars
      const canvas = canvasRef.current;
      if (!canvas) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const outerRadius = canvas.width / 2;
      const flashColors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#00ff80', '#ff8000'];

      // Convert existing floating stars to zooming stars
      stars.forEach((star) => {
        if (!star.markedForRemoval) {
          // Convert floatX/floatY back to polar coordinates
          const dx = star.floatX! - centerX;
          const dy = star.floatY! - centerY;
          star.angle = Math.atan2(dy, dx);
          star.distance = Math.sqrt(dx * dx + dy * dy);
          star.flashProgress = 0;
        }
      });

      // Add 18 new stars for zooming effect (total 36)
      for (let i = 0; i < 18; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = outerRadius;
        stars.push({
          angle,
          distance,
          speed: 0.5 + Math.random() * 1,
          flashProgress: 0,
          flashColor: flashColors[Math.floor(Math.random() * flashColors.length)],
          markedForRemoval: false
        });
      }
    } else {
      // Transition to FLOATING MODE: Keep first 18, flash and remove extras
      stars.forEach((star, index) => {
        if (index >= 18) {
          star.markedForRemoval = true;
          star.flashProgress = 1; // Start flash
          // Capture current position for flash
          const canvas = canvasRef.current;
          if (canvas) {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            star.floatX = centerX + Math.cos(star.angle) * star.distance;
            star.floatY = centerY + Math.sin(star.angle) * star.distance;
          }
        } else {
          // Convert first 18 stars back to floating mode
          const canvas = canvasRef.current;
          if (canvas) {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            star.floatX = centerX + Math.cos(star.angle) * star.distance;
            star.floatY = centerY + Math.sin(star.angle) * star.distance;
            star.floatVx = (Math.random() - 0.5) * 0.3;
            star.floatVy = (Math.random() - 0.5) * 0.3;
            star.markedForRemoval = false;
          }
        }
      });
    }
  }, [isHovered]);

  const handleClick = () => {
    // Trigger click flash on all stars
    isClickFlashingRef.current = true;
    starsRef.current.forEach(star => {
      star.clickFlashProgress = 1;
      star.clickFlashState = 'flashing';
    });

    // Call the original onClick handler
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed z-50 rounded-full"
      style={{
        position: 'fixed',
        bottom: '-1.5rem',
        right: '-1.5rem',
        padding: 0,
        background: 'transparent',
        border: 'none',
        width: '240px',
        height: '240px',
        transform: isHovered ? 'scale(2)' : 'scale(1)',
        transformOrigin: 'center center',
        transition: 'transform 500ms ease-in-out',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        outline: 'none',
        boxShadow: 'none'
      } as React.CSSProperties}
      aria-label="Everything, Everywhere, All at Once"
    >
      {/* Starfield Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2"
        style={{
          width: '240px',
          height: '240px',
          transform: 'translate(-50%, -50%) scale(0.667)',
          opacity: 1
        }}
      />
    </button>
  );
};

export default EverythingEverywhereButton;
