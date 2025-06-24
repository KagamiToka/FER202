import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Result({score, total, onRestart}) {
    return(
        <div>
            <h3>Hoàn Thành !</h3>
            <p>Bạn đúng {score} / {total}</p>
            <button className='btn btn-success mt-3' onClick={onRestart}>Chơi lại</button>
        </div>
    );
}
export default Result;