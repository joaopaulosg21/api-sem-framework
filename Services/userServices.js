import { UserRepository } from "../Repositories/userRepository.js";
const defaultContentType = {"Content-Type":"application/json"};
export class UserServices{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async getUsers(request,response){
        try{
            const res = await this.userRepository.getUsers();
            response.writeHead(200,defaultContentType);
            response.write(res);
            return response.end();
        }catch(err){
            console.log(err)
            response.writeHead(500,defaultContentType);
            response.write(JSON.stringify({error:err}));
            return response.end();
        }
    }

    async newUser(request,response){
        try{
            request.on("data",async (data)=>{
                const user = data.toString();
                const res = await this.userRepository.newUser(user);
                response.writeHead(201,defaultContentType);
                response.write(JSON.stringify({msg:res}));
                return response.end();
            })
        }catch(err){
            console.log(err);
            response.writeHead(500,defaultContentType);
            response.write(JSON.stringify({error:err}));
            return response.end();
        }
    }
}