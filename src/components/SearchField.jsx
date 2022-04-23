import React from 'react';
import { Row, Col, Button, Container, Dropdown } from 'react-bootstrap';
import { Funnel, SortAlphaDown, SortAlphaUp } from 'react-bootstrap-icons';

function SearchField(props) {
    const {
        searchInput, 
        setSearchInput, 
        filterBy, 
        handleFilter, 
        sortBy, 
        handleSort,
        toggleAddModal
    } = props;

    return (
        <Container>
            <Row>
                <Col>
                    <Row className="pt-4 m-2 justify-content-start">
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
                        <Col className="col-auto">
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
                        <Col className="col-auto">
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
                </Col>
                <Col className="col-auto m-2 p-4">
                    <Button variant="success" onClick={toggleAddModal}>Add Employee</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchField;