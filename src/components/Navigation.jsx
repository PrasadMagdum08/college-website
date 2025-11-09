import { useState } from 'react';

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: 'About Us',
      submenu: ['Vision & Mission', 'Principal\'s Desk', 'Accreditation', 'Governing Body', 'IQAC']
    },
    {
      title: 'Academics',
      submenu: ['Academic Calendar', 'Programs Offered', 'Syllabus', 'Timetable', 'Academic Regulations']
    },
    {
      title: 'Exam Cell',
      submenu: ['Examination Schedule', 'Results', 'Exam Rules', 'Revaluation']
    },
    {
      title: 'Research',
      submenu: ['Research Areas', 'Publications', 'Projects', 'Ph.D. Program']
    },
    {
      title: 'Departments',
      submenu: ['Computer Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics & Telecommunication']
    },
    {
      title: 'Admission',
      submenu: ['How to Apply', 'Eligibility', 'Fee Structure', 'Scholarship']
    },
    {
      title: 'Campus Life',
      submenu: ['Student Activities', 'Clubs', 'Sports', 'Cultural Events']
    },
    {
      title: 'Facilities',
      submenu: ['Library', 'Laboratories', 'Hostel', 'Canteen', 'Transport']
    },
    {
      title: 'Placement',
      submenu: ['Placement Cell', 'Recruiters', 'Placement Statistics', 'Training']
    },
    {
      title: 'Contact',
      submenu: []
    }
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a href="#" className="nav-link">{item.title}</a>
              {item.submenu.length > 0 && (
                <ul className={`submenu ${activeMenu === index ? 'active' : ''}`}>
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex} className="submenu-item">
                      <a href="#">{subitem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
