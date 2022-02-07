import React from "react";
import { useNavigate } from "react-router-dom";

function Anime({ anime }) {
	const navigate = useNavigate();

	function sendAnime() {
		localStorage.setItem("anime_chosen", JSON.stringify(anime));
		navigate(`/anime/${anime.mal_id}`);
	}

	return (
		<div className="anime" onClick={() => sendAnime()}>
			<div className="anime__image">
				<img src={anime.images.jpg.image_url} alt="" className="image" />
			</div>
			<div className="anime__info">
				<p className="anime__title">{anime.title}</p>
				<p className="anime__synopsis">Episode Count: {anime.episodes ? anime.episodes : "Ongoing"}</p>
				<p className="rating">R - 17+ (anime.rating)</p>
			</div>
		</div>
	);
}

export default Anime;
