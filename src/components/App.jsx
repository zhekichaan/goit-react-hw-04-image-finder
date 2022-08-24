import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import axios from "axios";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { GlobalStyle } from "./GlobalStyles";

export class App extends Component {
  state = {
    images: [],
    query: '',
    isRendered: false,
    page: 1
  }

  formSubmitHandler = (query) => {
    this.setState({
      query: query,
      page: 1
    })
    axios.get(`https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=29465643-fffbf5866313856146df4112d&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
      if(res.data.totalHits !== 0) {
        const images = res.data.hits
          this.setState({
            images: images,
            isRendered: true,
            page: this.state.page + 1
          })
        }
    })
  }

  onLoadMore = () => {
    axios.get(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=29465643-fffbf5866313856146df4112d&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
      this.setState(prevState => ({
        images: [...prevState.images, ...res.data.hits],
        page: this.state.page + 1
      }))
      window.scrollTo(0, document.body.scrollHeight);
    })
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler}/>
        <ImageGallery images={this.state.images} />
        {this.state.isRendered && <Button onClick={this.onLoadMore} />}
        <GlobalStyle />
      </>
    );
  }
};
