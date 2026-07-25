import { useState } from 'react'

const FORMSPREE_ENDPOINT = https://formspree.io/f/mlgqogpg

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormState)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatusMessage('')
    setStatusType('')

    const allFieldsCompleted = Object.values(formValues).every(
      (value) => value.trim().length > 0
    )

    if (!allFieldsCompleted) {
      setStatusMessage('Please complete all fields before sending.')
      setStatusType('error')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (!response.ok) {
        throw new Error('Unable to submit form')
      }

      setFormValues(initialFormState)
      setStatusMessage('Thank you. Your enquiry has been sent.')
      setStatusType('success')
    } catch {
      setStatusMessage(
        'Something went wrong. Please contact us by phone or email.'
      )
      setStatusType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyles =
    'w-full border border-[#b9883b]/30 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#c8943f]'

  return (
    <section
      id="contact"
      className="border-t border-[#b9883b]/20 bg-[#090909] py-20 text-white md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">

        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-[#c8943f]">
            CONTACT
          </p>

          <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Let’s discuss your project.
          </h2>

          <div className="mt-6 h-px w-14 bg-[#c8943f]" />

          <p className="mt-7 max-w-md text-base leading-8 text-white/60">
            Share your plans, measurements or ideas and we’ll help you take the
            next step.
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="text-xs tracking-[0.18em] text-[#c8943f]">PHONE</p>
              <a
                href="tel:+61423768583"
                className="mt-2 inline-block text-base text-white/80 transition hover:text-[#d5a34c]"
              >
                +61 423 768 583
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] text-[#c8943f]">EMAIL</p>
              <a
                href="mailto:info@caprecisioncarpentry.com.au"
                className="mt-2 inline-block text-base text-white/80 transition hover:text-[#d5a34c]"
              >
                info@caprecisioncarpentry.com.au
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] text-[#c8943f]">ABN</p>
              <p className="mt-2 text-base text-white/80">
                32 488 570 196
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] text-[#c8943f]">
                SERVICE AREA
              </p>
              <p className="mt-2 text-base text-white/80">
                Sydney, NSW
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[#b9883b]/30 bg-[#0d0d0d] p-6 md:p-8"
          noValidate
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="firstName"
              placeholder="First name"
              className={inputStyles}
              value={formValues.firstName}
              onChange={handleChange}
              required
            />

            <input
              name="lastName"
              placeholder="Last name"
              className={inputStyles}
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            className={`${inputStyles} mt-4`}
            value={formValues.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            className={`${inputStyles} mt-4`}
            value={formValues.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            className={`${inputStyles} mt-4 min-h-[150px] resize-y`}
            value={formValues.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 w-full bg-[#c8943f] px-6 py-4 text-xs font-semibold tracking-[0.16em] text-black transition hover:bg-[#ddb15d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'SENDING…' : 'SEND ENQUIRY'}
          </button>

          {statusMessage && (
            <p
              className={
                statusType === 'success'
                  ? 'mt-4 text-sm text-emerald-400'
                  : 'mt-4 text-sm text-rose-400'
              }
            >
              {statusMessage}
            </p>
          )}

          <p className="mt-4 text-xs leading-5 text-white/35">
            By submitting this form, you agree to be contacted about your
            enquiry.
          </p>
        </form>
      </div>
    </section>
  )
}
