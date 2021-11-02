export default function Cart({ name, price }) {
    return (
        <div className="container-fluid cart-container">
            <div className="row cart-card">
                <h5 className="col-3">Khar be albak sharmot</h5>
                <h5 className="col-2">14.99</h5>
                <h5 className="col-1">antal: 1</h5>
                <button className="col-1 btn-amount">+1</button>
                <button className="col-1 btn-amount">-1</button>
            </div>
        </div>
    );
}