const tshirts = [
  { title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
  { title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1 },
  { title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
  { title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
  { title: 'Grey T-Shirt', image: 'grey-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
  { title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
  { title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
  { title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 },
  { title: 'Teal T-Shirt', image: 'teal-t-shirt.jpg', price: 7.99, stock: 2, quantity: 1 }
];

function App() {
  const [shirts, setShirts] = React.useState(tshirts);

  function handleBuy(index) {
    const updated = shirts.slice(); // make a copy
    const item = updated[index];
    item.stock = item.stock - item.quantity;
    if (item.stock < 0) {
      item.stock = 0;
    }
    setShirts(updated);
  }

  function handleQuantity(index, value) {
    const updated = shirts.slice();
    updated[index].quantity = Number(value);
    setShirts(updated);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
      {shirts.map(function (shirt, index) {
        return (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
            <h3>{shirt.title}</h3>
            <img src={"images/" + shirt.image} alt={shirt.title} style={{ width: '100%' }} />
            <p>${shirt.price.toFixed(2)}</p>
            <p>
              {shirt.stock > 0 ? "In Stock: " + shirt.stock : <span style={{ color: 'red' }}>Out of Stock</span>}
            </p>

            {shirt.stock > 0 && (
              <div>
                <select value={shirt.quantity} onChange={(e) => handleQuantity(index, e.target.value)}>
                  {Array.from({ length: shirt.stock }, (_, i) => i + 1).map(function (num) {
                    return <option key={num} value={num}>{num}</option>;
                  })}
                </select>
                <button onClick={() => handleBuy(index)}>Buy</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
