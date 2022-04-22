import React from 'react';
import { Row, Col, Button, Container, Dropdown } from 'react-bootstrap';
import { Funnel, SortAlphaDown, SortAlphaUp } from 'react-bootstrap-icons';

function SearchField(props) {
    const {searchInput, setSearchInput, filterBy, handleFilter, sortBy, handleSort} = props;

    return (
        <Container>
            <Row className="p-4 m-2 justify-content-center">
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
            <Col>
                <Dropdown onSelect={handleFilter}>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <Funnel /> {filterBy}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Name">Name</Dropdown.Item>
                        <Dropdown.Item eventKey="Company">Company</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col>
                <Button variant={sortBy === "" ? "light" : "secondary"} onClick={handleSort}>
                    {
                        sortBy === "up" ?
                            <SortAlphaUp></SortAlphaUp>
                        :
                            <SortAlphaDown></SortAlphaDown>
                    }
                </Button>
            </Col>
            </Row>
        </Container>
    );
}

export default SearchField;