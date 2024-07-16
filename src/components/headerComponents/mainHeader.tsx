import React from 'react';
import { AppBar, Toolbar, Box, Grid, IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MainTheme from '../../themes/mainTheme';
import CustomButton from '../CustomButton';
import logo from '../../assets/logo.png';

const MainHeader: React.FC = () => {

    return (
        <ThemeProvider theme={MainTheme}>
            <AppBar 
                position="static"  
                sx={{
                    backgroundColor: MainTheme.palette.background.default,
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: '100%', 
                    margin: 0, 
                }}
            >
                <Toolbar 
                    disableGutters 
                    sx={{ 
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%', 
                        padding: 0
                    }}
                >
                    <Box component={Link} to="/" sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        flexGrow: { xs: 1, md: 0 }, // Makes sure the logo takes available space on small screens
                    }}>
                        <Box 
                            component="img" 
                            src={logo} 
                            alt="Logo" 
                            sx={{ maxHeight: { xs: 60, md: 120 }, marginRight: { xs: 2, md: 0 } }} 
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default MainHeader;