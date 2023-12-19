function AddRecord()
{
     document.getElementById('addstudent').style.display="block";
    
}
var array1 = [];


function Addevent(event)
{
   
    var result = "";
    var Name = document.getElementById('txtName').value;
    var Address = document.getElementById('txtAddress').value;
    var Batch = document.getElementById('batch').value;
    var object1 = {name : Name , address:Address, batch:Batch};
    if(event.key == "Enter")
    {

        array1.push(object1);
        document.getElementById('countlist').innerHTML = array1.length;
        for(var i = 0 ; i<array1.length ; i++)
        {
            result+= "<li>" + array1[i].name + "</li>"
            
        }
        document.getElementById('list').innerHTML = result;
       

    }
    
}

function DeleteRecord()
{
    if(confirm("Are you sure you want to delete"))
    {
        array1.pop();
       var resultdisplay="";
        for(var i = 0 ; i<array1.length ; i++)
        {
            resultdisplay+= "<li>" + array1[i].name + "</li>"
            
        }
        document.getElementById('list').innerHTML = resultdisplay;
        document.getElementById('countlist').innerHTML = array1.length;
    }
    

}



