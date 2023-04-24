import ReactDOM from 'react-dom'
import { IconButton } from '@mui/material'
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import { useState } from 'react';
import Textarea from 'react-textarea-autosize'
import React from 'react'
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import { editMealTitle, editMealDescription, editMealInstructions, editMealIngredients } from '../actions';

function EditItemModal(props) {

    const [formOpen, setFormOpen] = useState(false)
    const [saveState, setSaveState] = useState(props.name)

    const { dispatch } = props

    const openForm = () => {
        setFormOpen(true)
    }
    
    const handleEditItem = (e) => {
        const text = saveState;
        if (text) {
            dispatch(editMealTitle(props.listID, text))
            closeForm(e)
        }

        return;
    };

    const closeForm = e => {
        setFormOpen(false)
    }

    if (!props.open) { 
        return null
    }

    const exitModal = e => {
        closeForm(e);
        props.onClose();
    }

    

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div className='edit-item-modal'>
                <div className='edit-header'>
                    <div className='edit-exit'>
                        <IconButton onMouseUp={exitModal}>
                            <DisabledByDefaultOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </div>
                    <h1>Title</h1>
                    <div className='title-edit-modal' onClick={openForm}>
                        {formOpen === false ? props.name : <TextBox text={props.name} closeForm={closeForm} handleChangeSave={setSaveState}/>}
                    </div>
                    <div>
                        {formOpen === true ? <Button variant="contained" onClick={handleEditItem}>Save</Button>: null}
                        {formOpen === true ? <IconButton onMouseUp={closeForm}><ClearIcon fontSize={"large"} /></IconButton> : null}
                    </div>
                </div>

                <div className='edit-body'>

                    <EditBody title={"Description"} text={props.description} listID={props.listID} dispatch={dispatch} />

                    <EditBody title={"Ingredients"} text={props.ingredients} listID={props.listID} dispatch={dispatch} />

                    <EditBody title={"Instructions"} text={props.instructions} listID={props.listID} dispatch={dispatch} />

                    
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

function EditBody(props) {
    const [formOpen, setFormOpen] = useState(false)
    const [saveState, setSaveState] = useState(props.text)

    const openForm = () => {
        setFormOpen(true)
    }
    

    const closeForm = e => {
        setFormOpen(false)
    }

    const handleEditItem = (e) => {
        const text = saveState;
        
        if (props.title === "Description") {
            props.dispatch(editMealDescription(props.listID, text))
        } else if (props.title === "Ingredients") {
            props.dispatch(editMealIngredients(props.listID, text))
        } else if (props.title === "Instructions") {
            props.dispatch(editMealInstructions(props.listID, text))
        }
        
        closeForm(e)
        

        return;
    };


    return (
        <div>
            <h1>{props.title}</h1>
            <div className='edit-text-box' onClick={openForm}>
                {formOpen === false ? props.text : <TextBox text={props.text} closeForm={closeForm} handleChangeSave={setSaveState} />}
            </div>


            <div>
                {formOpen === true ? <Button variant="contained" onClick={handleEditItem}>Save</Button> : null}
                {formOpen === true ? <IconButton onMouseUp={closeForm}><ClearIcon fontSize="large" /></IconButton> : null}
            </div>
        </div>
)}

function TextBox(props) {
    
    const [textState, setTextState] = useState(props.text);
    

    const handleChange = (e) => {
        setTextState(e.target.value)
        props.handleChangeSave(e.target.value)
    }

    

    return (
        <div>
            <Textarea
                type="text"
                autoFocus
                value={textState}
                onChange={handleChange}
                style={{
                    resize: "none",
                    width: "100%",
                    outline: "none",
                    border: "none",
                    fontSize: "22px",
                    overflow: "hidden",
                    background: "rgb(175, 171, 171)",
                    fontFamily: "Roboto"
                }} />
        </div>
    )
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

export default connect()(EditItemModal);