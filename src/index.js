import React, {Component} from "react";
import ReactDom from "react-dom";
import "./assets/style.css";

class  Quiz extends Component{
    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>

            </div>
        );
    }

}


ReactDom.render(<Quiz/>, document.getElementById("root"));
