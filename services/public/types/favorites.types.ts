export interface UserFavoritesUpdateRequest {
  jwt: string
  userID: string
  favorites: string[]
}
