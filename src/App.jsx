import "./App.css";

function App() {
  const users = [
    { id: 1, nome: 'Alice'},
    { id: 2, nome: 'Julio'},
    { id: 3, nome: 'Carla'}
  ];

  return (
   <ul>
    {users.map(user => (
      <li key={user.id}> {user.nome} </li>
    ))}
   </ul>
  )
}

export default App;
