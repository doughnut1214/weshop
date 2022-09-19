import { useState } from "react"

const FoodForm = (props) => {
    //data to be posted to the api
    const [formData, SetFormData] = useState({
        cuisine: "",
        diet: "",
        maxCalories: "",
        ingredients: ""

    })
    const [isloading, SetIsLoading] = useState(false)
    const ChangeCuisine = (e) => {
        SetFormData(previousState => {
            return { ...previousState, cuisine: e.target.value }
        })

    }
    const ChangeDiet = (e) => {
        SetFormData(previousState => {
            return { ...previousState, diet: e.target.value }
        })

    }
    const ChangeCalories = (e) => {
        SetFormData(previousState => {
            return { ...previousState, maxCalories: e.target.value }
        })

    }
    const ChangeIngredients = (e) => {
        SetFormData(previousState => {
            return { ...previousState, ingredients: e.target.value }
        })
    }



    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted!")
        SetIsLoading(true)
        console.log("data: ", formData)
        //props.passData(formData) Use this to pass the data from the below fetch to the parent 
        fetch('/api/foods',
            {
                method: "POST",
                body: JSON.stringify({ formData })

            })
            .then(res => {
                if(!res.ok){
                    throw new Error("Status code bad")
                }
                else{
                    return res.json()
                }
                
            })
            .then(data => {
                props.passData(data)
                console.log(data)
                SetIsLoading(false)
            })
            .catch(error =>{
                props.passError("Something went wrong!")
            })
    }
    return (
        <>
            <form onSubmit={HandleSubmit} className=" flex-col p-3 rounded-lg">
                <div className="flex-col flex text-center">
                    <label htmlFor="cuisine">Type of Cuisine: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="cuisine" onChange={e => ChangeCuisine(e)} placeholder="Italian" required />


                </div>


                <div className="flex-col flex text-center">
                    <label htmlFor="diet">Type of Diet: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="diet" onChange={e => ChangeDiet(e)} placeholder="Vegetarian" required />


                </div>

                <div className="flex-col flex text-center">
                    <label htmlFor="maxCalories">Maximum Number of Calories: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="maxCalories" onChange={e => ChangeCalories(e)} placeholder="600" required />


                </div>

                <div className="flex-col flex text-center">
                    <label htmlFor="ingredients">List of ingredients: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="ingredients" onChange={e => ChangeIngredients(e)} placeholder="tomatoes" required />



                </div>
                <div className="flex-col flex justify-center text-center">
                    <div>
                        <button className=" w-full mt-1 rounded-lg bg-slate-500 active:bg-blue-200 hover:bg-blue-200 text-white p-2" type="submit" disabled={isloading}>
                            Find Foods
                        </button>
                        {isloading? <h2>Loading...</h2> : <></>}

                    </div>

                            
                </div>







            </form>




        </>

    )

}
export default FoodForm