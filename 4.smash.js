// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c



// function smash(words){
//     return result =  words.join(' ')
// }

// const smash = (words) => words.join(' ')

function smash(words){
    let result = ''
    for(let i = 0; i < words.length; i++){
        result += words[i]

        if(i != words.length - 1){
            result += ' '
        }
        
    }
    return result
}


console.log(smash(["halo","nama","sayya","adalah"]))
