export const colors = {
  primary: '#802277',
  background: '#FFFFFF',
  backgroundLight: '#F5F5F5',
  text: '#333333',
  textSecondary: '#666666',
  border: '#E0E0E0',
  white: '#FFFFFF',
  error: '#D32F2F',
  success: '#388E3C',
  icon: '#802277',
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
