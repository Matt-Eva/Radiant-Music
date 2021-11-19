
function Test ({cart, cartOpen, closeCartWindow}) {
    // if (cartOpen === true) {
        const cartList = cart.map(item => <li key={item.id}>{item.title}</li>)
     console.log(closeCartWindow)
     return (
       
         <div className="popup-box">
             <div className="box">
         <button className="close-icon" onCLick={closeCartWindow}>x</button>
                 <h3>Items in Cart</h3>
                 <ul>
                 {cartList}
                 </ul>
             </div>
         </div>
        
     )
// return(
//     <button onClick={closeCartWindow}>Click ME!</button>
// )
}

export default Test;