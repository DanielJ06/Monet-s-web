import React, { InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Container isFocused={isFocused} >
      { Icon && <Icon size={20} /> }
      <input 
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest} 
      />
    </Container>
  );
}

export default Input;