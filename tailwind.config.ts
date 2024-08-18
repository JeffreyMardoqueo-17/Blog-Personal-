import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      colors: {
        //  primary: colors.blue,
        // secondary: colors.slate,
        lightTheme: {
          primary: '#FFFF', // Color de contraste
          background: '#F5F5F5', // Blanco
          text: '#3182ce', // Azulito
          gray: '#4a5568', // Gris oscursa
          hover: '#F1F5F9',
          opacidad: '#08060651'
        },
        darkTheme: {
          primary: '#ffffff', // Blanco
          background: '#262635', // Color de contraste
          text: '#ffffff', // Blanco
          gray: '#cbd5e0', // Grisito más claro
          formulario: '#313144',
          hover: '#3C3C53',
          icono: '#6669F1',
          input: '#2F2F2F'
        },
      },
      plugins: [],
    },
  },
  plugins: [],
};

export default config;
