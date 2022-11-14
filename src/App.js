import Testimonio from "./componentes/testimonio.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>Esto es lo que dicen nuestros Alumnos en FreeCodeCamp:</h1>
        <Testimonio
          nombre="Josias Matos Batista"
          pais="Republica Dominicana"
          imagen="1"
          cargo="Junior software Developer"
          empresa="Google inc."
          testimonio="Se le considera testimonio a los pergaminos, monedas, actas, botones u otros objetos dejados por geógrafos, marinos, comerciantes, entre otros, durante sus viajes de exploración en la edad moderna y contemporánea dentro de envases para protegerlos del tiempo. Dichos testimonios fueron dejados para dar fe de haber estado en aquellos lugares. Los navegantes que encontraran algún testimonio dejado por otro, generalmente retiraban para sí el original y dejaban una copia o indicación de haberlo retirado junto a uno propio."
        />
        <Testimonio
          nombre="Joel Manuel Matos Batista"
          pais="Republica Dominicana"
          imagen="2"
          cargo="Junior software Developer"
          empresa="Meta."
          testimonio="Se le considera testimonio a los pergaminos, monedas, actas, botones u otros objetos dejados por geógrafos, marinos, comerciantes, entre otros, durante sus viajes de exploración en la edad moderna y contemporánea dentro de envases para protegerlos del tiempo. Dichos testimonios fueron dejados para dar fe de haber estado en aquellos lugares. Los navegantes que encontraran algún testimonio dejado por otro, generalmente retiraban para sí el original y dejaban una copia o indicación de haberlo retirado junto a uno propio."
        />
        <Testimonio
          nombre="Josue Matos Batista"
          pais="Alemania"
          imagen="3"
          cargo="Doctor en Medicina"
          empresa="Hospital Regional de Alemania"
          testimonio="Se le considera testimonio a los pergaminos, monedas, actas, botones u otros objetos dejados por geógrafos, marinos, comerciantes, entre otros, durante sus viajes de exploración en la edad moderna y contemporánea dentro de envases para protegerlos del tiempo. Dichos testimonios fueron dejados para dar fe de haber estado en aquellos lugares. Los navegantes que encontraran algún testimonio dejado por otro, generalmente retiraban para sí el original y dejaban una copia o indicación de haberlo retirado junto a uno propio."
        />
      </div>
    </div>
  );
}

export default App;
