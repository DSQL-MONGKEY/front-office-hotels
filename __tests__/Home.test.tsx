/* eslint-disable prettier/prettier */
import 'react-native';
import React from 'react';
import Splash from '../src/pages/Splash';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('should render properly', () => {
  renderer.create(<Splash />);
});
