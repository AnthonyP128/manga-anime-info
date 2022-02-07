import React from "react";

function Loading() {
	return (
		<div className="skeleton">
			<div className="book__img--skeleton"></div>
			<div className="book__title--skeleton"></div>
			<div className="book__info--skeleton"></div>
		</div>
	);
}

export default Loading;
