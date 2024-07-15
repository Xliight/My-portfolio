import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const username = "YourDiscordUsername#1234"; // Replace with your actual Discord username

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    
      <nav className=" mb-20  flex items-center justify-between py-6 ">
          <div className=" flex flex-shrink-0 items-center ">
          <h1 className='text-4xl font-extrabold 	 text-cyan-400'> Xlight</h1>
          </div>
          <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <a href='https://www.linkedin.com/in/abdelfettah-mostakir/' target="_blank"><FaLinkedin/></a>
              <a href="https://github.com/Xliight" ><FaGit/></a>
              <a href="https://discord.gg/9TnUPntb" target="_blank"><FaDiscord/>
              </a>


              

          </div>

      </nav>

  )
}

export default Navbar