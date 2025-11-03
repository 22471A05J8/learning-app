import React, { useState, useEffect } from 'react';
import { FaPen } from 'react-icons/fa';
import './Profile.css';
import DashboardLayout from './Dashboard';

const initialData = {
  username: 'Jenny Wilson',
  email: 'jenny@gmail.com',
  address: 'New York, USA',
  nickname: 'Sky Angel',
  dob: 'April 28, 1981'
};

const DEFAULT_PROFILE_PIC = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState(initialData);
  const [editField, setEditField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    const savedImage = localStorage.getItem('profileImage');
    if (savedData) setProfileData(JSON.parse(savedData));
    if (savedImage) setProfileImage(savedImage);
  }, []);

  // Save profileData to localStorage on update
  const handleSave = () => {
    const updatedData = { ...profileData, [editField]: tempValue };
    setProfileData(updatedData);
    localStorage.setItem('profileData', JSON.stringify(updatedData));
    setEditField(null);
  };

  // Handle editing
  const handleEdit = (field) => {
    setEditField(field);
    setTempValue(profileData[field]);
  };

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <DashboardLayout />
      <div className="profile-card">
        <div className="profile-header">
          <label htmlFor="profile-upload">
            <img
              src={profileImage || DEFAULT_PROFILE_PIC}
              alt="Profile"
              className="profile-image"
              style={{ cursor: 'pointer' }}
              title="Click to change profile picture"
            />
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <h2 className="profile-name">{profileData.username}</h2>
          <p className="profile-username">
            @{profileData.username.toLowerCase().replace(/\s+/g, '')}
            <FaPen size={10} className="edit-icon-small" />
          </p>
        </div>

        <div className="profile-details">
          {Object.keys(profileData).map((field, index) => (
            <div className="profile-row" key={index}>
              <span className="label">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </span>
              {editField === field ? (
                <>
                  <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="input-field"
                  />
                  <button className="save-btn" onClick={handleSave}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="value">{profileData[field]}</span>
                  <FaPen
                    size={12}
                    className="edit-icon"
                    onClick={() => handleEdit(field)}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
