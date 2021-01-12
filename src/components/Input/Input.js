import PT from 'prop-types';

import { StyledInput } from './styles';

export const Input = ({ autoComplete = 'off', ...other }) => (
    <StyledInput autoComplete={autoComplete} {...other} />
);

Input.propType = {
    autoComplete: PT.oneOf(['on', 'off'])
};
