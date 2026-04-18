import { motion } from 'framer-motion'
import { Code, RefreshCw, Server } from 'lucide-react'
import { useSeo }     from '@/hooks/useSeo'
import { digitalPageContent as c } from '@/assets/constants/serviceContent'
import SectionHeading   from '@/ui/sectionheading/SectionHeading'
import Button           from '@/ui/button/Button'
import PortfolioCard    from '@/ui/portfoliocard/PortfolioCard'

const ICON_MAP = { Code, RefreshCw, Server }

export default function DigitalService({ onQuoteClick }) {
  useSeo({ title: c.seo.title, description: c.seo.description })

  return (
    <div className="pt-20">

      {/* Hero */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-bg-main)' }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-heading font-semibold leading-tight" style={{ marginBottom: '1.5rem' }}>
              <span className="text-5xl lg:text-6xl" style={{ color: '#f5ecd7', textShadow: '2px 2px 0px #c9973a' }}>The</span>{' '}
              <span className="text-5xl lg:text-6xl" style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Intersection</span>
              <span className="block" style={{ fontSize: '1.35rem', fontWeight: 400, color: '#c8bfb4', textShadow: 'none', marginTop: '0.75rem' }}>
                OF TECHNOLOGY
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services offered */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-surface-white)', borderTop: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-12">
            <span style={{ color: '#1c1410', textShadow: '2px 2px 0px #c9973a' }}>Our</span>{' '}
            <span style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Services</span>
          </h2>
          <div style={{ marginTop: '4rem', gap: '2.5rem' }} className="grid grid-cols-1 md:grid-cols-3">
            {c.services.map((service, i) => {
              const Icon = ICON_MAP[service.icon]
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                  style={{ padding: '3rem', gap: '2rem', display: 'flex', flexDirection: 'column', borderLeft: '4px solid #B85C38' }}
                  className="
                    group
                    bg-[var(--color-surface-cream)]
                    border border-[var(--color-bg-main)]/20
                    ring-1 ring-inset ring-[var(--color-bg-main)]/10
                    rounded-[var(--radius-xl)]
                    shadow-[0_4px_24px_rgba(0,0,0,0.10)]
                    hover:shadow-[0_8px_40px_rgba(0,0,0,0.16)]
                    hover:-translate-y-1.5
                    transition-all duration-[var(--transition-base)]
                  "
                >
                  <div className="hex-icon w-16 h-16 bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)] shrink-0" style={{ filter: 'drop-shadow(4px 4px 0px #B85C38)' }}>
                    {Icon && <Icon size={26} strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-[var(--color-text-strong)] leading-snug">
                    {service.title}
                  </h3>
                  <p style={{ flex: 1 }} className="text-base text-[var(--color-text-muted)] leading-relaxed">
                    {service.body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-surface-cream)', borderTop: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-12">
            <span style={{ color: '#1c1410', textShadow: '2px 2px 0px #c9973a' }}>Our</span>{' '}
            <span style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Examples</span>
          </h2>
          <div style={{ marginTop: '3.5rem', gap: '2.5rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {c.portfolio.projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <PortfolioCard
                  title={project.title}
                  tags={project.tags}
                  url={project.url}
                  image={project.image}
                  description={project.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--color-surface-white)', borderTop: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', maxWidth: '36rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#1c1410', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
              {c.cta.headline}
            </h2>
            <Button variant="primary" size="lg" onClick={onQuoteClick}>
              {c.cta.label}
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
