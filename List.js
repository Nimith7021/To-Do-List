let clickable = document.getElementById("clickable");
let out = document.getElementById("output");
let info = document.getElementById("information");
const ListOfChoices = ['list-group-item-primary','list-group-item-secondary','list-group-item-success','list-group-item-danger',
        'list-group-item-warning','list-group-item-info','list-group-item-light','list-group-item-dark'];
        function shuffle(array){
                let currentIndex = array.length,randomIndex;
                while(currentIndex!=0){
                        randomIndex = Math.floor(Math.random()*currentIndex);
                        currentIndex--;

                        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]]
                }

                return array;
        }

        function RandomIndex(array){
                return array[0];
        }

clickable.addEventListener("click",()=>{
        let choice = shuffle(ListOfChoices);
        if(info.value==""){
                alert("PLease Enter a task")
                return;
        }
        let listItem = document.createElement("li");
        listItem.className = `list-group-item ${RandomIndex(choice)} shadow-lg `
        let button = document.createElement("button");
        button.className = 'btn btn-danger btn-sm';
        let newText = document.createTextNode(`${info.value}  `);
        button.textContent = 'X'
        listItem.appendChild(newText);
        listItem.appendChild(button);
        out.appendChild(listItem);
        info.value="";

        button.addEventListener('click',()=>{
                
                out.removeChild(listItem);
                
        })
        
})



