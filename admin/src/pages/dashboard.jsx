import React, { useEffect } from "react";
import { fetchSushi } from "../redux/sushi/operations";
import { useDispatch } from "react-redux";
import SushiSection from "../components/sushiSection/sushiSection";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSushi());
  }, [dispatch]);

  return (
    <main>
      <SushiSection />
    </main>
  );
}

export default Dashboard;
