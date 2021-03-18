import {Col, Container, Row} from "reactstrap";

import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import ItemList from '../ItemList/ItemList';
import CharDetails from '../CharDetails/CharDetails';


const App = () => {
  return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              <RandomChar/>
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <ItemList />
            </Col>
            <Col md='6'>
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default App;
