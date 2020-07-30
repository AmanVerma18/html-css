var todos=[];
var userInput=prompt("What do you want to do");


//window.setTimeout(function() {
  
  while(userInput!=="quit")
{
if(userInput==="add")
{
addTodo();

}
userInput=prompt("What do you want to do");
if(userInput==="list")
{
	PrintTodos();
}
if(userInput==="delete")
{
	var index=prompt("enter the index of item you want to delete");
	del_item(index);
    
	console.log("deleted todo at index "+index);
}
}
console.log("you have exit the app");

//}, 500);
function addTodo() {
	var newTodo=prompt("Enter a new todo");
todos.push(newTodo);
console.log(newTodo+" added to the list")
}
function PrintTodos()
{
	console.log("************");
	todos.forEach(function (todo,i){
	
	console.log(i+": "+todo);

	});
	console.log("************");
}
function del_item(index)
{
	todos.splice(index,1);
    
}