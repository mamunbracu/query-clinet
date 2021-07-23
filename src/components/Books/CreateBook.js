import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BookForm } from './BookForm'
import { useMutation } from "react-query"
import { createBook } from '../bookApi'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
const CreateBook = () => {
  const history = useHistory()
  const { mutateAsync, isLoading } = useMutation(createBook)
  const onFormSubmit = async (data) => {
    await mutateAsync({...data})
    toast.success("Book Added")
    setTimeout(() => {
      history.push("/book")

    }, 1200)
  }
  return (
    <Container className="mt-5 py-5">
      <Row>
        <Col md="2"></Col>
        <Col md="8">
        <ToastContainer />
        <h2>Create Book</h2>
          <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  )
}

export default CreateBook
