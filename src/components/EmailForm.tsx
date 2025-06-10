import { useState } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"

export default function EmailForm({ email, setEmail }) {
    // const [email, setEmail] = useState("");
    const UpdateEmail = (e) => {
        setEmail(e.target.value);
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
                // flexWrap: "wrap",  
                // gap: "30px",
                margin: "0px",
                // maxWidth: "600px",     
                width: "100%"
            }}
        >
            <Typography
                HTMLFor="email"
                component="label"
                sx={{
                    fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "18px"
                    },
                    fontWeight: "600",
                    // width: "30%",
                    width: {
                        xs: "100%",
                        sm: "30%",
                    },
                    textAlign: "left",
                    minWidth: "80px"
                }}>
                メールアドレス
            </Typography>
            
            <TextField
                size="small"
                type="email"
                id="email"
                name="email"
                placeholder="yamada1234@gmail.com"
                value={email}
                onChange={UpdateEmail}
                sx={{
                    // height: "35px",
                    // width : "450px",
                    // width: "70%",
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