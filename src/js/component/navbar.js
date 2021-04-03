import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Image, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-3 d-flex justify-content-center" id="nav2">
			<div className="d-flex justify-content-center" id="ancho_general">
				<Link to="/">
					<img
						id="logo"
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
					/>
				</Link>
				<div className="ml-auto">
					<DropdownButton
						className="bg-secondary"
						id="dropdown-basic-button"
						title={`Favorites ${store.favoritos.length}`}>
						{store.favoritos.map((item, index) => {
							return (
								<Dropdown.Item key={index} href="#/action-1">
									<button
										type="button"
										className="btn btn-light"
										onClick={() => actions.delFav(store.favoritos, item)}>
										<i className="fas fa-trash float-start"></i>
										{"  " + item}
									</button>
								</Dropdown.Item>
							);
						})}
					</DropdownButton>
				</div>
			</div>
		</nav>
	);
};
