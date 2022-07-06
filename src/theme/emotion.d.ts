import '@emotion/react';
// import { Theme } from '@emotion/react';

export interface TextStyle {
  fontFamily: string;
  fontSize: number | string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing?: number | string;
  lineHeight?: number | string;
}

export interface Typography {
  h1: TextStyle;
  h2: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  button1: TextStyle;
  button2: TextStyle;
  button3: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
}

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button1'
  | 'button2'
  | 'caption'
  | 'overline';

export interface Colors {
  primary: string;
  onPrimary: string;
  primaryButton: string;
  primaryButtonColor: string;
  tertiary: string;
  disabledPrimaryButton: string;
  onPrimaryButton: string;
  background: string;
  onBackground: string;
  header: string;
  onHeader: string;
  filterCategories: string;
  onFilterCategories: string;
  red?: string;
  white?: string;
  black?: string;
}

export interface Sizes {
  outerPadding: string;
}

export type ColorVariants =
  | 'red'
  | 'black'
  | 'white'
  | 'primary'
  | 'onPrimary'
  | 'primaryButton'
  | 'primaryButtonColor'
  | 'tertiary'
  | 'disabledPrimaryButton'
  | 'onPrimaryButton'
  | 'background'
  | 'onBackground'
  | 'header'
  | 'onHeader'
  | 'filterCategories'
  | 'onFilterCategories';

declare module '@emotion/react' {
  export interface Theme  {
    colors: Colors;
    // typography?: Typography;
    sizes: Sizes;
  }
}
