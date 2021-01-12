import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
    padding: 2rem;
    color: ${props => props.theme.footer.color};
    background: ${props => props.theme.footer.background};
`;
