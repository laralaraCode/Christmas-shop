import { useDispatch } from "react-redux";
import {  filterCategory } from "../../redux/toysSlice";


const Filter = () => {

    
    const dispatch = useDispatch();


    return ( 
        <div className='column'>
            <button tabIndex="0" className='change all' onClick={ ()=> dispatch(filterCategory("all")) } > ВСЕ </button> 
            <button tabIndex="1" className='change ceramic' onClick={ ()=> dispatch(filterCategory("ceramic")) }  > Игрушки из керамики </button>
            <button tabIndex="2" className='change tree' onClick={ ()=> dispatch(filterCategory("tree")) } > Игрушки и украшения на елку </button>
            <button tabIndex="3" className='change decor' onClick={ ()=> dispatch(filterCategory("decor")) } > Декор </button>
            <button tabIndex="4" className='change soft' onClick={ ()=> dispatch(filterCategory("soft")) } > Мягкая игрушка</button>
            <button tabIndex="5" className='change ligth' onClick={ ()=> dispatch(filterCategory("ligth")) } > Гирлянда</button> 
            <button tabIndex="6" className='change solution' onClick={ ()=> dispatch(filterCategory("solution")) } > Готовое решение </button>
            <button tabIndex="7" className='change set' onClick={ ()=> dispatch(filterCategory("set")) } >Наборы </button>
            <button tabIndex="7" className='change paper' onClick={ ()=> dispatch(filterCategory("paper")) } >Подарочная упаковка </button>
        </div>
    )
}
export default Filter;
