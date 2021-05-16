import styled from 'styled-components/macro';

import { StyledButton } from '../../Button';

export const StyledSearch = styled.div`
    display: flex;

    ${StyledButton} {
        padding: 0;
        text-align: center;
        width: 15rem;
    }
`;
