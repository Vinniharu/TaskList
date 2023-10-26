window.addEventListener("load", () => {
   const form = document.getElementById("new-task-form");
   const text = document.getElementById("new-task-input");
   const list_el = document.getElementById("tasks");

   form.addEventListener("submit", (e) => {
      e.preventDefault();

      const input = text.value;

      if(!input){
         alert("Enter a task first!");
         return;
      }

      const task_el = document.createElement("div");
      task_el.className = "task";

      const task_cont_el = document.createElement("div");
      task_cont_el.classList.add("content");
      
      task_el.appendChild(task_cont_el);

      const input_el = document.createElement("input");
      input_el.classList.add("text");
      input_el.type = "text";
      input_el.setAttribute("readonly", "readonly");
      input_el.value = input;

      task_cont_el.appendChild(input_el);

      const task_action_el = document.createElement("div");
      task_action_el.classList.add("action");

      const edit_el = document.createElement("button");
      edit_el.classList.add("edit");
      edit_el.innerHTML = "Edit";
      task_action_el.appendChild(edit_el);

      const delete_el = document.createElement("button");
      delete_el.classList.add("delete");
      delete_el.innerHTML = "Delete";
      task_action_el.appendChild(delete_el);
      
      task_el.appendChild(task_action_el);

      list_el.appendChild(task_el);

      text.value = "";

      edit_el.addEventListener("click", () =>{
         if(edit_el.innerText.toLowerCase() == "edit"){
            input_el.removeAttribute("readonly");
            input_el.focus();
            edit_el.innerText = "Save";
         } else{
            input_el.setAttribute("readonly", "readonly");
            edit_el.innerText = "Edit";
         }
      });

      delete_el.addEventListener("click", () => {
         task_el.style.animation = "animated 0.5s ease-in forwards";
         setTimeout(() => {
            list_el.removeChild(task_el);
         }, 600)
      });
   });
});