export default function Locations() {
    const locations = [
        { name: "Downtown", address: "123 Brew Lane, City Center", hours: "6am - 8pm" },
        { name: "Riverside", address: "456 Coffee St, Waterfront", hours: "7am - 7pm" },
        { name: "Campus", address: "789 University Ave", hours: "6:30am - 9pm" },
    ]

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-6xl font-bold text-center mb-4">Find Us</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {locations.map((loc, i) => (
                    <div key={i} className="bg-white p-10 rounded-3xl border">
                        <h3 className="text-2xl font-semibold mb-4">{loc.name}</h3>
                        <p className="text-amber-700 mb-1">{loc.address}</p>
                        <p className="text-sm text-amber-600">{loc.hours}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}