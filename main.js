
    var companyName= prompt("please enter your name")
   if (companyName!= null) {
    document.getElementsByClassName("w3-button w3-bar-item").appendChild.value = companyName;
   }
    var phonenumber=prompt("please enter your phonenumber")
    if (phonenumber!=null){
        
        document.getElementsByClassName("w3-button w3-bar-item").appendChild.value=phonenumber;

        }
        var location=prompt("please enter your location")
        if (location!=null){
            document.getElementsByClassName("w3-button w3-bar-item").appendChild.value.contact;
        }

        let date=1
    for (let i = 0; i < 6; i++) {
        
        let row = document.createElement("tr");

        
    for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                day = document.createElement("td");
                dayText = document.createTextNode("");
                day.appendChild(dayText);
                row.appendChild(day);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                day = document.createElement("td");
                dayText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    day.classList.add("bg-info");
                } 
                cell.appendChild(cellText);

            }
   

                function isPasswordValid(password) {
                    if (password.length > 5) {
                    console.log(true);
                    }
                    else{
                        console.log("please input your password")
                    }
                    
                   }
                   function isfirstNameValid(password) {
                    if (name==firstName) {
                    console.log(true);
                    }
                    else{
                        console.log("please input your firstName")
                    }
                    
                   }
                   function islastnamevalid(password) {
                    if (name==lastName) {
                    console.log(true);
                    }
                    else{
                        console.log("please input your lastName")
                    }
                    
                   }
            
                   function isemailValid(email) {
                    if (input==email) {
                    console.log(true);
                    }
                    else{
                        console.log("please input your email")
                    }
                    
                }
                        
                var myObject = {
                    name: "Lovelace",
                    func: function() {
                        var self = this;
                        console.log("outer func:  this.name = " + this.name);
                        console.log("outer func:  self.name = " + self.name);
                        (function() {
                            console.log("inner func:  this.name = " + this.name);
                            console.log("inner func:  self.name = " + self.name);
                        }());
                    }
                };
                myObject.func();
                //oouter func:  this.name = Lovelace
               // outer func:  self.name = Lovelace
               //inner func:  this.name = undefined
               //inner func:  self.name = Lovelace
               //Because the name lovelace is inside an object and it can be accessed by the function that is inside that class 
               //while self is a variable inside a function and it can be only be accessed within the fuction