import React from 'react'
import "../css/trend.css"
import "../css/girl.css"
class Categories extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return  <ul className="girl_ul">
                                 {
                                    this.props.list.map((item,index)=>{
                                         return <li key={index}>
                                                       <img src={item.imageUrl}/>    
                                                       <span>{item.title}</span>
                                                  </li>
                                    })
                                 }
                           </ul>
    }
}
export default Categories