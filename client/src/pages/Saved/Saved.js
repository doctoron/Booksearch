import React from "react";
import ResultsContainer from "../../components/ResultsContainer";
import API from "../../utils/API";
import "../Saved/Saved.css"

class Saved extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount () {
        API.getAllBooks().then(
            (response) => {
                this.setState({ savedBooks: response.data }, 
                    ()=>console.log(this.state.savedBooks));
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render () {
        console.log(this.state.savedBooks);
        return (
            <main>
                <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path} />
            </main>
        );
    }
}

export default Saved;