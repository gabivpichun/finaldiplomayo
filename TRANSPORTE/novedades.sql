-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 16-05-2025 a las 02:13:00
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `diplomatura`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Ventas en HOT SALE', 'Hot Sale: la mayoría de las marcas extendieron las promociones hasta el fin de semana.', '“Los consumidores están demostrando un gran interés por aprovechar las oportunidades del Hot Sale. Esto confirma que, más allá del contexto, el evento sigue siendo una vidriera clave para el e-commerce argentino”, dijo Andrés Zaied, presidente de la CACE.\r\n\r\nEn cuanto al top 10 de las ofertas más clickeadas preciso que fueron Televisores, Aires acondicionados, Colchones, Celulares, Heladeras, Lavarropas, Asistencia al viajero, Cubiertos, Perfumería y Creatina (suplementos dietarios para entrenamiento).'),
(2, 'Proyecciones del Hot Sale 2025', 'En Tiendamia, solo en las primeras 24 horas del Hot Sal 2025, la facturación respecto de los lunes de las últimas semanas creció 400%, y comparado con el primer día del Hot Sale 2024, poco más del 300%.', 'La plataforma detectó que los productos estrella de cada categoría fueron Remeras, accesorios, zapatillas y pijamas, en Indumentaria; vajilla, artículos decorativos, blanquería y termos, en Deco y Hogar, y productos de cuidado de la piel, suplementos dietarios y maquillaje, en Salud y Belleza.\r\nCon respecto de los productos más vendidos, indicó que se destacaron los celulares, notebooks, televisores, aires acondicionados y heladeras.'),
(3, 'Ventas en HOT SALE', 'Hot Sale: la mayoría de las marcas extendieron las promociones hasta el fin de semana.', '“Los consumidores están demostrando un gran interés por aprovechar las oportunidades del Hot Sale. Esto confirma que, más allá del contexto, el evento sigue siendo una vidriera clave para el e-commerce argentino”, dijo Andrés Zaied, presidente de la CACE.\r\n\r\nEn cuanto al top 10 de las ofertas más clickeadas preciso que fueron Televisores, Aires acondicionados, Colchones, Celulares, Heladeras, Lavarropas, Asistencia al viajero, Cubiertos, Perfumería y Creatina (suplementos dietarios para entrenamiento).'),
(4, 'Proyecciones del Hot Sale 2025', 'En Tiendamia, solo en las primeras 24 horas del Hot Sal 2025, la facturación respecto de los lunes de las últimas semanas creció 400%, y comparado con el primer día del Hot Sale 2024, poco más del 300%.', 'La plataforma detectó que los productos estrella de cada categoría fueron Remeras, accesorios, zapatillas y pijamas, en Indumentaria; vajilla, artículos decorativos, blanquería y termos, en Deco y Hogar, y productos de cuidado de la piel, suplementos dietarios y maquillaje, en Salud y Belleza.\r\nCon respecto de los productos más vendidos, indicó que se destacaron los celulares, notebooks, televisores, aires acondicionados y heladeras.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
