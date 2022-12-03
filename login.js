
class User{

    constructor(n){  
    }
        async login( u, p){
        
            this.username=u;
            this.password=p;
                
                let actual_data= JSON.stringify(this);
                
                try{
                    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
    
                    method:'POST',
    
                    body: actual_data,
    
                    headers:{
                        'Content-Type':'application/json',
                    },
    
    
                    });
                    let data= await res.json();
                    console.log("data:",data);
                    alert(" Most Welcome"+" "+this.username);
                    console.log("actual_data:",actual_data);
                    console.log(this.username)
                    window.location.href="index.html";
                }
                catch(error){
                    console.log("error:",error);
                }
    
            }
    }
    
    let u1=new User();
    
    function Login(){
    const username=document.getElementById("login-username").value;
    const password=document.getElementById("login-password").value;
    u1.login(username,password);
    
    }
      function gotoSub() {
        window.location.href = "index.html";
      }
    
    