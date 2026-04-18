import { motion } from 'framer-motion'
import { aboutTeaserContent as c } from '@/assets/constants/siteContent'
import Button from '@/ui/button/Button'
import bridgeImage from '../../assets/images/codeher_bridge_refined.svg'

const R = <span style={{ color: '#B85C38' }}>&#123;R&#125;</span>

export default function AboutTeaser() {
  return (
    <section
      className="flex flex-col lg:flex-row border-t border-[var(--color-border-light)]"
      style={{ minHeight: '520px' }}
    >
      {/* Left — cream, text content */}
      <div
        className="flex-1 bg-[var(--color-surface-cream)] flex items-center"
        style={{ padding: '7rem 4rem' }}
      >
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Headline */}
          <h2 className="font-heading font-semibold leading-tight mb-8">
            <span className="text-4xl md:text-5xl" style={{ color: '#1c1410', textShadow: '2px 2px 0px #c9973a' }}>Our</span>{' '}
            <span className="text-4xl md:text-5xl" style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Mission</span>
            <span className="block" style={{ fontSize: '1.35rem', fontWeight: 400, color: '#6f6256', textShadow: 'none', marginTop: '0.75rem', marginBottom: '2rem' }}>
              OF PEOPLE AND TECHNOLOGY
            </span>
          </h2>

          {/* Body — CodeHe{R} LLC styled inline */}
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
            CodeHe{R} LLC was founded with a passion to bridge a gap between economic stability
            and business growth. We are dedicated to providing business solutions that bring the
            needs of people and sustainable solutions together for powerful outcomes. Whether you
            are trying to solve for workforce shortages or you need to change your digital
            strategy, CodeHe{R} LLC is dedicated to solution driven results.
          </p>

        </motion.div>
      </div>

      {/* Right — inkwell, bridge image */}
      <div
        className="flex-1 bg-[var(--color-bg-main)] flex items-center justify-center"
        style={{ minHeight: '400px' }}
      >
        <motion.img
          src={bridgeImage}
          alt="The bridge between people and technology, CodeHeR LLC"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

    </section>
  )
}
