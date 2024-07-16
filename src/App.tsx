import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';
import MainTheme from './themes/mainTheme';
// import About from './pages/About';
// import theme from './themes/theme';
// import Wrapper from './components/Wrapper';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={MainTheme}>
            <Router>
              <Box
                sx={{
                    backgroundColor: MainTheme.palette.background.default,
                    display: 'flex',
                    flexDirection: 'column',
                }}
              >
                
                <Header />
                <Routes>
                    <Route path="/" element={(<Home />)} />
                    {/* <Route path="/about" element={(<About />)} /> */}
                </Routes>
                {/* <Footer /> */}
              </Box>
            </Router>
        </ThemeProvider>
    );
};

export default App;