import { useState } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CheckIcon from '@mui/icons-material/Check';
import { StoreMallDirectory } from '@mui/icons-material';

export default function ColorCard({ color, onColors, setOnColors }) {
    const { colorId, colorLabel, hex } = color;

    const isSelected = onColors.includes(color);

    const handleToggle = () => {
        if (isSelected) {
            setOnColors(onColors.filter(c => c.colorId !== colorId));
        } else {
            setOnColors([...onColors, color]);
        }

    }
    return (
        <Box
            sx={{
                display: "flex",
                // flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                width: {
                    xs: "44px",
                    sm: "50px",
                    md: "46px",
                    lg: "50px"
                },
                Height: {
                    xs: "44px",
                    sm: "50px",
                    md: "46px",
                    lg: "50px",
                },
                // maxWidth: "50px",
                // maxHeight: "50px",
                padding: "2px",
                margin: {
                    xs: "1px",
                    sm: "2px",
                    md: "1px",
                    lg: "2px"
                },
                border: "0.5px solid #cecece",
                backgroundColor: "#faf6ec",
                borderRadius: "4px"

            }}
            onClick={handleToggle}

        >

            {/* (start)カラーBox */}
            <Box sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                width: {
                    xs: "25px",
                    sm: "25px",
                    md: "25px",
                    lg: "28px"
                },
                height: "25px",
                height: {
                    xs: "25px",
                    sm: "25px",
                    md: "25px",
                    lg: "28px"
                },
                margin: {
                    xs: "1px",
                    sm: "2px",
                },
                backgroundColor: hex,
                cursor: "pointer"
            }}>
                {isSelected && (
                    <CheckIcon
                        sx={{
                            fontSize: "medium",
                            color: color.colorLabel === "ブラック" ? "#ffffff" : "#000000"

                        }}
                    />
                )}
            </Box>
             {/* (end)カラーBox */}


             {/* (start)カラー名 */}
            <Typography
                sx={{
                    width: "100%",
                    fontWeight: "500",
                    fontSize: "10px",
                    fontSize: {
                        xs: "9px",
                        sm: "10px",
                        md: "9px",
                        lg: "10px",
                    },
                    marginBottom: "0px"
                }}>
                {colorLabel}
            </Typography>
             {/* (end)カラー名 */}

        </Box>

    )

}