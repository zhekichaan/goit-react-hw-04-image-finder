import { GalleryItemWrapper } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({id, imgUrl, onClick }) => {
    return (
        <GalleryItemWrapper onClick={() => {onClick(id)}}><img src={imgUrl} alt="" /></GalleryItemWrapper>
    )
}

