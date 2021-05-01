import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const CaptureWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: red;
  border-radius: 100px;
  padding: 10px;
  margin: 30px;
`;

export const CaptureButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 100px;
  padding: 15px;
  border-width: 5px;
  border-color: black;
`;

export const CameraView = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
