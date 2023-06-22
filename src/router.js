import { Route,Routes, BrowserRouter} from 'react-router-dom'

import Home from './components/home';
import PostComponent from './components/post';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'
import Header from './components/header';
import MainLayout from './layouts/mainlayouts';

const Router = () => {
  return(
    <BrowserRouter>
    <Header/>
    <MainLayout>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="article/:id" element={<PostComponent/>}/>
      </Routes>
    </MainLayout>
      
      
    </BrowserRouter>
  )
}

export default Router;