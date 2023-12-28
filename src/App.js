import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/WatchScreen/WatchScreen'
import SearchScreen from './screens/SearchScreen'
import SubscriptionsScreen from './screens/subscriptionScreen/SubscriptionScreen'
import './_app.scss'
import ChannelScreen from './screens/channelScreen/ChannelScreen'


const Layout = ({children}) => {
   const [sidebar, toggleSidebar] = useState(false)
   const handleToggleSidebar = () => toggleSidebar(value => !value)

   return (
      <>
        <Header handleToggleSidebar={handleToggleSidebar} />
         <div className="app__container">
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className="app__main ">
               {children}
            </Container>
         </div> 
      </>
   )
}

const App = () => {
  
   const {accessToken, loading} = useSelector(state => state.auth)
   const navigate = useNavigate()

   useEffect(() => {
      if(!loading && !accessToken){
         navigate("/auth")
      }
   }, [accessToken, loading, navigate])

   return (
      <Routes>

         <Route exact path='/' element={
            <Layout>
               <HomeScreen/>
            </Layout>}> 
         </Route>

         <Route path='/auth' element={ <LoginScreen/>}/>

         <Route path='/search/:query' element={
            <Layout>
               <SearchScreen/>
            </Layout>}>
         </Route>

         <Route path='/watch/:id' element={
            <Layout>
               <WatchScreen/>
            </Layout>}>
         </Route>

         <Route path='/feed/subscriptions' element={
            <Layout>
               <SubscriptionsScreen/>
            </Layout>}>
         </Route>

         <Route path='/channel/:channelId' element={
            <Layout>
               <ChannelScreen/>
            </Layout>}>
         </Route>

         <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>

)
   
   
      
   
}

export default App

