import { dataToys } from "../../data/dataToys";
import Toy from "./Toy";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/toysSlice";

const Toys =()=> {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className=' products'  >
            { dataToys
            .filter(toy => {
                if (selectedCategory === 'all') return true;
                return selectedCategory === toy.searchTerm;
            }
                )
            .map(toy => <Toy toy = { toy } key = { toy.id }/>) }
        </div>
    )
}
export default Toys;