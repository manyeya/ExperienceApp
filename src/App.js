import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

import "./App.scss";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
];

function App() {

  const onEnter = node => {
    console.log(node)
    gsap.from([node.children[0].firstElementChild,node.children[0].lastElementChild],.6,{
      y:30,
      delay:.6,
      ease:"power3.InOut",
      opacity:0,
      stagger:{
        amount:.6
      }
    })

  }

  const onExit = node => {
    console.log(node.children[0].lastElementChild)
    gsap.to([node.children[0].firstElementChild,node.children[0].lastElementChild],.6,{
      y:-30,
      opacity:0,
      ease:"power3.InOut",
      stagger:{ 
        amount:.6
      }
    })
  }

  return (
    <div className="App">
      <NavBar />
        <div className="container">
          {routes.map(({ path, Component, name }) => (
            <Route key={name} exact path={path}>
              {({ match }) => (
                <CSSTransition
                in={match != null}
                timeout={1200}
                unmountOnExit
                onEnter={onEnter}
                onExit={onExit}
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
    </div>
  );
}

export default App;
