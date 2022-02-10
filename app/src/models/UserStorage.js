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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};
    }

}

module.exports = UserStorage;