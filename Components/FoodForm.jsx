import { useState } from "react"

const FoodForm = (props) => {
    //data to be posted to the api
    const [formData, SetFormData] = useState({
        cuisine: "",
        diet: "",
        maxCalories: "",
        ingredients: ""

    })
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
        console.log("data: ", formData)
        //props.passData(formData) Use this to pass the data from the below fetch to the parent 
        fetch('/api/getfood',
            {
                method: "POST",
                body: JSON.stringify(formData)

            })

    }
    return (
        <>
            <form onSubmit={HandleSubmit} className="bg-red-400 flex-col p-3 rounded-lg">
                <div className="flex-col flex text-center">
                    <label htmlFor="cuisine">Type of Cuisine: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="cuisine" onChange={e => ChangeCuisine(e)} placeholder="Italian" />


                </div>


                <div className="flex-col flex text-center">
                    <label htmlFor="diet">Type of Diet: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="diet" onChange={e => ChangeDiet(e)} placeholder="Vegetarian" />


                </div>

                <div className="flex-col flex text-center">
                    <label htmlFor="maxCalories">Maximum Number of Calories: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="maxCalories" onChange={e => ChangeCalories(e)} placeholder="600" />


                </div>

                <div className="flex-col flex text-center">
                    <label htmlFor="ingredients">List of ingredients: </label>
                    <input type="text" className="rounded-md p-2 border-2" name="ingredients" onChange={e => ChangeIngredients(e)} placeholder="tomatoes" />



                </div>
                <div className="flex-col flex justify-center">
                    <div>
                        <button className=" w-full mt-1 rounded-lg bg-blue-500 active:bg-blue-400 hover:bg-blue-400 text-white p-2" type="submit">Find Foods</button>


                    </div>

                </div>







            </form>




        </>

    )

}
export default FoodForm