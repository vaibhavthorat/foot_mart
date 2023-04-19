import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'

import shose3 from '../../images/shose3.jpg'

import shose5 from '../../images/shose5.jpg'
import shose6 from '../../images/shose6.jpg'
import shose7 from '../../images/shose7.jpg'
import shose8 from '../../images/shose8.jpg'
import shose9 from '../../images/shose9.jpg'
import shose10 from '../../images/shose10.jpg'
import shose11 from '../../images/shose11.jpg'
import shose12 from '../../images/shose12.jpg'

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:710,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:880,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:1120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1660,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:690,img: Item6},
        {id:6,title:'Liberty', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:890,img: shose9},
        {id:6,title:'Liberty', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:2090,img: shose10},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:3090,img: shose11},
        {id:6,title:'Metro', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:990,img: shose3},
        {id:6,title:'Paragon', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:790,img: shose5},
        {id:6,title:'Paragon', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:950,img: shose6},
        {id:6,title:'Parada', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:970,img: shose7},
        {id:6,title:'Khadim', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:390,img: shose8},
        {id:6,title:'Marc Lorie', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:790,img: shose12}
    ],
    addedItems:[],
    total: 0,
    username:''

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
  if(action.type=== 'USERNAME'){
    return{
        ...state,
        username: state.username
    }
}
    
  else{
    return state
    }
    
}

export default cartReducer
