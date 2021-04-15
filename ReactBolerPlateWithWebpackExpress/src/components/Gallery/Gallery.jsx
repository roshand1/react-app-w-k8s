import React, { useState } from 'react';
 import "./gallery.css";
 
function Gallery () {

  const gallery = "SauravWedding";

  const [imageNumber, setImageNumber] = useState(5487);
  const [displayImage, setDisplayImage] = useState(`https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/${gallery}/IMG_8032.JPG`);

  const back = () => {
    var newNumber = imageNumber -1;
    setImageNumber(newNumber);
    var newImage = `https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/${gallery}/IMG_${imageNumber}.JPG`;
    setDisplayImage(newImage);
  }

  const next = () => {
    var newNumber = imageNumber  + 1;
    setImageNumber(newNumber);
    var newImage = `https://s3-us-west-2.amazonaws.com/roshan.test.bucket/IphonePhotos/${gallery}/IMG_${imageNumber}.JPG`;
    setDisplayImage(newImage);
  }

    return (
      <div className="App">
        <h3>Our Pictures</h3>
        <div className="image-container">
                <img className="displayImage" src={displayImage} alt="sample" />
        </div>

        <div className="slide-container buttons">
          <button onClick={() => back()} type="button">
            Go Back
          </button>
          <button onClick={() => next()} type="button">
            Go Next
          </button>
        </div>
      </div>
    );
}

export default Gallery;