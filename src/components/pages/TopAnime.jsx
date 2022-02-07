import React, { useState, useEffect } from "react";
import axios from "axios";
import Anime from "../ui/Anime";
import Loading from "../ui/Loading";

function TopAnime() {
	const [topAnime, setTopAnime] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	async function getTopAnime() {
		const { data } = await axios.get("https://api.jikan.moe/v4/top/anime");
		setTopAnime(data.data);
		setIsLoading(false);
	}

	useEffect(() => {
		getTopAnime();
	}, []);

	function filterAnime(filter) {
		if (filter === "SCORE") {
			setTopAnime(topAnime.slice().sort((a, b) => b.score - a.score));
		}
		if (filter === "POPULARITY") {
			setTopAnime(topAnime.slice().sort((a, b) => b.popularity - a.popularity));
		}
		if (filter === "FAVORITES") {
			setTopAnime(topAnime.slice().sort((a, b) => b.favorites - a.favorites));
		}
	}

	return (
		<div id="Top-Anime">
			<div className="top-anime__container">
				<div className="row">
					<div className="top-anime__wrapper">
						<h1 className="top-anime">Top Anime</h1>
						<select id="filter" defaultValue="DEFAULT" onChange={(event) => filterAnime(event.target.value)}>
							<option value="SCORE">Score</option>
							<option value="POPULARITY">Popularity</option>
							<option value="FAVORITES">Favourites</option>
						</select>
					</div>
					<div className="anime-collection">
						{isLoading
							? Array.from({ length: 16 }).map((index) => <Loading key={index} />)
							: topAnime.slice(0, 16).map((anime) => <Anime key={anime.mal_id} anime={anime} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopAnime;
