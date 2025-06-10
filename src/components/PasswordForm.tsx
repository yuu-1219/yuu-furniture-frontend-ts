import { useState } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"

export default function PasswordForm({ text, password, setPassword }) {
    // const [password, setPassword] = useState("");
    const UpdatePassword = (e) => {
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
                // gap: "30px",
                margin: "0px",
                // maxWidth: "600px",     
                width: "100%"
            }}
        >
            <Typography
                HTMLFor="password"
                component="label"
                sx={{
                    fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px"
                    },
                    fontWeight: "600",
                    // width: "20%",
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
                // placeholder=""
                value={password}
                onChange={UpdatePassword}
                sx={{
                    // height: "35px",
                    // width : "450px",
                    // width: "80%",
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