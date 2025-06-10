import { useState } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"

export default function NameForm({ name, setName }) {
    // const [name, setName] = useState("");
    const UpdateName = (e) => {
        setName(e.target.value);
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
                // flexWrap: "wrap",  
                // gap: "30px",
                margin: "0px",
                // maxWidth: "600px",     
                width: "100%"
            }}
        >
            <Typography
                HTMLFor="name"
                component="label"
                sx={{
                    fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "18px"
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
                名前
            </Typography>

            <TextField
                size="small"
                type="text"
                id="name"
                name="name"
                placeholder="山田 太郎"
                value={name}
                onChange={UpdateName}
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