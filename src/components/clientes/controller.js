const DATA = [
  {
    nombre: "Alex",
    apellido: "Ramos",
    distrito: "Santa Anita",
  },
  {
    nombre: "Melany",
    apellido: "Cubas",
    distrito: "Santa Anita",
  },
  {
    nombre: "Piero",
    apellido: "Flores",
    distrito: "Santa Anita",
  },
];

export const getClientes = (req, res) => {
  return res.status(200).json({
    ok: true,
    data: DATA,
  });
};
