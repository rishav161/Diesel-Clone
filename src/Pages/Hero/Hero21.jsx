import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { FreeMode } from 'swiper/modules'; // Import FreeMode from modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/free-mode'; // Import FreeMode styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { Text } from '@chakra-ui/react'; // Import Text component from Chakra UI
import { Link } from 'react-router-dom'; // Import Link from React Router

const Hero21 = ({ cardDeteals }) => {
  return (
    <div>
      <div className='container py-4 justify-content-center'>
        <Swiper
          freeMode={true} // Enable free mode for the Swiper
          grabCursor={true} // Show a grab cursor when hovering
          modules={[FreeMode]} // Use the FreeMode module
          slidesPerView={5} // Number of slides to show at once
          spaceBetween={30} // Space between slides
        >
          {cardDeteals.map((el, index) => (
            <SwiperSlide key={index}> {/* Unique key for each slide */}
              <Link to='/women'>
                <img
                  src={el.img} // Image source
                  alt={el.deteals} // Alt text for the image
                  style={{ height: '300px' }} // Inline style for image height
                />
                <Text>{el.deteals}</Text> {/* Display details */}
                <Text color='green.600'>
                  ₹ {el.price} {el.discount} discount {/* Display price and discount */}
                </Text>
                <Text textDecoration='line-through'>₹ {el.originalprice}</Text> {/* Original price */}
                <Text textAlign='right' color='red'>
                  Only Few Left {/* Warning message */}
                </Text>
              </Link>
              <Link to='/men'>See More</Link> {/* Link to see more items */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero21; // Export the component