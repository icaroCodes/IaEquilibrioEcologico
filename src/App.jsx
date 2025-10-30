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
            Uso de IA e big data para prever impactos, planejar ações de conservação e restaurar ecossistemas.
          </h1>
          
          <p className="main-text">
            A inteligência artificial é uma aliada importante na busca pelo equilíbrio ecológico. 
            Com o uso de IA e Big Data, é possível prever impactos ambientais e planejar ações de 
            conservação e restauração de ecossistemas. Essas tecnologias analisam grandes volumes 
            de dados para orientar decisões mais sustentáveis, reduzindo danos e preservando recursos 
            naturais. Assim, a IA se torna uma parceira essencial para proteger o planeta e garantir 
            um futuro mais equilibrado.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
