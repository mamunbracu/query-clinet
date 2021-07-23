


export const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/book/getAll`);

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }
  
  return response.json();
};

export const getSingleBook = async ({ queryKey }) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/book/getSingle?_id=${id}`);

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};


export const createBook = async ({ ...data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/book/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};


export const updateBook = async ({ id, ...data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/book/edit`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:data._id,
        name:data.name,
        author:data.author,
        description:data.description,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};


export const removeBook = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/book/delete?_id=${id}`,
    {
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};