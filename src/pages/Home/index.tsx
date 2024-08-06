import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  function handleNavigateAbout() {
    navigate('/about')
  }

  function handleNavigateTechs() {
    navigate('/techs')
  }

  function handleNavigateContact() {
    navigate('/contact')
  }

  return (
    <main>
      <h1 className="text-red-400 text-3xl">Home</h1>

      <div className="flex flex-column gap-4">
        <button onClick={handleNavigateAbout}>Navegar para about</button>
        <button onClick={handleNavigateTechs}>Navegar para techs</button>
        <button onClick={handleNavigateContact}>Navegar para contact</button>
      </div>
    </main>
  )
}