import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'color-mix(in oklch, var(--background) calc(<alpha-value> * 100%), transparent)',
                foreground: 'color-mix(in oklch, var(--foreground) calc(<alpha-value> * 100%), transparent)',
                card: {
                    DEFAULT: 'color-mix(in oklch, var(--card) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in oklch, var(--card-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                popover: {
                    DEFAULT: 'color-mix(in oklch, var(--popover) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in oklch, var(--popover-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                primary: {
                    DEFAULT: 'color-mix(in oklch, var(--primary) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in oklch, var(--primary-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                secondary: {
                    DEFAULT: 'color-mix(in oklch, var(--secondary) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in oklch, var(--secondary-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                muted: {
                    DEFAULT: 'color-mix(in oklch, var(--muted) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in oklch, var(--muted-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                accent: {
                    DEFAULT: 'color-mix(in oklch, var(--accent) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in oklch, var(--accent-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                destructive: {
                    DEFAULT: 'color-mix(in oklch, var(--destructive) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in oklch, var(--destructive-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                border: 'color-mix(in oklch, var(--border) calc(<alpha-value> * 100%), transparent)',
                input: 'color-mix(in oklch, var(--input) calc(<alpha-value> * 100%), transparent)',
                ring: 'color-mix(in oklch, var(--ring) calc(<alpha-value> * 100%), transparent)',
                chart: {
                    '1': 'color-mix(in oklch, var(--chart-1) calc(<alpha-value> * 100%), transparent)',
                    '2': 'color-mix(in oklch, var(--chart-2) calc(<alpha-value> * 100%), transparent)',
                    '3': 'color-mix(in oklch, var(--chart-3) calc(<alpha-value> * 100%), transparent)',
                    '4': 'color-mix(in oklch, var(--chart-4) calc(<alpha-value> * 100%), transparent)',
                    '5': 'color-mix(in oklch, var(--chart-5) calc(<alpha-value> * 100%), transparent)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'caret-blink': {
                    '0%,70%,100%': { opacity: '1' },
                    '20%,50%': { opacity: '0' },
                },
            },
            animation: {
                'caret-blink': 'caret-blink 1.25s ease-out infinite',
            },
        },
    },
    safelist: [...Array.from({ length: 96 }, (_, i) => `opacity-${i + 5}`)],
    plugins: [
        tailwindcssAnimate,
        ({ addVariant }) => {
            /** iPhone SE, landscape phones, Safari with visible browser chrome */
            addVariant('short-viewport', '@media (max-height: 680px)');
            /** Wide+short living-room layout reflow only (not density scale).
                Density uses root rem + tv-tokens height budget / dual-gate crush. */
            addVariant('tv-wide-short', '@media (min-width: 960px) and (max-height: 720px)');
        },
    ],
} satisfies Config;
