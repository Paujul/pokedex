import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { name, id, type, exp } = this.props;
    // const exp = this.props.base_experience;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <div className="Card">
        <h1 className="Card-name">{name}</h1>
        <img className="Card-img" src={img} alt={name} />
        <p className="Card-desc">Type: {type}</p>
        <p className="Card-desc">EXP: {exp}</p>
      </div>
    );
  }
}

export default Card;
