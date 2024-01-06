import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSushi, updateSushi } from "../../redux/sushi/operations";

export default function ShowEditList({ name, text, price, img, id }) {
  const [nameI, setNameI] = useState(name);
  const [textI, setTextI] = useState(text);
  const [priceI, setPriceI] = useState(price);
  const [imgI, setImgI] = useState(img);

  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setNameI(value);
        break;

      case "text":
        setTextI(value);
        break;

      case "price":
        setPriceI(value);
        break;

      case "img":
        setImgI(value);
        break;

      default:
        break;
    }
  };

  const toddleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const updateSushis = (e) => {
    e.preventDefault();
    const form = e.target;
    const newSushi = {
      name: nameI,
      text: textI,
      price: priceI,
      img: imgI,
      sushiId: id,
    };
    form.reset();

    dispatch(updateSushi(newSushi));
    toddleShowEdit();
  };

  const deleteSushis = (id) => {
    dispatch(deleteSushi(id));
  };

  return (
    <li>
      {showEdit ? (
        <form onSubmit={updateSushis}>
          <input
            type="text"
            name="name"
            required
            value={nameI}
            onChange={handleChange}
          />
          <input
            type="text"
            name="text"
            required
            value={textI}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            required
            value={priceI}
            onChange={handleChange}
          />
          <input
            type="img"
            name="img"
            required
            value={imgI}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h2>{nameI}</h2>
          <p>{textI}</p>
          <p>{priceI}</p>
          <p>{imgI}</p>
        </>
      )}

      <button type="button" onClick={() => toddleShowEdit()}>
        Edit
      </button>
      <button type="button" onClick={() => deleteSushis(id)}>
        Delete
      </button>
    </li>
  );
}
