import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { connect } from "react-redux";
import { deleteMealItem } from '../actions';

function RecipeItem(props) {

    const handleDeleteItem = () => {
        const { dispatch } = props

        dispatch(deleteMealItem(props.listID))
    }

    return (
        <div className="recipeItem">
            <h1>{props.name}</h1>
            <IconButton onClick={handleDeleteItem}>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </div>
    )
}

export default connect()(RecipeItem);