import React, { useEffect, useState } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="Controls">
			<button disabled={count <= 1} onClick={decrease} className="Button">
				-
			</button>
			<span>{count}</span>
			<button disabled={count >= stock} onClick={increase} className="Button">
				+
			</button>
			
			<div>
				<button disabled={stock <= 0} onClick={() => onAdd(count)} className="Button">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;