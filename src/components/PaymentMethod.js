import { Link } from 'react-router-dom';
import {useState } from 'react';

function PaymentMethod({ mode }) {
    const [show, setShow] = useState(false);
     const handleClick = (event) => {
        if (mode.name === "Loyalty Customer") {
            event.preventDefault()
            setShow(true);
        }
     }

    return (
    <div className="col-md-3">
    <Link to={`/payments/${mode.name}`} onClick={handleClick}>
        <div className="credit-cards">
            <div className="payment-icons">
                <img
                    src={mode.image}
                    alt="icon"
                    className="img-fluid"
                />
            </div>
            <h3>{mode.title}</h3>
        </div>
    </Link>
</div>);
}

export default PaymentMethod;