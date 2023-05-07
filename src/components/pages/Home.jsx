import { Header } from "components/ContactList/Header/Header";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()
    return (
		<>
		<Header/>
      <div>
        <h1>Phonebook</h1>
        <p>Для продолжения работы необходимо авторизоваться или зарегистрироваться.</p>
        <div>
          <button onClick={() => navigate("/login")}>LOGIN</button>
          <button onClick={() => navigate("/signup")}>SIGNUP</button>
        </div>
      </div>
	  </>
    );
  }
  
  export default HomePage;