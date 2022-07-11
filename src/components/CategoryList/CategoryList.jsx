import React from 'react';
import useFetch2 from '../../useFetch2';
import Loading from '../../img/Loading.gif'
import '../../dist.css/CategoryList.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';



const CategoryList = () => {

    const {data:categories, isPending, error } = useFetch2(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    
    return (
        
        <div className="category__page">
            {isPending && <div className="loading__container"><img src={Loading} alt="Loading" /> Loading...</div>}
            {error && <div>{error}</div>}
            {categories && (
                <div className="categories__container">
                    <h2>Categories</h2>
                    <div className="categories">
                        {categories.map(category => (
                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0 }}
                                exit={{opacity: 0, y: 10}}
                                transition={{duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200'}}
                                className="category__container"
                                key={category.idCategory}>
                                <Link to={`/meal-recipe-website-reactjs/category/${category.strCategory}`} className="category">
                                    <div className="category__img">
                                        <img src={category.strCategoryThumb} alt="Food" />
                                    </div>
                                    <h3>{category.strCategory}</h3>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CategoryList;
