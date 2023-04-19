import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import sweetAlert from 'sweetalert2';
import Pagination from './Pagination';
import { Link } from 'react-router-dom'
import Carousel2 from "../components/carousel/Carousel2";

 class Home extends Component{
    
    handleClick = (id)=>{
        sweetAlert.fire('Item Added into Cart','GoTo Cart','success');
        this.props.addToCart(id); 
    }

    render(){
        
        let itemList = this.props.items.map(item=>{
            return(
            <>
                 
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: <sup>₹</sup>{item.price}</b></p>
                        </div>
                        <div>
                            <button onClick={()=>{this.handleClick(item.id)}} style={{width:'50%'}} className='btn btn-primary'>Add to Cart</button>
                            {/* <button style={{width:'50%'}} className='btn btn-primary'>Buy Now</button> */}
                            <Link  to="/login" style={{width:'50%'}} className='btn btn-primary'>Buy Now</Link>
                        </div>
                 </div>
                 </>

            )
        })

        return(
            <div className="container-fluid">
                 <Carousel2></Carousel2>
                <div className="box">
                    {itemList}
                </div>
<Pagination></Pagination>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)