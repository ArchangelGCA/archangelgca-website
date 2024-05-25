<script>
    import Seo from "sk-seo";

    const tooltipConfig = {
        animation: 'fade',
        delay: 0,
        style: {
            color: 'white',
            backgroundColor: 'rgba(92,0,166,0.9)',
            padding: '10px',
            borderRadius: '5px'
        },
        theme: 'text-center w-auto'
    };
</script>

<Seo
        title="ArchangelGCA - Official"
        description="I specialize in web development, particularly using modern JavaScript frameworks such as Svelte/SvelteKit. When I\'m not coding or studying, I enjoy making digital art."
        siteName="ArchangelGCA - Official"
        imageURL="https://avatars.githubusercontent.com/u/159050591?v=4"
        logo="https://avatars.githubusercontent.com/u/159050591?v=4"
        author="ArchangelGCA"
        name="ArchangelGCA"
        schemaOrg="true"
        twitter="true"
        index="true"
        canonical="https://archangelgca.eu/"
        keywords="ArchangelGCA, Developer, Artist, Web Development, Svelte, SvelteKit, Digital Art"
/>

<div class="container my-2 my-md-5">
    <div class="hero">
        <h1 class="display-4">Welcome!</h1>
        <p class="lead">I'm ArchangelGCA, a Developer and Casual Artist.</p>
        <hr class="my-4 neon-border">
        <p>
            I love to develop projects by day and express my creativity through art by night.
        </p>
    </div>

    <div class="text-center mt-4">
        <div class="avatar">
            <img src="https://avatars.githubusercontent.com/u/159050591?v=4" alt="ArchangelGCA's Avatar" class="rounded-circle" style="max-height: 20vh">
        </div>
    </div>

    <div class="about-me text-center mt-4">
        <h2>About Me</h2>
        <p>
            I specialize in web development, particularly using modern JavaScript frameworks such as Svelte/SvelteKit.
            When I'm not coding or studying, I enjoy making digital art.
        </p>
    </div>

    <div class="text-center mt-4">
        <h2>My Favourite Tools</h2>
        <div class="row mt-3">
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card card-custom h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title">
                            <i class="fab fa-bootstrap neon-text"></i> Bootstrap
                        </h5>
                        <p class="card-text neon-text">For CSS and more</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card card-custom h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title">
                            <i class="fas fa-database neon-text"></i> Supabase
                        </h5>
                        <p class="card-text neon-text">For all my backend needs.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card card-custom h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title">
                            <i class="fas fa-box neon-text"></i> Pocketbase
                        </h5>
                        <p class="card-text neon-text">Great for simple projects.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card card-custom h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title">
                            <i class="fas fa-code neon-text"></i> SvelteKit
                        </h5>
                        <p class="card-text neon-text">My Framework of choice.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="connect-with-me text-center mt-4">
        <h2 class="neon-text">Connect with Me</h2>
        <div class="social-links">
            <a href="https://github.com/ArchangelGCA" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
                <i class="fab fa-github neon-text"></i>
            </a>
            <a href="https://www.deviantart.com/archangelgca" target="_blank" rel="noopener" aria-label="DeviantArt"
               title="DeviantArt">
                <i class="fab fa-deviantart neon-text"></i>
            </a>
            <a href="https://discord.gg/bp8BNNssEK" target="_blank" rel="noopener" aria-label="Discord" title="Discord">
                <i class="fab fa-discord neon-text"></i>
            </a>
            <a href="https://tales.rosesintheflames.com/profile/bfc1c4a7-f2af-494a-b7d9-35377f16d33e" target="_blank"
               rel="noopener" title="Roses in The Flames"
               aria-label="RiTF">
                <i class="fa fa-globe neon-text"></i>
            </a>
        </div>
    </div>
</div>

<style>
    .card-custom {
        background-color: var(--bs-dark);
        border: none;
        border-radius: 0.5rem;
        transition: transform 0.3s, box-shadow 0.3s;
        animation: box-shadow-glow 1.5s ease-in-out infinite alternate;
    }

    .card-custom .card-body {
        color: var(--bs-body-color);
    }

    .card-custom:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .hero {
        padding: 3rem 1.5rem;
        text-align: center;
        background-color: var(--bs-dark);
        border-radius: 0.5rem;
        margin-bottom: 2rem;
    }

    .neon-text {
        color: var(--bs-primary);
        text-shadow: 0 0 5px var(--bs-primary), 0 0 10px var(--bs-primary), 0 0 15px var(--bs-primary);
        animation: neon-glow 1.5s ease-in-out infinite alternate;
    }

    .neon-border {
        border-color: var(--bs-primary);
        box-shadow: 0 0 5px var(--vaporwave), 0 0 10px var(--vaporwave), 0 0 15px var(--vaporwave);
        animation: neon-flicker 2s infinite;
    }

    .social-links a {
        color: var(--bs-primary);
        margin: 0 0.5rem;
        font-size: 1.5rem;
        transition: color 0.3s, transform 0.3s;
    }

    .social-links a:hover {
        color: var(--bs-secondary);
        transform: scale(1.2);
    }

    .about-me, .connect-with-me {
        padding: 2rem 1.5rem;
        background-color: var(--bs-dark);
        border-radius: 0.5rem;
        margin-bottom: 2rem;
    }

    @keyframes neon-glow {
        from {
            text-shadow: 0 0 5px var(--vaporwave), 0 0 10px var(--vaporwave), 0 0 15px var(--vaporwave);
        }
        to {
            text-shadow: 0 0 10px var(--vaporwave), 0 0 20px var(--vaporwave), 0 0 30px var(--vaporwave);
        }
    }

    @keyframes neon-flicker {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
            opacity: 1;
        }
        20%, 24%, 55% {
            opacity: 0.4;
        }
    }

    @keyframes box-shadow-glow {
        from {
            box-shadow: 0 0 5px var(--vaporwave), 0 0 10px var(--vaporwave), 0 0 15px var(--vaporwave);
        }
        to {
            box-shadow: 0 0 15px var(--vaporwave), 0 0 20px var(--vaporwave), 0 0 30px var(--vaporwave);
        }
    }

    @keyframes box-shadow-move {
        0% {
            box-shadow: 0 0 5px var(--vaporwave), 0 0 5px var(--vaporwave), 0 0 5px var(--vaporwave), 0 0 5px var(--vaporwave);
        }
        25% {
            box-shadow: 5px 0 5px var(--vaporwave), -5px 0 5px var(--vaporwave), 5px 0 5px var(--vaporwave), -5px 0 5px var(--vaporwave);
        }
        50% {
            box-shadow: 0 5px 5px var(--vaporwave), 0 -5px 5px var(--vaporwave), 0 5px 5px var(--vaporwave), 0 -5px 5px var(--vaporwave);
        }
        75% {
            box-shadow: -5px 0 5px var(--vaporwave), 5px 0 5px var(--vaporwave), -5px 0 5px var(--vaporwave), 5px 0 5px var(--vaporwave);
        }
        100% {
            box-shadow: 0 0 5px var(--vaporwave), 0 0 5px var(--vaporwave), 0 0 5px var(--vaporwave), 0 0 5px var(--vaporwave);
        }
    }
</style>
