// 1-Write a function to find the largest element in an array.
const array =[1,2,3,4,50,0,70]
function largeste(array){
    let largest =array[0];
    for(let i=1;i<array.length;i+=1){
        if (array[i]>largest){
            largest=array[i];
        }
    }
return largest;
}console.log(largeste(array));

// 2-Write a function to find the smallest element in an array.

const array1 =[1,2,3,4,50,0,70]
function smalleste(array1){
    let smallest =array1[0];
    for(let i=1;i<array1.length;i+=1) {
        if(array1[i]< smallest){
            smallest = array1[i];
        }
    }
    return smallest;
}console.log(smalleste(array1));

// 3-Write a function to find the sum of all elements in an array.

const array2 =[1,2,3,4]
function sumalle(array2){
    let sum =0;
    for(let i=0;i<array2.length;i+=1){
        sum+=array2[i];
    }
    return sum;
}console.log(sumalle(array2));


// 4-Write a function to find the average of all elements in an array.

const array3 =[1,2,3,4]
function averagee(array3){
    let sum =0;
    let average =0;
    for(let i=0;i<array3.length;i+=1){
        sum+=array3[i];
        if (array3.length>0)
            average=sum/array3.length;
    }
return average;

}console.log(averagee(array3));

// 5-Write a function to find the median of all elements in an array.
const array5 =[1,2,3,4]
function median(array5) {
    array5.sort((a, b) => a - b);
    const middle = Math.floor(array5.length / 2);
    return array5.length % 2 === 0 ? (array5[middle - 1] + array5[middle]) / 2 : array5[middle];
}
console.log(median(array5)); 

// 6-Write a function to remove all duplicates from an array.
const array6 =[1,2,3,4,4]
function removeall(array6){
    return array6.filter((el,index) => array6.indexOf(el)===index);
}
console.log(removeall(array6));

// 7-Write a function to sort an array in ascending order.
const array7=[4,3,1,2]
function ascendingorder(array7){
    let length=array7.length;
    for (let i=0;i<length-1;i+=1){
        for (var j = 0; j < length - 1 - i; j+=1){
            if (array7[j] > array7[j + 1]){
                let temporary = array7[j];
                array7[j] = array7[j + 1];
                array7[j + 1] = temporary;
            }
               
        }

    }return array7;

}console.log(ascendingorder(array7));

// 8-Write a function to sort an array in descending order.
const array8=[1,3,4,2]
function descendingorder(array8){
    let length=array8.length;
    for (let i=0;i<length-1;i+=1){
        for (let j = 0; j < length - 1 - i; j+=1){
            if (array8[j] < array8[j + 1]){
                let temporary = array8[j];
                array8[j] = array8[j + 1];
                array8[j + 1] = temporary;
            }
               
        }

    }return array8;

}console.log(descendingorder(array8));

// 9-Write a function to shuffle the elements of an array randomly.
const array9 = [1, 2, 3, 4]
function shufflee(array9) {
    for (let i = array9.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array9[i], array9[randomIndex]] = [array9[randomIndex], array9[i]];
    }
    return array9;
}
console.log(shufflee(array9));