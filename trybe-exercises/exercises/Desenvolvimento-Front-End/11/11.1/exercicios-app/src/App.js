import './App.css';

const tasks = ["aula", "exercicio", "comer", "academia"];
const task = (value) => {
  return (
    <ul>
    <li>{value}</li>
    {tasks.map(e => <li>{e}</li>)}
    </ul>
  );
}



function App() {
  return task('edu');
}

export default App;
