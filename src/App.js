import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
	let [birthdate, setbirthdate] = useState('');
	let [currentdate, setcurrentdate] = useState('');
	let [count, setcount] = useState({
	  ms: null,
	  sec: null,
	  min: null,
	  hr: null,
	  days: null,
	  weeks: null,
	  mon: null,
	  years: null,
	});
  
	const age = () => {
	  const bdate = new Date(birthdate);
	  const cdate = new Date(currentdate);
	  const msecond = cdate - bdate;
	  const second = msecond / 1000;
	  const minutes = second / 60;
	  const hours = minutes / 60;
	  const day = hours / 24;
	  const week = Math.floor(day / 7);
	  const month = Math.floor(week * 0.229984);
	  const year = Math.floor(month / 12 + 0 );
  
	  setcount({
		ms: msecond,
		sec: second,
		min: minutes,
		hr: hours,
		days: day,
		weeks: week,
		mon: month,
		years: year,
	  });
	};
  
	useEffect(() => {
	  const currentdate = new Date();
	  const formattedDate = currentdate.toISOString().split('T');
	  setcurrentdate(formattedDate);
	},[]);
  return (
	<div className='age'>
    <div className="App">
   		<center>
		<div>
			<b>Today Date:<input type="date" name="" id="cdate"  value={currentdate} onChange={(e) => setcurrentdate(e.target.value)}></input></b><br/><br/>
			<b>Birth Date:<input type="date" name="" id="bdate"  value={birthdate} onChange={(e) => setbirthdate(e.target.value)} ></input></b><br></br><br></br>
			<input type='submit' value='Calculate Age' onClick={() => age()} style={{width:"200px",height:"40px", backgroundColor:"black",color:"white"}}></input>
		</div>
		<div className='info'>
			<div>
				<p>millisecond = <span>{count.ms}</span></p>
			</div>
			<div>
				<p> seconds = <span>{count.sec}</span></p>
			</div>
			<div>
				<p> minutes = <span>{count.min}</span></p>
			</div>
			<div>
				<p> hour = <span>{count.hr}</span></p>
			</div>
			<div>
				<p> day = <span>{count.days}</span></p>
			</div>
			<div>
				<p> week = <span>{count.weeks}</span></p>
			</div>
			<div>
				<p> month = <span>{count.mon}</span></p>
			</div>
			<div>
				<p> year = <span>{count.years}</span></p>
			</div>
		</div>
		</center>
    </div>
	</div>
  );
}

export default App;