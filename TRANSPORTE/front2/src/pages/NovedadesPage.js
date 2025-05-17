import React from 'react';
import { useState, useEffect, } from 'react';
import axios from "axios";
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    const cargarNovedades = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/novedades');
    const data = await response.json();
    setNovedades(data); // Asegurate de tener un estado llamado novedades
  } catch (error) {
    console.error("Error al cargar novedades:", error);
  }
};

    
    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get("http://localhost:3001/api/novedades");
            setNovedades(response.data);
            setLoading(false);

        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} susbtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}

        </section>
    );
}

export default NovedadesPage; 