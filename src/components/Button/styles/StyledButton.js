import styled from 'styled-components/macro';

const padding = '1.55rem';

export const StyledButton = styled.button`
    display: block;
    padding: ${props => `${padding} ${props.theme.padding.xl}`};
    border: none;
    border-radius: ${props => props.theme.borderRadius.sm};
    background: ${props => props.theme.button.background};
    color: ${props => props.theme.button.color};
    transition: color 300ms ease;

    &:disabled {
        background: ${props => props.theme.lightColors[600]};
        color: ${props => props.theme.lightColors[500]};
    }

    &:active {
        background-color: #d2d2d2;
        border-color: #333;
        color: #eee;
    }
`;
