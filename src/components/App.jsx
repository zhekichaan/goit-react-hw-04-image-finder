import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { GlobalStyle } from "./GlobalStyles";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import { fetchImages } from "services/api";

export class App extends Component {
  state = {
    images: [],
    query: '',
    isRendered: false,
    page: 1,
    isModalOpened: false,
    selectedImageUrl: '',
    isLoading: false,
  }

  formSubmitHandler = (query) => {
    this.setState({
      images: [],
      query: query,
      page: 1,
      isLoading: true,
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    try {
      let response = fetchImages(this.state.query, this.state.page)
      let images = (await response).data.hits
      let filteredImages = images.map((image) => {
        return (({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL }))(image)
      })
      if(this.state.query !== prevState.query || this.state.page !== prevState.page) {
        this.setState(prevState => ({
          images: [...prevState.images, ...filteredImages],
          isRendered: true,
          isLoading: false,
        }))
      } else if((await response).data.totalHits < 12) {
        this.setState({
          isRendered: false,
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  onLoadMore = () => {
    this.setState({
      isLoading: true,
      page: this.state.page + 1
    })
  }

  onModalOpen = (id) => {
    const filteredImage = this.state.images.filter(image => String(image.id).includes(String(id)));
    this.setState({
      isModalOpened: true,
      selectedImageUrl: filteredImage[0].largeImageURL
    })
  }

  onModalClose = () => {
    this.setState(({ isModalOpened }) => ({
      isModalOpened: !isModalOpened,
    }))
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler}/>
        {this.state.isRendered && <ImageGallery images={this.state.images} onClick={this.onModalOpen} />}
        {this.state.isLoading && <Loader />}
        {this.state.isRendered && <Button onClick={this.onLoadMore} />}
        {this.state.isModalOpened && <Modal imageUrl={this.state.selectedImageUrl} onClose={this.onModalClose} />}
        <GlobalStyle />
      </>
    );
  }
};
