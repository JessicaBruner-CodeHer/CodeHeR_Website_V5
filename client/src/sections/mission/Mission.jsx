import { motion } from 'framer-motion'
import { Target, Shield, Zap } from 'lucide-react'
import { missionContent as c } from '@/assets/constants/siteContent'

const ICON_MAP = { Target, Shield, Zap }

export default function Mission() {
  return (
    <section
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      className="relative overflow-hidden bg-[var(--color-bg-main)] text-[var(--color-text-light)]"
    >
      {/* Subtle radial glow */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(201,151,58,0.06),transparent)]
      " />

      <div className="site-container relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl font-semibold leading-tight"
          style={{ marginBottom: '2.5rem' }}
        >
          <span style={{ color: '#f5ecd7', textShadow: '2px 2px 0px #c9973a' }}>Our</span>{' '}
          <span style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Promise</span>
        </motion.h2>

        {/* Bold statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="
            font-heading text-2xl md:text-3xl lg:text-4xl
            font-semibold text-[var(--color-text-light)]
            text-center leading-snug border-l-0
          "
          style={{ marginBottom: '3.5rem' }}
        >
          &ldquo;{c.statement}&rdquo;
        </motion.blockquote>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(184,92,56,0.4)', marginBottom: '3.5rem' }} />

        {/* Pillars */}
        <div
          style={{ gap: '4rem' }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {c.pillars.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon]
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div
                  className="hex-icon w-12 h-12 bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)]"
                  style={{ filter: 'drop-shadow(4px 4px 0px #B85C38)' }}
                >
                  {Icon && <Icon size={18} strokeWidth={1.5} />}
                </div>

                <h3 style={{ color: '#c9973a' }} className="font-heading text-lg font-semibold">
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#c8bfb4', lineHeight: '1.75' }}>
                  {pillar.body}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
