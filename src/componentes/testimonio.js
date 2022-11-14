import React from "react";
import "../style/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio${props.imagen}.jpg`)}
        alt="foto de Lisa"
      />
      <div className="texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="testimonio-texto">{props.testimonio}</p>
      </div>
    </div>
  );
}
export default Testimonio;
