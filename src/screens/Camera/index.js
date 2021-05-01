/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCallback} from 'react/cjs/react.development';

import styles, {Container} from './styles';

let camera = null;

export const Camera = ({navigation}) => {
  const [takingPic, setIsTakingPic] = useState(false);

  const takePicture = useCallback(async () => {
    if (camera && !takingPic) {
      const options = {
        quality: 1,
        fixOrientation: true,
        forceUpOrientation: true,
        orientation: 'portrait',
      };

      setIsTakingPic(true);

      try {
        const data = await camera.takePictureAsync(options);
        Alert.alert('Success!');
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        setIsTakingPic(false);
      }
    }
  }, [takingPic]);

  return (
    <Container>
      <RNCamera
        captureAudio={false}
        ref={ref => {
          camera = ref;
        }}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        type={RNCamera.Constants.Type.front}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        activeOpacity={1}
        style={styles.preview}
        onPress={takePicture}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.captureWrapper}>
          <TouchableOpacity onPress={takePicture} style={styles.capture} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};
