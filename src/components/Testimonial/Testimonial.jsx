import "./Testimonial.scss";

function Testimonial({ testimonial }) {
  return (
    <li className="testimonial-item">
      <div
        className="testimonial-item__avatar testimonial-item__avatar--image"
        style={{ backgroundImage: `url(${testimonial.avatarUrl})` }}
      ></div>
      <div className="testimonial-item__details-wrapper">
        <p className="testimonial-item__details testimonial-item__details--name">
          {testimonial.customer}
        </p>
        <p className="testimonial-item__details testimonial-item__details--location">
          {testimonial.location}
        </p>
        <p className="testimonial-item__details testimonial-item__details--comment">
          {testimonial.comment}
        </p>
      </div>
    </li>
  );
}

export default Testimonial;
