import React from 'react';
import { AppBar, Divider, ThemeProvider } from '@mui/material';
import MainHeader from './headerComponents/mainHeader';
import SubHeader from './headerComponents/subHeader';
import MainTheme from '../themes/mainTheme';

const Header: React.FC = () => {
    return (
        <ThemeProvider theme={MainTheme}>
            <AppBar position="static">
                <MainHeader />
                <Divider sx={{ backgroundColor: MainTheme.palette.secondary.main, height: 1.5, }} />
                <SubHeader />
                <Divider sx={{ backgroundColor: MainTheme.palette.secondary.main, height: 1, }} />
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;