import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    color: ${props => props.theme.darkColors[900]};
    text-decoration: underline transparent;
    transition: text-decoration 150ms ease;

    &.active,
    &:hover {
        text-decoration: underline ${props => props.theme.darkColors[900]};
    }

    &.active {
        cursor: default;
    }
`;
