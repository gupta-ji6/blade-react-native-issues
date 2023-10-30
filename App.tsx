/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {BladeProvider} from '@razorpay/blade/components';
import {paymentTheme} from '@razorpay/blade/tokens';

import Navigation from './Navigation';

function App(): JSX.Element {
  return (
    <BladeProvider themeTokens={paymentTheme} colorScheme="light">
      <Navigation />
    </BladeProvider>
  );
}

export default App;
