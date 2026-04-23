class TestDataStorage<T> { //This means TestDataStorage can take any data type
    private item: T[] = [];
    add(item: T): void {
        this.item.push(item)
    }
    getFirstItem(): T | undefined {
        return this.item[0]
    }
    getAllItems(): T[] {
        return this.item;
    }
}

const stringStore = new TestDataStorage<string>()
stringStore.add("Hello")
stringStore.add("world")
console.log(stringStore.getAllItems())

const numberStore = new TestDataStorage<number>()
numberStore.add(10)
numberStore.add(20)
console.log(numberStore.getAllItems())