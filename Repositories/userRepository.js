import { read, readFile, readFileSync, write, writeFile } from "fs";
export class UserRepository {

    constructor(){
        this.arquivo = "database/user.json";
    }

    getUsers(){
        const users = new Promise((resolve,reject)=>{
            readFile(this.arquivo,(err,data)=>{
                if(err){
                   reject(err)
                }else{
                    resolve(data.toString());
                }
            });
        })
        return users;
    }

    newUser(user){
        const newUser = new Promise((resolve,reject)=>{
            readFile(this.arquivo,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    const arr = data.toString();
                    const obj = JSON.parse(arr);
                    obj.push(JSON.parse(user));
                    writeFile(this.arquivo,JSON.stringify(obj),(err)=>{
                        if(err)console.log(err)
                    });
                    resolve("User adicionado");
                }
            })
        })
        return newUser;
    }
}