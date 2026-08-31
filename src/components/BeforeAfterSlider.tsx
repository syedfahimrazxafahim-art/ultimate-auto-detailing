import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Detailing',
  afterLabel = 'Showroom Finish',
  title,
  subtitle,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {title && (
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase font-heading">{title}</h4>
            {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#C9A35A] tracking-wider uppercase font-semibold">
            <Sparkles className="w-3 h-3" /> Drag Slider
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-md border border-[#C9A35A]/30 bg-[#08090B] select-none cursor-ew-resize group shadow-2xl"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background / Full Width) */}
        <img
          src={afterImage}
          alt="After Detailing Result"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Detailing Condition"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none filter contrast-90 brightness-90"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          {/* Subtle dirty / before tint badge */}
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest text-gray-300">
            {beforeLabel}
          </div>
        </div>

        {/* After Label Badge */}
        <div className="absolute top-3 right-3 bg-[#08090B]/85 backdrop-blur-md border border-[#C9A35A]/60 px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest text-[#C9A35A]">
          {afterLabel}
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C9A35A] via-white to-[#C9A35A] shadow-[0_0_12px_rgba(201,163,90,0.8)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Metallic Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#08090B] border-2 border-[#C9A35A] flex items-center justify-center shadow-[0_0_15px_rgba(201,163,90,0.6)] text-[#C9A35A]">
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
