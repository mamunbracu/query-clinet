import React from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { getSingleBook } from "../bookApi";
import SpinNow from "../Preloader/SpinNow/SpinNow";
const BookItem = () => {
	const { id } = useParams();
	const history = useHistory();
	const { data, error, isLoading, isError } = useQuery(
		["book", { id }],
		getSingleBook
	);
	console.log(data);
	if (isLoading) {
		return (
			<Container>
				<Row>
					<Col className="d-flex justify-content-center align-items-center">
						<SpinNow />
					</Col>
				</Row>
			</Container>
		);
	}

	if (isError) {
		return (
			<Container>
				<Row>
					<Col className="d-flex justify-content-center align-items-center">
						<span>Error: {error.message}</span>
					</Col>
				</Row>
			</Container>
		);
	}
	return (
		<Container className="py-5 mt-5">
			<Row>
				<Col md={2}></Col>
				<Col md={8}>
					<Card style={{ width: "18rem" }}>
						<ListGroup variant="flush">
							<ListGroup.Item>{data.result.book.name}</ListGroup.Item>
							<ListGroup.Item>{data.result.book.author}</ListGroup.Item>
							<ListGroup.Item>{data.result.book.description}</ListGroup.Item>
						</ListGroup>
						<Button
							onClick={() => history.push(`/book/update/${data.result.book._id}`)}
							variant="primary"
							className=" ml-auto"
						>
							Update
						</Button>
					</Card>
				</Col>
				<Col md={2}></Col>
			</Row>
		</Container>
	);
};

export default BookItem;
