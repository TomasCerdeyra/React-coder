import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../../../Context/CartContext'
import { useContext } from 'react'


const Item = ({ items }) => {

    const {addToCart} = useContext(cartContext)

    const addCart = ()=>{

    }

    return (
        <>
            <Link className='link-card' to={`/item/${items.id}`}>
                <img className='img-card' src={items.img} alt="" />
                <p className='p-card'>{items.tiltle}</p>
            </Link>
            <div className='Cont-itemButtons'>
                <Link to='/comprar'>
                    <button className='boton-card' >Comprar Ahora</button>
                </Link>
                {/* Viendo si ponerlo o no */}
                {/* <Link to='/cart'>
                    <button className='boton-card' >Agregar Al Carrito</button>
                </Link> */}
            </div>
        </>
    )
}

export default Item