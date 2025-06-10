import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function Review( {value} ) {
    // const [score, setScore] = useState(value);

    return (
        <>
            <Rating
                size="small"
                // name="simple-controlled"
                name="read-only"
                precision={1}
                value={value}
                readOnly
                // onChange={(event, newValue) => {
                //     setScore(newValue);
                // }}
            />
        </>

    );

}