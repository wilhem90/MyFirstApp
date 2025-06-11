import SauDacoes from './components/sauDacoes.jsx'

function App() {
  const dataUser = {
    nome: "Wilhem Wundt",
    sobrenome: 'Maxime',
  }
    
  return (
    <>
    <SauDacoes data={dataUser}/>
    </>
  )
}

export default App
