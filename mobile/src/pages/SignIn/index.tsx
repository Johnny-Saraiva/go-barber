import React from 'react';
import { Image } from 'react-native';

import { Cantainer, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Cantainer>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
    </Cantainer>
  );
};

export default SignIn;
