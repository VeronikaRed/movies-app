import styled from 'styled-components/macro';

import { StyledLink } from '../../../components/Link';

const maxWidth = '50rem';
const borderRadius = '0.5rem';
const borderWidth = '0.2rem';

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    max-width: ${maxWidth};
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.$imageUrl});
    border-radius: ${borderRadius};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${borderRadius};
        background-color: transparent;
        transition: background-color 300ms ease;
    }

    &:hover {
        :before {
            background-color: ${props => props.theme.darkColors[800]};
        }
        ${StyledLink} {
            opacity: 1;
        }
    }

    ${StyledLink} {
        color: ${props => props.theme.lightColors[500]};
        opacity: 0;
        border: ${borderWidth} solid ${props => props.theme.lightColors[500]};
        padding: ${props => props.theme.padding.md};
        text-decoration: none;
        position: relative;
        z-index: 1;
        transition: opacity 300ms ease, color 150ms ease;

        &:hover {
            color: ${props => props.theme.primaryClr};
            border-color: ${props => props.theme.primaryClr};
        }
    }
`;
