import PT from 'prop-types';
import { forwardRef } from 'react';
import { StyledInput } from './styles';

export const Input = forwardRef(({ autoComplete = 'off', ...other }, ref) => (
    <StyledInput ref={ref} autoComplete={autoComplete} {...other} />
));

Input.propType = {
    autoComplete: PT.oneOf(['on', 'off'])
};
