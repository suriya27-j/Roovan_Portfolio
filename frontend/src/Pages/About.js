import React, { useState, useEffect } from "react";
//import Work from "../Components/Work";
import { eduDetails, personalDetails,  } from "../Details";

function About() {
  const [fetchedEduDetails, setFetchedEduDetails] = useState([eduDetails,personalDetails]);

  useEffect(() => {
    fetch('https://roovan-portfolio-2.onrender.com/show_edu_details')
      .then(response => response.json())
      .then(data => {
        setFetchedEduDetails(data);
        
        console.log(data); // Log the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const [fetchedworkdetails, setFetchedworkdetails] = useState([eduDetails,personalDetails]);

  useEffect(() => {
    fetch('https://roovan-portfolio-2.onrender.com/show_work_details')
      .then(response => response.json())
      .then(data => {
        setFetchedworkdetails(data);
        
        console.log(data); // Log the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-5xl">{fetchedEduDetails[0].About}</p>
      </section>
      
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1> 

        {fetchedEduDetails.map((detail, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <p className="font-bold">Name: {detail.name}</p>
              <p>Location: {detail.Location}</p>
              <p>Education: {detail.edu}</p>
              <p>Type: {detail.Type}</p>
              <p>Duration: {detail.Duration}</p>
            </div>
          ))}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work_Experience
        </h1> 

        {fetchedworkdetails.map((detail, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <p className="font-bold">Name: {detail.company_name}</p>
              <p>Role: {detail.Role}</p>
              <p>Duration: {detail.Duration}</p>
            </div>
          ))}
      </section>
    </main>
  );
}

export default About;
