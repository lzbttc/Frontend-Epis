import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { studentMock } from '../../mocks/studentMock'
import './MainLayout.css'

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header student={studentMock.student} />
      <main className="main-layout__content">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
