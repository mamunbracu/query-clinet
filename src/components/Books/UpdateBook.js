import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BookForm } from './BookForm'
import { useQuery, useMutation } from "react-query";
import { useParams, useHistory } from "react-router-dom"
import { getSingleBook, updateBook } from '../bookApi';
import SpinNow from '../Preloader/SpinNow/SpinNow';
const UpdateBook = () => {

  const { id } = useParams()
  const history = useHistory()
  const { data, error, isLoading, isError } = useQuery(["book", { id }], getSingleBook);
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook)
  console.log(data);

  const onFormSubmit = async (data) => {
    await mutateAsync({...data, id})
    history.push("/book")
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
    <Container className="mt-5 py-5">
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <h2>Update Book</h2>
          <BookForm defaultValues={data.result.book} onFormSubmit={onFormSubmit} isLoading={isMutating} />
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  )
}

export default UpdateBook
