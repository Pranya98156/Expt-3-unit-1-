import "./ProductCard.css";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>

      <h3 className="product-name">{name}</h3>
      <p className="price">${price}</p>

      <span className={inStock ? "status in" : "status out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;
