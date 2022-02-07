import React from "react";
import { useLocation } from "react-router-dom";

function Info() {
	const location = useLocation();
	const isAnime = location.pathname.includes("anime");
	const animeShow = JSON.parse(localStorage.getItem("anime_chosen"));
	const mangaBook = JSON.parse(localStorage.getItem("manga_chosen"));

	return (
		<div id="info">
			<div className="info__container">
				<div className="row info__row">
					<div className="image__container">
						<img src={isAnime ? animeShow.images.jpg.image_url : mangaBook.images.jpg.image_url} alt="" className="image__chosen" />
					</div>
					<div className="panel__information">
						<h1 className="panel__heading">{isAnime ? animeShow.title : mangaBook.title}</h1>
						<h2 className="japanese__title">{isAnime ? animeShow.title_japanese : mangaBook.title_japanese}</h2>
						<p className="synopsis">{isAnime ? animeShow.synopsis : mangaBook.synopsis}</p>
						{isAnime ? <p className="serial">{animeShow.episodes ? animeShow.episodes : <p>Ongoing</p>}</p> : <p className="serial">{mangaBook.volumes}</p>}
						<p className="rating__info">This is scored {isAnime ? animeShow.scored : mangaBook.scored} / 10</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Info;
