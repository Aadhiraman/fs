
import React, { useState } from "react";
import "./App.css";

function App() {

    const foods = [
        { id: 1, name: "Pizza", price: 200, emoji: "🍕" },
        { id: 2, name: "Burger", price: 120, emoji: "🍔" },
        { id: 3, name: "Dosa", price: 80, emoji: "🥞" },
        { id: 4, name: "Biryani", price: 180, emoji: "🍛" }
    ];

    const [cart, setCart] = useState([]);

    function addToCart(food) {
        const found = cart.find(item => item.id === food.id);

        if (found) {
            setCart(cart.map(item =>
                item.id === food.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...food, qty: 1 }]);
        }
    }

    function removeItem(id) {
        setCart(cart.filter(item => item.id !== id));
    }

    function totalPrice() {
        return cart.reduce(
            (total, item) => total + item.price * item.qty, 0
        );
    }

    function placeOrder() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Order placed successfully!");
            setCart([]);
        }
    }

    return (
        <div className="container">

            <h1>Food Delivery</h1>
            <p className="subtitle">Order Your Favourite Food</p>

            <h2>Food Menu</h2>

            <div className="food-list">

                {foods.map(food => (
                    <div className="food" key={food.id}>
                        <h2>{food.emoji}</h2>
                        <h3>{food.name}</h3>
                        <p>₹{food.price}</p>

                        <button onClick={() => addToCart(food)}>
                            Add to Cart
                        </button>
                    </div>
                ))}

            </div>

            <h2>Shopping Cart</h2>

            {cart.map(item => (
                <div className="cart-item" key={item.id}>
                    <span>
                        {item.name} x {item.qty}
                    </span>

                    <span>₹{item.price * item.qty}</span>

                    <button onClick={() => removeItem(item.id)}>
                        Remove
                    </button>
                </div>
            ))}

            <h3>Total: ₹{totalPrice()}</h3>

            <button className="order" onClick={placeOrder}>
                Place Order
            </button>

        </div>
    );
}

export default App;



// body {
//     font-family: Arial;
//     background: #f5f5f5;
//     margin: 0;
// }

// .container {
//     width: 85%;
//     margin: 30px auto;
//     text-align: center;
// }

// h1 {
//     color: #ff5722;
// }

// .subtitle {
//     color: gray;
// }

// .food-list {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 15px;
// }

// .food {
//     background: white;
//     padding: 15px;
//     border-radius: 10px;
//     box-shadow: 0 0 5px gray;
// }

// .food h2 {
//     font-size: 40px;
// }

// button {
//     background: #ff5722;
//     color: white;
//     padding: 10px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }

// .cart-item {
//     background: white;
//     padding: 12px;
//     margin: 10px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border-radius: 5px;
//     gap: 8px;
// }

// .order {
//     background: green;
//     padding: 12px 25px;
// }

// @media(max-width: 600px) {
//     .food-list {
//         grid-template-columns: repeat(2, 1fr);
//     }

//     .container {
//         width: 95%;
//     }
// }
