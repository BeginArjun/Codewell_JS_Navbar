import Logo from '@/assets/Logo.svg'
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import styles from './Navbar.module.css'
import { useState } from 'react';

import Spense_Icon from "@/assets/Spense_Icon.svg";
import Fiber_Icon from "@/assets/Fiber_Icon.svg";
import Gradie_Icon from "@/assets/Gradie_Icon.svg";

const Products = [
    {
      name: "Spense",
      description:
        "Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.",
      icon: Spense_Icon,
    },
    {
      name: "Fiber Landing Page",
      description:
        "An online  portfolio generator. Great to practice flex/grid layouts, and absolute positioning.",
      icon: Fiber_Icon,
    },
    {
      name: "Gradie Sign Up Page",
      description:
        "Gradie is a simple sign up page, great to practice centering layouts.",
      icon: Gradie_Icon,
    },
  ];

const Dropdown=(props)=>{
    return(
        <li className='cursor-pointer'>
            <ul>
                <li className='flex flex-row text-[#0a263f] font-bold'>
                <Image src={props.icon} alt={props.name}/>
                {props.name}
                </li>
                <li>{props.description}</li>
            </ul>
        </li>
    )
}

const Navbar=()=>{
    const [burgerClick,setBurgerClick]=useState(false)
    const dropElement=Products.map((item,idx)=>{
        return(
            <Dropdown {...item}  key={idx}/>
        )
    })
    return(
        <nav className="flex flex-row justify-between items-center font-Inter p-2">
            <Image
            src={Logo}
            alt="Ondeck"
            priority
            />
            <div id="menu" className={burgerClick?styles.menuActive:styles.menu}>
            <ul className={styles.menuContain}>
                <li className='group'><a href="#">Products</a>
                <ul className='invisible group-hover:visible bg-white absolute top-[12vh] lg:w-1/5 w-[80vw] h-max z-10 shadow-md rounded-md p-1 flex flex-col justify-around items-center lg:gap-4'>
                    {dropElement}
                </ul>
                </li>
                <li><a href="#">Challenges</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Other Links</a></li>
            </ul >
            <ul className={styles.menuContain}>
                <li><a href="#">Sign In</a></li>
                <button className='bg-[#133416] text-white w-[150px] h-[50px] rounded-md'>Try for Free</button>
            </ul>
            </div>
            <div id="burger" className={styles.burger} onClick={()=>setBurgerClick(!burgerClick)} aria-hidden={true}>
                <FiMenu/>
            </div>
        </nav>
    )
}
export default Navbar