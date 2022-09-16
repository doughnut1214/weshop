import styles from '../styles/Home.module.css'
const FoodCard = ({ food }) => {
    //todo: normalize image size

    return (
        <div className=" w-3/4 bg-slate-500 text-white m-2 p-2 rounded-lg text-center">
            <h1>{food.title}</h1>
            <h2> {food.nutrition.nutrients[0]?.amount} calories</h2>
            <div className='justify-center flex mx-auto mt-3  drop-shadow-md'>

                <img src={food.image} className="rounded-md"></img>





            </div>

        </div>
    )


}
export default FoodCard