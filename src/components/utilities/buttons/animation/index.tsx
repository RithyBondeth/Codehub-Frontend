import { useRef, useEffect, MouseEventHandler } from "react";
import { gsap } from "gsap";
import { AnimationButtonProps } from "./type";

export const AnimationButton = (props: AnimationButtonProps) => {
  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Initialize the quickTo functions
      xTo.current = gsap.quickTo(divRef.current!, "x", { duration: 0.8, ease: "power3" });
      yTo.current = gsap.quickTo(divRef.current!, "y", { duration: 0.8, ease: "power3" });

      // Initial animation settings
      gsap.set(divRef.current!, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        zIndex: -10,
      });
    }, buttonRef); // The scope of this context is the buttonRef element

    // Cleanup GSAP context on component unmount
    return () => {
      ctx.revert(); // Clean up GSAP animations
    };
  }, []);

  // Mouse enter animation
  const handleMouseEnter = () => {
    gsap.to(divRef.current!, {
      scale: 1,
      duration: 0.3,
    });
  };

  // Mouse leave animation
  const handleMouseLeave = () => {
    gsap.to(divRef.current!, {
      scale: 0,
      duration: 0.3,
    });
  };

  // Mouse move animation
  const handleMouseMove: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (xTo.current && yTo.current) {
      const rect = buttonRef.current!.getBoundingClientRect();
      const { top, left } = rect;
      xTo.current(e.clientX - left);
      yTo.current(e.clientY - top);
    }
  };

  return (
    <button
      type={props.type || 'button'}
      ref={buttonRef}
      className={`relative flex justify-center items-center border-2 border-solid border-primary px-4 py-2 rounded-md bg-primary text-white 
                 overflow-hidden hover:text-primary hover:border-primary duration-200 hover:scale-105 z-0 ${props.className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={props.onClick}
    >
      <div
        ref={divRef}
        className="absolute w-[200px] h-[150px] bg-white dark:bg-dark left-0 top-0 -z-10 pointer-events-none rounded-full"
      ></div>
      <p className={`z-10 ${props.icon && "mr-1"}`}>{props.label}</p>
      {props.icon && <span className="material-icons material-symbols-outlined">{props.icon}</span>}
    </button>
  );
};
