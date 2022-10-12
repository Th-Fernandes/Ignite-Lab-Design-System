
interface Props {
  children?: string
}

export function Text({children}:Props) {
  return(
    <h1>{children || 'hello world'}</h1>
  )
}