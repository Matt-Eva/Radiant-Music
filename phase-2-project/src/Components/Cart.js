// import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { useState } from "react";




const Cart = ({cart, cartOpen, showCartWindow, closeCartWindow}) => {
    console.log(closeCartWindow); 
    console.log(cartOpen);
   if (cartOpen === true) {
       const cartList = cart.map(item => <li key={item.id}>{item.title}</li>)
    console.log(closeCartWindow)
    return (
        <>
        <div className="popup-box">
            <div className="box">
        <p className="close-icon" onCLick={closeCartWindow}>x</p>
                <h3>Items in Cart</h3>
                <ul>
                {cartList}
                </ul>
            </div>
        </div>
        </>
    )}
    return <p onCLick={closeCartWindow}>x</p>
}

export default Cart;


// function Popup ({cart}) {
//     const [show, setShow] = useState(false)

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//   {/* <>
// <Button variant="primary" onClick={handleShow}>
//     🛒
// </Button>

// <Modal
// show={show}
// onHide={handleClose}
// backdrop="static"
// keyboard={false}
// >
//     <Modal.Header closeButton>
//         <Modal.Title>Shopping Cart</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>This is the Cart!!!</Modal.Body>
//     <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//             Close
//         </Button>
//         <Button variant="primary">Understood</Button>
//     </Modal.Footer>
// </Modal>
// </> */}
//     )
// }

// {/* <>
// <Button variant="primary" onClick={handleShow}>
//     🛒
// </Button>

// <Modal
// show={show}
// onHide={handleClose}
// backdrop="static"
// keyboard={false}
// >
//     <Modal.Header closeButton>
//         <Modal.Title>Shopping Cart</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>This is the Cart!!!</Modal.Body>
//     <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//             Close
//         </Button>
//         <Button variant="primary">Understood</Button>
//     </Modal.Footer>
// </Modal>
// </> */}