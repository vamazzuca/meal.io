import ReactDOM from 'react-dom'
import { IconButton } from '@mui/material'
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import { useState } from 'react';
import Textarea from 'react-textarea-autosize'

export default function EditItemModal(props) {

    const [formOpen, setFormOpen] = useState(false)

    const openForm = () => {
        setFormOpen(true)
    }
    

    if (!props.open) { 
        return null
    }


    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div className='edit-item-modal'>
                <div className='edit-header'>
                    <div className='edit-exit'>
                        <IconButton onMouseUp={props.onClose}>
                            <DisabledByDefaultOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </div>
                    <h1>Title</h1>
                    <div className='title-edit-modal'>

                    </div>
                </div>

                <div className='edit-body'>
                    <h1>Description</h1>
                    <div className='edit-text-box'>
                     
            
                        
                    </div>

                    <h1>Ingredients</h1>
                    <div className='edit-text-box'>
                        

                    </div>

                    <h1>Instructions</h1>
                    <div className='edit-text-box'>
                        
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}


function TextBox() {
    
    

    return (
        <div>
            <Textarea />
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