import React from 'react'
import ReactDOM from 'react-dom'
import { TextField } from '@mui/material'

export default function AddItemModal({ open, children, onClose }) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close</button>
                {children}
                <TextField id="outlined-basic" label="Name" variant="outlined" />
            </div>
        </>,
        document.getElementById('portal')
    )
}

const MODAL_STYLES = {
    position: "fixed",
    top: '50%',
    left: '50%',
    transform: 'translate(-20%, -70%)',
    backgroundColor: '#FFF',
    padding: '50px',
    width: '25rem',
    height: '15rem',
    borderRadius: '1rem',
    zIndex: 1000
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