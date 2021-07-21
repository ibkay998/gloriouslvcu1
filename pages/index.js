import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Header,
  Text,
  Grid,
  GridItem,
  Footer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GloriousLvcu</title>
        <link rel="icon" href="/lvculogo.png" />
        <Breadcrumb separator=" " className={styles.container1} ml={[5]}>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        </Breadcrumb>
      </Head>
      {/*  */}

      <main className={styles.main}>
        <Grid 
          w="100%"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(6, 1fr)"
        >
          <GridItem w={[500,748,974,1257,1800]} rowSpan={1} colSpan={3}  h="100px" bg="red" >God is good and he his kind</GridItem>
          <GridItem  h="50px" bg="blue"></GridItem>
          <GridItem   h="100px" bg="green"></GridItem>
          <GridItem  h="100px" bg="black"></GridItem>
          <GridItem  h="100px" bg="purple"></GridItem>
          <GridItem  h="100px" bg="blue"></GridItem>
        </Grid>
      </main>

      <footer className={styles.footer} bg="black">
        <Text>Lagos Varsity Christian Union Copyright 2021. All rights reserved</Text>
      </footer>
    </div>
  )
}
