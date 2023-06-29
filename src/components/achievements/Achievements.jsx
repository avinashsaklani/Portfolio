import React from "react";
import "./achievements.css";
const achievements = () => {
  return (
    <div id="achievements">
      <h5>My journey</h5>
      <h2>Till Now</h2>

      <div className="container achievements__container">
        <article className="achievement">
          <div className="achievement__head">
            <h3>Achievements</h3>
          </div>
          <ul className="achievement__list">
            <li>
              <p>
                <b style={{ fontSize: 18, color: "white" }}>• AIR 24</b> on DSA
                Supreme Coding Challenge on GeeksforGeeks where more than 5000
                people participated.
              </p>
            </li>
            <li>
              <p>
                <b style={{ color: "white", fontSize: 18 }}>• 400+</b> DSA
                Problems Solved on Coding Platforms
              </p>
            </li>

            <li>
              <p>
                <b style={{ color: "white", fontSize: 18 }}>• Lvl. 6 </b>{" "}
                Specialist on Coding Ninjas
              </p>
            </li>
          </ul>
        </article>
        <article className="achievement">
          <div className="achievement__head">
            <h3>Certifications</h3>
          </div>
          <ul className="achievement__list">
            <li>
              <p>• Summer Training in ReactJS 2021 – by ThinkNext Solutions</p>
            </li>
            <li>
              <p>
                • Complete JavaScript & jQuery Course with Bonus Vue JS Intro
              </p>
            </li>
            <li>
              <p>• Advanced Styling and Responsive Design</p>
            </li>
            <li>
              <p>
                • Spiritual Talks about Ramayana by ISCKON Ujjain & Govt. of
                Madhya Pradesh (2020)
              </p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default achievements;
