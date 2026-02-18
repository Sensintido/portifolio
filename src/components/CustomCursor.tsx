import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Não renderiza cursor customizado em dispositivos touch
  const isTouchDevice = typeof window !== 'undefined' && 
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  useEffect(() => {
    if (isTouchDevice) return;
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updatePointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updatePointer);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updatePointer);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`rounded-full bg-white transition-all duration-200 ${
            isPointer ? 'w-12 h-12 opacity-50' : 'w-4 h-4'
          }`}
        />
      </div>

      {/* Glow trail */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`rounded-full transition-all duration-500 ease-out ${
            isPointer ? 'w-24 h-24' : 'w-16 h-16'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>

      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          animation: 'cursorPulse 2s ease-in-out infinite',
        }}
      >
        <div 
          className="w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
            filter: 'blur(15px)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;