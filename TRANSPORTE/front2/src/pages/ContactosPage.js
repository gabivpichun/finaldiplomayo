import React, { useState } from 'react';
import axios from "axios";

const ContactosPage = () => {

  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);

    try {
      const response = await axios.post(
        'http://localhost:3001/api/contacto',
        formData
      );
      setSending(false);
      setMsg(response.data.message);
      if (response.data.error === false) {
        setFormData(initialForm);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSending(false);
      setMsg("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <main className="holder contacto">
      <div className="caja-contacto">
        <h2>Contacto Rápido</h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
          </p>
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>

        {sending && <p>Enviando...</p>}
        {msg && <p>{msg}</p>}
      </div>

      <div className="datos">
        <h3>Contactanos</h3>
        <ul className="lista-contacto">
          <li>Dirección: Córdoba Capital</li>
          <li>Teléfono: 351-000-0000</li>
          <li>Email: contacto@ejemplo.com</li>
          <li>Horario de atención: Lunes a Viernes de 9 a 18 hs</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactosPage;

