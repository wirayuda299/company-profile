import Navigation from "@/components/Drawer/Navigation"

type Props = {
  children: React.ReactNode
}

export const metadata = {
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
