import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Swap from './Screens/Swap';
import ChangeTheWorld from './Screens/ChangeTheWorld';
import Lottery from './Screens/Lottery';
import Farm from './Screens/Farm';
import NFTs from './Screens/NFTs';
// import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<div>
						<Navbar />
						<Route exact path='/'>
							<Swap />
						</Route>
						<Route exact path='/change-the-world'>
							<ChangeTheWorld />
						</Route>
						<Route exact path='/lottery'>
							<Lottery />
						</Route>
						<Route exact path='/farm'>
							<Farm />
						</Route>
						<Route exact path='/NFTs'>
							<NFTs />
						</Route>
					</div>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
