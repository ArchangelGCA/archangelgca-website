<script>
    import Seo from "sk-seo";

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */
    /** @type {Props} */
	let { children } = $props();

</script>

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
        keywords="ArchangelGCA, Developer, Artist, Web Development, Svelte, SvelteKit, Digital Art"
/>

{@render children?.()}