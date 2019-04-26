import React from 'react';
import SearchForm from '../SearchForm';
import BookDetails from '../BookDetails';
import API from '../../utils/API';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        e.preventDefault();
        this.setState({ bookInput: e.target.value })
    }

    handleSearchClick (e) {
        e.preventDefault();
        API.getBook(this.state.bookInput)
            .then(
                (response) => {
                    console.log(response.data)
                    this.setState({ bookData: response.data });
                    this.setState({ bookInput: "" });
                }
            )
            .catch(err=> 
                console.log(err))

    }

    render () {
        console.log(this.state);
        return (
            <main>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0) ?
                    <BookDetails bookData={this.state.bookData} path={this.props.match.path} /> : null
                }
            </main>
        );
    }
}

export default Search;