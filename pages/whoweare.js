import Head from 'next/head'
import styles from '../styles/Whoweare.module.css'
import Layout from "../components/layout"
import {
  Box,
  Image,
  Flex,
  Header,
  Text,
  Grid,
  GridItem,
  Footer,
 
} from "@chakra-ui/react"

export default function WhoWeAre() {
    return (
        <Layout className={styles.maincontent}>
          <Box className={styles.headerwaves} w="100%" h="660px" >
            <Image src="/whowearetop.png" alt="who we are" pt="70px" w="100%" h={[400, 500, 600, 600, 600]}/>
            <Text fontSize={[23,23,33,40,40]} top="35%" left="50%" fontFamily="Candlescript Demo Version">Welcome to Our Church</Text>
            <Text color="white" fontWeight="700" fontSize={[23,23,33,50,50]} top="55%" left="50%" fontFamily="Roboto">In Christ For Christ<br/> In Love</Text>
          </Box>
        </Layout>
    )}