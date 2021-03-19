import {Button, Col, Container, Row} from "reactstrap";

import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import CharacterPage from "../CharacterPage/CharacterPage";
import {Component} from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

    render() {
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            { this.state.error ? <ErrorMessage/> : this.state.showRandomChar ?
                                <RandomChar/> : null}
                        </Col>
                    </Row>

                    <Row style={{marginBottom: '40px'}}>
                        <Col lg={{size: 6, offset: 0}}>
                            <Button
                                onClick={this.toggleRandomChar}
                                size='lg'
                                color='primary'>Toggle Random Char</Button>
                        </Col>
                    </Row>

                    <CharacterPage/>
                    <CharacterPage/>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
}
