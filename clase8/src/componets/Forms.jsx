import { useState } from "react";

function Forms() {
	const [persona, setPersona] = useState({
		nombre: "",
		direccion: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPersona((prevFormData) => ({
			...prevFormData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`name: ${persona.nombre}, direccion ${persona.direccion}`);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-input"
					placeholder="Nombre"
					name="nombre"
					value={persona.nombre}
					onChange={handleChange}
				/>

				<input
					type="text"
					className="form-input"
					placeholder="Direccion"
					name="direccion"
					value={persona.direccion}
					onChange={handleChange}
				/>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default Forms;
