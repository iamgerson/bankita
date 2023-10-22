import Image from "next/image"
import IconSearch from '@/assets/icon-search.svg'

export function Search() {
  return(
    <div className="flex items-center gap-4">
      <Image src={IconSearch} alt="Search"/>
      <input type="text" className="bg-transparent outline-none pr-3 text-white placeholder:text-white" placeholder="Pesquisar"/>
    </div>
  )
}