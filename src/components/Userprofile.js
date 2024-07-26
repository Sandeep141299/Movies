import React from "react";
import "./Css/Userprofile.css";

function UserProfile() {
  return (
    <div className='user-profile'>
      <div className='user-profile-header'>
        <img className='user-profile-picture' src='./Image/Useravatar.png' alt='User Profile' />
        <h1 className='user-profile-name'>John Doe</h1>
        <p className='user-profile-location'>New York, NY</p>
        <p className='user-profile-location'>Johndoe@12Gmail.com</p>
        <p className='user-profile-bio'>
          I am a Student, passionate about watching movies.
          <br /> In my free time, or spending time with my Family Members
        </p>
      </div>
      <div className='user-profile-options'>
        <button>
          <a id='a' href='/404'>
            Edit Profile
          </a>
        </button>

        <button>
          <a id='a' href='/login'>
            Logout
          </a>
        </button>
      </div>
      <div className='user-profile-interactions'>
        <h2>Interact with other users:</h2>
        <ul>
          <li>
            <a href='/404'>Send a message</a>
          </li>
          <li>
            <a href='/404'>Add as a friend</a>
          </li>
          <li>
            <a href='/404'>Like their posts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
