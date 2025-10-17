export const metadata = {
  title: 'Festive Store Test',
  description: 'Test deployment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
