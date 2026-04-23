function wrapResponse<T>(data: T, statusCode: number): { statusCode: number, data: T } {
    return { statusCode: statusCode, data: data }
}

console.log(wrapResponse({ name: "Samruddhi", age: 21 }, 200))
console.log(wrapResponse(true, 404)) //This will still run
console.log(wrapResponse(3, 404)) //This will still run

