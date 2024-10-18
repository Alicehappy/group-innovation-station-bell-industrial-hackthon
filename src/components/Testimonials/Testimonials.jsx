import "./Testimonials.scss";
import "../../components/Testimonial/Testimonial";
import Testimonial from "../../components/Testimonial/Testimonial";
import avatarImageUrls from "../../data/avatar-image-url.json";

function Testimonials({ testimonials }) {
  const combineArray = testimonials.map((testimonial, index) => ({
    ...testimonial,
    avatarUrl: avatarImageUrls[index],
  }));
  
  return (
    <ul className="testimonial-list">
      {combineArray.map((testimonial, index) => {
        return <Testimonial key={index} testimonial={testimonial} />;
      })}
    </ul>
  );
}

export default Testimonials;
