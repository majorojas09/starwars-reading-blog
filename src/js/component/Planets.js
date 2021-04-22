import React from "react";

export const Planets = () => {
	return (
		<div className="container-fluid">
			<div className="card">
				<img
					src=" "
					className="card-img-top"
					alt="..."
					style={{ width: 200, height: 100 }}></img>
				<div className="card-body">
					<h5 className="card-title">Card Title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Animi aut esse deleniti distinctio. Iusto eum
						libero ut vero perferendis...
					</p>
					<a
						href="https://getbootstrap.com/"
						className="btn btn-outline-primary">
						Learn more!
					</a>
					<a
						href="https://getbootstrap.com/"
						className="btn btn-outline-warning"
						style={{ marginLeft: 300 }}>
						<i class="far fa-heart"></i>
					</a>
				</div>
			</div>
		</div>
	);
};
