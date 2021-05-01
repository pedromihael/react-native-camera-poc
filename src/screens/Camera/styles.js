import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
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
    backgroundColor: 'red',
    borderRadius: 100,
    padding: 15,
    borderWidth: 5,
    borderColor: 'black',
  },
  captureWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 0,
    backgroundColor: 'red',
    borderRadius: 100,
    padding: 10,
    margin: 30,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default styles;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
