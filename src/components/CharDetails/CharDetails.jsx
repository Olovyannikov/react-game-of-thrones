import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Term} from "../RandomChar/RandomChar";
import {Component} from "react";
import GotService from "../../services/GotService.service";

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;

  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

// const SelectError = styled.div`
//   color: #fff;
//   text-align: center;
//   font-size: 26px;
// `;

styled(ListGroupItem)`
  display: flex !important;
  justify-content: space-between;
`;

export default class CharDetails extends Component {

    GotService = new GotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.GotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char
                })
            })
    }

    render() {

        if (!this.state.char) {
            return <span style={{color: '#fff', fontSize: '20px'}}>Please select a char</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <CharDetailsBlock className="rounded">
                <h4>{name || 'no data :('}</h4>
                <ListGroup flush>
                    <ListGroupItem className='d-flex justify-content-between'>
                        <Term>Gender</Term>
                        <span>{gender || 'no data :('}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Born</Term>
                        <span>{born || 'no data :('}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Died</Term>
                        <span>{died || 'no data :('}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Culture</Term>
                        <span>{culture || 'no data :('}</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsBlock>
        );
    }
}