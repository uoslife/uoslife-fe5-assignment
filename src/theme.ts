import { css } from '@emotion/react';

import type { SerializedStyles } from '@emotion/react';

type ThemeKey =  'default';

export const themeStyles: Record<ThemeKey, SerializedStyles> = {




  default: css`

  `,
};

// theme에 맞는 스타일만 반환하는 함수
export function getThemeStyle(theme: ThemeKey = 'default'): SerializedStyles {
  return themeStyles[theme];
}

