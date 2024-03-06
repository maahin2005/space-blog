import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Space Grotesk',
    heading: 'Ubuntu Mono',
  },
  colors: {
    brand: {
      50: '#f3f4f6',
      deepSpaceBlue: '#0B0C10',
      galacticPurple: '#19042C',
      cosmicTeal: '#0E7C7B',
      nebulaRed: '#2F0A28',
      stellarGreen: '#071E22',
      // Add other shades of your brand color
    },
    fonts: {
      lunarWhite: '#C7D3DC',
      astronautSilver: '#8492A6',
      meteoriteGray: '#3E4E5E',
      stardustGold: '#FFD700',
      cometCopper: '#B87333',
      galacticPurple: '#663399',
      starryNightBlue: '#003366',
      pinkNebula: '#FFCCCB',
      celestialPink: '#FF69B4',
      cosmicPurple: '#702963',
      spaceDustGray: '#CCCCCC',
    },
  },
  components: {
    // Add custom component styles here
  },
  styles: {
    global: {
      body: {
        bg: 'brand.deepSpaceBlue', // Set the default background color
        color: 'fonts.lunarWhite', // Set the default text color
      },
    },
  },
});
