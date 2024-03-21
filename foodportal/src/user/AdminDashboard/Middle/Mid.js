import RecipeReviewCard from "../Cards/Card1";
import './Midst.css';
const Mid=()=>{
  return(<div className="mid" >
    <RecipeReviewCard meal={"Breakfast"}/>
    <RecipeReviewCard meal={"Lunch"}/>
    <RecipeReviewCard meal={"Snack"}/>
    <RecipeReviewCard meal={"Dinner"}/>
    
  </div>)
}
export default Mid;