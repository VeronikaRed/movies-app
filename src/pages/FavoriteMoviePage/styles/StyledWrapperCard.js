import styled from 'styled-components/macro';

import { StyledLink } from '../../../components/Link';
import { StyledButton } from '../../../components/Button';

const maxWidth = '25rem';

export const StyledWrapperCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: ${props => props.theme.margin.sm};
    justify-content: center;

    ${StyledLink} {
        max-width: ${maxWidth};
        transition: max-width 300ms ease;
        display: flex;
        margin-bottom: ${props => props.theme.margin.md};
        position: relative;
        z-index: 2;

        &:hover,
        &:focus {
            outline: 0.3rem solid ${props => props.theme.primaryClr};
            outline-offset: 0.3rem;
            max-width: 24.5rem;
            align-items: center;
        }
        &:not(:last-child) {
            margin-right: ${props => props.theme.margin.md};
        }
    }

    ${StyledButton} {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        background-color: transparent;
    }
`;
