import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pagesStyle/Home.css";
import CardFamilyTree from "../components/home/CardFamilyTree";

const Home = () => {
  const [allBirds, setallBirds] = useState();
  const [search, setsearch] = useState("");
  const [birdFamilyTree, setbirdFamilyTree] = useState();
  const [birdId, setbirdId] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/birds?search=${search}`;

    axios
      .get(url)
      .then((res) => {
        setallBirds(res.data.birds);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);
  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/birds/family-tree/${birdId}`;

    axios
      .get(url)
      .then((res) => {
        setbirdFamilyTree(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [birdId]);
  return (
    <div className="page__container">
      <section className="page___sectionOne">
        <h1>ARBOL GENEALOGICO</h1>
      </section>
      <section className="page___sectionTwo">
        <form className="page___sectionTwo__form">
          <div>
            <label>Buscar Ave</label>

            <input
              id="titulo"
              type="text"
              placeholder="Buscar Ave Por Placa"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>

          <div>
            <label>Seleccione el Ave</label>
            <select
              name="father_bird_id"
              id="father_bird_id"
              onChange={(e) => setbirdId(e.target.value)}
            >
              {" "}
              <option
                value="0"
                style={{ backgroundColor: "red", color: "white" }}
              >
                Elija un ave
              </option>
              {allBirds?.map((bird) => (
                <option key={bird.id} value={bird.id}>
                  {bird.plate_number}, placa: {bird.plate_color.color},{bird.id}
                </option>
              ))}
            </select>{" "}
          </div>
        </form>
      </section>
      <section className="page___sectionThree">
        {birdFamilyTree?.bird && (
          <CardFamilyTree
            ancestors={birdFamilyTree?.ancestors_by_generation}
            bird={birdFamilyTree?.bird}
          />
        )}
      </section>
    </div>
  );
};

export default Home;
