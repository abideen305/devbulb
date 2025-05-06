import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://i.ibb.co/qWkWt81/dev.jpg" 
                alt="DevBulbData Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="font-bold text-2xl">DevBulbData</span>
            </div>
            <p className="text-emerald-100 mb-6 max-w-md">
              An amanah development and social entrepreneurship halal company serving sincere 
              1Ummah Nigeria with halal digital services and Islamic authentic media visibility.
            </p>
            <div className="flex items-center gap-4 text-emerald-100">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-200">Quick Links</h3>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#responsibility" className="hover:text-white transition-colors">Social Responsibility</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-200">Contact Information</h3>
            <ul className="space-y-4 text-emerald-100">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-300" />
                <span>(+234) 07038888337</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-300" />
                <a href="mailto:info@devbulbdata.com.ng" className="hover:text-white transition-colors">
                  info@devbulbdata.com.ng
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-emerald-300 mt-1" />
                <div>
                  <a 
                    href="#" 
                    className="hover:text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Our Blog
                  </a>
                  <p className="text-sm text-emerald-300 mt-1">Latest Islamic insights and tech news</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 mt-10 pt-8 text-center text-emerald-200">
          <p>© {currentYear} DevBulbData. All rights reserved.</p>
          <p className="mt-2 text-sm text-emerald-300">
            "And whatever good you put forward for yourselves - you will find it with Allah." — Quran 2:110
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;