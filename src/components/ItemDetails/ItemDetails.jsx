import React, {Component} from 'react';
import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";

const Term = styled.span`
  font-weight: bold;
`

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {
    Field, Term
};

const ItemDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;

  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectError = styled.span`
  color: #fff;
  text-align: center;
  font-size: 26px;
`;

export default class ItemDetails extends Component {


    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if (!this.state.item) {
            return <SelectError>Please select item in the list</SelectError>
        }
        const {item} = this.state;
        const {name} = item;

        return (
            <ItemDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ListGroup flush>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ListGroup>
            </ItemDetailsBlock>
        );
    }
}