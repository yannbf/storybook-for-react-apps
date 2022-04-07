import * as React from 'react'
import styled from 'styled-components'

import { Header, HeaderComponent } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

const Container = styled.div`
  min-height: calc(100vh - 200px);
`

type PageTemplateProps = {
  type?: 'default' | 'sticky-header' | 'basic'
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ type = 'default', children }) => {
  if (type === 'basic') {
    return (
      <>
        <HeaderComponent logoOnly />
        <Container>{children}</Container>
      </>
    )
  }

  if (type === 'sticky-header') {
    return (
      <>
        <Header sticky />
        <Container>{children}</Container>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
