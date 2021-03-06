import { useState } from 'react';

//Components
import Player from './components/Player';
import Song from './components/Song';

//Styles
import './styles/app.scss';

//Data
import data from './data';

function App() {
	const [songs, setSongs] = useState(data);
	const [currentSong, setCurrentSong] = useState(songs[0]);

	return (
		<div className='App'>
			<Song currentSong={currentSong} />
			<Player />
		</div>
	);
}

export default App;
