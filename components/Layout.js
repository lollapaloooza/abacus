import { Box } from '@mui/material'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  children,
  isntMain,
  title,
  description,
  whiteSpace,
}) {
  return (
    <>
      <Header {...{ isntMain, title, description, whiteSpace }} />
      <Box>{children}</Box>
      <Footer />
    </>
  )
}
