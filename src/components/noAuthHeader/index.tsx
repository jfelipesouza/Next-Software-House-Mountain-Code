import Link from 'next/link'
import { MenuIcon, MountainIcon, SunIcon } from 'lucide-react'

export const NoAuthHeader: React.FC = () => {
  const links = [
    { redirect: '/features', name: 'Features' },
    { redirect: '/pricing', name: 'Pricing' },
    { redirect: '/about', name: 'About' },
    { redirect: '/contact', name: 'Contact' },
  ]
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-900">
      <Link className="flex items-center justify-center" href="/">
        <MountainIcon className="h-6 w-6 text-black dark:text-white" />
        <span className="sr-only">Mountain Code</span>
      </Link>

      {/*Theme Button
      
      <div className="ml-auto mr-4 cursor-pointer text-black dark:text-white ">
        <SunIcon />
      </div>
      
      */}

      {/*
      <nav className="flex gap-4 sm:gap-6 max-[470px]:hidden">
        {links.map(item => (
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-black dark:text-white"
            href={item.redirect}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="hidden max-[470px]:flex">
        <MenuIcon />
      </div>
      */}
    </header>
  )
}
