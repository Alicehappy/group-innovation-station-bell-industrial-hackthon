import axios from "axios";
import "./TherapyPage.scss";
import { useState } from "react";

function TherapyPage() {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [concern, setConcern] = useState("");
  const [group, setGroup] = useState(""); // New state for group selection
  const url = import.meta.env.VITE_URL;
  const port = import.meta.env.VITE_PORT;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Determine group ID based on selected group
    const groupMapping = {
      "Work Stress": 1,
      "Family Issues": 2,
      "Anxiety Management": 3,
      Depression: 4,
      "Self-Esteem & Confidence": 5,
    };

    const groupId = groupMapping[group] || null; // Assign null if the group is not found

    const submissionData = {
      "employee-id": employeeId,
      name: name,
      "job-title": jobTitle,
      group: group,
      "group-id": groupId, // This is where the selected group ID is included
      concern: concern,
    };

    try {
      const response = await axios.post(
        `${url}:${port}/gethelp`,
        submissionData
      );

      console.log("Submission response:", response.data);

      // Clear the form
      setEmployeeId("");
      setName("");
      setJobTitle("");
      setConcern("");
      setGroup("");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="employee-form">
      <h2 className="employee-form__title">Employee Form</h2>
      <form onSubmit={handleSubmit} className="employee-form__container">
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
    </div>
  );
}

export default TherapyPage;
