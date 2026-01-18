/*
 * Created by Asad on 18 JAN 2026
 */

export type Theme = {
  name: 'light' | 'dark';
  colors: {
    background: string;
    surface: string;
    primary: string;
    text: string;
    muted: string;
    success: string;
    danger: string;
    inputBg: string;
    border: string;
    secondary: string;
  };
};
