import { nanoid } from "@reduxjs/toolkit";
import React from "react";

export default function FormAdd({
  handleChange,
  handleSubmit,
  name,
  text,
  price,
  img,
}) {
  const id = nanoid();
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>Name</label>
      <input
        type="text"
        name="name"
        minLength="3"
        maxLength="16"
        id={id}
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
        required
      />
      <label htmlFor={id}>Text</label>
      <input
        type="text"
        name="text"
        id={id}
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
        required
      />
      <label htmlFor={id}>Price</label>
      <input
        type="number"
        name="price"
        id={id}
        value={price}
        onChange={handleChange}
        placeholder="Enter price"
        required
      />
      <label htmlFor={id}>Image</label>
      <input
        type="text"
        name="img"
        id={id}
        value={img}
        onChange={handleChange}
        placeholder="Enter image link"
        required
      />
      <button type="submit">+</button>
    </form>
  );
}
