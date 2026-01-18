/*
 * Created by Asad on 17 JAN 2026
 */

import React, { forwardRef, memo } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { typography, TypographyVariant } from '../../theme/typography';

type Props = React.ComponentPropsWithoutRef<typeof RNText> & {
  variant?: TypographyVariant;
};

const Text = forwardRef<React.ElementRef<typeof RNText>, Props>(function Text(
  { children, variant = 'body', style, ...rest },
  ref
) {
  const { theme } = useTheme();
  const typ = typography[variant];

  return (
    <RNText
      ref={ref}
      {...rest}
      style={[
        {
          color: theme.colors.text,
          fontSize: typ.fontSize,
          lineHeight: typ.lineHeight,
        },
        styles.text,
        style,
      ]}
    >
      {children}
    </RNText>
  );
});

const styles = StyleSheet.create({
  text: {
    fontFamily: 'System',
  },
});

export default memo(Text);

