import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './vd3';
import UserValidationForm from './vd4';

function App() {
  //Ví dụ 3
  // const handleFormSubmit = (formData) => {
  //   console.log("Dữ liệu đăng ký:", formData);
  // };

  // return (
  //   <div className="App">
  //     <h1>Ví dụ 3: Đăng ký sử dụng useReducer + validation</h1>
  //     <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
  //   </div>
  // );

  //Ví dụ 4
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu gửi:", formData);
  };

  return (
    <div className="App">
      <h1>Ví dụ 4: Form validate nâng cao</h1>
      <UserValidationForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
