export const setProfileAction = (profile: {
  first_name: string
  last_name: string
  phone_number: string
  email: string
}) => ({
  type: 'PROFILE/SET_PROFILE' as const,
  profile,
})

export const cleanProfileAction = () => ({
  type: 'PROFILE/CLEAN_PROFILE' as const,
})
