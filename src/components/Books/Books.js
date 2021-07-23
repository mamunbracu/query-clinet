import React, { useState } from "react";
import { Button, Card, Col, Container, FormControl, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { getAllBooks, removeBook } from "../bookApi";
import SpinNow from "../Preloader/SpinNow/SpinNow";
import { useMutation, useQueryClient } from "react-query";
const Books = () => {
  const [search, setSearch] = useState("")
	const { data, error, isLoading, isError } = useQuery("books", getAllBooks);
	console.log(search);
const history = useHistory()

const queryClient = useQueryClient()
const { mutateAsync, isLoading:isMutating } = useMutation(removeBook)

const remove = async (id) => {
  await mutateAsync(id)
  queryClient.invalidateQueries('books')
}

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
		<div>
			<Container className="mt-5 pb-5">
      <Row>
        <Col> 
        <div className="d-flex justify-content-center align-items-center mb-5">
        <FormControl
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />

        </div>
      </Col>
      </Row>
				<Row>
        
        {data.data?.map(item => (
					<Col key={item._id} md={4} sm={6}>
						<Card className="mr-3 mb-4">
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									{item.author}
								</Card.Subtitle>
								<Card.Text>
								{item.description}
								</Card.Text>
								<Button onClick={() =>remove(item._id)} variant="primary" style={{ marginRight: "10px" }}>
                { isMutating ? <Loader type="ThreeDots" color="red" height={10} /> : "Remove" }
								</Button>
								<Button  onClick={() => history.push(`/book/${item._id}`)} variant="primary" className=" ml-auto">
									Details
								</Button>
							</Card.Body>
						</Card>
					</Col>

        ))}
				</Row>
			</Container>
		</div>
	);
};

export default Books;
