import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useState } from "react";
import { logo, menu, close } from '../assets'
import { navLinks } from "../contacts";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link to='/' className="flex items-center gap-2" onClick={() => {
          setActive('');
          window.scrollTo(0, 0)
        }} >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex gap-2">TanZil <span className="sm:block hidden">| Web Hero</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((links) => (
              <li key={links.id} className={`${active === links.title ? "text-white" : "text-secondary"}`} onClick={() => setActive(links.title)}>
                <a href={`#${links.id}`}>{links.title}</a>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">

          <img src={toggle ? close : menu} alt="menu"
           className="w-7 h-7 cursor-pointer"
           onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none  flex justify-end items-center flex-col gap-4">
              {
                navLinks.map((links) => (
                  <li 
                  key={links.id}
                  className={`${active === links.title ? "text-white" : "text-secondary"}`} onClick={() => {
                    setActive(links.title);
                    setToggle(!toggle);
                  }} >
                    <a href={`#${links.id}`}>{links.title}</a>

                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;