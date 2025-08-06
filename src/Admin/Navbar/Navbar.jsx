import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import {
  FaTachometerAlt,
  FaUserMd,
  FaUsers,
  FaCalendarAlt,
  FaPills,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>🏥 Hospital Admin</h1>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.navLink}>
              <FaTachometerAlt style={{ color: "#ef81f0ff" }} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/doctors" className={styles.navLink}>
              <FaUserMd style={{ color: "#28a745" }} /> Doctors
            </Link>
          </li>
          <li>
            <Link to="/patients" className={styles.navLink}>
              <FaUsers style={{ color: "#f67308ff" }} /> Patients
            </Link>
          </li>
          <li>
            <Link to="/appointments" className={styles.navLink}>
              <FaCalendarAlt style={{ color: "#f1157cff" }} /> Appointments
            </Link>
          </li>
          <li>
            <Link to="/medical" className={styles.navLink}>
              <FaPills style={{ color: "#0ee6a5ff" }} /> Medical
            </Link>
          </li>
          <li>
            <Link to="/Login" className={styles.navLink}>
              <FaSignOutAlt style={{ color: "#dc3545" }} /> Logout
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.dashboard}>
        <h1>Welcome to SAP LifeCare Hospital</h1>
        <p className="param">Delivering care with compassion and technology. Start managing your hospital operations efficiently.</p>

      </div>
    </div>
  );
}

// import styles from '../styles/Navbar.module.css';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <h1 className={styles.logo}>🏥 Hospital Admin</h1>
//       <ul className={styles.navLinks}>
//         <li><Link to="/" className={styles.navLink}>Dashboard</Link></li>
//         <li><Link to="/doctors" className={styles.navLink}>Doctors</Link></li>
//         <li><Link to="/patients" className={styles.navLink}>Patients</Link></li>
//         <li><Link to="/appointments" className={styles.navLink}>Appointments</Link></li>
//         <li><Link to="/medical" className={styles.navLink}>Medical</Link></li>
//         <li><Link to="/logout" className={styles.navLink}>Logout</Link></li>
//       </ul>
//     </nav>
//   );
// }
