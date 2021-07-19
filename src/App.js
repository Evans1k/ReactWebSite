import './App.css';
import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer/Footer";
import Chat from "./components/Chat/Chat";
import Profile from "./components/Profile/Profile";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
      <div className={'gridWrapper'}>
        <Header/>
          <NavMenu/>
          <div className={'gridWrapper-content'}>
              {/*<Route exact path = '/chat' component={Chat}/>*/}
              {/*<Route exact path = '/profile' component={Profile}/>*/}
              {/*<Route exact path = '/media' component={Media}/>*/}
              {/*<Route exact path = '/settings' component={Settings}/>*/}
              <Route exact path = '/chat' render={()=><Chat state={props.state.chatsPage}/>}/>
              <Route exact path = '/profile' render={()=><Profile state={props.state.profilePage}/>}/>
              <Route exact path = '/media' render={()=><Media/>}/>
              <Route exact path = '/settings' render={()=><Settings/>}/>
          </div>
              <Footer/>
      </div>
      </BrowserRouter>
  );
}


export default App;
