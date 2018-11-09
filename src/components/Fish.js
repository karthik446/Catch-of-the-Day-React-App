import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    }),
    addFishToOrder: PropTypes.func
  };
  render() {
    const { image, name, desc, price, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addFishToOrder(this.props.index)}
        >
          {!isAvailable ? "Sold Out" : "Add to Order"}
        </button>
      </li>
    );
  }
}

export default Fish;
