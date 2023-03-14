import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";

export  class Story extends Component {
    constructor (by, time, title, score, id, kids, url){
        super();
        this.by = by;
        this.time = time;
        this.title = title;
        this.score = score;
        this.id = id;
        this.kids = kids; 
    }
    render() {
        
        return (
            <Story>
            <div className="row">{this.title} {this.url}</div>
            <div className="row">
                <div className="col-2"> <span class="bi bi-heart"></span>{this.score} points</div>
                <div className="col-2"> <span class='bi bi-file-person-fill'></span>{this.by}</div>
                <div className="col-2"> {this.time}</div>
                <div className="col-2"> {this.kids.length}</div>
            </div>
            </Story> 
        )
        
    }
} 