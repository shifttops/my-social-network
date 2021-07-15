import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {
        text: 'I love Nick VERYY MUCH',
        date: '13 July 2021'
    },
    {
        text: 'Nick loves me moree',
        date: '13 July 2021'
    },
    {
        text: 'I married Nick today',
        date: '15 July 2021'
    },
    {
        text: 'Nick отлизал мне очень хорошо today)',
        date: '15 July 2021'
    }
];

const userInfo = {
    userName: 'Kupreeva Daria',
    avatarUrl:  'https://sun9-62.userapi.com/impg/c857532/v857532088/1694a8/lNulhqu_wkg.jpg' +
        '?size=646x1080&quality=96&sign=051246fe03e9100992627a57b09849c1&type=album',
    birthDate: '01 May 2004',
    city: 'Minsk',
    edu: 'BSU',
}


ReactDOM.render(
  <React.StrictMode>
    <App userInfo={userInfo}
         postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
