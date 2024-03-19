import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Text } from 'react-native';
import { useMSWRN } from '../../context';
import { stopServer } from '../../server';

export const BottomSheetPopup = () => {
  const { active } = useMSWRN();
  return (
    <BottomSheet snapPoints={['50%']}>
      <Text>Status: {active ? 'Active' : 'Inactive'}</Text>
      <Button title="Disable" onPress={stopServer} />
    </BottomSheet>
  );
};
