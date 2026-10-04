import { useState } from 'react'
import './App.css'

const Movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    poster: ""
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    poster: ""
  }
]

function App() {
  const [count, setCount] = useState(0)
  const [movies] = useState(Movies)

  return (
    <div className="App">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
            {movie.poster && <img src={movie.poster} alt={movie.title} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
