import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGroup } from "../../services/therapy-api.js";
import "./GroupPage.scss";

function GroupPage() {
  const { id } = useParams();
  const [group, setGroup] = useState({});

  const fetchWarehouses = async () => {
    const response = await getGroup(id);
    setGroup(response);
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  //   useEffect(() => {}, [group]);

  return (
    <div className="group">
      <section className="group__intro">
        <p className="group__welcome">Welcome!</p>
        <p className="group__welcome">
          We are so glad to have you join the {group.group} group therapy
          sessions. This is a safe and supportive spave where you can connect
          with others who share similar experiences, and access the support of
          an experienced therapist. We understand that facing personal
          challenges can be difficult, and we are here to help you navigate this
          journey together. Please reach out to our support team if you have any
          questions or concerns.
        </p>
      </section>

      <h2 className="group__group">Your Group:</h2>

      <div className="group__line">
        <h3 className="group__key">Group:</h3>
        <p className="group__value">{group.group}</p>
      </div>

      <div className="group__line">
        <h3 className="group__key">Therapist:</h3>
        <p className="group__value">{group.therapist}</p>
      </div>

      <div className="group__line">
        <h3 className="group__key">About Your Group:</h3>
        <p className="group__value">{group.description}</p>
      </div>

      <div className="group__line">
        <h3 className="group__key">Session Days:</h3>
        <p className="group__value">{group.day}</p>
      </div>

      <div className="group__line">
        <h3 className="group__key">Session Times:</h3>
        <p className="group__value">6:30 pm</p>
      </div>

      <Link to="/" className="group__link">
        <p className="group__link-para">Go to Home Page</p>
      </Link>
    </div>
  );
}

export default GroupPage;
