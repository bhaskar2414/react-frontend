import axios from "axios";


const BOOK_API_BASE_URL = "https://api.publicapis.org/entries"

class BookService{
    getBooksList(){
        return axios.get(BOOK_API_BASE_URL)
    }
}

export default new BookService()