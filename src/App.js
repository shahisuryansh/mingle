
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './Chatscreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MingleeCard from './MingleeCard';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
      
      <Router>
     
      <Switch>
      
      <Route path = '/chat/:person' >
        <Header backButton = '/chat'/>
          <ChatScreen/>
          </Route>
      
        <Route path = '/chat' >
        <Header backButton = '/'/>
          <Chats/>
          </Route>
          
         
        <Route path = '/' >
          <Header/>
          <MingleeCard/>
           <SwipeButtons/>
        </Route>
          
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
