let start = new Date().getTime();


            function makeShapeAppear() {

                let top = Math.random() * 300;

                let left = Math.random()* 300;

            let width = Math.random() * 20;



                
                document.getElementById("shape").style.top = top + "px";

                document.getElementById("shape").style.left = left + "px";

                


                document.getElementById("shape").style.display = "block";

                start = new Date().getTime();


            }

            function appearAfterDelay(){

                setTimeout(makeShapeAppear, Math.random() * 0.1);


            }

            appearAfterDelay();

            document.getElementById("shape").onclick = function(){

                document.getElementById("shape").style.display = "none";

                let end = new Date().getTime();

                let timeTaken = (end - start) / 1000;

                document.getElementById("timeTaken").innerHTML = timeTaken + "s" ;

                appearAfterDelay();

                
            }
