import styled from 'styled-components/macro';

const maxWidth = '30rem';

export const StyledInputWrapper = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    margin-right: ${props => props.theme.margin.md};
`;
