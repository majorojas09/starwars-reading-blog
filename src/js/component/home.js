import React from "react";
import { Navbar } from "./Navbar";
import { Characters } from "./Characters";
import { Planets } from "./Planets";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<div className="row" style={{ paddingTop: 20 }}>
				<h3 class="card-title text-danger">
					<strong>Characters</strong>
				</h3>
			</div>
			<div className="row" style={{ paddingTop: 20 }}>
				<div className="col">
					<Characters />
				</div>
				<div className="col">
					<Characters />
				</div>
				<div className="col">
					<Characters />
				</div>
				<div className="col">
					<Characters />
				</div>
			</div>
			<div className="row" style={{ paddingTop: 30 }}>
				<h3 class="card-title text-danger">
					<strong>Planets</strong>
				</h3>
			</div>
			<div className="row" style={{ paddingTop: 20 }}>
				<div className="col">
					<Planets />
				</div>
				<div className="col">
					<Planets />
				</div>
				<div className="col">
					<Planets />
				</div>
				<div className="col">
					<Planets />
				</div>
			</div>
		</div>
	);
}
