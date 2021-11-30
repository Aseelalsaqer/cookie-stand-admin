import React from 'react'
import { useState } from "react";
import CreateForm from './CreateForm';

export default function Main() {
 
  const [location, setLocation] = useState();
  const [maximum, setmax] = useState();
  const [minimum, setmin] = useState();
  const [average, setavg] = useState();
//   const [report, setReport] = useState({});
  function formHandle(event) {
    event.preventDefault();
    
    // report.push(setLocation(event.target.loc.value));
    // report.push(setmin(event.target.min.value));
    // report.push(setmax(event.target.max.value));
    // report.push(setavg(event.target.avg.value));
    setLocation(event.target.loc.value)
    setmin(event.target.min.value)
    setmax(event.target.max.value) 
    setavg(event.target.avg.value)
  }

    
    
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen ">
            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100">
            <CreateForm formHandle={formHandle} />
        <p className="py-11">
          Report Table Coming Soon...
        </p>
        <p>
          {`{"Location":"${location}","minCustomers":"${minimum}","maxCustomers":"${maximum}","avgCookies":"${average}" }`}
        </p>
        
        
      </main>
        </div>
    )
}
