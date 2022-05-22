import HeroGracias from '../components/HeroGracias/Index'
import InfoGracias from '../components/InfoGracias/Index'
import {Layout} from '../components/Layout.jsx'
import '../styles/Layout.scss'
function Home() {
  return (
    <Layout>
      <div className="gridPage">
        <HeroGracias/>
        <InfoGracias></InfoGracias>
      </div>
    </Layout>
  )
}
export default Home