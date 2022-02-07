import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Manga from "./ui/Manga";
import axios from "axios";
import Loading from "./ui/Loading";

function Landing() {
	const [topManga, setTopManga] = useState([]);
	const [userSearch, setUserSearch] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	async function getTopManga() {
		const { data } = await axios.get("https://api.jikan.moe/v4/top/manga");
		setTopManga(data.data);
		setIsLoading(false);
	}

	useEffect(() => {
		getTopManga();
	}, []);

	function search(key) {
		if (key.code === "Enter" || key.type === "click") {
			localStorage.setItem("id", userSearch);
			navigate(`/search`);
		}
	}

	return (
		<div id="landing">
			<div className="landing__container">
				<div className="row">
					<div className="search__manga">
						<div className="heading__wrapper">
							<h1 className="search__manga--heading">Search for your favourite Manga!</h1>
						</div>
						<div className="search__container">
							<input type="search" className="form__input--text" onChange={(event) => setUserSearch(event.target.value)} onKeyDown={(event) => search(event)} />
							<div className="icon__container" onClick={(event) => search(event)}>
								<FontAwesomeIcon icon="search" className="icon--search" />
							</div>
						</div>
						<h1 className="top__manga--heading">Top Manga Being Read</h1>
					</div>
					<div className="manga__collection">
						{isLoading
							? Array.from({ length: 16 }).map((index) => <Loading key={index} />)
							: topManga.slice(0, 16).map((manga) => <Manga key={manga.mal_id} manga={manga} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
