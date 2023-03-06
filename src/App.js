import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import TopAnime from "./components/pages/TopAnime";
import Search from "./components/pages/Search";
import Info from "./components/pages/Info";

// https://docs.api.jikan.moe/

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<Landing />}></Route>
					<Route path="/TopAnime" element={<TopAnime />}></Route>
					<Route path="/search" element={<Search />}></Route>
					<Route path="/manga/:id" element={<Info />}></Route>
					<Route path="/anime/:id" element={<Info />}></Route>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
