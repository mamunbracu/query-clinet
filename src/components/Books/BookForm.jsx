

import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner"

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = (data) => {
    onFormSubmit(data)
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <label className="form-label mb-3" htmlFor="name">Name</label>
    <input className="form-control mb-3"  {...register("name")} id="name" name="name" type="text"  />

    <label className="form-label mb-3" htmlFor="author">Author</label>
    <input className="form-control mb-3"  {...register("author",)} id="author" name="author" type="text" />

    <label className="form-label mb-3" htmlFor="description">Description</label>
    <input className="form-control mb-3"  {...register("description")} id="description" name="description" type="text"  />
      <Button variant="primary" type="submit">
        { isLoading ? <Loader type="ThreeDots" color="tomato" height={10} /> : "Submit" }
      </Button>
    </form>
  );
};
