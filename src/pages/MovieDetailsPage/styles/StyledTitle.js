import styled from 'styled-components';

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 700;
    margin-bottom: ${props => props.theme.margin.md};
`;
