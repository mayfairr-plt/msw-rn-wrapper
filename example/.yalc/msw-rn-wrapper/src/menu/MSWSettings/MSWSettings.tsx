import React from 'react';
import { Button, View, Text, Pressable, DevSettings } from 'react-native';
import { useMSWRN } from '../../context';
import { styles } from './MSWSettings.styles';

import { stopServer } from '../../server';
import { generateKey, storage } from '../../utils/storage';

const enableMSW = () => {
  storage.set(generateKey('enabled'), true);
  DevSettings.reload();
};

export const MSWSettings = () => {
  const { active, flows } = useMSWRN();
  return (
    <>
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
    </>
  );
};
