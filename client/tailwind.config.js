module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',      // iPhone SE
        'sm': '375px',      // iPhone 6/7/8, iPhone X/11/12/13/14
        'sm2': '393px',     // Google Pixel 5
        'sm3': '360px',     // Samsung Galaxy S21/S22
        'sm4': '540px',     // Surface Duo
        'md': '640px',      // Default Tailwind md
        'md2': '720px',     // Surface Duo height
        'lg': '768px',      // iPad Mini, iPad 9.7"/Air
        'xl': '1024px',     // iPad Pro 12.9"
        '2xl': '1280px',    // MacBook Air 13"
        '3xl': '1512px',    // MacBook Pro 14"
        '4xl': '1728px',    // MacBook Pro 16"
        '5xl': '1920px',    // Full HD laptops, smart TVs
        '6xl': '2560px',    // WQHD monitors
        '7xl': '3440px',    // Ultra-wide monitors
        '8xl': '3840px',    // 4K monitors
        '9xl': '5120px',    // 5K iMac
      },
    },
  },
  plugins: [],
}
