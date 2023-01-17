import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const response = await axios.get('https://www.balldontlie.io/api/v1/players');
      console.log(response.data.data)
      setPlayers(response.data.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    try {
      getPlayers();
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <div className="App">
      <h1>Players</h1>
      <table>
        <thead>
          <tr>
            <th>dummy</th>
            <th>dummy</th>
            <th>dummy</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.from(players).map((player, key) => 
              <tr key={key}>
                <td className='table-data'>{player.last_name}</td>
                <td className='table-data'>{player.first_name}</td>
                <td className='table-data'>{player.weight_pounds}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
