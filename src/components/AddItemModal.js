import React from 'react'
import { useState } from "react"
import ReactDOM from 'react-dom'
import { TextField, IconButton } from '@mui/material'
import { connect } from "react-redux";
import { addMealItem } from '../actions';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import Button from '@mui/material/Button';


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

   
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div className='item-modal'>
                
                <div className='modal-header'>
                    <div className='exit-button'>
                        <IconButton onClick={props.onClose}>
                            <DisabledByDefaultOutlinedIcon />
                        </IconButton>
                    </div>
                    
                        {props.children}
                        
                </div>
                
                <TextField type="text" id="outlined-basic" label="Name" variant="outlined" value={inputState.textVal} onChange={handleChange} />
                <div className='bottom-buttons'>
                    <Button variant="contained" onMouseDown={handleAddItem}>Submit Meal Item</Button>
                    <Button variant="contained" onClick={props.onClose}>Select from Recipes</Button>
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