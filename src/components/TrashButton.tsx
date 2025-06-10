import { useFavorites } from '../contexts/FavoriteContext';
import { useCart } from '../contexts/CartContext';

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export default function TrashButton({ productId, removeProduct }) {
    // const { favorites, toggleFavorite } = useFavorites();
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