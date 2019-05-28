import React from 'react'
import "../css/trend.css"
import "../css/girl.css"
class GoodLists extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return   <ul className="goodItems">
                                {
                                    this.props.itemList.map((item,index)=>{
                                         return <li key={index}>
                                                    <img src={item.image}/>
                                                    <div className="message">   
                                                         <div className="title">{item.title}</div>
                                                         <div className="taobao">
                                                               <span className="orange">淘宝</span>
                                                               <span>包邮</span>
                                                         </div>
                                                         <div className="price">
                                                            <span className="left">￥</span>
                                                            <span className="center">{item.price}</span>
                                                            <span className="right">{item.saleNum}已买</span>
                                                         </div>
                                                    </div>
                                            </li>
                                    })
                                }
                                
                           </ul>
    }
}
export default GoodLists