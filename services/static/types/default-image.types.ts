export interface DefaultImageProviderMetadata {
  public_id: string
  resource_type: string
}

export interface DefaultImageForm {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
  provider_metadata: DefaultImageProviderMetadata
}

export interface DefaultImageFormats {
  thumbnail: DefaultImageForm
  large: DefaultImageForm
  medium: DefaultImageForm
  small: DefaultImageForm
}

export interface DefaultImageType {
  url: string
  formats: DefaultImageFormats
}
