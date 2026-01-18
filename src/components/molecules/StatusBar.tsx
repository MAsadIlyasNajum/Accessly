/*
 * Created by Asad on 17 JAN 2026
 */

import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

const StatusBar = () => {
  const { theme } = useTheme();
  return (
    <RNStatusBar
      translucent
      backgroundColor={theme.colors.background as string}
      barStyle={theme.name === 'dark' ? 'light-content' : 'dark-content'}
    />
  );
};

export default StatusBar;
