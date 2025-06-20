import { type Dispatch, type SetStateAction, type ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"
import MenuItem from '@mui/material/MenuItem';

import { colors } from "../constants/colors";


interface ColorFormProps {
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
}

export default function ColorForm({ color, setColor }: ColorFormProps) {
    const UpdateColor = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row"
                },
                alignItems: "center",
                justifyContent: "center",
                margin: "0px",
                width: "100%"
            }}
        >
            <Typography
                component="label"
                sx={{
                    fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "18px"
                    },
                    fontWeight: "600",
                    width: {
                        xs: "100%",
                        sm: "30%",
                    },
                    textAlign: "left",
                    minWidth: "80px"
                }}>
                カラー
            </Typography>

            <TextField
                size="small"
                select
                id="color"
                name="color"
                // placeholder="アイテム1"
                value={color}
                onChange={UpdateColor}
                sx={{
                    width: {
                        xs: "100%",
                        sm: "70%",
                    },
                    fontSize: "15px",
                    flexGrow: 1,
                    flexBasis: 0,
                    minWidth: "20px",
                    input: {
                        fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px"
                        }
                    }
                }}
            >
                {colors.map((c) => (
                    <MenuItem key={c.colorId} value={c.colorLabel}>
                        {c.colorLabel}
                    </MenuItem>
                ))}

                </ TextField>

        </Box>

    );
}