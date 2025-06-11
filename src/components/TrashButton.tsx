import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

interface TrachButtonType {
    productId: string;
    removeProduct: (productId: string) => void;
}

export default function TrashButton({ productId, removeProduct } : TrachButtonType) {
    const deleteProduct = () => {
        removeProduct(productId);
    }

    return (
        <DeleteForeverRoundedIcon
            onClick={() => deleteProduct()}
            style={{
                color: "#7a7a7a",
                cursor: "pointer"
            }}
        />
    );
}