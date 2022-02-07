import React from "react";
import Logo from "../assets/sasha-eating.jpg";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav id="navigation">
			<div className="nav__container">
				<div className="heading__container">
					<Link to="/" className="logo__mask">
						<img src={Logo} alt="" className="logo__image" />
					</Link>
					<h1 className="heading">
						Manga-Anime <span className="yellow">Info</span>
					</h1>
				</div>

				<ul className="nav__list">
					<li>
						<Link to="/" className="nav__link--anchor link__hover-effect link__hover-effect--yellow">
							Home
						</Link>
					</li>
					<li>
						<Link to="/TopAnime" className="nav__link--anchor link__hover-effect link__hover-effect--yellow">
							Top Anime
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
