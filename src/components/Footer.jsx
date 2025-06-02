import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background text-secondaryText pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Agency Column */}
          <div>
            <h3 className="text-secondaryText font-semibold text-lg mb-4">Biz.Tech.Mgt</h3>
            <ul className="space-y-2">
              {[
                'Who We Work With',
                'Case Studies',
                'Agency Partner Program',
                'White Label Services',
                'Client Onboarding',
                'Request a Proposal'
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-primary transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-secondaryText font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'WordPress Hosting & Maintenance',
                'Social Media Management',
                'YouTube SEO Services',
                'Custom Landing Page',
                '5 Page Website Design',
                'Data Governance Dashboard',
                'SEO keywords'
              ].map((service) => (
                <li key={service}>
                  <Link to="#" className="hover:text-primary transition">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            {/* <h3 className="text-secondaryText font-semibold text-lg mb-4">Links</h3> */}
            <ul className="space-y-2">
              {[
                'Google Ad Management',
                'Social Media Marketing',
                'Brand Reputation Services',
                'High-volume content posting services',
                'LinkedIn profile growth',
                'Virtual Assistant Services',
                'Website UX/UI Improvements',
                'Email Marketing Integration'
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-primary transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-secondaryText font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                'Why Choose Us',
                'Blog ',
                'Blog',
                'Contact Us',
                'Privacy Policy',
                'FAQ',
                'Terms & Conditions'
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-primary transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-secondaryText font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-2 font-semibold">
              <p>Biz.Tech.Mgt</p>
              <p>607 Shelby </p>
              <p className="mt-4">Phone: +1 616 274-3853</p>
              <p>Email: Info@biztechmgt.om</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Biz.Tech.Mgt. All rights reserved. 
                <Link to="#" className="hover:text-primary ml-2">Terms & Conditions</Link> · 
                <Link to="#" className="hover:text-primary ml-2">Privacy Policy</Link>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Q9wWtHaRF/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
