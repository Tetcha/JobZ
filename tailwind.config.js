// module.exports = {
// content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
//     theme: {
//         extend: {
//             colors: {
//                 primary: {
//                     DEFAULT: '#22B75A',
//                     50: '#A3EEBF',
//                     100: '#92EBB3',
//                     200: '#6FE49B',
//                     300: '#4DDE83',
//                     400: '#2AD76B',
//                     500: '#22B75A',
//                     600: '#198843',
//                     700: '#10582B',
//                     800: '#082914',
//                     900: '#000000',
//                 },
//                 tango: {
//                     DEFAULT: '#F37124',
//                     50: '#FFFEFE',
//                     100: '#FEEEE5',
//                     200: '#FBCFB5',
//                     300: '#F8B085',
//                     400: '#F69054',
//                     500: '#F37124',
//                     600: '#D8580C',
//                     700: '#A84409',
//                     800: '#773107',
//                     900: '#471D04',
//                 },
//             },
//         },
//     },
//     corePlugins: {
//         preflight: false,
//     },
//     plugins: [require('@tailwindcss/forms')],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['"CalSans-SemiBold"', 'sans-serif'],
            body: ['"DM Sans"', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1rem',
        },

        extend: {
            borderRadius: {
                '2lg': '0.625rem',
            },
            screens: {
                app: '1172px',
            },
            transitionProperty: {
                height: 'height',
                width: 'width',
            },
            animation: {
                fly: 'fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite',
                heartBeat: 'heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite',
                progress: 'progress 5s linear',
            },
            keyframes: {
                fly: {
                    '0%, 100%': { transform: 'translateY(5%)' },
                    '50%': { transform: 'translateY(0)' },
                },
                heartBeat: {
                    '0%, 40%, 80%, 100%': { transform: 'scale(1.1)' },
                    '20%, 60%': { transform: 'scale(.8)' },
                },
                progress: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
            },
        },
        namedGroups: ['dropdown'],
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
