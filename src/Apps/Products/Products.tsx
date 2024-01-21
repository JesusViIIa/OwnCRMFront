import { useState } from "react"
import { IProduct } from "../../interfaces/IProduct"

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([{
    active: true,
    name: "Producto 1",
    price: 100,
    quantity: 1,
    _id: "1",
    description: "Producto 1",
  }])
  return (
    <div className="fixed right-0">
      <h1>Productos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.active ? "Si" : "No"}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
