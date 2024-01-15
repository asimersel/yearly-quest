import { StyleSheet } from 'react-native';

// Define your colors
const colors = {
  primary: 'rgb(30, 60, 90)',
  secondary: 'rgb(240, 150, 60)',
  background: 'rgb(150, 200, 150)',
  accent: 'rgb(60, 120, 60)',
  neutral: 'rgb(200, 200, 200)',
  lightBg: 'rgb(180, 210, 230)',
  // Gradient colors
  gradientStart: 'rgb(58, 219, 253)',
  gradientEnd: 'rgb(0, 130, 211)',
};

// Define your styles
const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.primary,
    color: 'white',
    // ... other styles like padding, borderRadius, etc
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    color: 'white',
    // ... other styles
  },
  backgroundPrimary: {
    backgroundColor: colors.background,
    // ... other styles
  },
  backgroundSecondary: {
    backgroundColor: colors.lightBg,
    // ... other styles
  },
  textAccent: {
    color: colors.accent,
    // ... other styles
  },
  textNeutral: {
    color: colors.neutral,
    // ... other styles
  },
  // Gradient style is used with LinearGradient component
  gradient: {
    // ... other styles like position, width, height, etc.
  },
});

export default {
  colors,
  styles,
};
