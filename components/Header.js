import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-800">Burundi Business</a>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/services"><a className="text-gray-800 hover:text-blue-600">Services</a></Link>
            <Link href="/pricing"><a className="text-gray-800 hover:text-blue-600">Pricing</a></Link>
            <Link href="/contact"><a className="text-gray-800 hover:text-blue-600">Contact</a></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}