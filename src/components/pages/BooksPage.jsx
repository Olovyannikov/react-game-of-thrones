import React, {Component} from 'react';
import ItemList from '../ItemList';
import ErrorMessage from '../ErrorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';

export class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
            onItemSelected={(itemId) => {
                this.props.history.push(itemId)
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
    }
}
export default withRouter(BooksPage);