import React, { useContext } from 'react';

import { Formik } from 'formik';
import { FiLock, FiMail } from 'react-icons/fi';

import { AuthContext } from '../../context/AuthContext';
import Input from '../../components/Input';

import { 
  Container,
  Content,
  AnimationContainer,
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
                  icon={FiMail}
                  value={props.values.email}
                  onChange={props.handleChange('email')}
                />
                <Input 
                  placeholder="Senha"
                  type="password"
                  name="password"
                  icon={FiLock}
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