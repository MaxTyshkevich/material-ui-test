const DRAWER_WIDTH = 256;

const navbarStyles = {
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: DRAWER_WIDTH,
      boxSizing: 'border-box',
      backgroundColor: '#101F33',
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },

  icons: { color: ' rgba(255, 255, 255, 0.7)', minWidth: 40 },

  text: {
    '& span': {
      fontSize: 14,
      fontWeight: 500,
    },
  },
};

export { navbarStyles, DRAWER_WIDTH };
