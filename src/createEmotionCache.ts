import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

const createEmotionCache = (direction: 'rtl' | 'ltr') => {
  let result;
  if (direction === 'rtl') {
    result = createCache({
      key: 'muirtl',
      stylisPlugins: [rtlPlugin as any],
    });
  } else {
    result = createCache({ key: 'css' });
  }

  return result;
};

export default createEmotionCache;
