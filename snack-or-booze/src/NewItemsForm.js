import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import React, { useState } from "react";
import Utility from "./utility";

const INITIAL_STATE = {
  id: "",
  name: "",
  description: "",
  recipe: "",
  serve: "",
};

// user can add new item in drinks and snacks
function AddNewItems({ add }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Utility.createId(formData.name);
    formData.id = id;
    add({ ...formData }, category);
    setFormData(INITIAL_STATE);
    setCategory("");
  };

  return (
    <section className="col-md-4">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            required
            type="textarea"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input
            required
            type="text"
            name="recipe"
            id="recipe"
            placeholder="Recipe"
            onChange={handleChange}
            value={formData.recipe}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input
            required
            type="text"
            name="serve"
            id="serve"
            placeholder="Serve"
            onChange={handleChange}
            value={formData.serve}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            required
            type="select"
            name="category"
            id="category"
            onChange={handleCategoryChange}
          >
            <option value=""></option>
            <option value="drinks">Drinks</option>
            <option value="snacks">Snacks</option>
          </Input>
        </FormGroup>
        <Button color="success">Add</Button>
      </Form>
    </section>
  );
}

export default AddNewItems;
