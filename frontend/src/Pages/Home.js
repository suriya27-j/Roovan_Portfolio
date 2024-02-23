import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";



function Home() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/show_details')
      .then(response => response.json())
      .then(data => {
        setPersonalDetails(data);
        setLoading(false); // Set loading to false when data is fetched
        console.log(data); // Log the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const { name, tagline, image_url } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myImageRef = useRef();

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();
      tl.from(
        h11.current,
        {
          x: "-100%",
          delay: 0.8,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
        .from(
          h12.current,
          {
            x: "-100%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
        )
        .from(
          h13.current,
          {
            x: "-100%",
            delay: 0.1,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
        )
        .from(
          myImageRef.current,
          {
            x: "200%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
        );
    }
  }, [loading]);
  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        {loading ? (
          <p></p>
        ) : (
          <>
            <h1
              ref={h11}
              className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              Hi,👋<br></br>My Name is<br></br>
            </h1>
            <h1
              ref={h12}
              className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              {name}
            </h1>
            <h2
              ref={h13}
              className="text-2xl underline text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              {tagline}
            </h2>
          </>
        )}
      </div>
      <div className="mt-5 md:mt-0 flex items-center justify-center">
        {/* Positioning the image on the right side */}
        {!loading && (
          <img
            ref={myImageRef}
            src={image_url}
            alt="Personal"
            className="mt-5 md:mt-0"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        )}
      </div>
    </main>
  );
        }
export default Home;
