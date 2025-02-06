import "./App.css";
import UserForm from "./components/UserForm/UserForm";


const App = () => {
  const onConfirm = (data) => {
    console.log("Dados registrados:", data);
  };

  return (
    <div>
      <h2>Insira seus dados</h2>
      <UserForm onConfirm={onConfirm} />
    </div>
  );
};

export default App;