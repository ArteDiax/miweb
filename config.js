// ═══════════════════════════════════════════════════════════════
// 🎨 CONFIGURACIÓN DE OBRAS - ARTE DÍAX
// ═══════════════════════════════════════════════════════════════
// ✅ CÓMO AÑADIR UNA NUEVA OBRA: Copia un bloque {...}, pégalo antes del ], modifica los valores
// ✅ CÓMO MARCAR COMO VENDIDO: estado: "disponible" → estado: "vendido"
// 🏔️ CATEGORÍAS: "Almería" (paisajes locales) | "Otros" (abstracto, bodegones, etc.)
// Los estados pueden ser: "disponible", "Reservado", "Vendido", "No disponible" o "Colección privada"
// ═══════════════════════════════════════════════════════════════

const EMAIL_ARTISTA = "arte.diax@gmail.com";

const cuadros = [
  {
    id: 1,
    titulo: "La Rambla",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "50 × 60 cm",
    precio: 290,
    estado: "disponible",
    imagen: "images/1_larambla.jpg",
    descripcion: "Dibujo de la antigua Rambla (Actual Fco Garcia Lorca. Almería)."
  },
  {
    id: 2,
    titulo: "Calle vieja",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "61 × 50 cm",
    precio: 260,
    estado: "disponible",
    imagen: "images/2_calleviejaitalia.jpeg",
    descripcion: "Calle de Italia. Año 2024"
  },
  {
    id: 3,
    titulo: "meson gitano",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "33 × 41 cm",
    precio: 190,
    estado: "vendido",
    imagen: "images/3_mesongitano.jpg",
    descripcion: "Antigua vista del mesón gitano bajo La Alcazaba de Almería. Año 2025"
  },
  {
    id: 4,
    titulo: "Vieja puerta",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "25 × 20 cm",
    precio: 80,
    estado: "disponible",
    imagen: "images/4_viejapuerta.jpg",
    descripcion: "Vieja puerta. Año 2024"
  },
  {
    id: 5,
    titulo: "Arrecife de las Sirenas.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "20 × 25 cm",
    precio: 60,
    estado: "disponible",
    imagen: "images/5_sirenas1.jpg",
    descripcion: "Pequeño oleo de la vista del arrecife de Las Sirenas. Cabo de Gata. Año 2024"
  },
  {
    id: 6,
    titulo: "La alfarera",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46,5 × 55 cm",
    precio: 350,
    estado: "Colección privada",
    imagen: "images/6_alfarera.jpeg",
    descripcion: "Alfarera. Año 2025"
  },
  {
    id: 7,
    titulo: "Lavanderas en la Chanca",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "60 × 49,5 cm",
    precio: 300,
    estado: "disponible",
    imagen: "images/7_lavanderas.jpeg",
    descripcion: "Lavanderas años 50 en el barrio de la Chanca. Almería. Año 2026"
  },
  {
    id: 8,
    titulo: "Puerta de Purchena",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46 × 55 cm",
    precio: 290,
    estado: "disponible",
    imagen: "images/8_puertapurchena.jpg",
    descripcion: "Puerta de Purchena. Almería. Año 2025"
  },
  {
    id: 9,
    titulo: "El Arrecife de las Sirenas.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "65 × 46 cm",
    precio: 300,
    estado: "vendido",
    imagen: "images/9_arrecifesirenas.jpeg",
    descripcion: "El Arrecife de las Sirenas. Cabo de Gata. Almería. Año 2025"
  },
  {
    id: 10,
    titulo: "Atardecer en las salinas.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "50 × 61 cm",
    precio: 300,
    estado: "disponible",
    imagen: "images/10_atardecersalinas.jpeg",
    descripcion: "Atardecer en las Salinas de Cabo de Gata. Almería. Año 2024"
  },
  {
    id: 11,
    titulo: "El Cortijo del Fraile.",
    categoria: "Almería",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "50 × 70 cm",
    precio: 320,
    estado: "Colección privada",
    imagen: "images/11_elcortijodelfraile.jpeg",
    descripcion: "El cortijo del fraile. Nijar. Almería . Año 2024"
  },
  {
    id: 12,
    titulo: "El patio.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46 × 38 cm",
    precio: 100,
    estado: "disponible",
    imagen: "images/12_elpatio.jpeg",
    descripcion: "Patio. Año 2025"
  },
  {
    id: 13,
    titulo: "El rio.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "38 × 46 cm",
    precio: 130,
    estado: "disponible",
    imagen: "images/13_rio.jpeg",
    descripcion: "Paisaje de Cazorla. Año 2026"
  },
  {
    id: 14,
    titulo: "Patio cordobes.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "46 × 38 cm",
    precio: 130,
    estado: "disponible",
    imagen: "images/14_patiocordobes.jpeg",
    descripcion: "Patio cordobes. Año 2025"
  },
  {
    id: 15,
    titulo: "Venecia.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "38 × 61 cm",
    precio: 170,
    estado: "disponible",
    imagen: "images/15_venecia.jpg",
    descripcion: "Gondolas en Venecia. Año 2025"
  },
  {
    id: 16,
    titulo: "El vuelo.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "70 × 50 cm",
    precio: 270,
    estado: "disponible",
    imagen: "images/16_elvuelo.jpeg",
    descripcion: "Gaviotas volando. Año 2025"
  },
  {
    id: 17,
    titulo: "Cadiz.",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "70 × 50 cm",
    precio: 270,
    estado: "disponible",
    imagen: "images/17_cadiz.jpeg",
    descripcion: "Paisaje de Cadiz. Año 2025"
  },
  {
    id: 18,
    titulo: "El bazar",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "55 × 46 cm",
    precio: 260,
    estado: "disponible",
    imagen: "images/18_elbazar.jpeg",
    descripcion: "Mujer paseando por un bazar. Año 2025"
  },
  {
    id: 19,
    titulo: "New York",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "70 × 100 cm",
    precio: 450,
    estado: "disponible",
    imagen: "images/19_newyork.jpeg",
    descripcion: "Calle de New York. Año 2025"
  },
  {
    id: 20,
    titulo: "Noche en la Alhambra",
    categoria: "Varios",
    tecnica: "Óleo sobre lienzo",
    dimensiones: "39,5 × 50 cm",
    precio: 280,
    estado: "disponible",
    imagen: "images/20_nocheenlaalhambra.jpeg",
    descripcion: "Atardecer en la Alhambra de Granada. Año 2026"
  }
];
