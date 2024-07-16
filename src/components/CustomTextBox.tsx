import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type CustomTextBoxProps = {
    header: string;
    paragraph: string;
    link: {
        text: string;
        href: string;
    };
};

const CustomTextBoxStyle = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    // border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: theme.shadows[1],
    transition: 'all 0.3s ease',
    maxWidth: '1920px',
    maxHeight: '100%',

    '&:hover': {
        boxShadow: theme.shadows[4],
    }
}));

const CustomTextBox: React.FC<CustomTextBoxProps> = ({ header, paragraph, link }) => {
    return (
        <CustomTextBoxStyle>
            <Box 
                sx={{
                    textAlign: 'center',
                    justifyContent: 'center',
                }}
            >
            <Typography variant="h5" gutterBottom>
                {header}
            </Typography>
            <Typography variant="body1" paragraph>
                {paragraph}
            </Typography>
            <Typography variant="body2" color="primary">
                <RouterLink to={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {link.text}
                </RouterLink>
            </Typography>
            </Box>
        </CustomTextBoxStyle>
    );
};

export default CustomTextBox;
