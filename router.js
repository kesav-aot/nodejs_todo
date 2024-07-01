const router=require('express').Router();
const {getAll,getOne,addOne,update,delete1}=require('./user.js');
//CRUD operations 
router.get('/',getAll );
router.get('/:id',getOne);
router.post('/',addOne);
router.put('/:id',update);
router.delete('/:id',delete1);
module.exports=router