import React, { useCallback, useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface ReCaptchaProps {
  onChange: (token: string) => void
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onChange }) => {
  const reCaptureRef = useRef<any>(null)
  useEffect(() => {
    if (reCaptureRef.current) {
      reCaptureRef.current.execute()
    }
    return () => {
      if (reCaptureRef.current) reCaptureRef.current.reset()
    }
  }, [reCaptureRef])

  const onChangeHandler = (value: string | null) => {
    if (value !== null) onChange(value)
  }

  const onExpiredHandler = useCallback(() => {
    reCaptureRef.current.reset()
  }, [reCaptureRef])

  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
    <ReCAPTCHA
      ref={reCaptureRef}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      size='invisible'
      onChange={onChangeHandler}
      onExpired={onExpiredHandler}
    />
  ) : null
}

export default ReCaptcha
