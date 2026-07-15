export function isImageIcon(icon: string) {
  return icon.startsWith('/') || icon.startsWith('http://') || icon.startsWith('https://')
}
