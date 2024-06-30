import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pagesStyle/Home.css";

const Home = () => {
  const [allBirds, setallBirds] = useState();
  const [search, setsearch] = useState("");
  const [dataBird, setdataBird] = useState();
  const [birdId, setbirdId] = useState();

  useEffect(() => {
    if (search.length > 0) {
      const url = `${import.meta.env.VITE_URL_API}/birds?search=${search}`;

      axios
        .get(url, config)
        .then((res) => {
          setallBirds(res.data.birds);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setallBirds();
    }
  }, [search]);

  useEffect(() => {
    if (birdId) {
      const url = `${import.meta.env.VITE_URL_API}/birds/${birdId}`;

      axios
        .get(url)
        .then((res) => {
          setdataBird(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [birdId]);

  function calcularEdad(fechaNacimiento) {
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const fechaActual = new Date();

    // Calcular la diferencia entre las fechas en milisegundos
    const diff = fechaActual - fechaNacimientoObj;

    // Convertir la diferencia a un objeto de fecha
    const diffDate = new Date(diff);

    // Extraer años, meses y días de la diferencia
    const años = diffDate.getUTCFullYear() - 1970; // 1970 es el año base en JavaScript
    const meses = diffDate.getUTCMonth();
    const dias = diffDate.getUTCDate() - 1; // Restar 1 porque getDate() devuelve el día del mes

    return { años, meses, dias };
  }

  return (
    <div className="page__container">
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
      {dataBird && (
        <div>
          <section className="BirdId__sectionTwo">
            <h1>Datos de tu Ave</h1>
            <ul>
              <li>
                <b>Placa:</b> {dataBird?.bird?.plate_number}
              </li>
              <li>
                <b> Color de placa:</b> {dataBird?.bird?.plate_color.color}
              </li>
              <li>
                <b>Tipo de cresta:</b> {dataBird?.bird?.crest_type}
              </li>
              <li>
                <b>Sexo:</b> {dataBird?.bird?.sex}
              </li>
              <li>
                <b>Ave padre:</b>
                {dataBird?.father_bird?.plate_number}, Color de placa:{" "}
                {dataBird?.father_bird?.plate_color.color}
              </li>
              <li>
                <b>Ave madre:</b>
                {dataBird?.mother_bird?.plate_number}, Color de placa:{" "}
                {dataBird?.mother_bird?.plate_color.color}
              </li>
              <li>
                <b>Peso del ave:</b> {dataBird?.bird?.weight}
              </li>
              <li>
                <b>Edad:</b>{" "}
                <p>
                  {calcularEdad(dataBird?.bird.birthdate).años} años,{" "}
                  {calcularEdad(dataBird?.bird.birthdate).meses} meses y{" "}
                  {calcularEdad(dataBird?.bird.birthdate).dias} días
                </p>
              </li>
              <li>
                <b>Fecha de nacimiento:</b> {dataBird?.bird.birthdate}
              </li>
              <li>
                <b>Estado del ave: </b>
                {dataBird?.bird?.status}
              </li>
              <li>
                <b>Procedencia del ave:</b> {dataBird?.bird?.origin}
              </li>
              <li>
                <b>Observaciones: </b>
                {dataBird?.bird?.observations}
              </li>
            </ul>
          </section>

          <section className="BirdId__sectionThree">
            <article className="BirdId__sectionFour_article">
              <h2>Imagenes del ave</h2>
            </article>
            <div className="BirdId__sectionThree__containerImages">
              {dataBird?.bird?.bird_image.map((image) => (
                <div key={image.id}>
                  <img
                    src={`${import.meta.env.VITE_URL_IMAGE}/${
                      image.link_image
                    }`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="BirdId__sectionFour">
            <article className="BirdId__sectionFour_article">
              <h2>Videos del ave</h2>
            </article>{" "}
            <div className=" BirdId__sectionFour__containerVideos">
              {dataBird?.bird?.bird_videos &&
              dataBird?.bird?.bird_videos.length === 0 ? (
                <p>NO HAY VIDEOS DEL AVE</p>
              ) : (
                dataBird?.bird?.bird_videos.map((video) => (
                  <div key={video.id}>
                    <video controls key={video.id}>
                      <source
                        src={`${import.meta.env.VITE_URL_IMAGE}/${
                          video.link_video
                        }`}
                        type="video/mp4"
                      />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
