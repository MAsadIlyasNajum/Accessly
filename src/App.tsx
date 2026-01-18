
/*
 * Created by Asad on 17 JAN 2026
 */

import React from 'react';
import './i18n';
import AppNavigator from './navigation/AppNavigator';
import { withAppProviders } from './hoc/withAppProviders';

const App: React.FC = () => {
  return <AppNavigator />;
};

export default withAppProviders(App);