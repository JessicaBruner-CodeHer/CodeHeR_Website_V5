import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Loader, AlertCircle } from 'lucide-react'
import axios from 'axios'
import Button from '@/ui/button/Button'
import badgeGold    from '@/assets/images/NoMoreLabels_Badge_Hex_Gold.svg'
import badgeIvory   from '@/assets/images/NoMoreLabels_Badge_Hex_Ivory.svg'
import badgeDefault from '@/assets/images/NoMoreLabels_Badge_Hex_AmberRust.svg'
import badgeDark    from '@/assets/images/NoMoreLabels_Badge_Hex_Dark.svg'

const FIELD_CLASS = `
  w-full px-4 py-3 rounded-[var(--radius-md)]
  bg-[var(--color-surface-muted)]
  border border-[var(--color-border-light)]
  text-[var(--color-text-body)] text-base
  placeholder:text-[var(--color-text-muted)]
  focus:outline-none focus:border-[var(--color-primary)]
  focus:ring-2 focus:ring-[var(--color-primary)]/20
  transition-colors duration-[var(--transition-fast)]
`

const LABEL_CLASS = `
  block text-xs font-semibold tracking-widest uppercase
  text-[var(--color-text-body)] mb-2
`

const ERROR_CLASS = `mt-1.5 text-xs text-red-600 flex items-center gap-1`

const BADGE_OPTIONS = [
  { id: 'Gold',     label: 'Gold',     src: badgeGold,    bg: '#1c1410' },
  { id: 'Ivory',    label: 'Ivory',    src: badgeIvory,   bg: '#1c1410' },
  { id: 'Standard', label: 'Standard', src: badgeDefault, bg: '#f5ecd7' },
  { id: 'Dark',     label: 'Dark',     src: badgeDark,    bg: '#f5ecd7' },
]

export default function BadgeForm({ onSuccess }) {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    reset,
  } = useForm()

  const intentType    = watch('intentType')
  const selectedBadge = watch('badgeSelection')
  const isCommit      = intentType === 'commit'
  const isInterested  = intentType === 'interested'

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => { onSuccess?.(); reset(); navigate('/') }, 4000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitSuccessful, onSuccess, reset, navigate])

  function handleIntentChange(type) {
    setValue('intentType', type, { shouldValidate: true })
    if (type === 'interested') setValue('badgeSelection', '')
  }

  async function onSubmit(data) {
    try {
      await axios.post('/api/badge-requests', {
        ...data,
        agreementAccepted: isCommit,
      })
    } catch (err) {
      const msg = err?.response?.data?.message || 'Something went wrong. Please try again or email us at info@codeherllc.com.'
      setError('root', { message: msg })
      throw new Error('submission failed')
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitSuccessful ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center gap-4"
          style={{ padding: '4rem 2rem' }}
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
            <CheckCircle size={32} className="text-[var(--color-primary)]" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading text-2xl font-semibold text-[var(--color-text-strong)]">
            Request Received
          </h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed max-w-sm">
            {isCommit
              ? 'Thank you for your commitment. We will review your request and send your selected badge within 1 to 2 business days.'
              : 'Thank you for your interest. Someone from our team will be in touch within 1 to 2 business days.'}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">This window will close automatically…</p>
        </motion.div>
      ) : (
        <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>

          {/* Dark branded header */}
          <div style={{ background: 'var(--color-bg-main)', padding: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              CodeHe<span style={{ color: '#B85C38' }}>&#123;R&#125;</span>{' '}
              <span style={{ color: 'rgba(245,236,215,0.5)', fontSize: '0.7rem' }}>LLC</span>
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-text-light)', lineHeight: 1.2, marginBottom: '1rem' }}>
              NoMoreLabels<br />Badge Request
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(245,236,215,0.6)', lineHeight: 1.6 }}>
              Complete this form to request your badge or express your interest in becoming an inclusive employer.
            </p>
          </div>

          {/* Form body */}
          <div style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

              {/* Company name */}
              <div>
                <label className={LABEL_CLASS} htmlFor="bf-company">
                  Company Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <input
                  id="bf-company"
                  type="text"
                  placeholder="Your organization name"
                  className={FIELD_CLASS}
                  {...register('companyName', { required: 'Company name is required' })}
                />
                {errors.companyName && <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.companyName.message}</p>}
              </div>

              {/* First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={LABEL_CLASS} htmlFor="bf-first">
                    First Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input id="bf-first" type="text" placeholder="Jane" className={FIELD_CLASS}
                    {...register('firstName', { required: 'First name is required' })} />
                  {errors.firstName && <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.firstName.message}</p>}
                </div>
                <div>
                  <label className={LABEL_CLASS} htmlFor="bf-last">
                    Last Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input id="bf-last" type="text" placeholder="Smith" className={FIELD_CLASS}
                    {...register('lastName', { required: 'Last name is required' })} />
                  {errors.lastName && <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.lastName.message}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={LABEL_CLASS} htmlFor="bf-email">
                  Email Address <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <input id="bf-email" type="email" placeholder="jane@company.com" className={FIELD_CLASS}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                  })} />
                {errors.email && <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.email.message}</p>}
              </div>

              {/* Intent selection */}
              <input type="hidden" {...register('intentType', { required: 'Please make a selection below' })} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p className={LABEL_CLASS}>Your Commitment <span style={{ color: 'var(--color-primary)' }}>*</span></p>

                {/* Guarantee checkbox */}
                <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer', padding: '1rem', borderRadius: 'var(--radius-md)', background: isCommit ? 'rgba(201,151,58,0.06)' : 'var(--color-surface-muted)', border: isCommit ? '1px solid rgba(201,151,58,0.3)' : '1px solid var(--color-border-light)', transition: 'all 0.15s' }}>
                  <input
                    type="checkbox"
                    checked={isCommit}
                    onChange={() => handleIntentChange(isCommit ? '' : 'commit')}
                    style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: 'var(--color-primary)', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    I guarantee that my organization is a fair chance employer with a sustainable program in place that reduces barriers of criminal backgrounds to employment within my company. I commit to putting this NoMoreLabels badge on my website.
                  </span>
                </label>

                {/* Interested checkbox */}
                <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer', padding: '1rem', borderRadius: 'var(--radius-md)', background: isInterested ? 'rgba(201,151,58,0.06)' : 'var(--color-surface-muted)', border: isInterested ? '1px solid rgba(201,151,58,0.3)' : '1px solid var(--color-border-light)', transition: 'all 0.15s' }}>
                  <input
                    type="checkbox"
                    checked={isInterested}
                    onChange={() => handleIntentChange(isInterested ? '' : 'interested')}
                    style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: 'var(--color-primary)', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    I am interested in becoming an inclusive employer.
                  </span>
                </label>

                {errors.intentType && <p className={ERROR_CLASS}><AlertCircle size={12} /> {errors.intentType.message}</p>}
              </div>

              {/* Badge selection — only shown when guarantee is checked */}
              <AnimatePresence>
                {isCommit && (
                  <motion.div
                    key="badge-select"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <input type="hidden" {...register('badgeSelection', { validate: v => !isCommit || !!v || 'Please select a badge style' })} />
                    <p className={LABEL_CLASS} style={{ marginBottom: '0.75rem' }}>
                      Select Your Badge Style <span style={{ color: 'var(--color-primary)' }}>*</span>
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {BADGE_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setValue('badgeSelection', opt.id, { shouldValidate: true })}
                          style={{
                            background: opt.bg,
                            borderRadius: 'var(--radius-md)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            border: selectedBadge === opt.id ? '2px solid #B85C38' : '2px solid transparent',
                            boxShadow: selectedBadge === opt.id ? '0 0 0 1px #B85C38' : 'none',
                            transition: 'border 0.15s, box-shadow 0.15s',
                            width: '100%',
                          }}
                        >
                          <img src={opt.src} alt={`${opt.label} badge`} style={{ width: '100%', maxWidth: '260px', height: 'auto' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: opt.bg === '#1c1410' ? 'rgba(245,236,215,0.7)' : '#6f6256' }}>
                            {opt.label}
                          </span>
                        </button>
                      ))}
                    </div>
                    {errors.badgeSelection && <p className={ERROR_CLASS} style={{ marginTop: '0.5rem' }}><AlertCircle size={12} /> {errors.badgeSelection.message}</p>}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Root error */}
              {errors.root && (
                <div className="flex items-start gap-3 p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-sm text-red-700">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  {errors.root.message}
                </div>
              )}

              {/* Submit */}
              <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <><Loader size={16} className="animate-spin" /> Sending…</>
                ) : (
                  'Submit Request'
                )}
              </Button>

            </form>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
