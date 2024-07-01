const {v4 : uuidv4} = require('uuid')
 
const uuidToNumber = () => {
    const uuid = uuidv4();
    const numericValue = parseInt(uuid.replace(/-/g, ''), 16);
    return (numericValue % 80000) + 1;
};
 const  todo=[
    {
        id:uuidToNumber(),
        title:"task1",
        description:"lorem ipsum",
    },
    {
        id:uuidToNumber(),
        title:"task2",
        description:"lorem ipsum2",
    },
    {
        id:uuidToNumber(),
        title:"task3",
        description:"lorem ipsum3",
    },
    {
        id:uuidToNumber(),
        title:"task4",
        description:"lorem ipsum4",
    }
 ]

 
const getAll=(req,res)=>{
    res.send(todo);
}
const getOne=(req,res)=>{
    const id=req.params.id;
    const task=todo.find((task)=>task.id=id);
    res.send(task);
    
}

const addOne=(req,res)=>{
    const newOne=req.body;
    if(!newOne.title || !newOne.description){
        res.status(400);
        res.send("title and description is required");
        return;
    }
    const newData=todo.findIndex((task)=>task.id==newOne.id);
    if( newData == -1){
        todo.push(newOne);
        res.send(todo);
        
    }else{
        res.status(400);
        res.send("id already exist");
        
    } 
}
const update=(req,res)=>{
    const id = req.params.id;
    const newOne = req.body;
    const index = todo.findIndex((task) => task.id == id);
    if (index == -1) {
        res.status(400);
        res.send("id not found");
        return;
    }
    todo[index] = newOne;
    res.send(todo);
}
 const delete1=(req,res)=>{
    const id=req.params.id;
    const index=todo.findIndex((task)=>task.id==id);
    if (index != -1){
        todo.splice(index,1);
    }
    res.send(todo);
 }

module.exports={getAll,getOne,addOne,update,delete1}