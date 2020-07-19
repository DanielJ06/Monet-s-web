import React, { useContext } from 'react';
import { Formik } from 'formik';

import { AuthContext } from '../../context/AuthContext';

import { 
  Container,
  Content,
  AnimationContainer,
  Input,
  Button,
  Background,
} from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              signIn(values)
          }}>
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <h1>Login</h1>

                <Input 
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  value={props.values.email}
                  onChange={props.handleChange('email')}
                />
                <Input 
                  placeholder="Senha"
                  type="password"
                  name="password"
                  value={props.values.password}
                  onChange={props.handleChange('password')}
                />

                <Button type="submit">Entrar</Button>
              </form>
            )}
          </Formik>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default SignIn;