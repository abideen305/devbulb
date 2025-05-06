import React from 'react';
import { Settings, Users, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="h-1 w-16 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are an amanah development and social entrepreneurship halal company. Serving sincere
                  1Ummah Nigeria reputable organizations and businesses with big data solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Settings className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">What We Do</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our clear focus is halal digital services, Islamic authentic halal media visibility, and
                  enlightenment capacity building. Presenting and ensuring the implementation of Islamic authentic 
                  solutions projects with each strong-willed, proactive, good word data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are guided by Islamic principles, emphasizing amanah (trust), integrity, and excellence in all our services. 
                  Our work is impact-driven according to the noble, glorious and holy Al-Quran, Ahadith, 
                  Fiqh, hisnl-muslim, Islamic authentic Shariah, and Islamic Aqeedahtu at-Tawhid.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-96 shadow-xl">
            <img
              src="https://i.ibb.co/y3Wrcnh/about-us.jpg"
              alt="About DevBulbData"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Islamic Values in Technology</h3>
              <p className="text-sm md:text-base">Providing halal solutions in the digital age</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;