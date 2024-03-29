export default async function handler(req, res) {

  //use this endpoint to call the spoonacular api endpoint called complexSearch
  const body = JSON.parse(req.body)

  const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${body.formData.cuisine}&diet=${body.formData.diet}
    &includeIngredients=${body.formData.ingredients}&instructionsRequired&maxCalories=${body.formData.maxCalories}&number=6&apiKey=${process.env.FOOD_API_KEY}`
  console.log("our url: ", url)
  
  try{
    const result = await fetch(`${url}`, {
      method: "GET", headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    const data = await result.json()
     
    console.log("final data to send: ", data)
    res.status(200).json({result: data})
    //res.status(402).json("Failure to retrieve data")

    
   
  }
  catch(error){
    res.status(402).json("Failure to retrieve data")

  }





}
