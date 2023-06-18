import Link from "next/link"
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"

export default function Header() {
  return (
    <div className="flex justify-between mx-2 sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem address="/" title="HOME" Icon={AiFillHome} />
        <MenuItem address="/about" title="ABOUT" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
        <Link href={"/"}>
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMBd</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}