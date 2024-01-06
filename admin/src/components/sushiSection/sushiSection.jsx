import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/sushi/selectors";
import ShowEditList from "./ShowEditList";
import AddSection from "../addSection/AddSection";

export default function SushiSection() {
  const list = useSelector(selectItems);

  return (
    <div>
      <AddSection />
      <section>
        {list.map(({ _id, name, text, price, img }) => (
          <ShowEditList
            key={_id}
            id={_id}
            name={name}
            text={text}
            price={price}
            img={img}
          />
        ))}
      </section>
    </div>
  );
}
