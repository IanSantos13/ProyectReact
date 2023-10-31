import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{item.name}</h2>
      </header>
      <picture>
        <img src={item.img} alt={item.name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${item.price}</p>
        <p className="Info">Stock disponible: {item.stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={"/item/"+item.id} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
