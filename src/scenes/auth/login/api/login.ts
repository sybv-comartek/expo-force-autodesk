import {LoginInput} from '../redux/action-types'
export const login=(input:LoginInput)=> {
    console.log(input)
    return fetch("http://192.168.50.14:8080/login",{
              method:'post',
              headers:{
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                  "email":input.email,
                  "password":input.password
              })
          })
          .then((response)=>response.json())
          .then((response)=>{
              return response;
          }).catch((error) => {
              console.log("loi login");
            });
}