import { ReactNode } from "react"

interface PropsChildren {
  children: ReactNode,
}

export function Container({ children }: PropsChildren) {
  return(
    <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
      {children}
    </div>
  )
}