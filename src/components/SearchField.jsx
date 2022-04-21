import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

function SearchField(props) {
    const {searchInput, setSearchInput} = props;

    return (
        <Container>
            <Row className="p-4 justify-content-center">
            <Col className="col-auto">
                <input 
                    type="search" 
                    onChange={(e) => setSearchInput(e.target.value)} 
                    value={searchInput}
                    className="form-control"
                />
            </Col>
            <Col className="col-auto">
                <Button variant="light" onClick={() => setSearchInput("")}>Reset</Button>
            </Col>
            </Row>
        </Container>
    );
}

export default SearchField;