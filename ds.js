function countCleanAndDirtyDishes(numDishes, dishes) {
    let cleanCount = 0;
    let dirtyCount = 0;

    for (let i = 0; i < numDishes; i++) {
        if (dishes[i] === 0) {
            cleanCount++;
        } else if (i === 0 || dishes[i - 1] === 1) {
            dirtyCount++;
        }
    }

    return [cleanCount, dirtyCount];
}

const numDishes = 5;
const dishes = [1, 0, 0, 0, 1];

const [clean, dirty] = countCleanAndDirtyDishes(numDishes, dishes);

console.log(clean, dirty);
