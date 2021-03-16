export function makePerson(name: string, age: number) {
    return {name: name, age: age};
}

export function testMakePerson() {
    console.log(
        makePerson('A', 22),
        makePerson('B', 25)
    );
}