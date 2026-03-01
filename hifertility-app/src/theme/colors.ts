export const colors = {
  primary: '#2badee',
  background: '#FFFFFF',
  backgroundLight: '#FDFCFE',
  text: '#333333',
  textSecondary: '#666666',
  textLight: '#9CA3AF',
  border: '#E0E0E0',
  white: '#FFFFFF',
  error: '#D32F2F',
  success: '#388E3C',
  icon: '#2badee',
  surface: '#FFFFFF',
  backgroundDark: '#121212',
  surfaceDark: '#1E1E1E',
};

export const theme = {
  colors: {
    ...colors,
    primary: colors.primary,
    accent: colors.primary,
  },
  roundness: 8,
  fonts: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: 'Roboto',
      fontWeight: '700' as const,
    },
  },
};
