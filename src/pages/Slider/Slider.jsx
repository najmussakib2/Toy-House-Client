import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className='text-center'>
             <Carousel>
                <div className=''>
                    <img src="https://m.media-amazon.com/images/M/MV5BMTg4Mzc1OTUyOF5BMl5BanBnXkFtZTgwNDY4OTIwMjE@._V1_.jpg"/>
                    
                </div>
                <div className=''>
                    <img src="https://i0.wp.com/thefwoosh.com/wp-content/uploads/2023/08/Weekly-Ep318-Marvel-Legends-Transformers-DC-Multiverse-Ramen-Toys-Boss-Fight-Abyss-Force-more-Featured.jpg?resize=1280%2C720&ssl=1" />
                    
                </div>
                <div className=''>
                    <img src="https://s.yimg.com/ny/api/res/1.2/uQLkFAy0rfFDFTMgHAgKEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/cbce4090-bc2f-11ed-8fdb-272fb30835c6" />
                    
                </div>
                <div className=''>
                    <img src="https://i.pinimg.com/originals/ef/64/3b/ef643bec1a5d6ef9892416e7c862ba3e.jpg" />
                    
                </div>
                <div className=''>
                    <img src="https://live.staticflickr.com/1191/5150826955_ac645535fb_b.jpg" />
                    
                </div>
                
            </Carousel>
        </div>
    );
};

export default Slider;