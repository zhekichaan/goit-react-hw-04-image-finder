import { Component } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

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

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
`

const ImageWrapper = styled.img`
    max-width: 1200px;
    max-height: 900px;
    object-fit: contain;
`