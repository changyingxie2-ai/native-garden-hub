import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, MapPin, AlertCircle, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suburb: '',
    spaceType: 'balcony',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email address, and message.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    // Friendly simulated client submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      suburb: '',
      spaceType: 'balcony',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5F1E9] border-t border-[#E6E0D4] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Context & Adelaide Advice */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C25B38] uppercase">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A2B] mt-1.5 tracking-tight">
                Contact & Community Feedback
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4D6054] leading-relaxed">
                Have feedback on this independent starter hub proposal? Want to suggest an Adelaide native plant species or share your beginner balcony gardening story? We’d love to hear from you.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E0D8CB] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2E5A44] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Adelaide Garden Tip</span>
              </div>
              <h3 className="text-base font-bold text-[#1E3A2B]">
                Heading to your local nursery?
              </h3>
              <p className="text-xs sm:text-sm text-[#4D6054] leading-relaxed">
                Before purchasing, snap a quick photo on your phone of your balcony or courtyard around midday. Show it to your local nursery team or hardware greenlife expert and ask:
              </p>
              <ul className="text-xs sm:text-sm text-[#3E5245] space-y-1.5 list-disc pl-4">
                <li>"Will this variety cope with afternoon western heat?"</li>
                <li>"Which native potting mix has the lowest phosphorus rating?"</li>
                <li>"What size pot will this plant need when fully grown?"</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E0D8CB] text-xs text-[#6B7D71] leading-relaxed">
              <strong>Notice:</strong> This is an independent concept demonstration. While we love gardening in Adelaide, specific plant diagnostic issues should always be inspected in-person by certified South Australian plant experts.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E0D8CB] p-6 sm:p-8 sm:p-10 shadow-sm">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-[#E3EDE6] text-[#2E5A44] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A2B]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#4D6054] max-w-md mx-auto leading-relaxed">
                    Your message has been received. Thank you for supporting the concept of accessible native gardening in Adelaide!
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2E5A44] hover:bg-[#234635] rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C25B38] uppercase tracking-wider mb-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send Us a Note</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#1E3A2B] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl text-sm text-[#1E3A2B] focus:bg-white focus:border-[#2E5A44] focus:ring-2 focus:ring-[#2E5A44]/20 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#1E3A2B] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl text-sm text-[#1E3A2B] focus:bg-white focus:border-[#2E5A44] focus:ring-2 focus:ring-[#2E5A44]/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="suburb" className="block text-xs font-semibold text-[#1E3A2B] mb-1">
                        Adelaide Suburb / Region (Optional)
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleChange}
                        placeholder="e.g. Norwood, Bowden, Glenelg"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl text-sm text-[#1E3A2B] focus:bg-white focus:border-[#2E5A44] focus:ring-2 focus:ring-[#2E5A44]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="spaceType" className="block text-xs font-semibold text-[#1E3A2B] mb-1">
                        Your Outdoor Space
                      </label>
                      <select
                        id="spaceType"
                        name="spaceType"
                        value={formData.spaceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl text-sm text-[#1E3A2B] focus:bg-white focus:border-[#2E5A44] focus:ring-2 focus:ring-[#2E5A44]/20 transition-all"
                      >
                        <option value="balcony">Apartment Balcony / Pots</option>
                        <option value="courtyard">Compact Courtyard / Verandah</option>
                        <option value="small-bed">Small Backyard Garden Bed</option>
                        <option value="raised-bed">Raised Garden Bed</option>
                        <option value="planning">Just Planning & Researching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#1E3A2B] mb-1">
                      Message or Question *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space, questions on Adelaide native plants, or thoughts on this starter hub concept..."
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl text-sm text-[#1E3A2B] focus:bg-white focus:border-[#2E5A44] focus:ring-2 focus:ring-[#2E5A44]/20 transition-all resize-y"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2E5A44] hover:bg-[#234635] active:bg-[#1A3427] rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
