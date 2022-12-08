// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bg-container">
          <div className="container">
            <h1 className="home-heading">Clothes That Get You Noticed</h1>
            <p className="desc">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              className="home-img"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
