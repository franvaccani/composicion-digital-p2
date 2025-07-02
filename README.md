# Centro Cultural Composición Digital

## Información del Proyecto
- **Desarrollado por:** Julieta Viano
- **Comisión:** DGT5AV - Turno tarde - Tercer año
- **Año:** 2025

## Descripción
Sitio web completo para el Centro Cultural Composición Digital, que incluye información sobre exposiciones, artistas, eventos, merchandising y servicios del centro.

## Estructura del Sitio

### Páginas Principales
1. **Inicio (index.html)**
   - Banner principal con llamada a la acción
   - Sección de servicios (Obras de Arte, Conciertos, Visitas Guiadas)
   - Modal de conciertos próximos
   - Galería de colecciones destacadas
   - Sección "Sobre Nosotros"
   - Testimonios de visitantes (carousel)
   - Formulario de contacto
   - Footer con enlaces y newsletter

2. **Quiénes Somos (quienes-somos.html)**
   - Banner de página
   - Misión y visión del centro
   - Timeline de historia del centro (2015-2025)
   - Equipo de trabajo con fotos y roles
   - Call to action para unirse a la comunidad

3. **Colecciones (colecciones.html)**
   - Banner de página
   - Introducción a la colección permanente
   - 4 artistas destacados con biografías y obras:
     - Marina Abramović (Arte Performático)
     - Jean-Michel Basquiat (Neo-expresionismo)
     - Frida Kahlo (Surrealismo)
     - Yayoi Kusama (Arte Contemporáneo)
   - Exposiciones actuales
   - Call to action para reservar visitas

4. **Tienda (merchandising.html)**
   - Banner de página
   - Introducción al merchandising
   - Sistema de filtros por categorías (Todos, Ropa, Accesorios, Impresiones)
   - 9 productos con modales detallados:
     - Camiseta Artística
     - Tote Bag
     - Taza de Cerámica
     - Póster Enmarcado
     - Libreta Artística
     - Sudadera con Diseño
     - Set de Postales
     - Pines Coleccionables
     - Calendario Artístico
   - Colecciones destacadas
   - Call to action para tarjetas regalo

5. **Contacto (contacto.html)**
   - Banner de página
   - Formulario de contacto con validación
   - Información de contacto completa
   - 4 tipos de visitas guiadas con modal de reserva
   - Mapa de ubicación (Google Maps)
   - FAQ (Preguntas Frecuentes)

## Características Técnicas

### Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas
- Bootstrap 5.3.2 para responsive design
- Font Awesome 6.4.2 para iconos
- Google Fonts (Roboto)
- JavaScript vanilla para interactividad

### Funcionalidades
- **Responsive Design:** Adaptable a móviles, tablets y desktop
- **Navegación:** Menú hamburguesa en móviles
- **Modales:** Para conciertos, productos y reservas
- **Formularios:** Con validación HTML5 y JavaScript
- **Carousel:** Para testimonios
- **Filtros:** Para productos en la tienda
- **Animaciones:** Hover effects y transiciones suaves

### Optimizaciones
- **Imágenes:** Todas las imágenes están optimizadas y almacenadas localmente en `/assets/compressed/`
- **SEO:** Títulos descriptivos, meta tags, estructura semántica
- **Performance:** CSS y JS minificados, imágenes comprimidas
- **Accesibilidad:** Alt tags, labels, ARIA attributes

## Estructura de Archivos
```
/
├── index.html
├── quienes-somos.html
├── colecciones.html
├── merchandising.html
├── contacto.html
├── style.css
├── main.js
├── vite.config.js
├── package.json
├── netlify.toml
├── _redirects
└── assets/
    └── compressed/
        ├── hero-banner.jpg
        ├── jazz-concert.jpg
        ├── classical-music.jpg
        ├── abstract-art.jpg
        ├── sculpture.jpg
        ├── photography.jpg
        ├── digital-art.jpg
        ├── team.jpg
        ├── visitor1.jpg - visitor6.jpg
        ├── building.jpg
        ├── vision.jpg
        ├── director.jpg
        ├── curator.jpg
        ├── coordinator.jpg
        └── events-coordinator.jpg
```


# composicion-digital-p2
