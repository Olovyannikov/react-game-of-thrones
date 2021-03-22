import React, {Component} from 'react';
import Spinner from '../Spinner';
import {ListGroup, ListGroupItem} from "reactstrap";
import PropTypes from "prop-types";

export default class ItemList extends Component {

    state = {
        itemList: null
    }


    static defaultProps = {
        onItemSelected: () => {},
        getData: () => {}
    }

    static propTypes = {
        onItemSelected: PropTypes.func
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = this.props.renderItem(item);

            return (
                <ListGroupItem
                    key={id}
                    onClick={ () => this.props.onItemSelected(id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);


        return (
            <ListGroup className="item-list">
                {items}
            </ListGroup>
        );
    }
}