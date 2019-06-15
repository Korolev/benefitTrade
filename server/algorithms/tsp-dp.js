/**
 *
 * Функция формирования склеек элементов одномерного массива.
 *
 * @param {array} array Одномерный массив из которого формируются склейки элементов.
 * @param {number} k Количество элементов склейки.
 * @return {array} Новый массив со всеми возможными склейками массива.
 */
const shopsPermutations = (array, k) => { // функция формирования пар
    let combinations = [];
    let indices = [];
    const next = (index) => {
        if (index === k) {
            let result = [];
            for (let i = 0; i < k; i++) {
                result[i] = array[indices[i]];
            }
            combinations.push(result);
            return;
        }

        for(let i in array){
            if (alreadyInCombination(i, index)) continue;// исключаем те элементы массива, которые уже входят в формируемую комбинацию
            indices[index] = i; // сохраняем зафиксированный элемент в конбинацию
            next(index + 1); // для каждого неисключенного делаем рекурсивный вызов с позицией + 1
        }
    };
    const alreadyInCombination = (i, index) => { // функция исключения элементов массива которые входят в формируемую комбинацию
        for (let j = 0; j < index; j++) {
            if (indices[j] === i) return true;
        }
        return false;
    };
    next(0);
    return combinations;
};

/**
 *
 * Функция сортировки массива.
 *
 * @param {array} array Массив который следует отсортировать.
 * @return {array} Новый отсортированный массив.
 */
const arraySort = array => {    // сортировка массива
    try {
        const sIncrease = (i, ii) => { // по возрастанию
            if (i > ii) return 1;
            else if (i < ii) return -1;
            else return 0;
        };
        for (let key in array) {
            if (array.hasOwnProperty(key)) {
                array[key].sort(sIncrease);
            }
        }
        return array;
    } catch (e) {
        throw "Error in function 'arraySort' " + e;
    }
};

/**
 *
 * Функция удаления повторяющихся элементов массива, использующая хеш-таблицы.
 *
 * @param {array} shopsArray Массив из которого удаляются повторяющиеся элементы.
 * @return {array} Новый массив с допустимыми элементами.
 */
const uniqueElemInArray = shopsArray => {
    let seen = {};
    return shopsArray.filter((item) => seen.hasOwnProperty(item) ? false : (seen[item] = true));
};

const a = (num, shops) => {
    if(shops.length !== 1){
        let prev = arr[num][shops[0]];
        let prev1 = arr[num][shops[1]];
        let index = shops[0];
        let index1 =  shops[1];

        let a;
        for(let key in shops){
            let elem = arr[num][key]
            // a += elem + a()
        }
        // return (prev + a(shops[0], [shops[1]])) + (prev1 + a(shops[1], [shops[0]]))
    }
    if(shops.length === 1) {
        return arr[num][shops[0]] + arr[shops[0]][4]
    }
};

let arr = [
    [null, 25, 40, 31, 27],
    [5, null, 17, 30, 25],
    [19, 15, null, 6, 1],
    [22, 8, 1, 10, null]
];

let shops = [1, 2];
let arr1 = [2, 3, 4];

let assd = uniqueElemInArray(arraySort(shopsPermutations(arr1, arr1.length -  1)));
console.log(assd);
//let task = a(0, shops);

//console.log(task)