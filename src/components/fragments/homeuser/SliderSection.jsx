import React from 'react';
import thumbnail1 from '../../../assets/images/Video Thumbnail (1).jpg';
import thumbnail2 from '../../../assets/images/Video Thumbnail (2).jpg';
import thumbnail3 from '../../../assets/images/Video Thumbnail (3).jpg';

function SliderSection() {
  return (
    <section className="flex justify-center py-10">
      <div className="flex space-x-4 overflow-auto">
        <img src={thumbnail1} alt="Slider 1" style={{ width: "500px" }} className="rounded-lg shadow-lg" /> {/* Custom ukuran 500px */}
        <img src={thumbnail2} alt="Slider 2" style={{ width: "500px" }} className="rounded-lg shadow-lg" />
        <img src={thumbnail3} alt="Slider 3" style={{ width: "500px" }} className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
}

export default SliderSection;
