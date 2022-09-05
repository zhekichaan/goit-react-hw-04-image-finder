import { useEffect } from "react"
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';
import { Overlay, ImageWrapper } from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({imageUrl, onClose}) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        };
    });

    const handleKeyDown = (e) => {
        if(e.code === 'Escape') {
            onClose()
        }
    }

    return createPortal(
        <Overlay onClick={onClose}>
            <div>
                <ImageWrapper src={imageUrl} alt="" />
            </div>
        </Overlay>, 
        modalRoot
    )

    
}

Modal.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}