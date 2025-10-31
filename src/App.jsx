import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>

      <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
        <div className="loading-content">
          <h1 className="loading-title">Inteligência artificial e soluções inovadoras</h1>
          <h2 className="loading-subtitle">para buscar o equilíbrio ecológico</h2>
          <div className="loading-spinner"></div>
        </div>
      </div>


      <div className={`main-content ${!loading ? 'fade-in' : ''}`}>
        <div className="container">
          <h1 className="main-title">
            Uso de IA e big data para prever impactos ambientais
          </h1>
          
          <p className="main-text">
            A inteligência artificial é uma aliada importante na busca pelo equilíbrio ecológico. Com o uso de IA e Big Data, conseguimos prever impactos ambientais, planejar ações de conservação e restaurar ecossistemas de forma mais eficiente e precisa. Essas tecnologias analisam grandes volumes de dados, identificando padrões e tendências que muitas vezes passam despercebidos, ajudando a tomar decisões mais sustentáveis, reduzir danos e preservar recursos naturais. Além disso, a Inteligência artificial permite antecipar problemas e criar estratégias inovadoras, tornando-se uma parceira essencial para proteger o planeta e garantir um futuro mais equilibrado, consciente e sustentável para todos.
          </p>
        </div>
      </div>
    </>
  )
}

export default App