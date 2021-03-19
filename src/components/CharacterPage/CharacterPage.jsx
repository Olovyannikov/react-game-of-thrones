import {Component} from "react/cjs/react.production.min";
import {Col, Row} from "reactstrap";
import ItemList from "../ItemList/ItemList";
import CharDetails from "../CharDetails/CharDetails";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default class CharacterPage extends Component{

    state = {
        selectedChar: null,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {

        return (
            <Row>
                {this.state.error ? <ErrorMessage/> :
                    <>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </>
                }

            </Row>
        )
    }

}