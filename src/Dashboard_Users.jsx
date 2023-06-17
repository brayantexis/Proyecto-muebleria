
import ContentUsuarios from './assets/components/ContentUsuarios';
import Footer from './assets/components/Footer';
import Header_Dashboard from './assets/components/Header_Dashboard';
import "./assets/css/style_Dashboard.css"
import "./assets/css/Dasboard.css"

const Dashboard_users = () => {
  return (
    <>
      <Header_Dashboard/>
      <ContentUsuarios/>
      <Footer/>
    </>
  )
}

export default Dashboard_users;