import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "./redux/sushis/selectors";
import { useEffect } from "react";
import { fetchSushi } from "./redux/sushis/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSushi());
  }, [dispatch]);

  const sushis = useSelector(selectItems);
  console.log(sushis);

  return (
    <div className="App">
      <header>
        <h1>Йоу</h1>
      </header>
      <main>
        <ul>
          {sushis.map(({ name, _id, text, price, img }) => (
            <li key={_id}>
              <h2>{name}</h2>
              <p>{text}</p>
              <p>{price}грн</p>
              <img src={img} alt={name} width={200}/>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
