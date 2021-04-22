import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-white bg-white">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						alt=""
						width="60"
						height="30"
					/>
				</a>
				<form class="d-flex">
					<button
						class="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton2"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites <span class="badge bg-secondary">4</span>
					</button>
				</form>
			</div>
		</nav>
	);
};
