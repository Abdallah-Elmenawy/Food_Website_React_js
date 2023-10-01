import { Fragment } from 'react';
import './App.css';
import Home from './component/Home-js/Home';
import Nav from './component/Navs/Navs';
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <Fragment>
      <Nav/>
      <Home/>
      <ScrollToTop
            smooth
            top="500"
            style={{
              backgroundColor: "#841e3e",
            }}
            component={ 
              <div >
                <i className="fas fa-angle-up angle-up" ></i>
              </div>
            }
            />
    </Fragment>
  );
}
export default App;
