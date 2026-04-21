function sayHello(name: string): void {
    console.log("Hello " + name)
}

sayHello("Sameer")

//void return type is used when the function does not return anything. Its not mandatory to add void return type

//never: used when the function never returns anything. It can be used for functions that throw errors or infinite loops
function throwError(message: string): never {
    throw new Error(message)
}


//infinie loop
function infiniteLoop(): never {
    while (true) {
        console.log("Hello")
    }
}

infiniteLoop()