import { type Dispatch, type SetStateAction, type ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"
import MenuItem from '@mui/material/MenuItem';



interface RatingFormProps {
    rating: number | null;
    setRating: Dispatch<SetStateAction<number | null>>;
}

export default function RatingForm({ rating, setRating }: RatingFormProps) {
    const UpdateRating = (e: ChangeEvent<HTMLInputElement>) => {
        setRating(Number(e.target.value));
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
                評価
            </Typography>

            <TextField
                size="small"
                select
                id="rating"
                name="rating"
                placeholder="0 〜 5"
                value={rating}
                onChange={UpdateRating}
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
                {Array.from({ length: 6 }, (_, i) => (
                    <MenuItem key={i} value={i}>
                        {i}
                    </MenuItem>
                ))}
            </TextField>

        </Box>

    );
}