module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      purple: '#ad1fea',
      blue: '#4661e6',
      lightBlue: '#62bcfa',
      darkNavy: '#373f68',
      navy: '#3a4374',
      lightNavy: '#647196',
      orange: '#f49f85',
      white: '#ffffff',
      whiteBlue: '#f2f4ff',
      whiteBlue2: '#f7f8fd',
      red: '#d73737',
    },
    fontFamily: {
      sans: ['jost', 'sans-serif'],
    },
    fontSize: {
      h1: [
        '24px',
        {
          letterSpacing: '-0.33',
          lineHeight: '35px',
        },
      ],
      h2: [
        '20px',
        {
          letterSpacing: '-0.25',
          lineHeight: '29px',
        },
      ],
      h3: [
        '18px',
        {
          letterSpacing: '-0.25',
          lineHeight: '26px',
        },
      ],
      h4: [
        '14px',
        {
          letterSpacing: '-0.2',
          lineHeight: '20px',
        },
      ],
      body1: ['16px', '29px'],
      body2: ['15px', '22px'],
      body3: ['13px', '19px'],
    },
    extend: {},
  },
  plugins: [],
};
