import { useNavigate } from "react-router-dom";


function MainPage() {
   const navigate = useNavigate()

  return (
    <div>
      <h2>Welcome to the Game</h2>
      <button type="button">Регистрация</button>
      <button type="button">Вход</button>
      <button type="button" onClick={()=> navigate('/info')}>Информация об игре</button>
    </div>
  );
}

export default MainPage;