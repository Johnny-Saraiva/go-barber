import React from 'react';
import { Image } from 'react-native';

import { Cantainer } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Cantainer>
      <Image source={logoImg} />
    </Cantainer>
  );
};

export default SignIn;
