import React from "react";
import Logo from "../assets/sasha-eating.jpg";

function Footer() {
	return (
		<footer id="footer">
			<div className="footer__container">
				<div className="footer__row">
					<div className="logo__mask logo__center">
						<a href="/">
							<img src={Logo} alt="" className="logo__image" />
						</a>
					</div>
					<div className="footer__text">
						<p className="footer__tag">
							Copyright @ 2022 Manga<span className="yellow">Info</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
