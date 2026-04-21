//update later
interface APIResponse {
    readonly statuscode: number,
    body: string,
    headers?: object, //optional
    responseTime?: number
}

//Readonly - Cant modify the property
//? - Optional property

let response: APIResponse = {
    statuscode: 200,
    body: '{"user":"admin}',

};

console.log(response)