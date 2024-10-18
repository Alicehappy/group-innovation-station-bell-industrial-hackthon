import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Carousel>
        <Card
          title="Mental Health Leadership"
          description="Supporting over 6.9 million Canadians through Bell Let's Talk."
          image="../../src/assets/images/bell-card.avif"
        />
        <Card
          title="Environmental Sustainability"
          description="Committed to carbon neutral operations by 2025 and recycling over 16.5M devices."
          image="../../src/assets/images/Bell-Enviro.png"
        />
        <Card
          title="Connecting Remote Communities"
          description="Investing nearly $19 billion to expand high-speed internet to rural Canada."
          image="../../src/assets/images/Bell-connect.png"
        />
        <Card
          title="Innovation and Research"
          description="Investing $500M annually in R&D for a better, more connected future."
          image="../../src/assets/images/Bell-Research.jpg"
        />
        <Card
          title="Community Giving"
          description="Bell employees donated $2.6M to charities, matched by $1.8M from Bell."
          image="../../src/assets/images/Bell-giving.jpg"
        />
      </Carousel>
    </div>
  );
}

export default Home;
