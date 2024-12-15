import { useContext } from 'react'
import Logo from './Logo'
import { NavContext } from '../context/Nav-context'

export default function Nav() {
const {about, setAbout} = useContext(NavContext)
const {myWork, setMyWork} = useContext(NavContext)
const {contact, setContact} = useContext(NavContext)
  return (
    <div className=' bg-black fixed w-full top-0 z-10'>
      <div className='flex justify-between w-[80%] mx-auto py-4 items-center'>
        <Logo />
        <ul className='flex gap-10 items-center text-white text-[10px]'>
          <button onClick={() => setAbout(!about)} className='hover:text-yellow-600' >About Me</button>
          <button onClick={() => setMyWork(!myWork)} className='hover:text-yellow-600'>My Work</button>
          <button onClick={()=> setContact(!contact)} className='border-[1px] border-yellow-600 py-3 px-7 rounded-full hover:text-black hover:bg-yellow-600 text-white'>Contact</button>
        </ul>
      </div>
    </div>
  )
}
