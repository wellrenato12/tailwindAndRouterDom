import { useNavigate } from "react-router-dom"

export function About() {
  const navigate = useNavigate()

  function handleNavigateHome() {
    navigate('/')
  }
  
  return (
    <div>
      <h1>About</h1>

      <button onClick={handleNavigateHome}>Navigate Home</button>
    </div>
  )
}