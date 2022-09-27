 var countDate = new Date("2024-10-20 23:59:59").getTime();
            
            var x = setInterval(function(){
                var now = new Date().getTime();
                
                var distans = countDate - now;

                var days = Math.floor(distans / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distans % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
                var minutes = Math.floor((distans % (1000 * 60 * 60 )) /(1000 * 60 ));
                var seconds = Math.floor((distans % (1000 * 60 )) /(1000));



                document.getElementById("demo").innerHTML= days + ":" + hours + ":" + minutes + ":" + seconds + "";
                 
                if(distans < 0){
                    clearInterval(x);
                    document.getElementById("demo").innerHTML = "تمام";
                }
            },1000)

           
