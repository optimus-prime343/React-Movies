import classNames from 'classnames'
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

interface Props<T> {
  icon: ReactNode
  width?: number
  height?: number
  className?: string
  as?: T
}
export const IconButton = <T extends ElementType = 'button'>({
  as,
  width,
  height,
  icon,
  className,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as ?? 'button'
  const iconClass = classNames('', className, [width ?? 'w-16', height ?? 'w-16'])

  return (
    <Component {...props} className={iconClass}>
      {icon}
    </Component>
  )
}
