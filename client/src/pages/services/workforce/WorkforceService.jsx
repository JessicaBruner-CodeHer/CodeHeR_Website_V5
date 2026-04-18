import { motion } from 'framer-motion'
import { useSeo }        from '@/hooks/useSeo'
import { workforcePageContent as c } from '@/assets/constants/serviceContent'
import Button            from '@/ui/button/Button'
import WorkforceStats    from '@/sections/workforce/WorkforceStats'

export default function WorkforceService({ onQuoteClick }) {
  useSeo({ title: c.seo.title, description: c.seo.description })

  return (
    <div className="pt-20">

      {/* Hero */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-surface-cream)', borderBottom: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-heading font-semibold leading-tight" style={{ marginBottom: '1.5rem' }}>
              <span className="text-5xl lg:text-6xl" style={{ color: '#1c1410', textShadow: '2px 2px 0px #c9973a' }}>The</span>{' '}
              <span className="text-5xl lg:text-6xl" style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Intersection</span>
              <span className="block" style={{ fontSize: '1.35rem', fontWeight: 400, color: '#6f6256', textShadow: 'none', marginTop: '0.75rem' }}>
                OF PEOPLE
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Live Workforce Stats */}
      <WorkforceStats />

      {/* What We Do */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-surface-cream)', borderTop: '1px solid var(--color-border-light)' }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight" style={{ marginBottom: '3rem' }}>
              <span style={{ color: '#1c1410', textShadow: '2px 2px 0px #c9973a' }}>Our</span>{' '}
              <span style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Approach</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ color: '#6f6256', fontSize: '1.15rem', lineHeight: '1.85' }}>{c.whatItIs.body[0]}</p>
              <p style={{ color: '#6f6256', fontSize: '1.15rem', lineHeight: '1.85' }}>
                At CodeHe<span style={{ color: '#B85C38' }}>&#123;R&#125;</span> LLC, we help businesses identify where policies, practices, and processes may be limiting visibility into qualified talent.
              </p>
              <p style={{ color: '#6f6256', fontSize: '1.15rem', lineHeight: '1.85' }}>{c.whatItIs.body[2]}</p>
              <p style={{ color: '#6f6256', fontSize: '1.15rem', lineHeight: '1.85' }}>{c.whatItIs.body[3]}</p>
              <p style={{ color: '#6f6256', fontSize: '1.15rem', lineHeight: '1.85' }}>{c.whatItIs.body[4]}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section
        style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--color-bg-main)', marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', maxWidth: '38rem', margin: '0 auto', textAlign: 'center' }}
          >
            <h2 style={{ color: '#f5ecd7', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
              {c.cta.headline}
            </h2>
            <Button variant="primary" size="lg" onClick={onQuoteClick} style={{ color: '#f5ecd7' }}>
              {c.cta.label}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section
        style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
        className="bg-[var(--color-surface-white)] border-t border-[var(--color-border-light)]"
      >
        <div className="site-container">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-12">
            <span style={{ color: '#1c1410', textShadow: '2px 2px 0px #c9973a' }}>The</span>{' '}
            <span style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Process</span>
          </h2>
          <div style={{ marginTop: '3.5rem', gap: '2rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {c.process.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', borderTop: '4px solid #B85C38' }}
                className="bg-[var(--color-surface-cream)] rounded-[var(--radius-lg)] border border-[var(--color-border-light)]"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text-strong)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section
        style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--color-surface-cream)', borderTop: '1px solid var(--color-border-light)' }}
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
