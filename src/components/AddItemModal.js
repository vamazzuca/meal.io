import React from 'react'
import ReactDOM from 'react-dom'
import { TextField } from '@mui/material'

export default function AddItemModal({ open, children, onClose }) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div className='item-modal'>
                <button onClick={onClose}>Close</button>
                {children}
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <div className='bottomButtons'>
                    <button>Submit Meal Item</button>
                    <button>Select from Recipes</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
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