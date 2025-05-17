import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2> Nuestros Productos </h2>
                <p>Somos un bazar familiar dedicado a ofrecer una amplia variedad de productos para el hogar: utensilios de cocina, artículos de decoración, organización y mucho más. Combinamos calidad, buenos precios y atención cercana para que encuentres todo lo que necesitás en un solo lugar.</p>

            </div>

            <h2> Los mas vendidos </h2>
            <div className="servicio">
                <img src='imagenes/sillones.jpg' alt='sillones'></img>
                <div className="info">
                    <h4>Sillones</h4>
                    <p>En nuestro bazar familiar te ofrecemos sillones cómodos, funcionales y con diseños que se adaptan a cualquier ambiente del hogar. Ideal para renovar tu living con estilo y a buen precio.</p>
                </div>
            </div>  

            <div className="servicio">
                    <img src='imagenes/blancos.jpg' alt='blancos'></img>
                <div className="info">
                    <h4>Decoracion y Blancos</h4>
                    <p>Dale vida a tus espacios con nuestra selección de artículos de decoración: cuadros, jarrones, luces, plantas artificiales y más. Detalles únicos que transforman tu hogar sin gastar de más.</p>
                </div>
            </div>

        </main>

    );
}

export default NosotrosPage;
