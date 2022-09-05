import { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { GlobalStyle } from "./GlobalStyles";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import { fetchImages } from "services/api";

export const App = () => {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isRendered, setisRendered] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = (query) => {
    if(query !== '') {
      setImages([])
      setQuery(query)
      setPage(1)
      setIsLoading(true)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = fetchImages(query, page)
        let images = (await response).data.hits
        let filteredImages = images.map((image) => {
          return (({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL }))(image)
        })
        if(query !== '') {
          setImages(prevState => 
            [...prevState, ...filteredImages] 
          )
          setIsLoading(false)
        if((await response).data.totalHits < 12) {
          setisRendered(false)
        } else {
          setisRendered(true)
        }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData().catch(console.error);
  }, [page, query]);
    
  const onLoadMore = () => {
    setIsLoading(true)
    setPage(page => page + 1)
  }

  const onModalOpen = (id) => {
    const filteredImage = images.filter(image => String(image.id).includes(String(id)));
    setIsModalOpened(true)
    setSelectedImageUrl(filteredImage[0].largeImageURL)
  }

  const onModalClose = () => {
    setIsModalOpened(isModalOpened => !isModalOpened)
  }

  return (
    <>
      <Searchbar onSubmit={formSubmitHandler}/>
      {isRendered && <ImageGallery images={images} onClick={onModalOpen} />}
      {isLoading && <Loader />}
      {isRendered && <Button onClick={onLoadMore} />}
      {isModalOpened && <Modal imageUrl={selectedImageUrl} onClose={onModalClose} />}
      <GlobalStyle />
    </>
  );
  
};
