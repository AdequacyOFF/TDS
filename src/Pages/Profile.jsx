import React from "react";
import { Link } from 'react-router-dom';
import '../Pages_css/Profile.css';

function Profile() {
  return (
    <div className="Profile-wrapper">
      <div className='Profile_photo' >
          <img src="src/Images/Photo.png" alt=""  />
      </div>
      <div className="User_info">
        <p className="Name">Name Sername</p>
        <p className="ID">ID: ID</p>
      </div>
      <div className="Project_buttons">
        <Link to='/Create'><button> СОЗДАТЬ ПРОЕКТ</button></Link>
      </div>
      <div className="Search">
        <form action="">
            <input type="text" placeholder="Присоединиться к проекту через название или #"/>
        </form>
      </div>
      <div className="Projects">
        <h1> Мои проекты</h1>
        <div className="Project_1">
          <p className="Project_name">TESA 
            <br />
            #5432
          </p>  
          <p className="GM_info">
            <p className="GM">
                Руководитель:  
                <Link to='/Profile'>
                    Владислав Баев
                </Link>
            </p>
            <br />
            <p className="Now">
                Текущее:
            </p>
          </p>
          
            <p className="Manage_project">
                <Link to='/Manage'>
                    Управлять проектом
                </Link>
            </p>
            <p className="Progress">
                70%
            </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
