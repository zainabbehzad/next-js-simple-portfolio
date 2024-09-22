'use client';

import { FC, FormEvent, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Form is valid – do nothing or show a success message
      console.log('Form is valid:', formData);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/OIP.jpeg)'}}>
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Contact Me</h1>
      <div className="flex flex-col items-center">
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200 space-y-6 min-h-[400px]" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              className={`w-full border p-3 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              className={`w-full border p-3 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              className={`w-full border p-3 rounded text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>

        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://github.com/zainabbehzad" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/zainab-behzad-3126692b5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/z_behzad_?igsh=a2ZuejVsZGp2a2pt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
