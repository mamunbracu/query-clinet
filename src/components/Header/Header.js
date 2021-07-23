import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<Fragment>
			<Navbar bg="dark" variant="dark">
				<Container>
					<LinkContainer to="/book">
						<Navbar.Brand>Navbar</Navbar.Brand>
					</LinkContainer>
					<Nav className="me-auto">
						<LinkContainer to="/book">
							<Nav.Link>Book</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/create-book">
							<Nav.Link> + Add Book</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default Header;
