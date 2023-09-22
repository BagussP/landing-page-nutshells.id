/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E7270",
        secondary: "#FFB26B",
        body: "#242424",
        title_active: "#334443",
        steel_blue: "#54667B",
        background_input: "#D9E1E9",
      },
      backgroundImage: {
        hero_background: "url(../../public/images/hero/background.svg)",
        work_background: "url(../../public/images/hero/background-work.png)",
        product_pattern: "url(../../public/images/product/pattern.png)",
        about_image: "url(../../public/images/about/image.png)",
        about_footstep: "url(../../public/images/about/vector-footstep.svg)",
        about_pattern: "url(../../public/images/about/pattern.svg)",
      },
    },
  },
  plugins: [],
};
