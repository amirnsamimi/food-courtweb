import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      blur:{
        '4': '0.125rem',
        '8': '0.25rem',
        '12': '0.375rem',
        '16': '0.5rem',
        '20': '0.625rem',
        '24': '0.75rem',
        '28': '0.875rem',
        '32': '1rem' 
      },
      boxShadow:{
        'mshadow-1':'0px 1px 3px 1px #0000004D,  0px 1px 3px 1px #00000026',
        'mshadow-2': '0px 1px 3px 0px #0000004D,box-shadow: 0px 4px 8px 3px #00000026',
        'mshadow-3': '0px 1px 3px 0px #0000004D,box-shadow: 0px 4px 8px 3px #00000026',
        'mshadow-4':'0px 4px 4px 0px #0000004D,  0px 8px 12px 6px #00000026',
        'mshadow-5': '0px 1px 3px 0px #0000004D,box-shadow: 0px 4px 8px 3px #00000026',
        'cshadow-1': '0px 1px 1px 0px #0000004A,0px 2px 2px 0px #00000042,0px 5px 3px 0px #00000026,0px 9px 4px 0px #0000000A,0px 14px 4px 0px #00000003',
        'cshadow-2': '0px 1px 2px 0px #00000033,0px 5px 5px 0px #0000002B,0px 10px 6px 0px #0000001A,0px 18px 7px 0px #00000008,0px 28px 8px 0px #00000000',
        'cshadow-3': '0px 2px 4px 0px #00000040,0px 7px 7px 0px #00000036,0px 15px 9px 0px #00000021,0px 27px 11px 0px #0000000A,0px 43px 12px 0px #00000000',
        'cshadow-4': '0px 2px 4px 0px #00000063,0px 8px 8px 0px #00000057,0px 18px 11px 0px #00000033,0px 32px 13px 0px #0000000F,0px 50px 14px 0px #00000003',
        'cshadow-5': '0px 3px 7px 0px #00000063,0px 12px 12px 0px #00000057,0px 27px 16px 0px #00000033,0px 48px 19px 0px #0000000F,0px 75px 21px 0px #00000003',
      },
      borderRadius:{
        '4': '0.25rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '16': '1rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '32': '2rem'        
      },
      fontSize:{
        'h1': '4.25rem',
        'h2': '4rem',
        'h3': '3.75rem',
        'h4': '3.5rem',
        'h5': '3.25rem',
        'h6': '3rem',
        'h7': '2.75rem',
        'h8': '2.5rem',
        'highlights': '2.25rem',
        'body-1': '2rem',
        'body-2': '1.75rem',
        'subtitle-1': '1.5rem',
        'subtitle-2': '1.25rem',
        'button-1': '1rem',
        'button-2': '0.875rem',
        'mini-card': '0.75rem'
      },
     colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black:{
        50: '#e8e8e8',
        100: '#b8b8b8',
        200: '#959595',
        300: '#656565',
        400: '#474747',
        500: '#191919',
        600: '#171717',
        700: '#121212',
        800: '#0e0e0e',
        900: '#0b0b0b'
      },
      white:{
        50: '#fefefe',
        100: '#fdfdfd',
        200: '#fcfcfc',
        300: '#fbfbfb',
        400: '#fafafa',
        500: '#f9f9f9',
        600: '#e3e3e3',
        700: '#b1b1b1',
        800: '#898989',
        900: '#696969'

      },
      primary:{
        50: '#fdebed',
        100: '#f8c0c8',
        200: '#f5a2ad',
        300: '#f07888',
        400: '#ed5d71',
        500: '#e9354d',
        600: '#d43046',
        700: '#a52637',
        800: '#801d2a',
        900: '#621620'
      },
      secondary:{
        50: '#eaedef',
        100: '#bfc6cd',
        200: '#a0aab5',
        300: '#748493',
        400: '#596c7e',
        500: '#30475e',
        600: '#2c4156',
        700: '#223243',
        800: '#1a2734',
        900: '#141e27'
      },
      success:{
        50: '#e6f2e7',
        100: '#b2d5b6',
        200: '#8cc192',
        300: '#58a560',
        400: '#389441',
        500: '#067912',
        600: '#056e10',
        700: '#04560d',
        800: '#03430a',
        900: '#033308'
      },
      caution:{
        50: '#f2f2e6',
        100: '#d7d5b1',
        200: '#c3c18b',
        300: '#a8a555',
        400: '#979335',
        500: '#7d7802',
        600: '#726d02',
        700: '#595501',
        800: '#454201',
        900: '#353201'
      },
      error:{
        50: '#fae7e7',
        100: '#f0b3b3',
        200: '#e88e8e',
        300: '#de5b5b',
        400: '#d73b3b',
        500: '#cd0a0a',
        600: '#bb0909',
        700: '#920707',
        800: '#710606',
        900: '#560404'
      }
     }
    },
  },
  plugins: [],
};
export default config;


/* Rectangle 1125 */
