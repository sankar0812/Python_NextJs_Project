'use client';
import React, {useEffect, useState} from "react";

function index() {
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((response) => response.json())
      .then((data) => {

         setMessage(data.message);
         setPeople(data.people);
         
      });
  }, []);

  return (
    <div>
      <div>{message}</div>

      {people.map((person, index) => (
         <div key={index}>{person}</div>
      ))}
    </div>
  );
}

export default index;
