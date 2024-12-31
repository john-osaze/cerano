/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '3rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '8rem',
			}
		},
		fontFamily: {
			accent: 'var(--font-playfairDisplay)'
		},
		extend: {
			colors: {
				primary: '#C62828',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				accent: {
					DEFAULT: '#000d44',
					hover: '00ff99',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
