import React from 'react';
import '../../dist.css/MealList.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const MealList = ({meals}) => {

    return (
        <div className="meal__list">
            {meals.map((meal, index) => (
                <div key={meal.idMeal}>
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0 }}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200', delay: index * 0.3,}}>
                            
                        <Link to={`/meal-recipe-website-reactjs/meal/${meal.idMeal}`} className="meal__item">
                            <img src={meal.strMealThumb} alt="" />
                            <div className="meal__lower">
                                <h3>{meal.strMeal}</h3>
                                <p><i className='bx bx-map-alt' ></i>{meal.strArea}</p>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            ))}
        </div>
    );
}

export default MealList;
