"use client";

import { useState } from 'react';

export function VIPSignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/mailchimp/add-vip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('🎉 Welcome to VIP Access! Check your email for exclusive menu previews.');
        setFormData({ email: '', firstName: '', phone: '' });
      } else {
        setStatus('error');
        setMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Connection error. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="vip-signup-section bg-gradient-to-br from-[#3b5323] to-[#2d401a] rounded-2xl p-8 text-center">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold text-[#c4a35a] mb-3">
          Join VIP Tasting Access
        </h3>
        <p className="text-[#ffffff]/90 text-sm leading-relaxed">
          Get exclusive menu previews, priority reservations, and VIP-only discounts for our Thursday tasting experiences.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-[#c4a35a]/20 border border-[#c4a35a] rounded-lg p-6">
          <div className="text-[#c4a35a] text-4xl mb-3">✨</div>
          <p className="text-[#ffffff] font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 rounded-lg border border-[#ffffff]/20 bg-[#ffffff]/10 text-[#ffffff] placeholder-[#ffffff]/60 focus:outline-none focus:ring-2 focus:ring-[#c4a35a] focus:border-transparent disabled:opacity-50"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 rounded-lg border border-[#ffffff]/20 bg-[#ffffff]/10 text-[#ffffff] placeholder-[#ffffff]/60 focus:outline-none focus:ring-2 focus:ring-[#c4a35a] focus:border-transparent disabled:opacity-50"
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 rounded-lg border border-[#ffffff]/20 bg-[#ffffff]/10 text-[#ffffff] placeholder-[#ffffff]/60 focus:outline-none focus:ring-2 focus:ring-[#c4a35a] focus:border-transparent disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#c4a35a] hover:bg-[#d4b86a] text-[#2d401a] font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#2d401a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining VIP Access...
              </span>
            ) : (
              'Get VIP Access'
            )}
          </button>

          {status === 'error' && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-200 text-sm">{message}</p>
            </div>
          )}
        </form>
      )}

      <div className="mt-6 text-[#ffffff]/70 text-xs">
        <p>
          By joining, you agree to receive exclusive tasting updates. 
          <br />
          <a href="/privacy" className="text-[#c4a35a] hover:text-[#d4b86a] underline">Privacy Policy</a> • 
          Unsubscribe anytime
        </p>
      </div>
    </div>
  );
}