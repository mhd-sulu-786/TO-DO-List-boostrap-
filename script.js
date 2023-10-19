const text_feeled = document.querySelector(".text-feeled");
const add_btn =document.querySelector(".add_btn");
const clear_btn =document.querySelector(".clear_btn");
const taskspace =document.querySelector(".row");
let count =1;
    


//clear text feeled
clear_btn.addEventListener("click",()=>{
    text_feeled.value="";
});



add_btn.addEventListener("click",()=>{
    if(text_feeled.value==""){
        alert("Plz write somthing..");
    }else{
        addtask();
    }
});
function delete_btn(num){
    document.querySelector('text-'+num).innerHTML=null;
    
};
    

 function finished_btn(num){
    document.querySelector('text-'+num).classList.add("bg-success")
   
    
    


};
const addtask = () =>{
    
    taskspace.innerHTML +=`
    <text-${count}  class=" text-danger  w-75 rounded mx-4 mt-2"style="background-color: white;"  >
    <label for="" class="mx-5 task-text" >${text_feeled.value}</label>
    <button class="btn px-0  delete-btn " onclick="delete_btn(${count})">❎</button>
    <button class="btn px-0 mx-0 finished-btn"  onclick="finished_btn(${count})" >✔</button>

  </text-${count}>`;
text_feeled.value="";
count++;


}



