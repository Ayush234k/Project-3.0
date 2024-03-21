import RecipeReviewCard from "../Cards/Card1";
import './Midst.css';
// import { CardsData } from "../Data/Data";
const Mid=()=>{
  return(<div className="mid" >
    <RecipeReviewCard heading={"Breakfast"} />
    <RecipeReviewCard heading={"Lunch"}/>
    <RecipeReviewCard heading={"Snack"}/>
    <RecipeReviewCard heading={"Dinner"}/>
    
  </div>)
}
export default Mid;