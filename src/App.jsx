import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Coffee, Menu, Info, MapPin, ShoppingCart, X } from 'lucide-react'

import Home from './pages/Home'
import MenuPage from './pages/Menu'
import About from './pages/About'
import Locations from './pages/Locations'
import Contact from './pages/Contact'

function Nav() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const location = useLocation()

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const navLinks = [
    { path: '/', label: 'Home', icon: Coffee },
    { path: '/menu', label: 'Menu', icon: Menu },
    { path: '/about', label: 'About', icon: Info },
    { path: '/locations', label: 'Locations', icon: MapPin },
    { path: '/contact', label: 'Contact', icon: Coffee },
  ]

  return (
    <>
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-amber-900">SIP IT</h1>
              <p className="text-xs text-amber-700 -mt-1">COFFEE HOUSE</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-1.5 hover:text-amber-700 transition-colors ${location.pathname === path ? 'text-amber-800 font-semibold' : 'text-gray-600'}`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 bg-amber-900 text-white px-5 py-2.5 rounded-full hover:bg-amber-800 transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">{cartItems.length}</span>
          </button>
        </div>
      </nav>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {cartItems.length === 0 ? (
                <p className="text-center py-12 text-gray-500">Cart is empty</p>
              ) : (
                cartItems.map((item, i) => (
                  <div key={i} className="flex justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t mt-auto">
                <div className="flex justify-between text-lg font-semibold mb-6">
                  <span>Total</span>
                  <span>${cartItems.reduce((sum, item) => sum + item.price, 0)}</span>
                </div>
                <button className="w-full bg-amber-900 text-white py-4 rounded-xl font-medium hover:bg-amber-800">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center">
              <Coffee className="w-7 h-7" />
            </div>
          </div>
          <p className="text-amber-400">© 2026 Sip It Coffee House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App