import { Link } from "react-router-dom";
import "./ProductList.css";

const dummyProducts = [
  {
    id: 1,
    title: "Professional Football",
    price: 1499,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjWv3ndTIa_cBa_0mPewoyQIbwqCqvuPmcgbIAQlUN_0oqM3x28H9ciYGTOh-DoBCXgzf-IABeLDnz9WjuQhgD_6PsanL5Fp9EURE7QmqqUR6NNIyToWDxvA"
  },
  {
    id: 2,
    title: "Basketball Pro",
    price: 1299,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQu9lb0Xtrm464Ag1ycK0ddTEumu-AdcV4kX8ls7m3ez9wDxEQItQEtZtSSqgcaKzIHBw25QJpU-t3zkThKzFzlUBVT-Sczx8UGXO0vTMT7370DnAqb7hOxBnI"
  },
  {
    id: 3,
    title: "Tennis Racquet",
    price: 2199,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJoqlkVxEr_cFklLpi7wgmOfMzBnwIfLYPXzP3MI6_1wAufxUll8Xc8nBLe-QjQu2vvqOAXvk2qNimp7R7B0eS0uFVkLoaoXcw1YOIKDnj1H487x0qRqCJMw"
  },
  {
    id: 4,
    title: "Cricket Bat",
    price: 2999,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRS56XnUcy1bZ5V1cbAuJAeMQ_Ottu7DojldNOYred1FjmUlJb5DXEA6mPxnceYX2p7qyKZ8c3_WmjSFrUbXvCIN5DkoBmI7cSDpYXSg5GMKl-m6PjnUGQJ"
  },
  {
    id: 5,
    title: "Running Shoes",
    price: 3499,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROGCBWoCr8vDWjmdVlnp-hga1uxPA2VKqnkFRiaCqEdVVdqA7bDyEHg4qtaBs82-zwyRjAf_e9RNhIpN3rY9YfB6rpzR7Ofp6kuzKXXxoznh5Je33Za6jx3Q"
  },
  {
    id: 6,
    title: "Football Gloves",
    price: 3499,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPS0wLD__sTLZOZYxx19zJQxwR2MOyabWJizaQ4NW53hqAOFi-TEMsjpr2ekPxCTob10G1_vb9tmSao1DTdA7i6XuQqu-bOOgUHQJVFkxJ8cdu7BFHZ2isZAI"
  }
  
];

export default function ProductList() {
  return (
    <section className="product-list-container">
      {dummyProducts.map((prod) => (
        <div key={prod.id} className="product-card">
          <img src={prod.image} alt={prod.title} className="product-image" />
          <h3 className="product-title">{prod.title}</h3>
          <p className="product-price">₹{prod.price}</p>
          <Link to={`/product/${prod.id}`} className="view-button">
            View Product
          </Link>
        </div>
      ))}
    </section>
  );
}
