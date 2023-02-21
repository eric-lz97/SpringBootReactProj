import React from 'react';
import Des from "./Des.jsx";

const Card = ({name, description, price}) => {
    return (
        <div>
            {price >= 30 && <div>ON SALE</div>}
          <Des
           name={name}
           description={description}
          />
            <h1>{price}</h1>
        </div>
    )
}

export default Card;