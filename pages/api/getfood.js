export default function handler(req, res) {
    console.log(req.body)
    //use this endpoint to call the spoonacular api endpoint called complexSearch

    res.status(200).json({ name: 'John Doe' })
  }
  