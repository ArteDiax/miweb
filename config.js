// ═══════════════════════════════════════════════════════════════
// 🎨 CONFIGURACIÓN DE OBRAS - ARTE DÍAX
// ═══════════════════════════════════════════════════════════════
// ✅ CÓMO AÑADIR UNA NUEVA OBRA: Copia un bloque {...}, pégalo antes del ], modifica los valores
// ✅ CÓMO MARCAR COMO VENDIDO: estado: "disponible" → estado: "vendido"
// 🏔️ CATEGORÍAS: "Almería" (paisajes locales) | "Otros" (abstracto, bodegones, etc.)
// Los estados pueden ser: "disponible", "Reservado", "Vendido", "No disponible" o "Colección privada"
//═══════════════════════════════════════════════════════════════

const EMAIL_ARTISTA = "arte.diax@gmail.com";

const cuadros = [
  {
    id: 1,
    titulo: "La Rambla",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "50 × 60 cm",
    precio: 270,
    estado: "disponible",
    imagen: "images/1larambla.jpg",
    descripcion: "Dibujo de la antigua Rambla (Actual Fco Garcia Lorca. Almería)."
  }
,
  {
    id: 2,
    titulo: "Calle vieja",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "61 × 50 cm",
    precio: 250,
    estado: "disponible",
    imagen: "images/calleviejaitalia.jpeg",
    descripcion: "Calle de Italia. Año 2024"
  }
,
  {
    id: 3,
    titulo: "meson gitano",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "33 × 41 cm",
    precio: 180,
    estado: "vendido",
    imagen: "images/mesongitano.jpg",
    descripcion: "Antigua vista del mesón gitano bajo La Alcazaba de Almería. Año 2025"
  }
,
  {
    id: 4,
    titulo: "Vieja puerta",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "25 × 20 cm",
    precio: 60,
    estado: "disponible",
    imagen: "images/porton1.jpg",
    descripcion: "Vieja puerta. Año 2024"
  }
,
  {
    id: 5,
    titulo: "Arrecife de las Sirenas.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "20 × 25 cm",
    precio: 60,
    estado: "disponible",
    imagen: "images/sirenas1.jpg",
    descripcion: "Pequeño oleo de la vista del arrecife de Las Sirenas. Cabo de Gata. Año 2024"
  }
,
  {
    id: 6,
    titulo: "La alfarera",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46,5 × 55 cm",
    precio: 300,
    estado: "Colección privada",
    imagen: "images/alfarera.jpeg",
    descripcion: "Alfarera. Año 2025"
  }
  ,
  {
    id:7,
    titulo: "Lavanderas en la Chanca",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "60 × 49,5 cm",
    precio: 225,
    estado: "disponible",
    imagen: "images/lavanderas.jpeg",
    descripcion: "Lavanderas años 50 en el barrio de la Chanca. Almería"
  }
  ,
  {
    id: 8,
    titulo: "Puerta de Purchena",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46 × 55 cm",
    precio: 290,
    estado: "disponible",
    imagen: "images/puertapurchena.jpg",
    descripcion: "Puerta de Purchena. Almería"
  }
,
  {
    id: 9,
    titulo: "El Arrecife de las Sirenas.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "65 × 46 cm",
    precio: 290,
    estado: "vendido",
    imagen: "images/arrecifesirenas.jpeg",
    descripcion: "El Arrecife de las Sirenas. Cabo de Gata. Almería"
  }
,
  {
    id: 10,
    titulo: "Atardecer en las salinas.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "50 × 61 cm",
    precio: 280,
    estado: "disponible",
    imagen: "images/atardecersalinas.jpeg",
    descripcion: "Atardecer en las Salinas de Cabo de Gata. Almería"
  }
,
  {
    id: 11,
    titulo: "El Cortijo del Fraile.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "50 × 70 cm",
    precio: 290,
    estado: "Colección privada",
    imagen: "images/Bodasdesangre.jpeg",
    descripcion: "El cortijo del fraile. Nijar. Almería"
  }
,
  {
    id: 12,
    titulo: "El patio.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46 × 38 cm",
    precio: 70,
    estado: "disponible",
    imagen: "images/elpatio2.jpeg",
    descripcion: "Patio"
  }
  ,
  {
    id: 13,
    titulo: "El rio.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "38 × 46 cm",
    precio: 90,
    estado: "disponible",
    imagen: "images/rio.jpeg",
    descripcion: "Paisaje de Cazorla"
  }
  ,
  {
    id: 14,
    titulo: "Patio cordobes.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46 × 38 cm",
    precio: 115,
    estado: "disponible",
    imagen: "images/elpatio.jpeg",
    descripcion: "Patio cordobes"
  }
  ,
  {
    id: 15,
    titulo: "Venecia.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "38 × 61 cm",
    precio: 130,
    estado: "disponible",
    imagen: "images/venecia.jpeg",
    descripcion: "Gondolas en Venecia. año 2025"
  }
  /*,
  {
    id: 2,
    titulo: "Mirador Alcazaba",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "38 × 61 cm",
    precio: 250,
    estado: "disponible",
    imagen: "images/alcazabamirador.jpg",
    descripcion: "Vista de la Alcazaba de Almería desde el mirador del cerro de San Cristobal. Año 2026"
  }*/
];