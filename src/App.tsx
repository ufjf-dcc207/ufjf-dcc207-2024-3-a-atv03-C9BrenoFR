import Animal from './Animal';
import './App.css';
import Exibicao from './exibicao';

function App() {

  return (
    <div className="app">
      <Exibicao inicio={new Date("2024-11-06T08:00:00.000-03:00")} 
      fim={new Date("2024-11-06T16:00:00.000-03:00")}
      local='A1'
      />
      <Animal icone='🦁' nome='Leão' peso={190.37} extincao />
      <Animal icone='🦒' nome='Girafa' peso={1200} extincao />
      <Exibicao inicio={new Date("2024-11-06T08:00:00.000-03:00")} 
      fim={new Date("2024-11-06T16:00:00.000-03:00")}
      local='B1'/>
      <Animal icone='🦜' nome='Papagaio' peso={0.120} extincao={false} />
    </div>
  )
}

export default App
