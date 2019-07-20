window.onload=function()
{ 
   /* function loadPage(href)
            {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", href, false);
                xmlhttp.send();
                return xmlhttp.responseText;
            }*/

    var age=document.getElementById('exampleInputName2');
    var wt=document.getElementById('exampleInputEmail2');
    var btn=document.getElementById('generate');
     
     btn.onclick=function(){
         var intage=parseInt(age.value);
         var intwt=parseInt(wt.value);
        if(intage <= 3)
        {
            if(intwt<4.7)
             {
                 console.log("Underweight");
                 document.getElementById("anchor").setAttribute("href", "/diet1.html");

             }
             else if(intwt<6)
             {
                 console.log("Normal");
                 document.getElementById("anchor").setAttribute("href", "/diet2.html");

             }
             else
             {
                console.log("Overweight");
                document.getElementById("anchor").setAttribute("href", "/diet3.html");

            }
        }
        else if(intage <= 6)
        {
            if(intwt<6.2)
            {
                console.log("Underweight");
                document.getElementById("anchor").setAttribute("href", "/diet1.html");

            }
             else if(intwt<7.8)
             {
                console.log("Normal");
                document.getElementById("anchor").setAttribute("href", "/diet2.html");

            }
             else
             {
                 console.log("Overweight");
                 document.getElementById("anchor").setAttribute("href", "/diet3.html");

             }
        }
        else if(intage <= 9)
        {
            if(intwt<7.4)
            {
                console.log("Underweight");
                document.getElementById("anchor").setAttribute("href", "/diet1.html");

            }
             else if(intwt<9.2)
             {
                console.log("Normal");
                document.getElementById("anchor").setAttribute("href", "/diet2.html");

            }
             else
             {
                console.log("Overweight");
                document.getElementById("anchor").setAttribute("href", "/diet3.html");

            }
        }
        else if(intage <= 12)
        {
            if(intwt<8.3)
            {
                console.log("Underweight");
                document.getElementById("anchor").setAttribute("href", "/diet1.html");

            }
             else if(intwt<10.2)
             {
                console.log("Normal");
                document.getElementById("anchor").setAttribute("href", "/diet2.html");

            }
             else
             {
                console.log("Overweight");
                document.getElementById("anchor").setAttribute("href", "/diet3.html");

            }
        }
        return false;
    }
   
}