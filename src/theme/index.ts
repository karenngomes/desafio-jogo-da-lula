import { Theme } from '@emotion/react';
import light from './theme.light';
import dark from './theme.dark';

interface Themes {
  [key: string]: Theme;
}

const themes: Themes = { light, dark };

export const getTheme = (name: string): Theme => themes[name] || light;

export const setTheme = (name: string, theme: Theme) =>
  (themes[name] = theme || light);
