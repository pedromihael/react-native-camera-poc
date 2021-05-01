/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useCallback} from 'react/cjs/react.development';
import {RNCamera} from 'react-native-camera';

import {
  Container,
  ButtonContainer,
  CaptureWrapper,
  CaptureButton,
  CameraView,
} from './styles';

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
      <CameraView
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
        onPress={takePicture}
      />
      <ButtonContainer>
        <CaptureWrapper>
          <CaptureButton onPress={takePicture} />
        </CaptureWrapper>
      </ButtonContainer>
    </Container>
  );
};
