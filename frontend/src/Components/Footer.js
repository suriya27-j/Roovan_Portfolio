import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-4 fixed bottom-0 left-0 w-full bg-white dark:bg-dark-mode">
  <p className="text-lg md:text-base lg:text-lg xl:text-lg text-center text-dark-content dark:text-light-content">
    Designed and Coded by{" "}
    <a
      className="font-bold text-blue-500 dark:text-blue-300 hover:underline text-lg md:text-xl lg:text-lg xl:text-xl"
      href="https://pavanmg.in"
      target="_blank"
      rel="noreferrer noopener"
    >
      Roopvan
    </a>{" "}
    with
    <span className="text-black text-lg md:text-xl lg:text-lg xl:text-xl">Depression</span> &amp;
    <span className="text-black text-lg md:text-xl lg:text-lg xl:text-xl">Had little fun</span>
  </p>
</footer>
);
}
export default Footer;
