import { useState } from 'react';
import ChangeQuantity from "../Cart/ChangeQuantity";



const Toy =( { toy } )=> {

    const [quantity, setQuantity] = useState(1);
    const [showMore, setShowMore] = useState(false);

    const showShow = () => {
    //console.log(showMore, toy.id);
    setShowMore(!showMore);
}



    return ( 
        <div className='product-card' key = { toy.id }  >
            <div className='product-info'>
                <div className='frameimg'>
                <img className='phototoy' src={ toy.image } alt="toy" />
                </div>
                <br/>

        <ChangeQuantity quantity={ quantity } setQuantity = {setQuantity} toy = {toy} />


                <p className='toyname'>{ toy.name } </p>
                <p className='price'>{toy.price} ₽ </p>
                <p className='description'> <span className="span-toy" >Описание товара:</span> { showMore ? toy.description: toy.description.substring(0, 9) + ".."} </p>
                <button className='btnMore' id = { toy.id } onClick={ showShow } > { showMore ?
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"  viewBox="0 0 16 16">
                <path  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                } </button>
                

            <br/> <br/>
        </div>
    </div>
    )
}
export default Toy;