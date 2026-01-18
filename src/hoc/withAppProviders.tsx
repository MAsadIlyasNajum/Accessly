/*
 * Created by Asad on 18 JAN 2026
 */

import React from 'react';
import { AuthProvider } from '../store/AuthContext';
import { I18nProvider } from '../hooks/useI18n';
import { ThemeProvider } from '../hooks/useTheme';
import StatusBar from '../components/molecules/StatusBar';

type AnyProps = Record<string, unknown>;

export const withAppProviders = <P extends AnyProps>(
  Component: React.ComponentType<P>
) => {
  const Wrapped: React.FC<P> = (props) => {
    return (
      <ThemeProvider>
        <I18nProvider>
          <AuthProvider>
            <StatusBar />
            <Component {...props} />
          </AuthProvider>
        </I18nProvider>
      </ThemeProvider>
    );
  };

  Wrapped.displayName = `withAppProviders(${
    Component.displayName || Component.name || 'Component'
  })`;

  return Wrapped;
};
