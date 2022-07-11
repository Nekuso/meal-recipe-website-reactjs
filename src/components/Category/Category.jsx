import React from 'react';
import { Link, useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import useFetch from '../../useFetch';
import '../../dist.css/Category.css'
import Loading from '../../img/Loading.gif';



const Category = () => {
    const { strCategory } = useParams();
    const {data:meals, isPending, error } = useFetch(`https://www.themealdb.com/api/json/v2/1/filter.php?c=${strCategory}`);
    return (
        <div className="category__details">
            {isPending && 
                <motion.div 
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0 }}
                    exit={{opacity: 0, y: 10}}
                    transition={{duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200'}}
                    className="loading__container"><img src={Loading} alt="Loading" /> Loading...
                </motion.div>
            }
            {error && <div>{error}</div>}
            {meals && 
                <div>
                    <div className="category__details">


                    </div>
                    <div className="meal__list">
                        {meals.map(meal => (
                            <div key={meal.idMeal}>
                                <motion.div
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0 }}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                        
                                    <Link to={`/meal/${meal.idMeal}`} className="meal__item">
                                        <img src={meal.strMealThumb} alt="" />
                                        <div className="meal__lower">
                                            <h3>{meal.strMeal}</h3>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default Category;
