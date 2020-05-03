import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Cantainer, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Cantainer>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('Foi!');
        }}
      >
        Entrar
      </Button>
    </Cantainer>
  );
};

export default SignIn;
