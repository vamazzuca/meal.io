import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { connect } from "react-redux";
import { deleteMealItem } from '../actions';
import { useState } from 'react';
import EditItemModal from './EditItemModal';

function RecipeItem(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleDeleteItem = () => {
        const { dispatch } = props

        dispatch(deleteMealItem(props.listID))
    }

    return (
        <div className="recipeItem" onClick={() => setIsOpen(true)}>
            <h1>{props.name}</h1>
            <IconButton onClick={handleDeleteItem}>
                <DeleteIcon></DeleteIcon>
            </IconButton>
            <EditItemModal open={isOpen} onClose={() => setIsOpen(false)} name={props.name} listID={props.listID}
                description={props.description} ingredients={props.ingredients} instructions={props.instructions} />
        </div>
    )
}

export default connect()(RecipeItem);