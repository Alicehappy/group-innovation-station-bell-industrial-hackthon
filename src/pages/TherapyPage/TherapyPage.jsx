import "./TherapyPage.scss";
import { useState } from "react";
import { postUser } from "../../services/employee-api";
import GroupPage from "../GroupPage/GroupPage.jsx";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import bellGif from '../../assets/logos/anibell.gif'

function TherapyPage() {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [concern, setConcern] = useState("");
  const [group, setGroup] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const groupMapping = {
      "Work Stress": 1,
      "Family Issues": 2,
      "Anxiety Management": 3,
      Depression: 4,
      "Self-Esteem & Confidence": 5,
    };

    const groupId = groupMapping[group] || null;

    const submissionData = {
      "employee-id": employeeId,
      name: name,
      "job-title": jobTitle,
      group: group,
      "group-id": groupId,
      concern: concern,
    };

    try {
      await postUser(submissionData);

      setEmployeeId("");
      setName("");
      setJobTitle("");
      setConcern("");
      setGroup("");

      navigate(`/group/${groupId}`);
    } catch (error) {
      setError("Error submitting data:", error);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="employee-form">
      <div className="employee-form__help">
        <p className="get">Welcome to Employee Care!        </p>
        <p className="get-touch">Book a group session today with one of our mental health experts today</p>
        <div className="anilogo">
          <img src={bellGif} alt="Animated Bell Logo"></img>
        </div>
      </div>
      <div className="employee-form__container">
        <h2 className="employee-form__title">Reserve your spot today!</h2>
        <form onSubmit={handleSubmit} className="employee-form__form">
          <label className="employee-form__label" htmlFor="employeeId">
            Employee ID:
          </label>
          <input
            className="employee-form__input"
            type="text"
            id="employeeId"

            name="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />

          <label className="employee-form__label" htmlFor="name">
            Name:
          </label>
          <input
            className="employee-form__input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="employee-form__label" htmlFor="jobTitle">
            Job Title:
          </label>
          <input
            className="employee-form__input"
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <label className="employee-form__label" htmlFor="concern">
            Concern:
          </label>
          <textarea
            className="employee-form__input"
            id="concern"
            name="concern"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
          />

          <label className="employee-form__label" htmlFor="group">
            Group:
          </label>
          <select
            className="employee-form__input"
            id="group"
            name="group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="">Select a group</option>
            <option value="Work Stress">Work Stress</option>
            <option value="Family Issues">Family Issues</option>
            <option value="Anxiety Management">Anxiety Management</option>
            <option value="Depression">Depression</option>
            <option value="Self-Esteem & Confidence">
              Self-Esteem & Confidence
            </option>
          </select>

          <input className="employee-form__submit" type="submit" value="Submit" />
        </form>
      </div></div>
  );
}

export default TherapyPage;
