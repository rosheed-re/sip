import { Mail, Phone } from 'lucide-react'

export default function Contact() {
    return (
        <div className="max-w-lg mx-auto px-6 py-20">
            <h1 className="text-6xl font-bold text-center mb-16">Say Hello</h1>

            <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border">
                    <div className="flex gap-4">
                        <Mail className="mt-1 w-6 h-6 text-amber-700" />
                        <div>
                            <p className="font-medium">hello@sipit.coffee</p>
                            <p className="text-sm text-gray-500">We reply within 24 hours</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border">
                    <div className="flex gap-4">
                        <Phone className="mt-1 w-6 h-6 text-amber-700" />
                        <div>
                            <p className="font-medium">(555) 123-4567</p>
                            <p className="text-sm text-gray-500">Mon–Sun 8am–6pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center mt-12 text-amber-700">
                Or just walk in. We love meeting new friends.
            </p>
        </div>
    )
}