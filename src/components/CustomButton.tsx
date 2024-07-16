// CustomButton.tsx
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface CustomButtonProps extends ButtonProps {
    isActive?: boolean;
    link?: string;
}

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '0px', // No rounded corners
    textTransform: 'none', // Keep text case as-is
    fontSize: '16px', // Font size
    fontWeight: 'bold', // Font weight
    minHeight: '100%',
    color: theme.palette.text.secondary, // Gray text color
    // backgroundColor: theme.palette.primary.dark, // Background color
    //Turned off to make the 

    '&:hover': {
        backgroundColor: theme.palette.primary.dark, // Black background on hover
        color: theme.palette.text.primary, // White text color on hover
    },
    '&.active': {
        backgroundColor: theme.palette.primary.dark, // Black background for active state
        color: theme.palette.text.primary, // White text color for active state
        '&::after': {
            content: '""',
            display: 'block',
            width: '50%',
            margin: '0 auto',
            borderBottom: '2px solid #ffffff', // White underline
        },
    },
}));

const CustomButton: React.FC<CustomButtonProps> = ({ isActive, link, ...props }) => {
    const buttonProps = link ? { component: RouterLink, to: link } : {};
    
    return (
        <StyledButton
            {...buttonProps}
            className={isActive ? 'active' : ''}
            {...props}
            sx={{
                // padding: 2.2,
                
            }}
        />
    );
};

export default CustomButton;
