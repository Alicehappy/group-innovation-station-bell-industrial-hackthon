import "./Testimonials.scss";
import "../../components/Testimonial/Testimonial";
import Testimonial from "../../components/Testimonial/Testimonial";
import avatarImageUrls from "../../data/avatar-image-url.json";

const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;


function Testimonials({ testimonials }) {
  const combineArray = testimonials.map((testimonial, index) => ({
    ...testimonial,
    avatarUrl: `${PUBLIC_URL}${avatarImageUrls[index]}`,
  }));

  return (
    <div className="testimonial">
      <h1 className="testimonial-head">Real Experiences, Real Stories</h1>
      <ul className="testimonial-list">
        {combineArray.map((testimonial, index) => {
          return <Testimonial key={index} testimonial={testimonial} />;
        })}
      </ul></div>
  );
}

export default Testimonials;
