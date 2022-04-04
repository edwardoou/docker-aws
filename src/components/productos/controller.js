const DATA = [
  {
    nombre: "mouse",
    marca: "Razer",
    modelo: "deathadder v2",
    precio: 120,
  },
  {
    nombre: "teclado",
    marca: "Razer",
    modelo: "blackwidow lite",
    precio: 300,
  },
  {
    nombre: "headset",
    marca: "Corsair",
    modelo: "Void RGB Elite Wireless",
    precio: 350,
  },
];

export const getProductos = (req, res) => {
  return res.status(200).json({
    ok: true,
    data: DATA,
  });
};
