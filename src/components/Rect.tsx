/** @jsx jsx */
import { FC } from "react"
import { jsx } from "theme-ui"

export const Rect: FC = props => (
  <svg width="5" height="1000" {...props}>
    <rect width="5" height="1000" />
  </svg>
)
