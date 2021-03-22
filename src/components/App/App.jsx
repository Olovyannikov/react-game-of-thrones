import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../Header';
import RandomChar from '../RandomChar';
import ErrorMessage from '../ErrorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import styled from "styled-components";

const AppContainer = styled.section``;

const buttonStyle = {
    padding: '12px',
    backgroundColor: '#1e2edb',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    marginBottom: '40px',
    outline: 'none',
    boxShadow: '0 0 30px rgba(256,256,256,.1)',
    cursor: 'pointer'
}

export default class App extends Component {

    state = {
        showRandomChar: true,
        error: false,
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

    render() {
        const char = this.state.showRandomChar ? <RandomChar interval={15000}/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <AppContainer>
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <Button
                                    color='primary'
                                    style={buttonStyle}
                                    onClick={this.toggleRandomChar}>Toggle random character
                                </Button>
                            </Col>
                        </Row>
                        <Route path='/' component={() => <h1>Welcome to GOT DB</h1>} exact/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' component={BooksPage} exact/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                            return <BooksItem bookId={id}/>
                        }}/>
                    </Container>
                </AppContainer>
            </Router>
        )
    }
};
