// let num1: number = 10;
// function add(num1: number,num2: number){
//     return num1 + num2
// }

// console.log(add(num1,4))

// function getNumberSum(numberArray: Array<number>){
//     return numberArray.reduce((acc,item)=>{
//         return acc + item;
//     },0)
// }

// console.log(getNumberSum([1,3,5,6,2,3]));


// type AuthManagmet = {
//     firstName: string,
//     lastName: string,
//     role: number,
//     phone?: number
// }

// const user: AuthManagmet = {
//     firstName: 'Mojahid',
//     lastName: "islam",
//     role: 1,
//     phone: 12
// }

// console.log(user.firstName)



// User Login System
// type User = {
//     name : string,
//     email : string,
//     password : string,
//     phone?: number
// }

// function login(user: User): User{
//     // do sumthing and return user 
//     return user;
// }

// let data = {
//     name:"sumi",
//     email :"asda",
//     password :"asda",
// }
// console.log(login(data));

// type ID = number | string;

// let role: ID = "fcv"

// intarface

// interface Transictions{
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }

// interface BankAccount{
//     accountNumber: number;
//     swiftCode: number;
//     branchName: string;
//     accountHolderName: string;
//     transictions: Transictions[]
// }
// let transictions1: Transictions = {
//     payeeAccountNumber: 12,
//     payerAccountNumber: 21
// }
// const bankaccountsystem: BankAccount = {
//     accountNumber: 123,
//     swiftCode:234,
//     branchName:"a",
//     accountHolderName:"sa",
//     transictions:[transictions1]
// }


interface Book {
    name: string;
    price: number;
}

interface Ebook extends Book{
    size: number,
    format: string;
}

interface AudioBook extends Ebook{
    duration: number;
}

interface AudioBook{
    time: number;
}
const LailaBook: AudioBook = {
    name: "Laila",
    price: 213,
    format: "pdf",
    size:10123,
    duration: 34,
    time: 12
}


// generics

// function genericalFunction<T>(arg: T): T{
//     console.log(arg);
//     return arg;
// }

// genericalFunction(12);

// interface User{
//     name: string;
//     email: string;
// }

// interface userDataPass extends User{
//     password:string
// }

// function getuserData(userDataArg: User){
//     console.log(userDataArg);
//     return userDataArg;
// }
// const userData: User = {name:"mojahid",email:"mojahid@"};
// const userDataPass: userDataPass = {name:"mojahid",email:"mojahid@",password:"mojahid@password"};

// getuserData(userDataPass);

interface IUser{
    name: string,
    email: string
}

const fetchData = async <ResultType>(path: string): Promise<ResultType> =>{
    const response =await fetch(`https://fakedata/api/${path}`);
    return response.json();
}

(async ()=>{
    const user = await fetchData<IUser[]>('/users');
    user[0].email
})();