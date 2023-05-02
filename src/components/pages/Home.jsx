import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()
    return (
      <div>
        <h1>Phonebook</h1>
        <p>Для продолжения работы необходимо авторизоваться или зарегистрироваться.</p>
        <div>
          <button onClick={() => navigate("/login")}>Авторизация</button>
          <button onClick={() => navigate("/signUp")}>Регистрация</button>
        </div>
      </div>
    );
  }
  
  export default HomePage;