import { Component } from "react";


export class Header extends Component {
    render() {
        const text = 'React Users';
        return <h1 style={{backgroundColor:"rgb(228, 119, 119)", color:"white", textAlign:"center"}}>{text}</h1>;
}}

export class Footer extends Component{
    render (){
        const text = '@Copyright by BitStudent: Jelena ';
        return <h2 style={{backgroundColor:"rgb(228, 119, 119)", color:"white", textAlign:"center"}}>{text}</h2>;  
    }
}