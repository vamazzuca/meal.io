import { connect } from "react-redux";
import { IconButton } from '@mui/material'
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import ReactDOM from 'react-dom'
import { addCount, addMealItem } from '../actions';

function SelectRecipeModal(props) {
    
    const { lists } = props;

    if (!props.open) { 
        return null
    }

    const exitModal = e => {
        props.onClose();
    }

    const { dispatch } = props

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div className='select-recipe-modal'>
                <div className='select-header'>
                    <div className='select-exit'>
                        <IconButton onMouseUp={exitModal}>
                            <DisabledByDefaultOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </div>
                    <h1>Recipes</h1>
                </div>

                <div className="select-body">
                    {lists.map(list => (list.isInRecipeList === true
                        ? <SelectRecipe
                            recipeName={list.name}
                            key={list.id}
                            exit={exitModal}
                            dispatch={dispatch}
                            day={props.day}
                            mealName={props.mealName}
                            description={list.description}
                            ingredients={list.ingredients}
                            instructions={list.instructions} />
                        : null))}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

function SelectRecipe(props) {

    const handleAddItem = () => {
        props.exit();
        props.dispatch(addMealItem(props.recipeName, props.day, props.mealName, props.description, props.ingredients, props.instructions, false));
        props.dispatch(addCount(props.mealName, props.day, 1))
    }

    return (
        <div className="recipeItemList" onClick={handleAddItem}>
            <h1>{props.recipeName}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(SelectRecipeModal);


const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}