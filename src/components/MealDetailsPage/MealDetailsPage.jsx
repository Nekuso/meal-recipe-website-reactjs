import React from 'react';
import { useParams} from 'react-router-dom';
import useFetch from '../../useFetch';
import '../../dist.css/MealDetailsPage.css'
import Loading from '../../img/Loading.gif'
import Salad from '../../img/salad.gif'
import Hat from '../../img/hat.gif'
import Video from '../../img/video.gif'
import {motion} from 'framer-motion'
import ReactPlayer from 'react-player';
import { v4 as uuid } from 'uuid';



const MealDetailsPage = () => {
    const { idMeal } = useParams();
    const {data:meal, isPending, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);

    return (
        <div className="meal__details__page">
            {isPending && 
                <motion.div 
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0 }}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200'}}
                    className="loading__container"><img src={Loading} alt="Loading" /> Loading...</motion.div>}
            {error && <div>{error}</div>}
            {meal && (
                <div>
                    {meal.map(meal => (
                        <div key={meal.idMeal} className="meal__details">

                            <motion.div className="left__container"
                                initial={{opacity: 0, x: -50}}
                                animate={{opacity: 1, x: 0  }}
                                transition ={{ duration: 1 ,delay: .5, type: 'spring'}}>
                                <img src={meal.strMealThumb} alt="Meal"/>
                                <div className="meal__name">
                                    <h2>{meal.strMeal}</h2>
                                    <p className="meal__area"><i className='bx bx-map'></i>{meal.strArea}</p>
                                    <p>Category: {
                                        meal.strCategory
                                    }</p>
                                </div>
                            </motion.div>

                            <div className="body__container">
                                <div className="ingredients__container">
                                    <motion.h2
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0 }}
                                        exit={{opacity: 0, y: 10}}
                                        transition={{duration: 1, delay: 1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                        <img src={Salad} alt="salad"/>
                                        Ingredients
                                    </motion.h2>
                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0 }}
                                        exit={{opacity: 0, y: 10}}
                                        transition={{duration: 1, delay: 1.2, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                        <ul className="ingredients">
                                            {meal.strIngredient1 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient1 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient1}</h2>
                                                        <p>{meal.strMeasure1}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient2 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient2 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient2}</h2>
                                                        <p>{meal.strMeasure2}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient3 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient3 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient3}</h2>
                                                        <p>{meal.strMeasure3}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient4 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient4 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient4}</h2>
                                                        <p>{meal.strMeasure4}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient5 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient5 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient5}</h2>
                                                        <p>{meal.strMeasure5}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient6 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient6 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient6}</h2>
                                                        <p>{meal.strMeasure6}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient8 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient8 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient8}</h2>
                                                        <p>{meal.strMeasure8}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient9 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient9 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient9}</h2>
                                                        <p>{meal.strMeasure9}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient10 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient10 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient10}</h2>
                                                        <p>{meal.strMeasure10}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient11 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient11 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient11}</h2>
                                                        <p>{meal.strMeasure11}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient12 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient12 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient12}</h2>
                                                        <p>{meal.strMeasure12}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient13 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient13 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient13}</h2>
                                                        <p>{meal.strMeasure13}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient14 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient14 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient14}</h2>
                                                        <p>{meal.strMeasure14}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient15 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient15 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient15}</h2>
                                                        <p>{meal.strMeasure15}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient16 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient16 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient16}</h2>
                                                        <p>{meal.strMeasure16}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient17 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient17 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient17}</h2>
                                                        <p>{meal.strMeasure17}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient18 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient18 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient18}</h2>
                                                        <p>{meal.strMeasure18}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient19 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient19 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient19}</h2>
                                                        <p>{meal.strMeasure19}</p>
                                                    </div>
                                                </li>
                                            }
                                            {meal.strIngredient20 !== "" &&
                                                <li className="ingredient">
                                                    <img src={"https://www.themealdb.com/images/ingredients/" + meal.strIngredient20 + ".png"} alt="ingredient" />
                                                    <div className="ingredient__info">
                                                        <h2>{meal.strIngredient20}</h2>
                                                        <p>{meal.strMeasure20}</p>
                                                    </div>
                                                </li>
                                            }
                                        </ul>
                                    </motion.div>
                                </div>

                                <div className="instruction__container">
                                    <motion.h2
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0 }}
                                        exit={{opacity: 0, y: 10}}
                                        transition={{duration: 1, delay: 1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                        <img src={Hat} alt="Hats"/>
                                        Instructions
                                    </motion.h2>
                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0 }}
                                        exit={{opacity: 0, y: 10}}
                                        transition={{duration: 1, delay: 1.2, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                        <div className="instruction">
                                            {(meal.strInstructions.split(". ").map(meal => (
                                                <p key={uuid()}><i className='bx bx-cube-alt'></i>{meal}</p>
                                            )))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {meal.strYoutube !== '' && 
                                <motion.div 
                                    className="video__container"
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0 }}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{duration: 1, delay: 3, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                    <h2><img src={Video} alt="video"/> Watch it here!</h2>
                                    <div className="video">
                                        <ReactPlayer 
                                        width='100%' 
                                        className="video" 
                                        url={meal.strYoutube}/>
                                    </div>
                                </motion.div>
                            }
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MealDetailsPage;
