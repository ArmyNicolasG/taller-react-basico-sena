import { useState } from "react";

// Punto 1.
type Props = {
  nombre: string;
  idioma: string;
}

export function Saludo({ nombre, idioma } : Props) { // Solamente acepta español e inglés, sino, lo mostrará en francés.
  return (
      <p>¡{ (idioma == "en") ? "Hi" : (idioma == "es") ? "Hola" : "Bonjour"}, { nombre }! </p>
  );
}


// Punto 2.
export function Contenedor({ children } : any) {
  return (
      <div style={{border: "1px solid black"}}>
          { children }
      </div>
  )
}

function App() {

  const [contador, setContador] = useState(0);

  return (
    <>
      <Contenedor>
        <Saludo nombre="Nicolás" idioma="es" />
      </Contenedor>
      <div style={{ border: "1px solid black", display: "flex", flexDirection: "row", marginTop: "25px" }}>
        <button onClick={() => setContador((cont:number) => (cont != 0) ? cont - 1 : 0)}>Menos</button>
        <h1>Tienes 🐣 { contador } pollitos</h1>
        <button onClick={() => setContador((cont:number) => cont + 1)}>Más</button>
      </div>
    
    </>
  )
}

export default App
