/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Alert, TouchableOpacity, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCallback} from 'react/cjs/react.development';

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
        Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        setIsTakingPic(false);
      }
    }
  }, [takingPic]);

  return (
    <View style={styles.container}>
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
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={styles.buttonText}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 14,
  },
});
