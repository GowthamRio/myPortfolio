import { useEffect, useRef, useState } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Mouse move effect for radial spotlight
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  useEffect(() => {
    // Dynamic resizing canvas particles
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle structure
    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      decay: number;
    }

    const particles: Particle[] = [];
    const maxParticles = 60;

    const createParticle = (isInitial = false): Particle => {
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + 10,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.8 - 0.2, // Move upwards
        alpha: Math.random() * 0.5 + 0.1,
        decay: Math.random() * 0.002 + 0.001,
      };
    };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // If particle goes off screen or transparent, reset
        if (p.y < 0 || p.x < 0 || p.x > width) {
          particles[idx] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${p.alpha})`; // Cyan neon glowing particles
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#00f2fe";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for efficiency
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="ambient-layer" className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Aurora Neon Blobs */}
      <div 
        id="aurora-cyan"
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-cyan-glow blur-[120px] mix-blend-screen animate-aurora-1 opacity-60" 
      />
      <div 
        id="aurora-purple"
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-purple-glow blur-[120px] mix-blend-screen animate-aurora-2 opacity-50" 
      />
      <div 
        id="aurora-blue"
        className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen animate-aurora-3 opacity-40" 
      />

      {/* Grid Pattern overlay */}
      <div id="grid-pattern" className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Canvas for fine floating particles */}
      <canvas id="particles-canvas" ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Interactive mouseglow spotlight */}
      {isHovered && (
        <div
          id="cursor-flashlight"
          className="absolute rounded-full pointer-events-none transition-opacity duration-500 ease-out hidden md:block"
          style={{
            width: "600px",
            height: "600px",
            background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 242, 254, 0.05), transparent 80%)`,
            left: 0,
            top: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
}
