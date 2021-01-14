import {LoginInput} from '../redux/action-types'
export const login=(input:LoginInput)=> {
    console.log(input)
    return fetch("http://192.168.0.110:8080/login",{
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
          .then((response)=>{
              console.log(response)
              return response;
          }).catch((error) => {
            console.log(error)
            return error.response.data.message;
        });
}