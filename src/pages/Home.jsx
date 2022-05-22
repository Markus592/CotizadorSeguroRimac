import FormData from '../components/FormData/Index'
import Hero from '../components/Hero'
import {Layout} from '../components/Layout.jsx'
import '../styles/Layout.scss'

function Home() {
  
  return (
    <Layout>
      <div className="gridPage">
      <Hero/>
      <FormData/>
      
      </div>
    </Layout>
  )
}
export default Home