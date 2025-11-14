import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Music } from "lucide-react";
import logo from './../assets/logo.png';
import "@fortawesome/fontawesome-free/css/all.min.css";


const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Catering", href: "/catering" },
  { name: "Order", href: "/order" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            {/* Brand Logo */}
            <img
              src={logo} // replace with your actual logo path in /public
              alt="Scoops & Sips Logo"
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4">
              Premium artisan desserts and gelato crafted with love and the finest ingredients.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/scoopsandsipsdesserts_leeds?igsh=MWI1NWIxdWg4MWxtcw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/scoopsandsips"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="https://www.tiktok.com/@scoopsandsips"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>211 NORTH STREET LS7 2AA LEEDS, UNITED KINGDOM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +44 075260 37950
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hello@scoopsandsips.com" className="hover:text-primary transition-colors">
                  hello@scoopsandsips.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Mon - Sun</p>
                  <p>12:00 PM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-border">

          <p className="text-sm text-muted-foreground text-center md:text-center">
            © {new Date().getFullYear()} Scoops and Sips Desserts. All rights reserved.
          </p>




        </div>
      </div>
    </footer>
  );
};
