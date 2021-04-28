/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {View, Text, ScrollView, Button, Alert} from 'react-native';

const styledScrollView = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
};

export const Home = ({navigation}) => {
  const action = useCallback(() => navigation.navigate('Camera'), [navigation]);

  return (
    <ScrollView contentContainerStyle={styledScrollView}>
      <Text>Cabine Digital</Text>
      <View>
        <Button title="Camera" onPress={action} />
      </View>
    </ScrollView>
  );
};
