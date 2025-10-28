<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import scriptSrc from 'bootstrap/dist/js/bootstrap.bundle.min.js?url';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import Seo from "$lib/components/Seo.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */
    /** @type {Props} */
	let { children } = $props();

</script>

<svelte:head>
    <script rel="preload" src={scriptSrc}></script>
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

{@render children?.()}

<style>
    :global {
        :root {
            --bs-body-bg: #121212;
            --bs-body-color: #e0e0e0;
            --bs-primary: #bb86fc;
            --bs-secondary: #03dac6;
            --bs-success: #4caf50;
            --bs-info: #2196f3;
            --bs-warning: #ff9800;
            --bs-danger: #f44336;
            --bs-light: #f1f1f1;
            --bs-dark: #212121;
            --vaporwave: rgba(255, 0, 255, 0.25);
        }

        body {
            background-color: var(--bs-body-bg);
            color: var(--bs-body-color);
        }
    }
</style>