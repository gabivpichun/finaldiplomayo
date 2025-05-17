import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
             
            </div>

            <div className='columnas inicio'>
                <div className='categorias holder'>
                    <h2>TU HOGAR MAS LINDO Y ACOGEDOR CON NUESTROS PRODUCTOS</h2>
                    <p>En nuestro bazar familiar encontrarás una cuidada selección de productos destacados que combinan calidad, funcionalidad y diseño. Desde ollas y termos hasta velas aromáticas, manteles, adornos y organizadores, cada artículo está pensado para hacer tu hogar más práctico y acogedor. Te invitamos a visitarnos y descubrir personalmente todo lo que tenemos para vos.</p>
                    <p>¡Seguro salís con algo que te encanta!</p>
                </div>
            </div>

            <div className="productos">
               <h2><img src='imagenes/edificio.jpg' alt='local'></img> </h2> 
                <div className="productos">
                    <span className="cita"> CALIDAD</span>
                    <span className="autor"> BUEN PRECIO </span>

                </div>
            </div>
    
        </main >
    );
}

export default HomePage;
