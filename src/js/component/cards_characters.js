import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

let cargados = true;
let contador = 0;
let cont_personaje = 1;
let div_cards = [];
let imagen = "https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale";

export function CardsCharacters() {
	const w_card = {
		width: "18rem",
		height: "425px"
	};
	let previos = {
		name: "charging",
		gender: "charging",
		hair_color: "charging",
		eye_color: "charging"
	};

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtainCharacters();
		//console.log(store.personajes);
	}, []);

	//console.log(store.personajes_detalle);
	const cont_interno = cont_personaje.toString();

	const [personaje, setPersonajes] = useState(previos);

	// async function personajes() {
	// 	let result = "";
	// 	let url = "https://www.swapi.tech/api/people/";
	// 	await fetch(url)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data.results[0].url);
	// 			setPersonajes(data.result);
	// 			cont_personaje++;
	// 		})
	// 		.catch(err => {
	// 			console.error(err);
	// 		});
	// }
	//personajes();

	if (cargados == false) {
		//personajes();
	} else {
		//pass
	}
	const [favoritoColor, setfavoritoColor] = useState("btn btn-light");
	const [corazonColor, setcorazonColor] = useState("corazon2");

	function cambiaColor() {
		if (favoritoColor == "btn btn-light") {
			setfavoritoColor("btn btn-warning");
			setcorazonColor("corazon");
		} else {
			setfavoritoColor("btn btn-light");
			setcorazonColor("corazon2");
		}
	}

	//const taskItems = div_cards.map((item, index) => item);

	const taskItems = store.personajes_detalle.map((item, index) => (
		<div key={index} className="card m-1" style={w_card}>
			<img
				src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">Gender: {item.gender} </p>
				<p className="card-text">Hair Color: {item.hair_color} </p>
				<p className="card-text">Eye Color: {item.eye_color} </p>
				<div className="row d-flex justify-content-center">
					<a href="#" className="col-6  btn btn-primary">
						Learn more!
					</a>
					<div className="col-3 d-flex justify-content-start">
						<button type="button" className={favoritoColor} onClick={() => cambiaColor()}>
							<i id={corazonColor} className="fas fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	));

	// async function agregar() {
	// 	div_cards.push(
	// 		<div key={contador} className="card m-1" style={w_card}>
	// 			<img
	// 				src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
	// 				className="card-img-top"
	// 				alt="..."
	// 			/>
	// 			<div className="card-body">
	// 				<h5 className="card-title">{personaje.name}</h5>
	// 				<p className="card-text">Gender: {personaje.gender} </p>
	// 				<p className="card-text">Hair Color: {personaje.hair_color} </p>
	// 				<p className="card-text">Eye Color: {personaje.eye_color} </p>
	// 				<div className="row d-flex justify-content-center">
	// 					<a href="#" className="col-6  btn btn-primary">
	// 						Learn more!
	// 					</a>
	// 					<div className="col-3 d-flex justify-content-start">
	// 						<button type="button" className={favoritoColor} onClick={() => cambiaColor()}>
	// 							<i id={corazonColor} className="fas fa-heart" />
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// 	contador++;
	// 	console.log(div_cards);
	// 	console.log("pasa por agregar");
	// }

	return (
		<div className="row d-flex justify-content-center">
			<div id="ancho_general" className="row d-flex justify-content-center">
				<h1 id="titles"> Characters </h1>
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
			<div id="anchogeneral" className="row d-flex justify-content-center">
				{taskItems}
			</div>
		</div>
	);
}
