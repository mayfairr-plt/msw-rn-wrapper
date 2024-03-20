import React from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Button, DevSettings, Text, View } from 'react-native';
import { useMSWRN } from '../../context';
import { stopServer } from '../../server';
import { generateKey, storage } from '../../utils/storage';
import { styles } from './BottomSheet.styles';
import { Pressable } from 'react-native';

const enableMSW = () => {
  storage.set(generateKey('enabled'), true);
  DevSettings.reload();
};

export const BottomSheetPopup = () => {
  const { active, flows } = useMSWRN();
  return (
    <BottomSheet snapPoints={['50%']} style={styles.bottomSheet}>
      <BottomSheetView style={styles.container}>
        <View style={styles.statusContainer}>
          <Text>
            Status:{' '}
            <Text style={{ color: active ? 'green' : 'red' }}>
              {active ? 'Active' : 'Inactive'}
            </Text>
          </Text>
          {active ? (
            <Pressable onPress={stopServer}>
              <Text style={styles.buttonText}>Disable</Text>
            </Pressable>
          ) : (
            <Pressable onPress={enableMSW}>
              <Text style={styles.buttonText}>Enable</Text>
            </Pressable>
          )}
        </View>

        <Text style={styles.title}>Flows</Text>
        <View>
          {flows.map((flow) => {
            return <Button title={`- ${flow.name}`} onPress={flow.activate} />;
          })}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
