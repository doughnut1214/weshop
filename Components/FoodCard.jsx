import styles from '../styles/Home.module.css'
import Link from 'next/link'
const FoodCard = ({ food }) => {
    //todo: normalize image size

    return (
        <div className="h-full bg-slate-500 text-white m-2 p-2 rounded-lg text-center">
            <Link href={`/foods/${food.id}`}><h1 className='underline text-slate-300 hover:text-slate-400'><a>{food.title}</a></h1></Link>
            <h2> {food.nutrition.nutrients[0]?.amount} calories</h2>
            <div className='justify-center flex mx-auto mt-3  drop-shadow-md'>

                <img src={food.image} className="rounded-md"></img>





            </div>

        </div>
    )


}
export default FoodCard