export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Burundi Business Formation</h3>
              <p className="mt-2">Quick and easy business setup in Burundi</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Privacy</a>
              <a href="#" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Burundi Business Formation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }