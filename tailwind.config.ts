const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
const px0_10000 = { ...Array.from(Array(10001)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      top: px0_10,
      right: px0_100,
      width: px0_1000,
      maxWidth: px0_10000,
      minWidth: px0_10000,
      maxHeight: px0_10000,
      minHeight: px0_10000,
      height: px0_1000,
      padding: px0_100,
      border: px0_10,
      borderRadius: px0_100,
      spacing: px0_100,
      backgroundColor: {
        dim: "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
