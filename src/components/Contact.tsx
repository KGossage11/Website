import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await emailjs.send(
        'service_zmyabph',
        'template_0849k08',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'C8afEP2Zo_OYX9ac0',
      );

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] px-6 py-16 text-[#f8f4eb] sm:px-10 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">Contact</p>
          <h2 className="text-3xl font-black uppercase tracking-[0.04em] sm:text-4xl">
            Let’s build something great together.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:kylegossage@gmail.com" className="text-lg font-semibold hover:underline">
                  kylegossage@gmail.com
                </a>
              </div>
            </div>
            {/* <div className="border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+18137835953" className="text-lg font-semibold hover:underline">
                  (813) 783-5953
                </a>
              </div>
            </div> */}
            <div className="border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <p className="text-lg font-semibold">Bay Area, CA</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-white/20 bg-[#f8f4eb] p-6 text-zinc-900 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)]">
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-black bg-transparent px-4 py-3 outline-none focus:border-[#0f0f0f]"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-black bg-transparent px-4 py-3 outline-none focus:border-[#0f0f0f]"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-black bg-transparent px-4 py-3 outline-none focus:border-[#0f0f0f]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 border border-black bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f8f4eb] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Send message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
