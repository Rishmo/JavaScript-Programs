 let todo=[];

 let req=prompt("Please enter your request");

 while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }

    if(req =="list"){
        console.log("--------------------------");
        for(task of todo){
            console.log(task);
        }
        console.log("----------------------------");
    }
    else if(req == "add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } 
    else if(req == "delete"){
        let idx=prompt("Please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    } 
    else{
        console.log("Wrong Request");
    }
    req=prompt("Please enter your request");

 }