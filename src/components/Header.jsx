import { motion } from 'framer-motion'
import { useState } from 'react'
import { BiAlignRight } from "react-icons/bi";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between mx-6">
        <div className="flex flex-shrink-0 items-center justify-center ml-6 ">
          <a href="/" aria-label="Home">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 1 }} className="flex">
                <svg width="50" height="50" viewBox="0 0 118 118" xmlns="http://www.w3.org/2000/svg"><g fill="#00adf7"><path d="M19.08 18.97C29.93 7.54 45.55.9 61.31.95c0 8.03.01 16.07 0 24.1-10.65.1-21.21 5.22-27.43 13.94-7.85 10.55-8.65 25.73-1.93 37.04 5.83 10.4 17.51 16.86 29.36 16.92.01 8.03.01 16.07 0 24.1-13.89.01-27.7-5.07-38.18-14.19C10.75 92.29 3.14 76.31 2.99 60 2.63 44.9 8.6 29.83 19.08 18.97zM62.06 48.56H114c0 17.36.01 34.72-.01 52.07-7.97-.01-15.95-.01-23.92 0-.02-9.35 0-18.71-.01-28.06-9.33-.01-18.66-.01-27.99 0-.02-8-.01-16.01-.01-24.01z"/></g></svg>
            </motion.div>
          </a>
        </div>
        <div className="items-center justify-center gap-4 font-medium text-sm text-center md:flex">
          <button onClick={() => setIsMobile(!isMobile)} className="md:hidden">
            <BiAlignRight className='text-3xl'></BiAlignRight>
          </button>

          {/* Menú de escritorio */}
          <div id='desktop-nav' className='hidden md:block'>
            <a href="#introduction" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Introducción</a>
            <a href="#actual_diagnostic" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Diagnostico Actual</a>
            <a href="#organizational_identity" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Identidad Organizacional</a>
            <a href="#strategic_objectives" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Objetivos Estrategicos</a>
          </div>

          {/* Menú móvil */}
          {isMobile && (
            <div id='mobile-nav' className='flex absolute right-8 top-16 p-6 flex-col backdrop-blur-3xl rounded-md md:hidden'>
              <a href="#introduction" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Introducción</a>
              <a href="#actual_diagnostic" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Diagnostico Actual</a>
              <a href="#organizational_identity" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Identidad Organizacional</a>
              <a href="#strategic_objectives" className="rounded-full px-4 py-2 transition-all duration-900 hover:bg-[#121212] hover:backdrop-blur-sm hover:scale-110">Objetivos Estrategicos</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header;
