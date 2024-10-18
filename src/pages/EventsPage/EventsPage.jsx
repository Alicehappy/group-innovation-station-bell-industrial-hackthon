import './EventsPage.scss';
import Card from '../../components/Card/Card';

const EventsPage = () => {
  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="events-page__cards">
        <Card
          title="Morning Bell"
          description="Start of the day"
          image="/path/to/image1.jpg"
        />
        <Card
          title="Lunch Bell"
          description="Midday break"
          image="/path/to/image2.jpg"
        />
      </div>
    </div>
  );
};

export default EventsPage;
