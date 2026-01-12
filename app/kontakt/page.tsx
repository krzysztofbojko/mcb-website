"use client";

import { experts, generalInfo } from '@/lib/data';
import ExpertCard from '@/components/ExpertCard';
import { useState } from 'react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Współpraca badawcza',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Współpraca badawcza', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Kontakt
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami, aby omówić możliwości współpracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Formularz Kontaktowy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Formularz Kontaktowy</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Imię i nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-uksw-blue focus:ring-uksw-blue sm:text-sm p-3 border" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-uksw-blue focus:ring-uksw-blue sm:text-sm p-3 border" 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Temat</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-uksw-blue focus:ring-uksw-blue sm:text-sm p-3 border"
                >
                  <option>Współpraca badawcza</option>
                  <option>Zlecenie badań</option>
                  <option>Wynajem infrastruktury</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Wiadomość</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-uksw-blue focus:ring-uksw-blue sm:text-sm p-3 border"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
                    status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-uksw-blue hover:bg-uksw-blue-hover'
                  }`}
                >
                  {status === 'loading' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </div>
              
              {status === 'success' && (
                <div className="p-4 rounded-md bg-green-50 text-green-800">
                  Dziękujemy! Wiadomość została wysłana pomyślnie.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 rounded-md bg-red-50 text-red-800">
                  Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
                </div>
              )}
            </form>
          </div>

          {/* Dane Kontaktowe */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-white rounded-lg shadow p-8 border-l-4 border-uksw-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Adres</h3>
                <p className="text-gray-600 text-lg">{generalInfo.address}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 border-l-4 border-uksw-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt ogólny</h3>
                <p className="text-gray-600 text-lg mb-2">Email: <a href={`mailto:${generalInfo.email}`} className="text-uksw-blue font-medium">{generalInfo.email}</a></p>
            </div>
             <div className="bg-white rounded-lg shadow p-8 border-l-4 border-uksw-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nasi Partnerzy</h3>
                <div className="flex flex-wrap gap-4">
                    {generalInfo.partners.map((partner, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Eksperci */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Nasi Eksperci</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, idx) => (
              <ExpertCard 
                key={idx}
                name={expert.name}
                role={expert.role}
                email={expert.email}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
