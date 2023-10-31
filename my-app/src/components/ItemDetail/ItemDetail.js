import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{item.name}</h2>
      </header>
      <picture>
        <img src={item.img} alt={item.name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {item.category}</p>
        <p className="Info">Descripcion: {item.description}</p>
        <p className="Info">Precio: {item.price}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
