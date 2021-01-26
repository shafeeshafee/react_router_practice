import "./App.css";
import {Route, Switch, NavLink } from 'react-router-dom';
import data from './FakeData.json'
import Home from './screens/Home'
import About from './screens/About'
import Posts from './screens/Posts'
import Post from './screens/Post'
import NoMatch from './screens/NoMatch'


function App() {

	return (
		<div className="App">
			<div className="links">
				<nav>
					<NavLink exact to={"/"}>Home</NavLink>
					<NavLink to={"/about"}>About</NavLink>
					<NavLink to={"/posts"}>Posts</NavLink>
				</nav>
			</div>

			<main>
				<Switch>
					<Route exact path={"/"}>
						<Home />
					</Route>
					<Route path={"/about"}>
						<About />
					</Route>
					<Route exact path={"/posts"}>
						<Posts posts={data}/>
					</Route>

					<Route path={"/posts/:post_id"}>
						<Post {...data}/>
					</Route>
					
					<Route path={"*"} component={NoMatch}>
					</Route>
				</Switch>
			</main>
			
		</div>
	);
}

export default App;
