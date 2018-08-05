import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1240,
            lg: 1560,
            xl: 1980,
        },
    },
    palette: {
        primary: {
            light: '#62727B',
            main: '#37474F',
            dark: '#102027',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#4FB3BF',
            main: '#00838F',
            dark: '#005662',
            constrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: ['Noto Sans KR', 'Rounded Mplus 1c', 'sans-serif'],
        fontSize: 14,
        button: {
            textTransform: undefined,
        },
        caption: {
            fontSize: '2rem',
        },
        display1: {
            fontSize: '1rem',
        },
        display2: {
            fontSize: '1.25rem',
        },
        display3: {
            fontSize: '1.5rem',
        },
    },
});

export default theme;
