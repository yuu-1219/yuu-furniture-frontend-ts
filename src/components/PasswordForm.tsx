import { type Dispatch, type SetStateAction, type ChangeEvent} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"


interface PasswordFormProps {
    text: string
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
}


export default function PasswordForm({ text, password, setPassword } : PasswordFormProps) {
    const UpdatePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedPassword = e.target.value;
        setPassword(updatedPassword);
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
                margin: "0px",
                width: "100%"
            }}
        >
            <Typography
                component="label"
                sx={{
                    fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px"
                    },
                    fontWeight: "600",
                    width: {
                        xs: "100%",
                        sm: "30%",
                    },
                    textAlign: "left",
                    minWidth: "80px"
                }}>
                {text}
            </Typography>

            <TextField
                size="small"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={UpdatePassword}
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