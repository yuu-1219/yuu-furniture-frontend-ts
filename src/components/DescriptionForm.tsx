import { type Dispatch, type SetStateAction, type ChangeEvent} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"


interface DescriptionFormProps {
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
}

export default function DescriptionForm({ description, setDescription } : DescriptionFormProps) {
    const UpdateDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
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
                商品説明
            </Typography>

            <TextField
                size="small"
                type="text"
                id="description"
                name="description"
                placeholder="商品説明"
                value={description}
                onChange={UpdateDescription}
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