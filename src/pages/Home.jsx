import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
            <div className="text-center mb-16">
                <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-amber-950 mb-6">
                    SIP IT.<br />SAVOR LIFE.
                </h1>
                <p className="max-w-md mx-auto text-xl text-amber-700">
                    Premium coffee, artisanal pastries, and warm moments.
                </p>
                <div className="mt-10">
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-3 bg-amber-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-amber-800 transition-all group"
                    >
                        Explore Menu
                        <ArrowRight className="group-hover:translate-x-1 transition" />
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
                {[
                    { title: "Ethically Sourced", desc: "Direct trade beans from the best farms" },
                    { title: "Fresh Daily", desc: "Baked goods made in-house every morning" },
                    { title: "Community First", desc: "A third place for everyone" }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-amber-100">
                        <div className="w-14 h-14 bg-amber-100 rounded-2xl mb-6" />
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-amber-700">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}