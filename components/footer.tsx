import { Twitter, Mail, Instagram } from "lucide-react"

export default function footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="text-sm text-text-muted ">
            © 2025 momoiamcgi studio All rights reserved. 
          </div>

          {/* 联系方式图标 */}
          <div className="flex justify-center space-x-8 text-text-secondary">
          <a
              href="mailto:contact@foryourref.com"
              aria-label="Email"
              className="hover:text-primary transition"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://x.com/shuxiaoshushu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-primary transition"
            >
              <Twitter size={24} />
            </a>
            
            <a
              href="https://www.instagram.com/momoiamcgi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
