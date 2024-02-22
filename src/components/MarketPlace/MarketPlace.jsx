import React from 'react';
import Card from './Card'; // Import the Card component

function MarketPlace() {
  return (
    <div className="mx-16 sm:mx-8 md:mx-16 mb-10 mt-6">
      <div className="border border-solid black bg-blue-200 m-10 p-10">
        {/* <h1>Hello World</h1> */}
        <Card
          productName="Product Name"
          price="$100"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!"
          datePosted="2024-02-19"
          location="New York"
        />
      </div>
    </div>
  );
}

export default MarketPlace;
