import React from "react";
import BookService from "../services/BookService";

class ListBookComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            books:[],
        }     
    }

    componentDidMount(){
        BookService.getBooksList().then((res)=>{
            const booksList = res.data.entries.slice(0, 10);
            this.setState({books:booksList});
            
        })
    }

    render(){
         return (
            <div>
                 <h2 className="text-center">Books List</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button> */}
                 </div>
                 <br></br>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Book Title</th>
                                    <th> Author</th>
                                    <th> Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                   this.state.books.map((book,index) => {
                                        return (<tr key = {index}>
                                             <td> { book.title} </td>   
                                             <td> { book.Auth} </td>   
                                             <td> {book.Description}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(book.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(book.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(book.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>)
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}
export default ListBookComponent