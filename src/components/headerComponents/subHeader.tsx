import React, { useState }from 'react';
import { AppBar, Toolbar, Box, Grid, IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MainTheme from '../../themes/mainTheme';
import CustomButton from '../CustomButton';

const SubHeader: React.FC = () => {

    const [activeButton, setActiveButton] = useState<string>('home');
    
    return (
        <ThemeProvider theme={MainTheme}>
            <AppBar position="static" sx={{ backgroundColor: MainTheme.palette.background.default,  width: '100%', margin: 0, height: '40px', alignContent: 'center', justifyContent: 'center',}}>
                <Toolbar disableGutters sx={{ alignContent: 'center', justifyContent: 'center', width: '100%', padding: 0 }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center',}}>
                        <CustomButton
                            isActive={activeButton === 'home'}
                            onClick={() => setActiveButton('home')}
                            link="/"
                        >
                            HOME
                        </CustomButton>
                        <CustomButton
                            isActive={activeButton === 'youtube'}
                            onClick={() => setActiveButton('youtube')}
                            link="/youtube"
                        >
                            YOUTUBE
                        </CustomButton>
                        <CustomButton
                            isActive={activeButton === 'blog'}
                            onClick={() => setActiveButton('blog')}
                            link="/blog"
                        >
                            BLOG
                        </CustomButton>
                        <CustomButton
                            isActive={activeButton === 'resources'}
                            onClick={() => setActiveButton('resources')}
                            link="/resources"
                        >
                            RESOURCES
                        </CustomButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default SubHeader;