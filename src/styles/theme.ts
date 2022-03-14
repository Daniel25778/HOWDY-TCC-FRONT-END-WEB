import { extendTheme, Heading } from '@chakra-ui/react';

// 1. Import the utilities
import { createBreakpoints } from '@chakra-ui/theme-tools'

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '500px',
  md: '1700px',
  lg: '2000px',
  xl: '2500px',
  '2xl': '2700px',
})

// 3. Extend the theme
const theme = extendTheme()

export const themes = extendTheme({
    colors: {
        howdyColors: {
            'mainBlue': '#6A7DFF',
            'mainBlack': '#303135',
            'mainWhite': '#F2F2F2',
            'mainGreen': '#29B995',
            'mainGreenLight' : '#5EF2CD',
            'mainRed': '#FA383E',
            'lightBlue': '#2EC4F3',
            'noob': '#428C49',
            'master': '#7A00F3',
            'notSelection': '#939393',
            'beginner': '#CD7F32',
            'amateur': '#C9CCCB',
            'experient': '#FFD700',
            'veteran': '#DA4244',
            'greenLight': '#5EF2CD',
            'brownHowdyCoin': '#CA7D33',
            'correct': '#0FA958',
            'howdyCoinBackground': '#CFFC4D',
            'colorGoogle': '#EA4335',
         
        }
    },
      breakpoints ,
    fonts: {
        heading: 'Roboto',
        body: 'Raleway, sans-serif',
      },
    styles: {
        global: {
            body: {
                bg: '',
                color: '',
            },
        },
    },
    layerStyles: {
        base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
          },
        selected: {
          bg: 'teal.500',
          color: 'teal.700',
          borderColor: 'orange.500',
        },
      },
});
