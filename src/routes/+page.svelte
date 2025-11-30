<script>
    import { fly, fade, scale } from 'svelte/transition';
    import { quintOut, elasticOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    let visible = $state(false);
    let scrollY = $state(0);

    const tools = [
        { id: 'bootstrap', icon: 'fab fa-bootstrap', name: 'Bootstrap', description: 'CSS framework, old but good', color: '#7952b3' },
        { id: 'sveltekit', icon: 'fas fa-code', name: 'SvelteKit', description: 'My go-to framework for the web', color: '#ff3e00' },
        { id: 'supabase', icon: 'fas fa-database', name: 'Supabase', description: 'BaaS for databases (sometimes)', color: '#3ecf8e' },
        { id: 'pocketbase', icon: 'fas fa-box', name: 'Pocketbase', description: 'Self-Hosted backend for simple projects', color: '#16a394' },
        { id: 'javascript', icon: 'fab fa-js', name: 'JavaScript', description: 'The language for headaches', color: '#f7df1e' },
        { id: 'htmlcss', icon: 'fab fa-html5', name: 'HTML/CSS', description: 'I know my bricks', color: '#e34f26' }
    ];

    const socials = [
        { id: 'github', icon: 'fab fa-github', name: 'GitHub', url: 'https://github.com/ArchangelGCA', color: '#6e5494' },
        { id: 'deviantart', icon: 'fab fa-deviantart', name: 'DeviantArt', url: 'https://www.deviantart.com/archangelgca', color: '#05cc47' },
        { id: 'discord', icon: 'fab fa-discord', name: 'Discord', url: 'https://discord.gg/bp8BNNssEK', color: '#5865f2' },
        { id: 'dreamingdragons', icon: 'fa fa-globe', name: 'DreamingDragons', url: 'https://tales.archangelgca.eu/profile/bfc1c4a7-f2af-494a-b7d9-35377f16d33e', color: '#bb86fc' }
    ];

    onMount(() => {
        visible = true;
    });
</script>

<svelte:window bind:scrollY />

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-bg">
        <div class="grid-overlay"></div>
    </div>
    
    <div class="container position-relative">
        {#if visible}
            <div class="hero-content text-center">
                <div class="avatar-wrapper mb-4" in:scale={{ duration: 800, delay: 200, easing: elasticOut }}>
                    <img 
                        src="https://avatars.githubusercontent.com/u/159050591?v=4" 
                        alt="ArchangelGCA's Avatar" 
                        class="avatar-img"
                    >
                    <div class="avatar-ring"></div>
                    <div class="avatar-ring ring-2"></div>
                </div>
                
                <h1 class="hero-title" in:fly={{ y: 50, duration: 800, delay: 400, easing: quintOut }}>
                    <span class="greeting">Hello, I'm</span>
                    <span class="name-highlight">ArchangelGCA</span>
                </h1>
                
                <p class="hero-subtitle" in:fly={{ y: 30, duration: 800, delay: 600, easing: quintOut }}>
                    <span class="typed-text">Developer</span>
                    <span class="divider">•</span>
                    <span class="typed-text">Artist</span>
                    <span class="divider">•</span>
                    <span class="typed-text">Creator</span>
                </p>
                
                <div class="hero-cta" in:fade={{ duration: 800, delay: 800 }}>
                    <a href="#about" class="btn btn-glow btn-lg">
                        <span>Discover More</span>
                        <i class="fas fa-chevron-down ms-2"></i>
                    </a>
                </div>
            </div>
        {/if}
    </div>
    
    <div class="scroll-indicator" class:hidden={scrollY > 100}>
        <div class="mouse">
            <div class="wheel"></div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="about-section py-5">
    <div class="container px-4">
        <div class="row align-items-center g-4 g-lg-5">
            <div class="col-12 col-lg-6 order-2 order-lg-1">
                <div class="about-image-wrapper">
                    <div class="about-shape shape-1"></div>
                    <div class="about-shape shape-2"></div>
                    <div class="about-card glass-card">
                        <div class="code-block">
                            <div class="code-header">
                                <span class="dot red"></span>
                                <span class="dot yellow"></span>
                                <span class="dot green"></span>
                            </div>
                            <pre class="code-content"><code><span class="keyword">const</span> <span class="variable">gca</span> = &#123;</code>
<code>  <span class="property">name</span>: <span class="string">"ArchangelGCA"</span>,</code>
<code>  <span class="property">role</span>: <span class="string">"Full-Stack Developer"</span>,</code>
<code>  <span class="property">passion</span>: <span class="string">"Developing & Art"</span>,</code>
<code>  <span class="property">loves</span>: [<span class="string">"Svelte"</span>, <span class="string">"Design"</span>, <span class="string">"Dreaming"</span>]</code>
<code>&#125;</code></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 order-1 order-lg-2">
                <div class="about-content text-center text-lg-start">
                    <h6 class="section-label">About Me</h6>
                    <h2 class="section-title">The creative <span class="text-gradient">Dreamer</span></h2>
                    <p class="about-text">
                        I'm a passionate developer who loves building modern web applications with clean, 
                        efficient code. By day, I craft digital experiences using cutting-edge technologies 
                        like <strong>Svelte</strong> and <strong>SvelteKit</strong>.
                    </p>
                    <p class="about-text">
                        When I'm not immersed in code, you'll find me expressing creativity through 
                        <strong>art</strong>. I believe in the perfect blend of functionality and creative aesthetics.
                    </p>
                    <div class="about-stats row g-4 mt-4">
                        <div class="col-4">
                            <div class="stat-item">
                                <span class="stat-number">∞</span>
                                <span class="stat-label">Stamina</span>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-item">
                                <span class="stat-number">24/7</span>
                                <span class="stat-label">Learning</span>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-item">
                                <span class="stat-number">100%</span>
                                <span class="stat-label">Passion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Tools Section -->
<section class="tools-section py-5">
    <div class="container px-4">
        <div class="text-center mb-5">
            <h6 class="section-label">Tech Stack</h6>
            <h2 class="section-title">My Favourite <span class="text-gradient">Tools</span></h2>
            <p class="section-subtitle">Technologies I use to bring ideas to life</p>
        </div>
        
        <div class="row g-3 g-md-4 justify-content-center">
            {#each tools as tool, i (tool.id)}
                <div class="col-6 col-md-6 col-lg-4">
                    <div 
                        class="tool-card glass-card"
                        style="--tool-color: {tool.color}; --delay: {i * 100}ms"
                    >
                        <div class="tool-icon">
                            <i class={tool.icon}></i>
                        </div>
                        <h5 class="tool-name">{tool.name}</h5>
                        <p class="tool-description">{tool.description}</p>
                        <div class="tool-glow"></div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Connect Section -->
<section class="connect-section py-5">
    <div class="container px-4">
        <div class="connect-wrapper glass-card text-center p-3 p-md-5">
            <h6 class="section-label">Get In Touch</h6>
            <h2 class="section-title mb-4">Let's <span class="text-gradient">Connect</span></h2>
            <p class="connect-text mb-5">
                Want to collaborate or just say hi? Find me on these platforms!
            </p>
            
            <div class="social-grid">
                {#each socials as social, i (social.id)}
                    <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="social-card"
                        style="--social-color: {social.color}; --delay: {i * 100}ms"
                        aria-label={social.name}
                        title={social.name}
                    >
                        <i class={social.icon}></i>
                        <span class="social-name">{social.name}</span>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="site-footer py-4">
    <div class="container px-4 text-center">
        <p class="footer-text">
            Crafted with <i class="fas fa-heart text-danger"></i> using 
            <span class="text-gradient">SvelteKit</span> & <span class="text-gradient">Bootstrap</span>
        </p>
        <p class="copyright">© {new Date().getFullYear()} ArchangelGCA. All rights reserved.</p>
    </div>
</footer>

<style>
    /* ========== CSS Variables ========== */
    :root {
        --primary-purple: #bb86fc;
        --secondary-cyan: #03dac6;
        --dark-bg: #0a0a0f;
        --card-bg: rgba(30, 30, 45, 0.6);
        --glass-bg: rgba(255, 255, 255, 0.05);
        --glow-purple: rgba(187, 134, 252, 0.4);
        --glow-cyan: rgba(3, 218, 198, 0.4);
    }

    /* ========== Hero Section ========== */
    .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        padding: 2rem 0;
    }

    .hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .grid-overlay {
        position: absolute;
        inset: 0;
        background-image: 
            linear-gradient(rgba(187, 134, 252, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187, 134, 252, 0.03) 1px, transparent 1px);
        background-size: 50px 50px;
        mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
    }

    .hero-content {
        position: relative;
        z-index: 1;
    }

    .avatar-wrapper {
        position: relative;
        display: inline-block;
    }

    .avatar-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--primary-purple);
        box-shadow: 0 0 30px var(--glow-purple);
        position: relative;
        z-index: 2;
    }

    .avatar-ring {
        position: absolute;
        inset: -10px;
        border: 2px solid var(--primary-purple);
        border-radius: 50%;
        opacity: 0.5;
        animation: pulse-ring 2s ease-out infinite;
    }

    .ring-2 {
        inset: -20px;
        animation-delay: 0.5s;
    }

    .hero-title {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .greeting {
        display: block;
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--bs-body-color);
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }

    .name-highlight {
        display: block;
        background: linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-cyan) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: none;
    }

    .hero-subtitle {
        font-size: 1.3rem;
        color: var(--bs-body-color);
        opacity: 0.9;
        margin-bottom: 2rem;
    }

    .typed-text {
        color: var(--primary-purple);
    }

    .divider {
        margin: 0 0.8rem;
        opacity: 0.5;
    }

    .btn-glow {
        background: linear-gradient(135deg, var(--primary-purple), #9c5bfc);
        border: none;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px var(--glow-purple);
    }

    .btn-glow:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px var(--glow-purple);
        color: white;
    }

    .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    .scroll-indicator.hidden {
        opacity: 0;
    }

    .mouse {
        width: 26px;
        height: 40px;
        border: 2px solid var(--primary-purple);
        border-radius: 13px;
        position: relative;
    }

    .wheel {
        width: 4px;
        height: 8px;
        background: var(--primary-purple);
        border-radius: 2px;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        animation: scroll-wheel 1.5s ease-in-out infinite;
    }

    /* ========== Section Styles ========== */
    .section-label {
        color: var(--primary-purple);
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 600;
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
    }

    .section-title {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .section-subtitle {
        color: var(--bs-body-color);
        opacity: 0.7;
        max-width: 500px;
        margin: 0 auto;
    }

    .text-gradient {
        background: linear-gradient(135deg, var(--primary-purple), var(--secondary-cyan));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .glass-card {
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
    }

    /* ========== About Section ========== */
    .about-section {
        background: linear-gradient(180deg, transparent 0%, rgba(187, 134, 252, 0.02) 50%, transparent 100%);
    }

    .about-image-wrapper {
        position: relative;
        padding: 2rem;
    }

    .about-shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.3;
    }

    .shape-1 {
        width: 200px;
        height: 200px;
        background: var(--primary-purple);
        top: 0;
        left: 0;
    }

    .shape-2 {
        width: 150px;
        height: 150px;
        background: var(--secondary-cyan);
        bottom: 0;
        right: 0;
    }

    .about-card {
        position: relative;
        z-index: 1;
        padding: 0;
        overflow: hidden;
    }

    .code-block {
        font-family: 'Fira Code', 'Consolas', monospace;
        font-size: 0.9rem;
    }

    .code-header {
        background: rgba(0, 0, 0, 0.3);
        padding: 0.75rem 1rem;
        display: flex;
        gap: 0.5rem;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .dot.red { background: #ff5f57; }
    .dot.yellow { background: #febc2e; }
    .dot.green { background: #28c840; }

    .code-content {
        padding: 1.5rem;
        margin: 0;
        overflow-x: auto;
    }

    .code-content code {
        display: block;
        line-height: 1.8;
    }

    .keyword { color: #c792ea; }
    .variable { color: #82aaff; }
    .property { color: #f78c6c; }
    .string { color: #c3e88d; }

    .about-content {
        padding: 0;
    }

    .about-text {
        color: var(--bs-body-color);
        opacity: 0.85;
        line-height: 1.8;
        margin-bottom: 1rem;
    }

    .about-text strong {
        color: var(--primary-purple);
    }

    .stat-item {
        text-align: center;
        padding: 1rem;
        background: var(--glass-bg);
        border-radius: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .stat-number {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-purple);
    }

    .stat-label {
        font-size: 0.8rem;
        opacity: 0.7;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* ========== Tools Section ========== */
    .tools-section {
        background: linear-gradient(180deg, transparent 0%, rgba(3, 218, 198, 0.02) 50%, transparent 100%);
    }

    .tool-card {
        padding: 2rem;
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: all 0.4s ease;
        animation: fadeInUp 0.6s ease forwards;
        animation-delay: var(--delay);
        opacity: 0;
    }

    .tool-card:hover {
        transform: translateY(-10px);
        border-color: var(--tool-color);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .tool-card:hover .tool-glow {
        opacity: 1;
    }

    .tool-icon {
        width: 70px;
        height: 70px;
        margin: 0 auto 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: var(--tool-color);
        background: rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        transition: all 0.3s ease;
    }

    .tool-card:hover .tool-icon {
        transform: scale(1.1);
        box-shadow: 0 0 30px color-mix(in srgb, var(--tool-color) 40%, transparent);
    }

    .tool-name {
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .tool-description {
        font-size: 0.9rem;
        opacity: 0.7;
        margin: 0;
    }

    .tool-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, color-mix(in srgb, var(--tool-color) 10%, transparent), transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }

    /* ========== Connect Section ========== */
    .connect-section {
        padding-bottom: 3rem;
    }

    .connect-wrapper {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .connect-wrapper::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(from 0deg, transparent, var(--primary-purple), transparent 30%);
        animation: rotate-bg 10s linear infinite;
        opacity: 0.05;
    }

    .connect-text {
        opacity: 0.8;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }

    .social-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .social-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        background: var(--glass-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        text-decoration: none;
        color: var(--bs-body-color);
        transition: all 0.3s ease;
        animation: fadeInUp 0.6s ease forwards;
        animation-delay: var(--delay);
        opacity: 0;
    }

    .social-card i {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
        color: var(--social-color);
    }

    .social-name {
        font-size: 0.8rem;
        opacity: 0.8;
        text-align: center;
        word-break: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        max-width: 100%;
        padding: 0 0.25rem;
    }

    .social-card:hover {
        transform: translateY(-5px) scale(1.05);
        border-color: var(--social-color);
        box-shadow: 0 10px 30px color-mix(in srgb, var(--social-color) 30%, transparent);
        color: var(--bs-body-color);
    }

    .social-card:hover i {
        transform: scale(1.2);
    }

    /* ========== Footer ========== */
    .site-footer {
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .footer-text {
        margin-bottom: 0.5rem;
        opacity: 0.8;
    }

    .copyright {
        font-size: 0.85rem;
        opacity: 0.5;
        margin: 0;
    }

    /* ========== Animations ========== */
    @keyframes pulse-ring {
        0% {
            transform: scale(1);
            opacity: 0.5;
        }
        100% {
            transform: scale(1.4);
            opacity: 0;
        }
    }

    @keyframes scroll-wheel {
        0% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(12px); }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes rotate-bg {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    /* ========== Responsive ========== */
    @media (max-width: 991px) {
        .about-image-wrapper {
            max-width: 450px;
            margin: 0 auto;
        }

        .code-content {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 768px) {
        .hero-section {
            min-height: 100svh;
            padding: 1.5rem 0;
        }

        .avatar-img {
            width: 120px;
            height: 120px;
        }

        .avatar-ring {
            inset: -8px;
        }

        .ring-2 {
            inset: -16px;
        }

        .hero-title {
            font-size: clamp(1.8rem, 8vw, 2.5rem);
        }

        .greeting {
            font-size: 1rem;
        }

        .hero-subtitle {
            font-size: 1.1rem;
            flex-wrap: wrap;
        }

        .divider {
            margin: 0 0.5rem;
        }

        .btn-glow {
            padding: 0.875rem 1.5rem;
            font-size: 0.95rem;
        }

        .section-title {
            font-size: clamp(1.5rem, 6vw, 2rem);
        }

        .section-subtitle {
            font-size: 0.9rem;
            padding: 0 1rem;
        }

        .about-stats .col-4 {
            padding: 0 0.25rem;
        }

        .stat-item {
            padding: 0.75rem 0.5rem;
        }

        .stat-number {
            font-size: 1.2rem;
        }

        .stat-label {
            font-size: 0.7rem;
        }

        .tool-card {
            padding: 1.25rem 1rem;
        }

        .tool-icon {
            width: 55px;
            height: 55px;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .tool-name {
            font-size: 0.95rem;
        }

        .tool-description {
            font-size: 0.8rem;
            line-height: 1.4;
        }

        .social-card {
            width: 90px;
            height: 90px;
        }

        .social-card i {
            font-size: 1.4rem;
        }

        .social-name {
            font-size: 0.65rem;
            line-height: 1.2;
        }

        .code-content {
            font-size: 0.7rem;
            padding: 1rem;
        }

        .code-content code {
            line-height: 1.6;
        }

        .connect-wrapper {
            padding: 1.5rem !important;
        }

        .connect-text {
            font-size: 0.9rem;
        }

        .scroll-indicator {
            bottom: 1rem;
        }

        .mouse {
            width: 22px;
            height: 34px;
        }

        .footer-text {
            font-size: 0.9rem;
        }

        .copyright {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        .hero-subtitle {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .divider {
            display: none;
        }

        .typed-text {
            display: block;
        }

        .social-grid {
            gap: 0.75rem;
        }

        .social-card {
            width: 80px;
            height: 80px;
        }

        .social-card i {
            font-size: 1.25rem;
            margin-bottom: 0.25rem;
        }

        .social-name {
            font-size: 0.6rem;
            line-height: 1.1;
        }

        .tool-card {
            padding: 1rem 0.75rem;
        }

        .tool-icon {
            width: 48px;
            height: 48px;
            font-size: 1.3rem;
        }

        .about-stats {
            margin-top: 1.5rem !important;
        }
    }
</style>
