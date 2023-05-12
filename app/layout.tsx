import type { Metadata } from "next"

type Props = {
  children: React.ReactNode
}

export const metadata:Metadata = {
  title: 'Padma Hotel ',
  description: 'Padma Hotel  is a five-star hotel in bali.',

}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
