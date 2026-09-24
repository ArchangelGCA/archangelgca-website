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
            --bs-body-bg: #0c0f14;
            --bs-body-color: #f2efe6;
            --bs-primary: #4c8dff;
            --bs-secondary: #8a94a6;
            --bs-success: #3fa45b;
            --bs-info: #4c8dff;
            --bs-warning: #ffcc00;
            --bs-danger: #e5484d;
            --bs-light: #f2efe6;
            --bs-dark: #12161d;
            --eu-blue: #4c8dff;
            --eu-blue-deep: #003399;
            --eu-gold: #ffcc00;
            --eu-line: #232a36;
            --eu-surface: #12161d;
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
            background: #2a3342;
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--bs-primary);
        }

        /* Selection */
        ::selection {
            background: var(--bs-primary);
            color: #071022;
        }

        /* Links */
        a {
            color: #7aa7ff;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: var(--bs-body-color);
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