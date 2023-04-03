import React from 'react'
import { useState } from "react"
import ReactDOM from 'react-dom'
import { TextField } from '@mui/material'
import { connect } from "react-redux";
import { addMealItem } from '../actions';

function AddItemModal(props) {
    const [inputState, setInputState] = useState("");


    if (!props.open) { 
        return null
    } 

    
    const handleAddItem = () => {
        const { dispatch } = props
        const text = inputState;
        if (text) {
            dispatch(addMealItem(text, props.day, props.mealName,))
            setInputState("")
            props.onClose();
        }

        return;
    };

    const handleChange = (e) => {
        setInputState(e.target.value)
    }

    const handleClose = (e) => {
        handleChange(e);
        props.onClose();
    }

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div className='item-modal'>
                <button onClick={props.onClose}>Close</button>
                {props.children}
                <TextField type="text" id="outlined-basic" label="Name" variant="outlined" value={inputState.textVal} onChange={handleChange} />
                <div className='bottomButtons'>
                    <button onMouseDown={handleAddItem}>Submit Meal Item</button>
                    <button>Select from Recipes</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default connect()(AddItemModal);



const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}