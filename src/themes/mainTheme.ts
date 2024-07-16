import { createTheme } from '@mui/material/styles';

const MainTheme = createTheme({
    shape: {
        borderRadius: 2,
    },
    palette: {
        primary: {
            main: '#FFFFFF', // White
            dark: '#2c2c2c', // Dark Gray
        },
        secondary: {
            main: '#ff0000', // Red
            dark: '#b0b0b0', // Silver
        },
        background: {
            default: '#4F4F4F', // Black
        },
        text: {
            primary: '#ffffff', // White
            secondary: '#000000', // Black
        },
        divider: '#ff0000',
    },
    typography: {
        h1: {
            primary: '#ffffff', // White
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.MuiButton-containedPrimary': {
                        backgroundColor: '#ff0000', // Red
                        color: '#ffffff', // White
                    },
                    '&.MuiButton-containedSecondary': {
                        backgroundColor: '#b0b0b0', // Silver
                        color: '#000000', // Black
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 50%, transparent 50%), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 50%, transparent 50%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                    backgroundColor: '#4F4F4F',
                    minHeight: '100vh',
                    margin: 0,
                    padding: 0,
                },
            },
        },
    },
});

export default MainTheme;
