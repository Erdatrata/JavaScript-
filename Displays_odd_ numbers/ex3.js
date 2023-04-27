const functionToExecute=()=>{
    document.getElementById("table").innerHTML="";
    console.log("clicked");
    const numberInserted=document.getElementById("number").value;
    console.log(numberInserted);
    if (!numberInserted)
        alert("please enter a number before you click submit")
    else{
        let url=`https://4ovydr47ng.execute-api.us-east-1.amazonaws.com/v2/${numberInserted}`;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
         console.log(this.response);
        let arr=this.response;
        let arr2=JSON.parse(arr);
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');

        table.appendChild(tbody);
  
        document.getElementById('table').appendChild(table);

        let arrSavePrimes=[];
        arr2.forEach(element => {
            const {p}=element;
            arrSavePrimes.push(parseInt(p));
        });
    const rows=numberInserted/4;
    let numberOnRun=2;
    for (let i=0; i<rows; i++){
        let row = document.createElement('tr');
        for (let j=0; j<4; j++){
            if(numberOnRun<=numberInserted){
            let row_data = document.createElement('td');
            row_data.innerHTML =numberOnRun;
            if (arrSavePrimes.includes(numberOnRun))
                row_data.style.backgroundColor="green";
            row.appendChild(row_data);
            numberOnRun+=1;
        }
        }
       
        tbody.appendChild(row);

    }


      }
      request.send()


    }
    }
    

window.addEventListener('load', function () {
 
    // document.getElementById("photo-change").click();
    document.getElementById("prime-number").addEventListener("click", functionToExecute);
  })