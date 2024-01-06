import React from "react";
import FormAdd from "./FormAdd";
import { useDispatch, useSelector } from "react-redux";
import {
  setImg,
  setName,
  setPrice,
  setText,
} from "../../redux/sushi/sushiSlice";
import { addSushi } from "../../redux/sushi/operations";
import {
  selectImg,
  selectItems,
  selectName,
  selectPrice,
  selectText,
} from "../../redux/sushi/selectors";

export default function AddSection() {
  const name = useSelector(selectName);
  const text = useSelector(selectText);
  const price = useSelector(selectPrice);
  const img = useSelector(selectImg);
  const list = useSelector(selectItems);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        dispatch(setName(value));
        break;

      case "text":
        dispatch(setText(value));
        break;

      case "price":
        dispatch(setPrice(value));
        break;

      case "img":
        dispatch(setImg(value));
        break;

      default:
        break;
    }
  };

  const addSushis = ({ name, text, price, img }) => {
    const isExit = list.find(
      (item) => item && item.name.toLowerCase() === name.toLowerCase()
    );

    if (isExit) {
      alert(`${name} is already in menu.`);
      return;
    }

    const newSushi = {
      name,
      text,
      price,
      img,
    };

    dispatch(addSushi(newSushi));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSushis({ name, text, price, img });
    setName("");
    setText("");
    setPrice("");
    setImg("");
  };

  return (
    <section>
      <FormAdd handleChange={handleChange} handleSubmit={handleSubmit} />
    </section>
  );
}
