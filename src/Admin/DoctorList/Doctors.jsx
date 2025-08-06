import styles from '././Doctors.module.css';

export default function Doctors() {
  const doctorList = [
    { id: 1, name: 'Dr. Arjun Mehta', specialty: 'Cardiologist', contact: '9876543210' },
    { id: 2, name: 'Dr. Priya Shah', specialty: 'Dermatologist', contact: '9123456789' },
    { id: 3, name: 'Dr. Aman Verma', specialty: 'Neurologist', contact: '9988776655' },
    { id: 4, name: 'Dr. Riya Patel', specialty: 'Pediatrician', contact: '9012345678' },
    { id: 5, name: 'Dr. Karan Singh', specialty: 'Orthopedic', contact: '8901234567' },
    { id: 6, name: 'Dr. Anjali Roy', specialty: 'Gastroenterologist', contact: '9812345678' },
    { id: 7, name: 'Dr. Manish Rao', specialty: 'ENT Specialist', contact: '9871234560' },
    { id: 8, name: 'Dr. Sneha Iyer', specialty: 'Oncologist', contact: '9765432101' },
    { id: 9, name: 'Dr. Nikhil Jain', specialty: 'Urologist', contact: '9988998899' },
    { id: 10, name: 'Dr. Meera Joshi', specialty: 'Gynecologist', contact: '9123456790' },
    { id: 11, name: 'Dr. Ravi Kumar', specialty: 'Physiotherapist', contact: '8899776655' },
    { id: 12, name: 'Dr. Tara Sharma', specialty: 'Dermatologist', contact: '9870011223' },
    { id: 13, name: 'Dr. Dev Patel', specialty: 'Psychiatrist', contact: '9988771122' },
    { id: 14, name: 'Dr. Alok Yadav', specialty: 'Cardiologist', contact: '9123401234' },
    { id: 15, name: 'Dr. Anu Menon', specialty: 'General Physician', contact: '9800123456' },
    { id: 16, name: 'Dr. Vinay Bhat', specialty: 'Radiologist', contact: '9998887776' },
    { id: 17, name: 'Dr. Kavya Reddy', specialty: 'Neurologist', contact: '9123498765' },
    { id: 18, name: 'Dr. Rajiv Pillai', specialty: 'Nephrologist', contact: '9876540011' },
    { id: 19, name: 'Dr. Naina Sharma', specialty: 'Dentist', contact: '9001122334' },
    { id: 20, name: 'Dr. Rohit Das', specialty: 'Endocrinologist', contact: '9877601234' },
  ];

  return (
    <div className={styles.doctors}>
      <h2>Doctors List</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {doctorList.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.specialty}</td>
              <td>{doc.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



// import styles from '../styles/Doctors.module.css';

// export default function Doctors() {
//   return (
//     <div className={styles.doctors}>
//       <h2>Doctors Page</h2>
//       <p>List of doctors will appear here.</p>
//     </div>
//   );
// }
