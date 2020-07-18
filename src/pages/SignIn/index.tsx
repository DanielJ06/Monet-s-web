import React from 'react';

import { 
  Container,
  Content,
  AnimationContainer,
  Input,
  Button,
  Background,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form>
            <h1>Login</h1>

            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />

            <Button type="submit">Entrar</Button>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default SignIn;