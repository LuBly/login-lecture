"use strict";

class UserStorage{
    //#외부에서 불러올 수 없다.
    static #users ={
        id:["hyunho","lumenize","hy960"],
        psword:["1234","1234","96043"],
        name:["현호","정현","명현"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;