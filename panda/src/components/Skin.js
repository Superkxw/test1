import React,{Component} from 'react'
import "../css/trend.css"
import "../css/girl.css"
import axios from"axios"
import GoodLists from"./GoodLists"
import Categories from"./Categories"
class Skin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            itemList:[]
        }
    }
    componentDidMount(){
        axios.get("http://www.xiongmaoyouxuan.com/api/tab/3?start=0").then((res)=>{
              this.setState({
                  list:res.data.data.categories,
                  itemList:res.data.data.items.list
              })  
        })
    }
    render(){
        return <div style={{paddingTop:"0.91rem"}}>
                          <div className="trend">
                                 <span></span>
                                      潮流精选
                                 <span></span>
                           </div>
                          <Categories list={this.state.list}/>
                           <div className="trend" style={{background:"#f5f5f5"}}>
                                 <span></span>
                                      大家都在逛
                                 <span></span>
                           </div>
                           <GoodLists itemList={this.state.itemList}/>
                  </div>
    }
}
export default Skin