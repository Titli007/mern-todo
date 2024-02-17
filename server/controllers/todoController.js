const todo = require('../models/Todo')

const createTodo =async(req, res) =>{
  try{
    const {todoText}= req.body
    const user = req.params.userId
    // console.log(todoData)

    const newTodo = new todo({
      todoText:todoText,
      user:user
    })
    
    await newTodo.save()

    res.status(200).json({ message: 'todo successfully created', newTodo });
  }
  catch(error){
    console.log(error)
    res.send(500).json({error:"some error accured"})
  }
  }


  
const readTodo = async (req, res) =>{
try{
    const user= req.params.userId

    const allTodos= await todo.find({
      user:user
    })

    // select * from todos where useId=""

    res.status(200).json({message:"todos fetched successfully", allTodos})
}
catch(error){
    res.status(404).json({"error":"internal server error"})
}
}



const updateTodo = async(req, res) =>{

  try {
    const isImportant = req.body.isImportant;
    const isCompleted = req.body.isCompleted;
    const id = req.params.id;
  
    console.log(isImportant, isCompleted, id);
  
    const existingTodo = await todo.findByIdAndUpdate(
      id,
      {
        $set: {
          isImportant: isImportant !== null ? isImportant : existingTodo.isImportant,
          isCompleted: isCompleted !== null ? isCompleted : existingTodo.isCompleted,
        },
      },
      { new: true } // Return the updated document
    );
  
    console.log(existingTodo);
  
    if (!existingTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
  
    return res.status(200).json({ message: 'Todo successfully updated', updatedTodo: existingTodo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Some error occurred' });
  }
  
}



const deleteTodo =async(req, res) =>{
  try{
    const id= req.params.id

    const existingTodo =await todo.findByIdAndDelete(id)

    if(!existingTodo){
      return res.status(404).json({message:"todo not found or not deleted"})
    }
    res.status(200).json({message:"todo deleted successfully"})
  }
  catch(error){
    console.log(error)
    res.status(500).json({message:"error occured"})
  }
  }

  
  
  
  module.exports = {
    createTodo, readTodo, updateTodo, deleteTodo
  }