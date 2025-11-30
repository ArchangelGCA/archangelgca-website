<script>
    import { untrack } from 'svelte';

    /** @type {HTMLCanvasElement | undefined} */
    let canvas = $state();

    /** @type {number | undefined} */
    let animationId;

    /** @type {boolean} */
    let isVisible = $state(true);

    const colors = [
        'rgba(187, 134, 252, 0.6)',  // Primary purple
        'rgba(156, 91, 252, 0.5)',   // Darker purple
        'rgba(212, 165, 255, 0.4)',  // Lighter purple
        'rgba(3, 218, 198, 0.3)',    // Cyan accent
    ];

    /**
     * Get responsive particle count based on screen area
     * @param {number} width
     * @param {number} height
     */
    function getParticleCount(width, height) {
        const area = width * height;
        // Scale particles based on screen area
        // Desktop (1920x1080 = 2,073,600): ~80 particles
        // Mobile (390x844 = 329,160): ~20-25 particles
        const baseCount = Math.floor(area / 26000);
        return Math.max(15, Math.min(80, baseCount));
    }

    /**
     * Get responsive connection distance based on screen width
     * @param {number} width
     */
    function getConnectionDistance(width) {
        // Smaller connection distance on mobile for cleaner look
        return width < 768 ? 100 : 150;
    }

    /**
     * Creates a single particle with random properties
     * @param {number} canvasWidth
     * @param {number} canvasHeight
     * @param {boolean} isMobile
     */
    function createParticle(canvasWidth, canvasHeight, isMobile) {
        // Slower movement on mobile for smoother experience
        const speedFactor = isMobile ? 0.3 : 0.5;

        return {
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            vx: (Math.random() - 0.5) * speedFactor,
            vy: (Math.random() - 0.5) * speedFactor,
            radius: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    }

    /**
     * Initialize particles array
     * @param {number} canvasWidth
     * @param {number} canvasHeight
     */
    function initParticles(canvasWidth, canvasHeight) {
        const isMobile = canvasWidth < 768;
        const count = getParticleCount(canvasWidth, canvasHeight);
        /** @type {{ x: number; y: number; vx: number; vy: number; radius: number; opacity: number; color: string }[]} */
        const newParticles = [];
        for (let i = 0; i < count; i++) {
            newParticles.push(createParticle(canvasWidth, canvasHeight, isMobile));
        }
        return newParticles;
    }

    /**
     * Handle visibility change to pause/resume animation
     */
    function handleVisibilityChange() {
        isVisible = document.visibilityState === 'visible';
    }

    // Main animation effect
    $effect(() => {
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Get initial dimensions
        let currentWidth = window.innerWidth;
        let currentHeight = window.innerHeight;

        // Set canvas dimensions
        canvas.width = currentWidth;
        canvas.height = currentHeight;

        let connectionDistance = getConnectionDistance(currentWidth);

        // Initialize particles once
        let particles = initParticles(currentWidth, currentHeight);

        /**
         * Draw a single particle
         * @param {{ x: number; y: number; radius: number; color: string; opacity: number }} p
         */
        function drawParticle(p) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }

        /**
         * Draw connections between nearby particles
         */
        function drawConnections() {
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

        /**
         * Update particle position
         * @param {{ x: number; y: number; vx: number; vy: number }} p
         */
        function updateParticle(p) {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > currentWidth) p.vx *= -1;
            if (p.y < 0 || p.y > currentHeight) p.vy *= -1;

            // Keep particles in bounds
            p.x = Math.max(0, Math.min(currentWidth, p.x));
            p.y = Math.max(0, Math.min(currentHeight, p.y));
        }

        /**
         * Handle resize with debouncing to avoid mobile scroll issues
         */
        let resizeTimeout = 0;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(() => {
                const newWidth = window.innerWidth;
                const newHeight = window.innerHeight;

                // Only reinitialize if dimensions changed significantly (more than 100px)
                // This prevents mobile address bar show/hide from causing issues
                const widthDiff = Math.abs(newWidth - currentWidth);
                const heightDiff = Math.abs(newHeight - currentHeight);

                if (widthDiff > 100 || heightDiff > 100) {
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    currentWidth = newWidth;
                    currentHeight = newHeight;
                    connectionDistance = getConnectionDistance(newWidth);
                    particles = initParticles(newWidth, newHeight);
                }
            }, 250);
        }

        /**
         * Main animation loop using visibility state
         */
        function animate() {
            // Read visibility state but don't track it to avoid effect re-runs
            const visible = untrack(() => isVisible);

            // Skip rendering if not visible, but keep the loop running
            if (!visible) {
                animationId = requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, currentWidth, currentHeight);

            // Draw connections first (behind particles)
            drawConnections();

            // Update and draw particles
            for (const p of particles) {
                updateParticle(p);
                drawParticle(p);
            }

            animationId = requestAnimationFrame(animate);
        }

        // Add event listeners
        window.addEventListener('resize', handleResize);

        // Start animation
        animate();

        // Cleanup on effect re-run or unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    });
</script>

<svelte:document onvisibilitychange={handleVisibilityChange} />

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
