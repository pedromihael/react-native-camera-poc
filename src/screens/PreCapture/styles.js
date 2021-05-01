import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const LogoWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Description = styled.View`
  margin-top: 15px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 26px;
  margin-bottom: 15px;
  margin-left: 40px;
  margin-right: 40px;
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const Button = styled.TouchableOpacity`
  background-color: #0088b7;
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: white;
`;
