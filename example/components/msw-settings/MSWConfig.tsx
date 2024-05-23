import React from 'react';
import {MSWSettings} from 'msw-rn-wrapper';
import {SafeAreaView} from 'react-native';

export const MSWConfig = () => {
  return (
    <SafeAreaView>
      <MSWSettings />
    </SafeAreaView>
  );
};
