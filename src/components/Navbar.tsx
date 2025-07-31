export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-700">JankiInfotech</div>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}
