import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, FileDown } from 'lucide-react';

interface ProjectContactSidebarProps {
  projectName: string;
  whatsappNumber?: string;
}

export const ProjectContactSidebar = ({
  projectName,
  whatsappNumber = '1234567890',
}: ProjectContactSidebarProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Project inquiry:', formData);
  };

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=I'm interested in ${projectName}`;

  return (
    <div className="sticky top-6 space-y-4">
      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[rgb(230,230,230)] rounded-2xl p-6"
      >
        <h3
          className="text-[18px] font-semibold text-[rgb(44,44,44)] mb-2"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Interested in {projectName}?
        </h3>
        <p
          className="text-[13px] text-[rgb(136,136,136)] font-light mb-5"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Get in touch with our sales team for availability and pricing
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-[rgb(248,248,248)] rounded-xl text-[14px] text-[rgb(44,44,44)] placeholder:text-[rgb(136,136,136)] outline-none focus:ring-2 focus:ring-[rgb(200,200,200)] transition-all"
            style={{ fontFamily: 'Geist, sans-serif' }}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-[rgb(248,248,248)] rounded-xl text-[14px] text-[rgb(44,44,44)] placeholder:text-[rgb(136,136,136)] outline-none focus:ring-2 focus:ring-[rgb(200,200,200)] transition-all"
            style={{ fontFamily: 'Geist, sans-serif' }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-[rgb(248,248,248)] rounded-xl text-[14px] text-[rgb(44,44,44)] placeholder:text-[rgb(136,136,136)] outline-none focus:ring-2 focus:ring-[rgb(200,200,200)] transition-all"
            style={{ fontFamily: 'Geist, sans-serif' }}
          />
          <select
            value={formData.unitType}
            onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
            className="w-full px-4 py-3 bg-[rgb(248,248,248)] rounded-xl text-[14px] text-[rgb(44,44,44)] outline-none focus:ring-2 focus:ring-[rgb(200,200,200)] transition-all appearance-none cursor-pointer"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            <option value="">Preferred Unit Type</option>
            <option value="penthouse">Penthouse</option>
            <option value="3bed">3 Bedroom</option>
            <option value="2bed">2 Bedroom</option>
            <option value="studio">Studio</option>
          </select>
          <textarea
            placeholder="Your Message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-[rgb(248,248,248)] rounded-xl text-[14px] text-[rgb(44,44,44)] placeholder:text-[rgb(136,136,136)] outline-none focus:ring-2 focus:ring-[rgb(200,200,200)] transition-all resize-none"
            style={{ fontFamily: 'Geist, sans-serif' }}
          />
          <button
            type="submit"
            className="w-full py-3.5 bg-black text-white rounded-full text-[14px] font-medium hover:bg-[rgb(44,44,44)] transition-colors"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Send Inquiry
          </button>
        </form>
      </motion.div>

      {/* WhatsApp Card */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-4 p-4 bg-[rgb(248,248,248)] rounded-2xl hover:bg-[rgb(240,240,240)] transition-colors cursor-pointer group"
      >
        <div className="w-10 h-10 bg-[rgb(37,211,102)] rounded-full flex items-center justify-center shrink-0">
          <Phone size={18} className="text-white" />
        </div>
        <div>
          <p
            className="text-[14px] font-medium text-[rgb(44,44,44)]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Chat on WhatsApp
          </p>
          <p className="text-[12px] text-[rgb(136,136,136)]">Quick response guaranteed</p>
        </div>
      </motion.a>

      {/* Download Brochure */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex items-center justify-center gap-2 py-4 border border-[rgb(200,200,200)] rounded-2xl text-[14px] font-medium text-[rgb(44,44,44)] hover:bg-[rgb(248,248,248)] transition-colors group"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        <FileDown size={18} className="transition-transform group-hover:translate-y-0.5" />
        Download Brochure
      </motion.button>
    </div>
  );
};

export default ProjectContactSidebar;
