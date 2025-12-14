export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li className="item-card" onClick={onSelect}>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}
