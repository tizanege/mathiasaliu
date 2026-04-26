import Link from "next/link";
import { MessageCircle, Send, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-foreground/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-gold to-yellow-800 bg-clip-text text-transparent">
                Hon. Mathias Aliu
              </span>
            </Link>
            <p className="text-foreground/60 max-w-sm mb-8 font-medium leading-relaxed">
              Candidate for Etsako Central State House of Assembly, Edo State. Leading with integrity, innovation, and an unwavering commitment to the people.
            </p>
            <div className="flex gap-4">
              {[Share2, MessageCircle, Send, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-brand-gold hover:border-brand-gold/30 transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Mathias', 'The Vision', 'Impact & Projects', 'Join Movement'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-foreground/60 hover:text-brand-gold font-medium transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/60 font-medium">
              <li>Campaign Headquarters:</li>
              <li>Fugar, Etsako Central, Edo State.</li>
              <li className="pt-2">contact@mathiasaliu.com</li>
              <li>+234 800 000 0000</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Hon. Mathias Aliu Campaign Organization. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
