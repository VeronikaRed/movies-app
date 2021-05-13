import PT from 'prop-types';

import { StyledButton } from './styles';

export const Button = ({ type = 'submit', children, ...other }) => (
    <StyledButton type={type} {...other}>
        {children}
    </StyledButton>
);

Button.propTypes = {
    type: PT.oneOf(['button', 'submit', 'reset']),
    children: PT.node.isRequired
};
