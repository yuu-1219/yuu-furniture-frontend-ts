import { type Dispatch, type SetStateAction, type ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"


interface ProductImgFormProps {
    productImg: File | null;
    setProductImg: Dispatch<SetStateAction<File | null>>;
}

export default function ProductImgForm({ productImg, setProductImg }: ProductImgFormProps) {
    const UpdateProductImg = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setProductImg(e.target.files[0]);
        }
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
                商品画像
            </Typography>

            <TextField
                size="small"
                type="file"
                id="productImg"
                name="productImg"
                placeholder="アイテム1"
                // value={productImg}
                onChange={UpdateProductImg}
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
            />

        </Box>

    );
}