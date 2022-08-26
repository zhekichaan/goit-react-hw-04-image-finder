import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import axios from "axios";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { GlobalStyle } from "./GlobalStyles";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

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
      query: query,
      page: 1,
      isLoading: true,
    })
    axios.get(`https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=29465643-fffbf5866313856146df4112d&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
      if(res.data.totalHits !== 0) {
        const images = res.data.hits
          this.setState({
            images: images,
            isRendered: true,
            page: this.state.page + 1,
            isLoading: false,
          })
        }
    })
  }

  onLoadMore = () => {
    this.setState({
      isLoading: true,
    })
    axios.get(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=29465643-fffbf5866313856146df4112d&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
      this.setState(prevState => ({
        images: [...prevState.images, ...res.data.hits],
        page: this.state.page + 1,
            isLoading: false,
      }))
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
        <ImageGallery images={this.state.images} onClick={this.onModalOpen} />
        {this.state.isLoading && <Loader />}
        {this.state.isRendered && <Button onClick={this.onLoadMore} />}
        {this.state.isModalOpened && <Modal imageUrl={this.state.selectedImageUrl} onClose={this.onModalClose} />}
        <GlobalStyle />
      </>
    );
  }
};
