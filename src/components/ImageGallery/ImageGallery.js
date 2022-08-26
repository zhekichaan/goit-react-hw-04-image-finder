import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import styled from "styled-components"

export const ImageGallery = ({ images, onClick }) => {
    return(
        <ImageGalleryList>
            {images.map(image => {
                return <ImageGalleryItem key={image.id} id={image.id} imgUrl={image.webformatURL} onClick={onClick} />
            })}
        </ImageGalleryList>
    )
}

const ImageGalleryList = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 5px;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`