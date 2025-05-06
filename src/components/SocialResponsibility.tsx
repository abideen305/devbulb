import React from 'react';
import { BookOpen, Award, Heart, Globe } from 'lucide-react';

const universities = [
  "Islamic Online University",
  "International Open University by Sheikh Sultan Dr Bilal Phillips",
  "Al-Hidaayah by Sheikh Sultan Dr Zakir Naik",
  "Eman Academy by Mufti Ismail Menk",
  "Al-Maghrib institute",
  "ZAD Academy",
  "Jannah Institute by Sheikha Haifa Younis",
  "Yaqeen Institute by Sheikh Sultan Omar Suleiman"
];

const SocialResponsibility: React.FC = () => {
  return (
    <section id="responsibility" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Social Responsibility</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our company's social responsibility focuses on Islamic solutions halal projects and Islamic studies scholarship, serving as sadaqatul jaariya for righteous Muslim Ummah and good humanity.
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Islamic Scholarship Program</h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              We facilitate the provision of Islamic scholarships to deserving students in Islamic studies, 
              recommending globally reputable and recognized Islamic Universities and Institutes.
            </p>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Recommended Institutions:</h4>
              <ul className="space-y-2">
                {universities.map((uni, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{uni}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Impact-Driven Projects</h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our initiatives are guided by Islamic principles and are impact driven according to noble, glorious
              and holy Al-Quran, Ahadith, Fiqh, hisnl-muslim, Islamic authentic Shariah, and Islamic Aqeedahtu at-Tawhid.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Global Reach</h4>
                  <p className="text-gray-700">Connecting Muslim communities worldwide through digital innovation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Educational Focus</h4>
                  <p className="text-gray-700">Providing resources for Islamic education and professional development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Akhira Focused</h4>
                  <p className="text-gray-700">All initiatives are designed for the attainment of Jannatul firdaus (Paradise)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-emerald-800 italic">
            "The best of people are those who are most beneficial to people." — Prophet Muhammad ﷺ
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;