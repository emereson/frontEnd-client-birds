import React from "react";
import "./familytreeStyle/CardFamilyTree.css";

const CardFamilyTree = ({ ancestors, bird }) => {
  return (
    <div className="CardFamilyTree__container">
      <article className="CardFamilyTree__cardBird">
        <img
          src={`${import.meta.env.VITE_URL_IMAGE}/${
            bird?.bird_image[0].link_image
          }`}
          alt=""
        />
        <p>
          numero de placa: <b>{bird?.plate_number}</b>
        </p>
        <p>
          color de placa: <b>{bird?.plate_color.color}</b>
        </p>
        {ancestors?.[1] && (
          <>
            <i className="bx bxs-right-down-arrow-circle  rightLeft1"></i>
            <i className="bx bxs-left-down-arrow-circle rowLeft1"></i>
          </>
        )}
      </article>
      <div className="CardFamilyTree__cardsContainer">
        {ancestors?.[1]?.map((bird, index) => (
          <article key={index} className="CardFamilyTree__cardBird">
            <h4>{bird.type}</h4>

            <img
              src={`${import.meta.env.VITE_URL_IMAGE}/${
                bird?.bird_image[0].link_image
              }`}
              alt=""
            />
            <p>numero de placa: {bird?.plate_number}</p>
            <p>color de placa:{bird?.plate_color.color}</p>
            {ancestors?.[2]?.length === 4 && (
              <>
                <i className="bx bxs-right-down-arrow-circle  rightLeft1"></i>
                <i className="bx bxs-left-down-arrow-circle rowLeft1"></i>
              </>
            )}
          </article>
        ))}
      </div>
      <div className="CardFamilyTree__cardsContainer">
        {ancestors?.[2]?.length === 4 &&
          ancestors?.[2]?.map((bird, index) => (
            <article key={index} className="CardFamilyTree__cardBird">
              <h4>{bird.type}</h4>

              <img
                src={`${import.meta.env.VITE_URL_IMAGE}/${
                  bird?.bird_image[0].link_image
                }`}
                alt=""
              />
              <p>numero de placa: {bird?.plate_number}</p>
              <p>color de placa:{bird?.plate_color.color}</p>
              {ancestors?.[3]?.length === 8 && (
                <>
                  <i className="bx bxs-right-down-arrow-circle  rightLeft1"></i>
                  <i className="bx bxs-left-down-arrow-circle rowLeft1"></i>
                </>
              )}
            </article>
          ))}
      </div>
      <div className="CardFamilyTree__cardsContainer">
        {ancestors?.[3]?.length === 8 &&
          ancestors?.[3]?.map((bird, index) => (
            <article key={index} className="CardFamilyTree__cardBird">
              <h4>{bird.type}</h4>
              <img
                src={`${import.meta.env.VITE_URL_IMAGE}/${
                  bird?.bird_image[0].link_image
                }`}
                alt=""
              />
              <p>numero de placa: {bird?.plate_number}</p>
              <p>color de placa:{bird?.plate_color.color}</p>
            </article>
          ))}
      </div>
    </div>
  );
};

export default CardFamilyTree;
