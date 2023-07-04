import React, { Component } from "react";
import Login from './Auth/Login'

class HomeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            books:[]
        }
    }

    componentDidMount(){
        console.log("mounted :");
        
    }

    render(){
        return (
            <div className="text-center">
               Home Component
            </div>
        )
    }
}
export default HomeComponent