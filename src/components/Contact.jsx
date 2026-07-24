import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgoaodgb'
// TODO: Replace the Formspree endpoint above with the production form ID.

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
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message']
    return requiredFields.every((field) => formValues[field].trim().length > 0)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatusMessage('')
    setStatusType('')

    if (!validateForm()) {
      setStatusMessage('Please fill in all required fields before sending.')
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

      if (response.ok) {
        setFormValues(initialFormState)
        setStatusMessage('Thank you, your enquiry has been sent.')
        setStatusType('success')
      } else {
        setStatusMessage('Sorry, something went wrong. Please try again shortly.')
        setStatusType('error')
      }
    } catch (error) {
      setStatusMessage('Sorry, something went wrong. Please try again shortly.')
      setStatusType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 border-t">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-600">Sydney, NSW • Mon–Fri 7:00–16:00</p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+610413893841" className="text-slate-700 hover:text-slate-900">
                +61 0413 893 841
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <span className="text-slate-700">info@gmcsolutions.com.au</span>
            </p>
            <p><span className="font-semibold">ABN:</span> 386 244 674 65</p>
          </div>
        </div>
        <form
          className="bg-white rounded-2xl border p-6 grid gap-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First name"
              className="border rounded-xl px-3 py-2"
              required
              value={formValues.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last name"
              className="border rounded-xl px-3 py-2"
              required
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="border rounded-xl px-3 py-2"
            required
            value={formValues.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            type="tel"
            className="border rounded-xl px-3 py-2"
            required
            value={formValues.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            className="border rounded-xl px-3 py-2 min-h-[120px]"
            required
            value={formValues.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="rounded-xl bg-slate-900 text-white px-5 py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send enquiry'}
          </button>
          {statusMessage ? (
            <p
              className={
                statusType === 'success'
                  ? 'text-sm text-emerald-600'
                  : 'text-sm text-rose-600'
              }
            >
              {statusMessage}
            </p>
          ) : null}
          <p className="text-xs text-slate-500">By submitting you agree to be contacted about your enquiry. We’ll never spam you.</p>
        </form>
      </div>
    </section>
  )
}
