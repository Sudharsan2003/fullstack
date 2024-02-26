import  { useState } from 'react';
import '../pages/css/Profile.css'
function Profile() {
  // State variables to manage profile data and edit mode
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St',
    city: 'Anytown',
    state: 'Anystate',
    zip: '12345'
  });
  const [editMode, setEditMode] = useState(false);
  const [tempProfileData, setTempProfileData] = useState({ ...profileData });

  // Function to handle input change in edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempProfileData({ ...tempProfileData, [name]: value });
  };

  // Function to handle save action
  const handleSave = () => {
    setProfileData({ ...tempProfileData });
    setEditMode(false);
  };

  // Function to handle cancel action
  const handleCancel = () => {
    setTempProfileData({ ...profileData });
    setEditMode(false);
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      {editMode ? (
        <div>
          <label>
            Name:
            <input type="text" name="name" value={tempProfileData.name} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={tempProfileData.email} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={tempProfileData.address} onChange={handleInputChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={tempProfileData.city} onChange={handleInputChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={tempProfileData.state} onChange={handleInputChange} />
          </label>
          <label>
            Zip:
            <input type="text" name="zip" value={tempProfileData.zip} onChange={handleInputChange} />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Address:</strong> {profileData.address}</p>
          <p><strong>City:</strong> {profileData.city}</p>
          <p><strong>State:</strong> {profileData.state}</p>
          <p><strong>Zip:</strong> {profileData.zip}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Profile;