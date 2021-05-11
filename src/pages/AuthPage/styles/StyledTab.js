import styled, { css } from 'styled-components';

const applyActiveStyles = ({ $active, theme }) => {
    const lightClr = theme.lightColors[600];
    const darkClr = '#b3b3b3';

    return css`
        background-color: ${$active ? darkClr : lightClr};
    `;
};

const applyCursor = ({ $active }) => {
    if ($active) return;

    return css`
        cursor: pointer;
    `;
};

export const StyledTab = styled.div.attrs({ role: 'button', tabIndex: 0 })`
    padding: ${props => props.theme.padding.md};
    width: 50%;
    text-align: center;

    &:first-child {
        border-radius: 0.5rem 0 0 0;
    }

    &:last-child {
        border-radius: 0 0.5rem 0 0;
    }

    ${applyActiveStyles}
    ${applyCursor}
`;
