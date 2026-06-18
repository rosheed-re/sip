import { useState } from 'react'
import { Plus } from 'lucide-react'

const menuItems = [
    { id: 1, name: "Espresso", price: 4.5, category: "Coffee", desc: "Double shot, rich & bold" },
    { id: 2, name: "Cappuccino", price: 5.5, category: "Coffee", desc: "Espresso, steamed milk, foam" },
    { id: 3, name: "Flat White", price: 5.8, category: "Coffee", desc: "Velvety microfoam" },
    { id: 4, name: "Matcha Latte", price: 6.2, category: "Specialty", desc: "Ceremonial grade matcha" },
    { id: 5, name: "Avocado Toast", price: 9.5, category: "Food", desc: "Sourdough, chili flakes" },
    { id: 6, name: "Croissant", price: 4.8, category: "Food", desc: "Buttery & flaky" },
]

export default function MenuPage({ onAddToCart }) {
    const [filter, setFilter] = useState('All')

    const filtered = filter === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === filter)

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-6xl font-bold text-center mb-4 text-amber-950">Our Menu</h1>
            <p className="text-center text-amber-700 mb-12">Handcrafted with love</p>

            <div className="flex justify-center gap-3 mb-12 flex-wrap">
                {['All', 'Coffee', 'Specialty', 'Food'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full transition ${filter === cat ? 'bg-amber-900 text-white' : 'bg-white hover:bg-amber-100'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {filtered.map(item => (
                    <div key={item.id} className="bg-white p-8 rounded-3xl flex justify-between items-start border border-amber-100 group">
                        <div>
                            <h3 className="font-semibold text-xl">{item.name}</h3>
                            <p className="text-amber-600 text-sm mt-1">{item.desc}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-medium text-amber-900">${item.price}</p>
                            <button
                                onClick={() => {
                                    if (onAddToCart) onAddToCart(item)
                                    else alert(`Added ${item.name} to cart!`)
                                }}
                                className="mt-3 bg-amber-900 text-white px-4 py-2 rounded-2xl text-sm flex items-center gap-2 hover:bg-amber-800"
                            >
                                Add <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}