import React, { Component } from 'react';
import './Recipie.css';
import PropTypes from 'prop-types';

class Recipie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }    
    
    render() {
        const { title, img, instructions } = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div className="recipie-card">
            <div className="recipie-card-img">
                <img src={img} alt={title}/>
            </div>
            <div className="recipie-card-content">
                <h3 className="recipie-title"> {title}</h3>
                <h4>Ingredients:</h4>
                <ul>
                    {ingredients}
                </ul>
                <h4>Instructions:</h4>
                <p>{instructions}</p>
            </div>
            
            </div>
        );
    }
}

export default Recipie;
