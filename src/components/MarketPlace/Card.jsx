import React from 'react';
import { useNavigate } from 'react-router-dom'
import defaultImage from '../../assets/icons/image.png';

function Card({ productName, price, description, datePosted, location, imageUrl }) {

  const navigate = useNavigate();

  const handleChoose = () => {

    navigate('/ProductPage', {
      state: {
        productName,
        price,
        description,
        datePosted,
        location,
        imageUrl
      }
    });
  };

  return (
    <div className="card" onClick={handleChoose}>
      <div className="card-container">
        <div className="card-image-container">
          <div className="card-image-container">
            <div className="flex justify-center items-center h-32 w-32 bg-white">
              <img src={imageUrl ? imageUrl : defaultImage} alt={productName} className="card-image w-6 h-6" />
            </div>

          </div>

          {/* <hr className="horizontal-line" /> */}
        </div>
        <div className="card-content border-l border-gray-500 hover:border-gray-300">
          <p className="card-title">{productName}</p>
          <p className="small-desc">Price: {price}</p>
          <p className="small-desc">Description: {description}</p>
          <div className="flex items-end justify-between">
            <p className="small-desc">{datePosted}</p>
            <p className="small-desc">{location}</p>
          </div>
        </div>
      </div>
      <div className="go-corner" >
        <div className="go-arrow">→</div>
      </div>
    </div>
  );
};

export default Card;
