/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				}
			  }
		},
		colors: {
			'AzulClaro': '#E9F1FA',
			'AzulBrillante': '#00ABE4',
			'Blanco': '#FFFFFF',
			'AzulOscuro': '#1E375A'
		}
	},
	plugins: [
],
}
