
// function print(무엇이든들어감){
//     console.log(무엇이든들어감);
// }

// function print2(무엇이든들어감){
//     console.log(무엇이든들어감+"바보");
// }


// function print3(무엇이든들어감){
//     console.log(무엇이든들어감);
// }

// function print4(무엇이든들어감){
//     console.log(무엇이든들어감);
// }

// export default function exportDefault(){
//     console.log("exportDefault 함수입니다")
// }

// const funcs = module.exports = {
//    print,
//    print2,
//    print3,
//    print4,
// }

export function fetchData(url, callback){
    fetch(url)
    .then((response) => response.json())
    .then((json) => callback(json.title))
}




