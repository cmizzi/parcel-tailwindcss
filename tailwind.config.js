const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        "./src/index.html",
        "./src/app/**/*.ts",
        "./src/app/**/*.js",
        "./src/app/**/*.vue",
        "./src/app/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: (theme) => ({
                sans: ['Inter', defaultTheme.fontFamily.sans]
            })
        }
    },

    variants: {
        //
    },

    plugins: [
        require('@tailwindcss/ui'),
    ]
}
