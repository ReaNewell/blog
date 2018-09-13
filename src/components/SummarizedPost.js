import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class SummarizedPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            month: ""
        }
    } 
    componentDidMount() {
        // Selects this the body element of this component and assign the HTML value of the post to that element.
        // const body = ReactDOM.findDOMNode(this).getElementsByClassName('summarized-post__body')[0];
        // body.innerHTML = this.state.html;

        let month;
        switch (this.props.date.month) {
            case 0:
                month = "January";
                break;
            case 1:
                month = "February";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
            default:
                break;
        }
        this.setState(() => ({ month }));

    }
    render() {
        return (
                <Link to={`/posts/${this.props.title.replace(" ", "-")}`}>
                    <div className="summarized-post" >
                        { this.props.imagePath && <img className="summarized-post__image" src={this.props.imagePath} alt={this.props.imageName}/>}
                        <h2 className="summarized-post__title">{this.props.title}</h2>
                        <p className="summarized-post__date">{this.state.month + " "}{this.props.date.day},{" " + this.props.date.year}</p>
                    </div>
                </Link>
        )
    }
}

export default SummarizedPost;