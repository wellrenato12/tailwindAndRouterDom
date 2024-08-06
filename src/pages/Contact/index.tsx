import { useNavigate } from "react-router-dom"

export function Contact() {
  const navigate = useNavigate()

  function handleNavigateHome() {
    navigate('/')
  }

  return (
    <div>
      <h1>Contact</h1>

      <button onClick={handleNavigateHome}>Navigate Home</button>
    </div>
  )
}