import React, { useState, useEffect } from "react";
import axios from "axios";
import Manga from "../ui/Manga";
import Loading from "../ui/Loading";

function Search() {
	const search = localStorage.getItem("id");
	const [mangaSearch, setMangaSearch] = useState([]);
	const [animeSearch, setAnimeSearch] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	async function searchQuery() {
		const manga = await axios.get(`https://api.jikan.moe/v4/manga?q=${search}&page=1`);
		const anime = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&page=1`);
		setMangaSearch(manga.data.data);
		setAnimeSearch(anime.data.data);
		setIsLoading(false);
	}

	useEffect(() => {
		searchQuery();
	}, []);

	return (
		<div id="search">
			<div className="search__container--box">
				<div className="row">
					<h1 className="manga__search--title">Manga Search for</h1>
					<div className="manga__collection">
						{isLoading
							? Array.from({ length: 4 }).map((index) => <Loading key={index} />)
							: mangaSearch.slice(0, 4).map((manga) => <Manga key={manga.mal_id} manga={manga} />)}
					</div>
					<h1 className="anime__search--title">Anime Search for</h1>
					<div className="anime-collection">
						{isLoading
							? Array.from({ length: 4 }).map((index) => <Loading key={index} />)
							: animeSearch.slice(0, 4).map((anime) => <Manga key={anime.mal_id} manga={anime} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
