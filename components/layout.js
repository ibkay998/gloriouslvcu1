import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Header,
  Text,
  Grid,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Footer,
 
} from "@chakra-ui/react"
import { Children } from 'react'


export default function Layout({children, home}) {
    return (
    <div>
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
    <main>{children}</main>
        <footer className={styles.footer} bg="black">
            <Text>Lagos Varsity Christian Union Copyright 2021. All rights reserved</Text>
        </footer>
    </div>
    )}