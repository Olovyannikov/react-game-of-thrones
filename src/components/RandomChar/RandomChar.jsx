import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Component} from "react";
import GotService from "../../services/GotService.service";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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

export default class RandomChar extends Component {

    constructor(props) {
        super(props);
    }

    GotService = new GotService();

    state = {
        char: {},
        loading: true
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => this.setState(
        {
            char,
            loading: false,
            error: false
        });

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        let id = Math.floor(Math.random() * 140 + 25); // 140 - общее количество записей, 25 - с какой записи начиаем
        this.GotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char: {name, gender, born, died, culture}, loading, error} = this.state;

        return (
            <CharBlock>
                {loading ?
                    <Spinner/> :
                    !error ?
                        <>
                            <h4>Random Character: {name}</h4>
                            <ListGroup flush>
                                <ListGroupItem className='d-flex justify-content-between'>
                                    <Term>Gender </Term>
                                    <span>{gender || 'Not Allowed'}</span>
                                </ListGroupItem>
                                <ListGroupItem className='d-flex justify-content-between'>
                                    <Term>Born </Term>
                                    <span>{born || 'Not Allowed'}</span>
                                </ListGroupItem>
                                <ListGroupItem className='d-flex justify-content-between'>
                                    <Term>Died </Term>
                                    <span>{died || 'Not Allowed'}</span>
                                </ListGroupItem>
                                <ListGroupItem className='d-flex justify-content-between'>
                                    <Term>Culture </Term>
                                    <span>{culture || 'Not Allowed'}</span>
                                </ListGroupItem>
                            </ListGroup>
                        </> : <ErrorMessage/>}
            </CharBlock>
        );
    }
}

export {Term};