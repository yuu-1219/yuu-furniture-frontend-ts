import { type UserContextType, useUser } from '../contexts/UserContext';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


interface FavoriteButtonProps {
    userId: string | null;
    productId: string;
    color: string
  }

export default function FavoriteButton({ userId, productId, color } : FavoriteButtonProps) {
    const { user, toggleFavorite } = useUser() as UserContextType;
    const isFavorited: boolean = user!.favorites.some(c => c.productId === productId && c.color === color);


    return (
        <IconButton onClick={() => toggleFavorite(userId, productId, color)}>
            {isFavorited ? (
                <FavoriteIcon color="error" fontSize="large"/>
            ) : (
                <FavoriteBorderIcon fontSize="large"/>
            )}
        </IconButton>

    );
}
