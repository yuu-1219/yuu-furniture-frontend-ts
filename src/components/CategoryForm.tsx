import { type Dispatch, type SetStateAction, type ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"
import MenuItem from '@mui/material/MenuItem';

import { categories } from "../constants/categories";


interface CategoryFormProps {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}

export default function CategoryForm({ category, setCategory }: CategoryFormProps) {
    const UpdateCategory = (e: ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
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
                カテゴリ
            </Typography>

            <TextField
                size="small"
                select
                id="category"
                name="category"
                // placeholder="アイテム1"
                value={category}
                onChange={UpdateCategory}
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
                {categories.map((c) => (
                    <MenuItem key={c.categoryId} value={c.categoryId}>
                        {c.categoryLabel}
                    </MenuItem>
                ))}

                </ TextField>

        </Box>

    );
}