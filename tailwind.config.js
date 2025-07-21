/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,ts,jsx,tsx,mdx}',

    ],
    theme: {
        extend: {
            fontFamily: {
                'logo': ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
                'nav': ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
                'button': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
                'heading': ['Playfair Display', 'Georgia', 'serif'],
                'body': ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                'primary': "#F7CB40",
                'secondary': "#000000"
            },
            animation: {
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
                'shimmer': 'shimmer 1.5s linear infinite',
                'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
                'wiggle': 'wiggle 0.5s ease-in-out',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'progress-fill': 'progress-fill 0.8s ease-out forwards',
                'scroll': 'scroll 2000s linear infinite',
                'fade-in': 'fade-in 0.7s ease-out forwards',
                'fade-out': 'fade-out 0.7s ease-out forwards',
                'slide-up': 'slide-up 0.5s ease-out forwards',
                textLoop: 'textLoop 5s ease-in-out infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%': {
                        boxShadow: '0 0 20px rgba(234, 179, 8, 0.6), 0 0 40px rgba(234, 179, 8, 0.2)',
                        transform: 'scale(1)'
                    },
                    '100%': {
                        boxShadow: '0 0 30px rgba(234, 179, 8, 0.8), 0 0 60px rgba(234, 179, 8, 0.4), 0 0 80px rgba(234, 179, 8, 0.1)',
                        transform: 'scale(1.02)'
                    }
                },
                'shimmer': {
                    '0%': {transform: 'translateX(-100%) skewX(-45deg)'},
                    '100%': {transform: 'translateX(200%) skewX(-45deg)'}
                },
                'bounce-subtle': {
                    '0%, 100%': {transform: 'translateY(0) scale(1)'},
                    '50%': {transform: 'translateY(-4px) scale(1.1)'}
                },
                'wiggle': {
                    '0%, 100%': {transform: 'rotate(0deg)'},
                    '25%': {transform: 'rotate(-3deg)'},
                    '75%': {transform: 'rotate(3deg)'}
                },
                'heartbeat': {
                    '0%, 100%': {transform: 'scale(1)'},
                    '50%': {transform: 'scale(1.05)'}
                },
                'pulse-glow': {
                    '0%, 100%': {
                        opacity: '1',
                        boxShadow: '0 0 0 0 rgba(234, 179, 8, 0.7)'
                    },
                    '50%': {
                        opacity: '0.8',
                        boxShadow: '0 0 0 10px rgba(234, 179, 8, 0)'
                    }
                },
                'progress-fill': {
                    '0%': {
                        width: '0%',
                        opacity: '0'
                    },
                    '10%': {
                        opacity: '1'
                    },
                    '100%': {
                        width: '100%',
                        opacity: '1'
                    }
                },
                'scroll': {
                    '0%': {transform: 'translateX(0)'},
                    '100%': {transform: 'translateX(-50%)'}
                },
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'fade-out': {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                textLoop: {
                    '0%, 10%': { marginTop: '0rem' },
                    '20%, 30%': { marginTop: '-2.81rem' },
                    '40%, 60%': { marginTop: '-5.62rem' },
                    '70%, 80%': { marginTop: '-2.81rem' },
                    '90%, 100%': { marginTop: '0rem' },
                },

            },
            backgroundImage: {
                'primary-gradient': 'linear-gradient(135deg, #EAB308 0%, #CA8A04 50%, #A16207 100%)',
                'primary-gradient-hover': 'linear-gradient(135deg, #FDE047 0%, #EAB308 50%, #CA8A04 100%)',
                'primary-gradient-intense': 'linear-gradient(45deg, #FDE047 0%, #EAB308 25%, #CA8A04 50%, #EAB308 75%, #FDE047 100%)',
            }
        },
    },
    plugins: [],
}