import { createSlice } from '@reduxjs/toolkit';
import { quizData } from './quizData';

const initialState = {
  questions: quizData.map(q => ({ ...q, selected: null })),
  currentIndex: 0,
  submitted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer(state, action) {
      const { id, answer } = action.payload;
      const question = state.questions.find(q => q.id === id);
      if (question) question.selected = answer;
    },
    nextQuestion(state) {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
      }
    },
    prevQuestion(state) {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      }
    },
    firstQuestion(state) {
      state.currentIndex = 0;
    },
    lastQuestion(state) {
      state.currentIndex = state.questions.length - 1;
    },
    submitQuiz(state) {
      state.submitted = true;
    },
    resetQuiz(state) {
      state.questions.forEach(q => q.selected = null);
      state.currentIndex = 0;
      state.submitted = false;
    }
  }
});

export const {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  firstQuestion,
  lastQuestion,
  submitQuiz,
  resetQuiz
} = quizSlice.actions;

export default quizSlice.reducer;
