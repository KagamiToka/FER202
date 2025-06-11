import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';
import UserProfile from './UserProfile';
import NameList from './NameList';
import { Container, Row, Col } from 'react-bootstrap';
import StudentCard from './StudentCard';

function App() {
  const userData = {name: "Nguyễn Văn Nam", age: 20};
  const nameList = ["Võ Văn A", "Phan Văn B", "Trần Văn C"];
  const students = [
    {name: "Nguyễn Song Gia Huy" , age: 20, avatar: "image/Screenshot 2025-06-11 161033.png"},
    {name: "Mai Đăng Hiếu" , age: 21, avatar: "image/Screenshot 2025-06-11 161048.png"},
    {name: "Nguyễn Công Khoa" , age: 21, avatar: "image/Screenshot 2025-06-11 161059.png"},
  ];
  return (
    <>
      <Welcome name = "namnvde180527@fpt.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={nameList} />
      <Container>
        <h1 className='my-4 text-center'>Student Information</h1>
        <Row style={{height: "400px"}}>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
