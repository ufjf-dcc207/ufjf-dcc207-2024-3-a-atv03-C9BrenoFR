import Animal from './animal'
import './App.css'

function App() {

  return (
    <div className="app">
      <Animal icone='🦁' nome='Leão' peso={190.37} extincao />
      <Animal icone='🦒' nome='Girafa' peso={1200} extincao />
      <Animal icone='🦜' nome='Papagaio' peso={0.120} extincao={false} />
    </div>
  )
}

export default App
