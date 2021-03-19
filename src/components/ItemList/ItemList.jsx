import {Component} from "react/cjs/react.production.min";
import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";
import GotService from "../../services/GotService.service";
import Spinner from "../Spinner/Spinner";

styled(ListGroupItem)`
  cursor: pointer
`;

export default class ItemList extends Component {

    GotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.GotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                });
            });
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListGroupItem
                    key={i}
                    onClick={() => this.props.onCharSelected(41 + i)}
                >
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {

        const {charList} = this.state;

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);
        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}