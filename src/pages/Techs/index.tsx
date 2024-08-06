import { useNavigate } from "react-router-dom"

export function Techs() {
  const navigate = useNavigate()

  function handleNavigateHome() {
    navigate('/')
  }

  return (
    <div>
      <h1>techs</h1>

      <button onClick={handleNavigateHome}>Navigate Home</button>
    </div>
  )
}