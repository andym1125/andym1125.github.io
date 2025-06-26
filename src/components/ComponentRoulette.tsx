import React, { useState, useEffect, ReactElement } from 'react';

// --- The Roulette Component --- //

interface ComponentRouletteProps {
  /** An array of components to cycle through. */
  components: ReactElement[];
  /** Total duration of the spin animation in milliseconds. */
  spinDuration?: number;
  /** The index of the component to land on. If not provided, a random one will be chosen. */
  finalIndex?: number;
}

/**
 * A component that cycles through a list of child components with a "slot machine"
 * animation before settling on a final one.
 */
export const ComponentRoulette: React.FC<ComponentRouletteProps> = ({
  components,
  spinDuration = 6000, // Default spin time: 4 seconds
  finalIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!components || components.length === 0) {
      setIsSpinning(false);
      return;
    }

    setIsSpinning(true);
    const targetIndex = finalIndex !== undefined && finalIndex < components.length
      ? finalIndex
      : Math.floor(Math.random() * components.length);

    let spinTimeoutId: NodeJS.Timeout;
    
    const spin = (delay: number) => {
      spinTimeoutId = setTimeout(() => {
        setIsFading(true); // Start fade-out
        
        // After a short fade, switch the component and fade back in
        setTimeout(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % components.length);
          setIsFading(false); // Start fade-in
        }, 25); // This should match the transition duration

        const nextDelay = delay //+ (delay * 0.1) + 5;
        spin(nextDelay);

      }, delay);
    };

    spin(200);

    const stopTimeoutId = setTimeout(() => {
      clearTimeout(spinTimeoutId);
      setIsFading(true);
      // Final fade to the target component
      setTimeout(() => {
        setCurrentIndex(targetIndex);
        setIsSpinning(false);
        setIsFading(false);
      }, 500);
    }, spinDuration);

    return () => {
      clearTimeout(spinTimeoutId);
      clearTimeout(stopTimeoutId);
    };
  }, [components, spinDuration, finalIndex]);

  if (!components || components.length === 0) {
    return null;
  }
  
  const transitionClasses = isFading 
    ? 'opacity-0 scale-95' 
    : 'opacity-100 scale-100';

  return (
    <div className="">
      <div className={`transition-all duration-100 ease-in-out ${transitionClasses}`}>
        {components[currentIndex]}
      </div>
    </div>
  );
};
export default ComponentRoulette;
