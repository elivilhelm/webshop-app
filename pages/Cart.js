export default function Cart({ name, price}) {
    return (
        <div className="container-fluid cart-container">
            <ul className="row cart-card">
                <li className="col-4">{ name }</li>
                <li className="col-4">{ price }</li>
                <button className="col-1">-1</button>
                <li className="col-2">Amount of Cards</li>
                <button className="col-1">+1</button>
            </ul>
        </div>
    );
}