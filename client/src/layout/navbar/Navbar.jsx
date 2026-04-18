import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navbarContent as c } from '@/assets/constants/siteContent'
import Button from '@/ui/button/Button'

export default function Navbar({ onQuoteClick }) {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const { pathname } = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Scrolled state for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`
      fixed top-0 inset-x-0 z-30 h-20
      bg-[var(--color-surface-white)]/95 backdrop-blur-sm
      border-b border-[var(--color-border-light)]
      transition-shadow duration-[var(--transition-base)]
      ${scrolled ? 'shadow-[var(--shadow-md)]' : 'shadow-none'}
    `}>
      <div className="site-container h-full flex items-center justify-between gap-6">

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {c.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`
                px-5 py-2 rounded-[var(--radius-md)] text-base font-medium
                transition-colors duration-[var(--transition-fast)]
                ${pathname === link.href
                  ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/8 border-b-2 border-b-[#B85C38]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)]'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <Button variant="primary" size="sm" onClick={onQuoteClick}>
            {c.ctaLabel}
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="
              lg:hidden absolute top-full inset-x-0
              bg-[var(--color-surface-white)]
              border-b border-[var(--color-border-light)]
              shadow-[var(--shadow-md)]
              px-6 py-4 flex flex-col gap-1
            "
          >
            {c.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  px-4 py-3 rounded-[var(--radius-md)] text-base font-medium
                  transition-colors duration-[var(--transition-fast)]
                  ${pathname === link.href
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/8'
                    : 'text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)]'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1" style={{ borderTop: '1px solid rgba(184,92,56,0.3)' }}>
              <Button variant="primary" size="md" onClick={onQuoteClick} className="w-full">
                {c.ctaLabel}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
