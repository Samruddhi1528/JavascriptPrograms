class BaseTest {
    setup(): void {
        console.log("[BASE] Open browser");
    }
    teardown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {

    override setup(): void {//if I run the setup method of this class whichever object will get created their setup method is called
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
let apitest = new APITest();
test.setup();
apitest.setup();