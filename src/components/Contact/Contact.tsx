import React from 'react';
import { motion } from 'framer-motion';
import Input from '../ui/Input.tsx';
import TextArea from '../ui/TextArea.tsx';
import Button from '../ui/Button.tsx';
import SocialLink from '../ui/SocialLink.tsx';
import { socialLinks } from '../../constants';

export const Contact: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-32 bg-gradient-to-b from-purple-800 to-black/50" id="contact">
      <div className="container mx-auto px-6 lg:px-8 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-4">
            Get in <span className="font-bold bg-gradient-to-r from-primary via-highlight to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <TextArea placeholder="Your Message" rows={6} />
            </div>
            <Button variant="outline" fullWidth>Send Message</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {socialLinks.map((social) => (
                <SocialLink key={social.title} {...social} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
