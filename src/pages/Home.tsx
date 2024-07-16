// HomePage.tsx
import React from 'react';
import ReactPlayer from 'react-player';
import { Box, ThemeProvider, Typography } from '@mui/material';
import MainTheme from '../themes/mainTheme';
import CustomTextBox from '../components/CustomTextBox';

const HomePage: React.FC = () => {
    return (
        <ThemeProvider theme={MainTheme}>
            <Box>
                <Box
                    sx={{
                        position: 'relative',
                        // paddingTop: '56.25%', // 16:9 Aspect Ratio (divide 9 by 16 = 0.5625)
                        aspectRatio: '16 / 9',
                        width: '100%',
                        maxWidth: '1920px',
                        maxHeight: '1080px',
                        margin: '0 auto', // Center the box horizontally
                    }}
                >
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=G1AuS8phPbw"
                        width="100%"
                        height="100%"
                        muted
                        controls
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    />
                    
                </Box>
                <Box 
                    sx={{
                        // display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '1920px',
                        margin: '0 auto', // Center the box horizontally
                        // padding: '0 16px', // Optional padding to prevent content from touching the edges
                    }}
                >
                    <CustomTextBox 
                        header="We make cars"
                        paragraph="This is a placeholder paragraph"
                        link={{ text:"Learn More!", href: "/learnMore" }}
                    />
                    {/* <Typography variant='h2' sx={{textDecoration: 'underline'}}>
                        Marietta, GA's LS Engine Specialists. 
                    </Typography>
                    <Typography variant='h3'>
                        Placeholder text and font
                    </Typography> */}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default HomePage;
