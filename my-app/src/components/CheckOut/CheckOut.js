import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

export const Checkout = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');

  const { cart, removeProduct, totalPrice } = useCartContext();

  const formHandler = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email) {
      return;
    }

    const total = totalPrice();
    const order = {
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
      })),
      total: total,
      date: new Date(),
      name,
      phone,
      email,
    };

    try {
      const db = getFirestore();

      // Update stock for each product in the order
      await Promise.all(
        order.items.map(async (productOrder) => {
          const productRef = doc(db, 'products', productOrder.id);
          const productDoc = await getDoc(productRef);
          const currentStock = productDoc.data().stock;

          await updateDoc(productRef, {
            stock: currentStock - productOrder.quantity,
          });
        })
      );

      // Add the order to the "orders" collection
      const orderRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(orderRef.id);

      // Remove products from the cart after a successful purchase
      removeProduct();

      // Clear the form fields
      setName('');
      setPhone('');
      setEmail('');
    } catch (error) {
      console.error('Error processing order:', error);
    }
  };

  return (
    <>
      <h2 className="info">
      Rellena el formulario y nos pondremos en contacto contigo para enviar tus productos.
      </h2>

      <form onSubmit={formHandler}>
        {cart.map((product) => (
          <div className="item-check" key={product.id}>
            <p>
              {' '}
              {product.name} {product.quantity}
            </p>
            <p> {product.price} </p>
          </div>
        ))}

        <div className="form-group">
          <label className="lab-check">Name</label>
          <input
            className="input-check"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Phone</label>
          <input
            className="input-check"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Email</label>
          <input
            className="input-check"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {orderId && (
          <p className="order">
            ¡Gracias por su compra! <br /> Este es tu número de pedido: <br />{' '}
            {orderId}{' '}
          </p>
        )}

        <div className="checking">
          <button className="check-bt" type="submit">
          Completar Compra
          </button>
        </div>
        <br />
        <div>
          <Link to="/">
            <button className="back-to-home">Volver al Inicio</button>
          </Link>
        </div>
      </form>
    </>
  );
};
