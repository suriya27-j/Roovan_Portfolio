import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-4 fixed bottom-0 left-0 w-full bg-white dark:bg-dark-mode">
      <p className="text-2xl md:text-lg lg:text-xl xl:text-2xl text-center text-dark-content dark:text-light-content">
        Designed and Coded by{" "}
        <a
          className="font-bold text-blue-500 dark:text-blue-300 hover:underline text-5xl"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Roopvan
        </a>{" "}
        with
        <span className="text-black text-4xl">Depression</span> &amp;
        <span className="text-black text-4xl" ></span>&amp;
        <span className="text-black text-4xl" >Had little fun</span>
      </p>
    </footer>
  );
}
export default Footer;
