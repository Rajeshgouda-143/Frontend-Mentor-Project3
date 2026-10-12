import React from 'react';
import "./Receipe.css";
import receipe_img from "../assets/images/image-omelette.jpeg";

const Receipe = () => {
  return (
    <div className='Container'>
        <div className="receipe">
            <img src={receipe_img} alt="" />
        </div>

        <div className="caption">
            <h1>Simple Omelette Recipe</h1>
            <p>An easy and quick dish, perfect for any meal, This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetable, or meats.</p>
        </div>

        <div className="pre-time">
            <h3>Preparation time</h3>
            <ul>
                <li><span>Total:</span> Approximately 10 minutes</li>
                <li><span>Preparation:</span> 5 minutes</li>
                <li><span>Cooking:</span> 5 minutes</li>
            </ul>
        </div>

        <div className="Ingredient">
            <h3>Ingredients</h3>
            <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional filings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
        </div>

        <div className="instruction">
            <h3>Instructions</h3>
            <ol>
                <li><span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and papper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                <li><span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
                <li><span>Cook the omellete:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                <li><span>Add fillings(optional):</span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omellete.</li>
                <li><span>Fold and serve:</span> As the omellete continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                <li><span>Enjoy:</span> Serve hot, with additional salt and papper if needed.</li>
            </ol>
        </div>


        <div className="Nutrition">
            <h3>Nutrition</h3>
            <p>The table below shows nutrition values per serving without the additional fillings.</p>

            <div className="protine">
                <p>Calories</p>
                <span>277kcal</span>
            </div>

            <div className="protine">
                <p>Carbs</p>
                <span>0g</span>
            </div>
        
            <div className="protine">
                <p>Protein</p>
                <span>20g</span>
            </div>
          
            <div className="protine">
                <p>Fat</p>
                <span>22g</span>
            </div>
        </div>
    </div>
  )
}

export default Receipe