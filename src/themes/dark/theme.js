import * as commonVariables from '../variables';

export const theme = {
    ...commonVariables,
    header: {
        background: 'linear-gradient(to right, #ACBB78, #799F0C)',
        color: '#fff'
    },
    footer: {
        background: 'linear-gradient(to right, #ACBB78, #799F0C)',
        color: '#fff'
    },
    button: {
        background: commonVariables.lightColors[500],
        color: commonVariables.darkColors[900]
    }
};
