import { Component } from "react"
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';
import { Overlay, ImageWrapper } from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)

    }

    handleKeyDown = (e) => {
        if(e.code === 'Escape') {
            this.props.onClose()
        }
    }

    render() {
        return createPortal(
            <Overlay onClick={this.props.onClose}>
                <div>
                    <ImageWrapper src={this.props.imageUrl} alt="" />
                </div>
            </Overlay>, 
            modalRoot
        )
    }
    
}