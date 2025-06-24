import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuizProvider } from './component/QuizContext';
import Quiz from './component/Quiz';

function App() {
  return (
    <QuizProvider>
      <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center text-red">ReactJS Quiz</h1>
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
