import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Term} from "../RandomChar/RandomChar";
import {Component} from "react";

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
  display: flex!important;
  justify-content: space-between;
`;

export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsBlock className="rounded">
                <h4>John Snow</h4>
                <ListGroup flush>
                    <ListGroupItem  className='d-flex justify-content-between'>
                        <Term>Gender</Term>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Born</Term>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Died</Term>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Culture</Term>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsBlock>
        );
    }
}