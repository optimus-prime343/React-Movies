import Link from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

interface NextLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}
const NextLink = ({ href, children, ...rest }: NextLinkProps) => {
  return (
    <Link href={href} scroll={false}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default NextLink
