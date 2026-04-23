//if you want to use the decorators then first you need  to enable experimentalDecorators in tsconfig fil

function Role(role: string) {
    return function (constructor: Function) {
        constructor.prototype.role = role;
    }
}

@Role("admin")
class Admin {

}

const admin = new Admin();
console.log((admin as any).role);