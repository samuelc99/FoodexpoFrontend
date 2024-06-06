import imgCookie from '../../assets/banner.png'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import { Container, Content} from './styles'

export function Home() {
return(
  <Container>
    <Header/>
    <Content>
      <figure>
        <img src={imgCookie} alt="" />
        <div className='title'>
          <h1>Sabores iniglálaveis </h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </figure>
    
      <Section title="Refeições"> 
          <Carousel/>
      </Section>

      <Section title="Sobremesas"> 
          <Carousel/>
      </Section>

      <Section title="Bebidas"> 
          <Carousel/>
      </Section>
  
      </Content>
      <Footer/>

    
  </Container>
)
}