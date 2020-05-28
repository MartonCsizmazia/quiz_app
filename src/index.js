import React, {Component} from "react";
import ReactDom from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./assets/QuestionBox";

class  Quiz extends Component{
    state = {
        questionBank: [],
        score: 0,
        responses:0
    };
    getQuestions = () =>{
        quizService().then(question => {
            this.setState({
              questionBank: question
            });
        });
    };
    computeAnswer = (answer, correctAnswer) =>{
        if (answer === correctAnswer){
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses
        })
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>
                {this.state.questionBank.length > 0 && this.state.questionBank.map(
                    ({question, answers, correct, questionId}) => (
                        <QuestionBox
                            question={question}
                            options={answers}
                            key={questionId}
                            selected={answer => this.computeAnswer(answer, correct)}
                        />
                    )
                )}
            </div>
        );
    }
}

ReactDom.render(<Quiz/>, document.getElementById("root"));