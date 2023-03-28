import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieDataSample;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        // MovieId: 6,
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <center>
          <h3>Joel Hilton's Movie Collection</h3>
        </center>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              // <tr key={m.MovieId}>
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <center>
        <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button>
      </center> */}
    </>
  );
}

export default MovieList;
