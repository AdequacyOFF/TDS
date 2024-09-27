import { Link } from 'react-router-dom';
import '../Pages_css/Header.css';

function Header() {

  return (
    <div className='Head'>
      <Link to='/Profile' className='Profile_logo' title=''><img src="src/Images/Profile.png" alt=""  className='Profile_logo' />
      <div class="dropdown-content">
          <Link to='/Profile' className='Profile_links'>Profile</Link>
          <Link to='/' className='Profile_links'>Home</Link>
        </div>
      </Link>
      <Link to='/' className='Logo' title=''><img src="src/Images/LOGO_tea.png" alt="" className='Logo'/></Link>
    </div>
  )
}

export default Header
