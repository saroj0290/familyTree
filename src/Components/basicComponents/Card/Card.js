import React, { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const [subject, setSubject] = useState("");

  return (
    <div className="StudentCard">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Percent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.Name}</td>
            <td>{props.Class}</td>
            <td> {subject} </td>
            <td>{props.Percent}</td>
          </tr>
        </tbody>
      </table>
      <input
        type="text"
        placeholder="Enter Subject"
        onChange={(event) => setSubject(event.target.value)}
      />
    </div>
  );
};

export default Card;
