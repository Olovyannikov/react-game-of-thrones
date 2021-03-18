import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Component} from "react";
import GotService from "../../services/GotService.service";

const CharBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25em;

  h4 {
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
  }
`;

const Term = styled.span`
  font-weight: bold;
`;

styled(ListGroupItem)`
  display: flex;
  justify-content: space-between;
  
`

export default class RandomChar extends Component {

    constructor(props) {
        super(props);
        this.updateChar();
    }

    GotService = new GotService();

    state = {
        char: {}
    }

    onCharLoaded = (char) => this.setState({char});

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 1);
        this.GotService.getCharacter(id)
            .then(this.onCharLoaded);
    }

    render() {

        const {char: {name, gender, born, died, culture}} = this.state;

        return (
            <CharBlock>
                <h4>Random Character: {name}</h4>
                <ListGroup flush>
                    <ListGroupItem className='d-flex justify-content-between'>
                        <Term>Gender </Term>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className='d-flex justify-content-between'>
                        <Term>Born </Term>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className='d-flex justify-content-between'>
                        <Term>Died </Term>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className='d-flex justify-content-between'>
                        <Term>Culture </Term>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </CharBlock>
        );
    }
}

export {Term};