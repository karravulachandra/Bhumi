import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw grid lines
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating Hexagons */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 clip-hexagon" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 w-24 h-24 opacity-30"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon" />
        </motion.div>

        {/* Floating Circles */}
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 opacity-25"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-1/3 w-20 h-20 opacity-20"
          animate={{
            scale: [1, 0.7, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
        </motion.div>

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(100, 150, 255, 0.1) 50%, transparent 100%)',
            backgroundSize: '200% 200%'
          }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-500 opacity-30" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-500 opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-green-500 opacity-30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500 opacity-30" />

        {/* Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-96 h-96 rounded-full opacity-5"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle, rgba(100, 150, 255, 0.3) 0%, transparent 70%)'
            }}
          />
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
    </div>
  );
};

export default FuturisticBackground;
