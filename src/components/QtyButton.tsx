import React, { useState } from 'react';

import { Box, Button, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function QtyButton({qty=1, width=120, onIncrement, onDecrement}) {

    // const increment = () => setQty((prev) => prev + 1);
    // const decrement = () => setQty((prev) => Math.max(1, prev - 1)); // 0未満にしない

    return (
        <Box
            sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                // width: `${width}px`,
                width: {
                    xs: "100%",
                    sm: "80%",
                    md: "100px",
                    lg: "180px"
                  },
                // height : "45px",
                height: {
                    xs: "38px",
                    sm: "42px",
                    md: "45px",
                    lg: "48px"
                  },
                maxWidth: "120px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-around",
                backgroundColor: "#fffdf7",
                // gap: 1
            }}
        >
            <IconButton
                // variant="text"
                // size="small"
                onClick={onDecrement}

            >
                <RemoveIcon fontSize="small"/>
            </IconButton>

            <Typography
                sx={{
                    fontWeight: '600',
                    // fontSize: "24px"
                    fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "22px",
                        lg: "24px"
                      },
                }}
            >
                {qty}
            </Typography>

            <IconButton
                // variant="text"
                // size="small"
                onClick={onIncrement}
            >
                <AddIcon fontSize="small"/>
            </IconButton>
        </Box>
    );
}