<script>
    import { onMount } from 'svelte';

    /** @type {HTMLCanvasElement} */
    let canvas;
    
    /** @type {number} */
    let animationId;

    const particleCount = 80;
    const connectionDistance = 150;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        /** @type {{ x: number; y: number; vx: number; vy: number; radius: number; opacity: number; color: string }[]} */
        let particles = [];

        const colors = [
            'rgba(187, 134, 252, 0.6)',  // Primary purple
            'rgba(156, 91, 252, 0.5)',   // Darker purple
            'rgba(212, 165, 255, 0.4)',  // Lighter purple
            'rgba(3, 218, 198, 0.3)',    // Cyan accent
        ];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                color: colors[Math.floor(Math.random() * colors.length)]
            };
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle());
            }
        }

        function drawParticle(/** @type {{ x: number; y: number; radius: number; color: string; opacity: number }} */ p) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }

        function drawConnections() {
            if (!ctx) return;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(187, 134, 252, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        }

        function updateParticle(/** @type {{ x: number; y: number; vx: number; vy: number; radius: number; opacity: number }} */ p) {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges with some padding
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            // Keep particles in bounds
            p.x = Math.max(0, Math.min(canvas.width, p.x));
            p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections first (behind particles)
            drawConnections();

            // Update and draw particles
            particles.forEach(p => {
                updateParticle(p);
                drawParticle(p);
            });

            animationId = requestAnimationFrame(animate);
        }

        resize();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        return () => {
            cancelAnimationFrame(animationId);
        };
    });
</script>

<canvas bind:this={canvas} class="animated-background" aria-hidden="true"></canvas>

<style>
    .animated-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        background: linear-gradient(
            135deg,
            #0a0a0f 0%,
            #0d0d14 25%,
            #0f0a18 50%,
            #0a0a0f 75%,
            #0a0a0f 100%
        );
    }
</style>
