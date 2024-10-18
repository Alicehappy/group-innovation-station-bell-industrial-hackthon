import "./Testimonials.scss";
import "../../components/Testimonial/Testimonial";
import Testimonial from "../../components/Testimonial/Testimonial";

function Testimonials({ testimonials }) {
  return (
    <ul className="testimonial-list">
      {testimonials.map((testimonial, index) => {
        return <Testimonial key={index} testimonial={testimonial} />;
      })}
    </ul>
  );
}

export default Testimonials;
