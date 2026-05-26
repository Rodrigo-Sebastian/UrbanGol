'use client'
import { useState } from 'react'

export default function ContactForm() {
    const [sent, setSent] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Här kopplar du sen ett riktigt API
        setSent(true)
    }

    if (sent) {
        return (
            <div className="border border-green-200 bg-green-50 rounded-2xl p-8 text-center">
                <p className="text-2xl mb-2">✓</p>
                <h3 className="font-bold text-lg mb-2">Meddelande skickat!</h3>
                <p className="text-gray-500 text-sm">Vi återkommer inom 1-2 arbetsdagar.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Namn</label>
                    <input
                        type="text"
                        required
                        placeholder="Ditt namn"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                        type="email"
                        required
                        placeholder="din@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Ämne</label>
                <input
                    type="text"
                    required
                    placeholder="Vad gäller det?"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Meddelande</label>
                <textarea
                    required
                    rows={6}
                    placeholder="Beskriv ditt ärende..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                className="bg-black text-white py-3 px-8 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
                Skicka meddelande
            </button>
        </form>
    )
}