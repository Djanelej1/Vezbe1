import { Component } from "react";


export class Header extends Component {
    render() {
        const text = 'Hacker news';
        return <h1 style={{color:"white", backgroundColor:"red", textAlign:"center"}}>{text}</h1>;
}}