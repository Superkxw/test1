import React,{Component} from 'react'
import '../css/header.css'
import "../font/iconfont.css"
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import Girl from "./Girl"
import Boy from "./Boy"
import Recommend from "./Recommend"
import Skin from "./Skin"
import Summer from "./Summer"
class Header extends React.Component{
    render(){
        return <div>
                         <div className="header">
                         <input type="text"  placeholder="搜索商品，发现更多优选"/></div>
                          <div className="nav">
                              <div className="menu">
                                  <NavLink to="/recommend"><p>近日推荐</p></NavLink>
                                  <NavLink to="/girl"><p>女装</p></NavLink>
                                  <NavLink to="/boy"><p>男装</p></NavLink>
                                  <NavLink to="/summer"><p>夏日热卖</p></NavLink>
                                  <NavLink to="/skin"><p>美妆护肤</p></NavLink>
                                   <i className="iconfont icon-caidan_zhankai"></i>
                              </div>
                          </div>

                          <Switch>
                               <Route path="/girl" component={Girl}/>
                               <Route path="/boy" component={Boy}/>
                              <Route path="/recommend" component={Recommend}/>
                              <Route path="/skin" component={Skin}/>
                              <Route path="/summer" component={Summer}/>
                              <Redirect from="/" to="/recommend" exact/>
                          </Switch>
                     </div>
    }
}
export default Header