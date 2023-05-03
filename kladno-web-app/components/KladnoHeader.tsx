import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function KladnoHeader(props) {
  return (
    <>
      <div className="flex w-full justify-between ">
        <h1 className="font-head font-sans text-head font-semibold text-lightgrey">
          KLADNO ARCHIVE
        </h1>
        <div className="flex space-x-2">
          <p className="text-white">ENG</p>
          <p className="text-semi-dark">CZE</p>
          <p className="text-semi-dark">GER</p>
        </div>
      </div>
      <p className="mx-auto mt-40 mb-24 w-1/2 text-center font-serif text-head leading-tight text-semi-dark">
        Welcome to the Kladno Archive. <br></br>A collaborative online archive
        developed by the Masaryk Institute and Archive of the Czech Academy of
        Sciences in Prague, the Czech National Archives, and the Kladno Museum.
        and the Massachussets Institute of Technology.
        <span className="mx-auto mt-2 flex w-fit items-center space-x-2 font-mono text-md hover:cursor-pointer">
          <div>Read more</div>
          <AiOutlineArrowRight />
        </span>
      </p>
    </>
  )
}
