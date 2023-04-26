import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { grey} from '@mui/material/colors';
import React, { useState } from "react";
import AddItemModal from './AddItemModal';


export default function AddNewRecipeButton({mealName, day, size, isInRecipeList}) {
    
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="add-button">
            <IconButton onClick={() => setIsOpen(true)}>
                <AddCircleIcon className={"button"} sx={{ color: grey[700], fontSize: size }}></AddCircleIcon>
            </IconButton>

            <AddItemModal open={isOpen} onClose={() => setIsOpen(false)} mealName={mealName} day={day} isInRecipeList={isInRecipeList}>
                <h1>Add a Recipe</h1>
            </AddItemModal>
        </div>
    );
};



