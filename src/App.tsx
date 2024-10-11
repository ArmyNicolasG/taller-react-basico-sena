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
  return (
    <>
      <Contenedor>
        <Saludo nombre="Nicolás" idioma="es" />
      </Contenedor>
    </>
  )
}

export default App
