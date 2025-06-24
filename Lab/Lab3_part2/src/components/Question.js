import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Question({questionData, onAnswer, currentIndex, total}) {
    const{question, options} = questionData;

    return(
        <div className='card p-4'>
            <h4>Câu {currentIndex + 1} / {total}</h4>
            <p>{question}</p>
            {options.map((opt, index) => (
                <button 
                    key={index}
                    className='btn btn-outline-primary d-block w-100 my-2'
                    onClick={() => onAnswer(opt)}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}

export default Question;