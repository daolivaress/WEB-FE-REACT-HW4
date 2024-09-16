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
              <img src="src/assets/logitech-gaming-2.svg" alt="logitech-gaming" width={50} />
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
