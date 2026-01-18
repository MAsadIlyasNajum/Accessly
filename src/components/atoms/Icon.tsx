/*
 * Created by Asad on 17 JAN 2026
 */

import React, { forwardRef, memo } from 'react';
import { Image, ImageSourcePropType, ImageProps } from 'react-native';

type Props = { source: ImageSourcePropType } & ImageProps;

export const Icon = memo(
  forwardRef<React.ElementRef<typeof Image>, Props>(function Icon({ source, ...rest }, ref) {
    return <Image source={source} {...rest} />;
  })
);
