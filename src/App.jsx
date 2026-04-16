import React, { useState } from 'react'
import Website from '../achievers_club_business_website.jsx'

export default function AppWrapper() {
  const [error, setError] = useState('')

  const handleLeadValidation = (e) => {
    const form = e.target
    const age = Number(form.age.value)
    const phone = form.phone.value.trim()

    if (!/^[6789]\d{9}$/.test(phone)) {
      e.preventDefault()
      setError('The Mobile Number is not correct')
      return
    }

    if (age < 18) {
      e.preventDefault()
      setError('Please try again after you get 18. Thank you.')
      return
    }

    window.open('https://youtu.be/Yz_iY_Wo3y0?si=YW-b8qkmf_frisFW', '_blank')
  }

  return <Website onLeadSubmit={handleLeadValidation} formError={error} />
}

