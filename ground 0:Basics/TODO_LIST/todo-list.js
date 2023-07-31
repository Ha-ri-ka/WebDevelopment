const AllTasks=[];
function AddTasks()
{
  task=[]
  taskElement=document.querySelector('.js-taskInput');
  dateElement=document.querySelector('.js-dateInput');  
  if (taskElement.value!='' && dateElement.value!='')
  {
    task.push(taskElement.value);
    task.push(dateElement.value);
    AllTasks.push(task);    
    renderTodoList();
  }
  taskElement.value = '';
  dateElement.value = ''; 
}

function renderTodoList()
{
  let todolistHTML='';   
  for(let i=0;i<AllTasks.length;i++)
  {
    const todo=AllTasks[i];
    const html=`
    <div> ${todo[0]} </div>
    <div> ${todo[1]} </div>
    <button class="delButton" onclick="
      AllTasks.splice(${i},1);
      renderTodoList();
    ">Delete</button>
    `;
    todolistHTML+=html;
  }
  document.querySelector('.js-todolist').innerHTML=todolistHTML;
}
