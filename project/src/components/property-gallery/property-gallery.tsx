
import React from 'react';

type PropertyGalleryScreenProps = {
  images: string[];
}

export default function PropertyGallery({images}: PropertyGalleryScreenProps):JSX.Element {
  return (
    <React.Fragment>
      {
        images.map((image, index) => (
          <div className="property__image-wrapper" key={`${image}-${index + 1}`}>
            <img
              className="property__image"
              src={image}
              alt="Photo studio"
            />
          </div>
        ))
      }
    </React.Fragment>
  );
}
