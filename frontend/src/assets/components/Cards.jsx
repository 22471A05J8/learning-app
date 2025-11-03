import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    name: "Courses",
    image: "https://static.vecteezy.com/system/resources/previews/033/176/695/non_2x/course-icon-vector.jpg",
    route: "/courses",
  },
  {
    name: "PDFs",
    image: "https://icons.veryicon.com/png/o/business/background-management-system/pdf-file-4.png",
    route: "/pdfs",
  },
  {
    name: "Videos",
    image: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
    route: "/videos",
  },
  {
    name: "Interview Questions",
    image: "https://www.shutterstock.com/image-vector/personal-interview-survey-glyph-icon-260nw-1592455144.jpg",
    route: "/interview-questions",
  },
  {
    name: "Quiz",
    image: "https://t4.ftcdn.net/jpg/12/10/39/63/360_F_1210396388_GcacBS8KrOgGcEn0oekftbzFuRf4pb77.jpg",
    route: "/quiz",
  },
   {
    name: "Editor",
    image: "https://static.thenounproject.com/png/4601528-200.png",
    route: "/quiz",
  },
  
];

const ProfileCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    // First go to login page and pass the selected route
    navigate("/login", { state: { redirectTo: route } });
  };

  return (
    <div className="learninghub-container">
      <h2 className="learninghub-heading">Learning Hub</h2>
      <div className="learninghub-cards-wrapper">
        {profiles.map((profile, index) => (
          <div
            className="learninghub-card"
            key={index}
            onClick={() => handleCardClick(profile.route)}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="learninghub-avatar"
            />
            <h3 className="learninghub-title">{profile.name}</h3>
            <p className="learninghub-text">
              Access {profile.name} to enhance your learning
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCards;
