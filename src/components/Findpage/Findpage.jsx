import React, {useState} from 'react';
import '../../dist.css/Findpage.css'
import useFetch from '../../useFetch';
import MealList from '../MealList/MealList';
import Loading from '../../img/Loading.gif'
import {motion} from 'framer-motion'


const Findpage = () => {

    const [mealName, setMealName] = useState("")

    const {data:meals, isPending, error} = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName)


    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className="find__container">
            {meals ?
                <motion.div 
                    className="form"
                    initial={{opacity: 0, x:-200}}
                    animate={{opacity: 1, x: 0 }}
                    transition={{duration: .5, type: 'spring', stiffness: 100}}>

                    <form  className="form__content" onSubmit={handleSubmit}>
                        <div className="form__box">
                            <input type="text" className="form__input" placeholder="Search Meal"
                            required
                            value={mealName}
                            onChange={(e) => setMealName(e.target.value)}/>
                            <label className="form__label">SEARCH MEAL</label>
                            <div className="form__shadow"></div>
                        </div>

                    </form>
                </motion.div>
                : <motion.div 
                    className="form"
                    initial={{opacity: 0, x:-200}}
                    animate={{opacity: 1, x: 0 }}
                    transition={{duration: .5, type: 'spring', stiffness: 100}}>

                    <form  className="form__content" onSubmit={handleSubmit}>
                        <div className="form__box">
                            <input type="text" className="form__input" placeholder="Search Meal"
                            required
                            value={mealName}
                            onChange={(e) => setMealName(e.target.value)}/>
                            <label className="form__label">SEARCH MEAL</label>
                            <div className="form__shadow"></div>
                        </div>
                    </form>
                </motion.div>
            }

            <div className="meal__list__container">
                {error && <div>{error}</div>}
                {isPending && <motion.div 
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0 }}
                transition={{duration: .5, type: 'spring', stiffness: 200}}
                className="loading__container"><img src={Loading} alt="Loading" /> Loading...</motion.div>}
                {meals && <MealList meals={meals}/>}
            </div>
        </div>
    );
}

export default Findpage;
