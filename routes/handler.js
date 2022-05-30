import { readFile, writeFile } from "fs";
import { parse } from "url";
import { UserServices } from "../Services/userServices.js";
const userService = new UserServices();
export function handler(request,response){
    const { url,method } = request;
    const fullURL = parse(url,true);
    const pathname = fullURL.pathname;

    if(method == "GET" && pathname == "/teste"){
        userService.getUsers(request,response);
    }else if(method == "POST" && pathname == "/teste"){
        userService.newUser(request,response);
    }
}