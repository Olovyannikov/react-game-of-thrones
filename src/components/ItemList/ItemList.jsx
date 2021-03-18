import {Component} from "react/cjs/react.production.min";
import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";

styled(ListGroupItem)`
  cursor: pointer
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem >
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}