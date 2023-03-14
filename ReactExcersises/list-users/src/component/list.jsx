
import { Component } from "react";


export class Header extends Component {
    render() {
        const text = 'React Users';
        return <h1>{text}</h1>;
}}

export class Footer extends Component{
    render (){
        const text = '@Copyright by Jelena ';
        return <h2>{text}</h2>;  
    }
}

