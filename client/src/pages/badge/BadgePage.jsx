import { useSeo } from '@/hooks/useSeo'
import BadgeForm from '@/components/forms/badgeform/BadgeForm'
import badgeGold from '@/assets/images/NoMoreLabels_Badge_Hex_Gold.svg'

export default function BadgePage() {
  useSeo({
    title: 'NoMoreLabels Badge',
    description: 'Apply to receive the NoMoreLabels badge and show your commitment to fair chance hiring.',
  })

  return (
    <div className="pt-20">
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--color-surface-cream)', minHeight: '100vh' }}>
        <div className="site-container">
          <div
            style={{ display: 'grid', gap: '5rem', alignItems: 'start', maxWidth: '1100px', margin: '0 auto' }}
            className="grid grid-cols-1 lg:grid-cols-2"
          >

            {/* Left — context */}
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-tight" style={{ marginBottom: '1.5rem' }}>
                <span style={{ color: '#1c1410', textShadow: '2px 2px 0px #c9973a' }}>NoMore</span>
                <span style={{ color: '#c9973a', textShadow: '2px 2px 0px #1c1410' }}>Labels</span>
              </h1>
              <p style={{ color: '#6f6256', fontSize: '1.1rem', lineHeight: '1.85', marginBottom: '1.5rem' }}>
                The NoMoreLabels badge is a mark of commitment. It tells job seekers, partners, and your community that your organization actively works to reduce barriers for people with criminal backgrounds.
              </p>
              <p style={{ color: '#6f6256', fontSize: '1.1rem', lineHeight: '1.85' }}>
                Fair chance hiring is not just a policy. It is a practice. Complete the form to apply for your badge and join a growing network of employers building a stronger, more inclusive workforce.
              </p>
            </div>

            {/* Right — form card */}
            <div style={{
              background: 'var(--color-surface-white)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border-light)',
              borderLeft: '4px solid #B85C38',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}>
              <BadgeForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
