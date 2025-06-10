import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';

export default function RunButton({ text, width = 300, height = 35, handleClick }) {

    return (
        <Box
            sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                backgroundColor: "#fdc757",
                // width: `${width}px`,
                width: {
                    xs: "100%",
                    sm: "80%",
                    md: "60%",
                    lg: "300px",
                },
                // padding: "20px 60px",
                // height: `${height}px`,
                height: {
                    xs: "38px",
                    sm: "42px",
                    md: "45px",
                    lg: "48px"
                },
                minWidth: "120px",
                cursor: "pointer",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}
            onClick={handleClick}
        >
            <Typography
                sx={{
                    fontWeight: '600',
                    // fontSize: "18px",
                    fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "16px"
                    },
                    color: "#535353",
                    // width: `${width}px`,
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}