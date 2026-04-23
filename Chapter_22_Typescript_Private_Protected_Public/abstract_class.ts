//Abstract class object cannot be created, it is just available for extend. methodas are empty
//it can have complete or incomplete methods
// Child class extends the Parent class then it has to complete the methods of abstract class
// otherwise it will give error.
abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}

class UITest extends BaseTest {
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
}