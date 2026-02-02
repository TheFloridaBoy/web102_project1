import './App.css'
import Board from './components/Board'

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>OPTCG Community Board</h1>
        <p>Your hub for meta decklists, official Bandai events, and buying resources.</p>
      </header>

      <Board />
    </div>
  )
}

export default App
