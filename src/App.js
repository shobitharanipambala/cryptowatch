import { styled } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import ProtectedRoute from './components/ProtectedRoute';
// import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';

function App() {
  


  //styling starts here
  
  const CustomApp = styled('div')(({ theme }) => ({
    backgroundColor: "#031B34",
    color: "white",
    minHeight: "100vh",
  }))
  
  //styling ends here




  return (
    <BrowserRouter>
      <CustomApp>
        <Header />
        
        
        {/* your private and public routes goes here */}
       
        {/* step -1 */}
         {/*login   */}
         <PublicRoute path="/login" component={LoginPage}></PublicRoute> 
        {/* register  */}
        <PublicRoute path="/register" component={Register}></PublicRoute>   
        {/* homepage */}
       <PrivateRoute  path="/home" component={Homepage}></PrivateRoute> 
        {/* coin page */}
         <PrivateRoute path="/coins/:id" component={CoinPage}></PrivateRoute> 
      </CustomApp>
    </BrowserRouter>
  );
}

export default App;
