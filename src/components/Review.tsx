import Rating from "@mui/material/Rating";

interface ReviewType {
    value: number;
}

export default function Review( {value} : ReviewType) {
    return (
        <>
            <Rating
                size="small"
                name="read-only"
                precision={1}
                value={value}
                readOnly
            />
        </>

    );

}