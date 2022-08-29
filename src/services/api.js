import axios from "axios";

export const fetchImages = async (query, page) => {
    const response = axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=29465643-fffbf5866313856146df4112d&image_type=photo&orientation=horizontal&per_page=12`)
    return response;
}