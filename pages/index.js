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
  Image
} from "@chakra-ui/react"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GloriousLvcu</title>
        <link rel="icon" href="/lvculogo.png" />
        <Breadcrumb separator=" " className={styles.container1} ml={[5]}>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Who We Are</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">SOD</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Special Programmes</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#">Resources</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbItem><BreadcrumbLink href="#"></BreadcrumbLink></BreadcrumbItem>
        </Breadcrumb>
      </Head>
      {/*  */}

      
        <div className={styles.train}>
         <h1>We raise people </h1>
         <p><em>For Christ</em></p>
        
        </div>

        <div className={styles.welcome}>
          <p><em>Welcome to The Glorious Family</em></p>  
            <p><strong>This is the Lagos Varsity Christian Union aka The Glorious Family</strong></p> 
              <br></br>
          <p >Tenure of</p>
          <p className={styles.welcom}>God's Saving Power</p>
          <p className={styles.welc}><em>Raising Men with the Gospel of Christ</em> Romans 1:16, Matt 28:18-20</p>
          
        </div>

        

        <div className={styles.aboutPres}>
           <p><h1>Oyewunmi Emmanuel</h1></p>
           <p><h3><strong>President</strong> <em>Tenure of God's Saving Power</em></h3></p>
        </div>

        

        <div className={styles.recent}>
          <h1>Recent Sermons</h1>
          <div className={styles.mv}>
          <span className={styles.li5}><p>Caring for other believers in your local church</p></span>
          <span className={styles.li6}><p>This Gospel(II)</p></span>
          <span className={styles.li7}><p>This Gospel(I)</p></span>
          </div>
        </div>

        <div className={styles.services}>
          <h1>Our Services</h1>
          <p><strong>Preaching and Teaching the Word of grace with simplicity and accuracy accompanying the manifestation of the Holy Spirit and Power</strong></p>
          <ul className={styles.services1}>
            <span className={styles.li1}>
              <p>Glorious Service</p>
              <h3>Sundays 2pm-4pm</h3>
            </span>
            <span className={styles.li2}>
              <p>Hour of Power</p>
              <h3>Mondays 8pm-9pm</h3>

              </span>
            <span className={styles.li3}>
              <p>Bible Study</p>
              <h3>Thursdays 7:30pm-9pm</h3>

              </span>
          </ul>
          

        </div>

        <div className={styles.newslet}>
          <div>

            <p>Raising great women and men in all spheres of human endeavour
            by the preaching of the word
             of grace who will establish and expand
              God's kingdom upon the earth</p>
              
            <h4>Chapel of Christ our Light</h4>
            <h4>gloriouslvcu7@gmail.com</h4>
            <h4>+234 803 816 9388</h4>
          </div>
          <div className={styles.subsc}>
            <h1>Newsletter for Editorial Subscription</h1>
            <h2>Subscribe to receive our newsletters</h2>

            <br></br>
            <form>
              <input type= "text" placeholder="Enter First Name" required></input>

              <br></br>
              <br></br>
              

              
              <input type= "text" placeholder="Enter Email" required></input>

              <br></br>
              <br></br>

              <input type= "button" value="Subscribe"></input>

            </form>
          </div>  
              
        </div>

    

      <footer className={styles.footer} bg="black">
        <Text>Lagos Varsity Christian Union Copyright 2021. All rights reserved</Text>
      </footer>
    </div>
  )
}
