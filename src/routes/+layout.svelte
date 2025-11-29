<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import scriptSrc from 'bootstrap/dist/js/bootstrap.bundle.min.js?url';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import Seo from "$lib/components/Seo.svelte";
    import AnimatedBackground from "$lib/components/AnimatedBackground.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */
    /** @type {Props} */
	let { children } = $props();

</script>

<svelte:head>
    <script rel="preload" src={scriptSrc}></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<Seo
        title="ArchangelGCA - Official"
        description="I specialize in web development, particularly using modern JavaScript frameworks such as Svelte/SvelteKit. When I'm not coding or studying, I enjoy making digital art."
        siteName="ArchangelGCA - Official"
        imageURL="https://avatars.githubusercontent.com/u/159050591?v=4"
        logo="https://avatars.githubusercontent.com/u/159050591?v=4"
        author="ArchangelGCA"
        name="ArchangelGCA"
        schemaOrg="true"
        twitter="true"
        index="true"
        canonical="https://archangelgca.eu/"
        url="https://archangelgca.eu/"
        keywords="ArchangelGCA, Developer, Artist, Web Development, Svelte, SvelteKit, Digital Art"
/>

<AnimatedBackground />

{@render children?.()}

<style>
    :global {
        :root {
            --bs-body-bg: #0a0a0f;
            --bs-body-color: #e0e0e0;
            --bs-primary: #bb86fc;
            --bs-secondary: #03dac6;
            --bs-success: #4caf50;
            --bs-info: #2196f3;
            --bs-warning: #ff9800;
            --bs-danger: #f44336;
            --bs-light: #f1f1f1;
            --bs-dark: #1a1a2e;
            --vaporwave: rgba(187, 134, 252, 0.25);
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bs-body-bg);
            color: var(--bs-body-color);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bs-body-bg);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, var(--bs-primary), #9c5bfc);
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #d4a5ff, var(--bs-primary));
        }

        /* Selection */
        ::selection {
            background: rgba(187, 134, 252, 0.3);
            color: white;
        }

        /* Links */
        a {
            color: var(--bs-primary);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: var(--bs-secondary);
        }

        /* Headings */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.2;
        }

        /* Focus States */
        :focus-visible {
            outline: 2px solid var(--bs-primary);
            outline-offset: 2px;
        }

        /* Image defaults */
        img {
            max-width: 100%;
            height: auto;
        }
    }
</style>