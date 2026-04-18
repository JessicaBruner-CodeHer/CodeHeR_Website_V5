import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { footerContent as c } from '@/assets/constants/siteContent'
import badgeImage from '@/assets/images/NoMoreLabels_Badge_Hex_Gold.svg'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-main)] text-[var(--color-text-faint)]">
      <div className="site-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 mb-6">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-2xl font-semibold text-[var(--color-text-light)]">
              CodeHe<span style={{ color: '#B85C38' }}>&#123;R&#125;</span> LLC
            </span>
            <p className="text-sm text-[var(--color-text-faint)] leading-relaxed">
              {c.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-faint)] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {c.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="
                      text-sm text-[var(--color-text-faint)]
                      hover:text-[var(--color-primary)]
                      transition-colors duration-[var(--transition-fast)]
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-faint)] mb-4">
              Contact
            </p>
            <a
              href={`mailto:${c.contact.email}`}
              className="
                inline-flex items-center gap-2 text-sm
                text-[var(--color-text-faint)]
                hover:text-[var(--color-primary)]
                transition-colors duration-[var(--transition-fast)]
              "
            >
              <Mail size={14} />
              {c.contact.email}
            </a>
            <div style={{ marginTop: '1rem' }}>
              <Link
                to="/nomoreLabels"
                className="
                  inline-flex items-center justify-center
                  font-sans font-medium text-base px-6 py-3
                  rounded-[var(--radius-md)]
                  bg-transparent text-[var(--color-primary)]
                  hover:text-[var(--color-primary-light)]
                  transition-all duration-[var(--transition-base)]
                  cursor-pointer select-none whitespace-nowrap
                "
                style={{ boxShadow: '0 4px 0px #B85C38' }}
              >
                Apply for this Badge
              </Link>
            </div>
          </div>

          {/* NoMoreLabels Badge */}
          <div className="flex flex-col items-center gap-3">
            <img src={badgeImage} alt="NoMoreLabels Badge" style={{ width: '100%', maxWidth: '180px' }} />
          </div>

        </div>

        {/* Legal */}
        <div className="pt-4" style={{ borderTop: '1px solid rgba(184,92,56,0.3)' }}>
          <p className="text-xs text-[var(--color-text-faint)]/60">
            © 2024 CodeHe<span style={{ color: '#B85C38' }}>&#123;R&#125;</span> LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
