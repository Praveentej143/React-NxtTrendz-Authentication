// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="web-logo"
      />
    </div>
    <ul className="nav-links-container">
      <Link to="/" className="home-path links">
        <li>Home</li>
      </Link>
      <Link to="/products" className="product-path links">
        <li>Products</li>
      </Link>
      <Link to="/cart" className="cart-path links">
        <li>Cart</li>
      </Link>
      <Link to="/logout" className="logout-path links">
        <li>
          <button type="button" className="logout-btn">
            Logout
          </button>
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
