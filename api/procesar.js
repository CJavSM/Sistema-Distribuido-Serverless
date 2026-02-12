export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Simular error intencional
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error al procesar el nombre"
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    longitud: nombre.length
  });
}
