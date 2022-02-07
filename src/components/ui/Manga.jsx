import React from "react";
import { useNavigate } from "react-router-dom";

function Manga({ manga }) {
	const { genres } = manga;
	const navigate = useNavigate();
	function sendManga() {
		localStorage.setItem("manga_chosen", JSON.stringify(manga));
		navigate(`/manga/${manga.mal_id}`);
	}

	return (
		<div className="manga" onClick={() => sendManga()}>
			<div className="manga__image">
				<img src={manga.images.jpg.image_url} alt="" className="image" />
			</div>
			<div className="manga__info">
				<p className="manga__title">{manga.title}</p>
				{genres.slice(0, 3).map((genre, index) => (
					<span className="genres" key={index}>
						{genre.name}
						{index === genres.length - 1 ? "" : ", "}
					</span>
				))}
				<p className="rating">Rating: {manga.scored} / 10</p>
			</div>
		</div>
	);
}

export default Manga;
