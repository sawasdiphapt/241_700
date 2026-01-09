/*
let fname = 'John'
console.log('name',fname)
const idcard ='123'//เปลียนค่าไม่ได้ , ใช้เช่น const pi = 3.14
// string

let age = 30
let height = 150.5
//  number

idcard = '456'

console.log('age',age)
console.log('height',height)
console.log('Idc',idcard)*/

/**
 + บวก
 - ลบ
 * คูณ
 / หาร
 % หารเอาเศษ
 */

 /*
 condition statement(if,else,switch)

 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 >= มากกว่าเท่ากับ
 < น้อยกว่า
 <= น้อยกว่าเท่ากับ

 */
/* 
let number1 =9
let number2 =9

if(number1 != number2){
    console.log('Nigga you are if')
}
else if(number1 == number2){
    console.log('Nigga its else if')
}
else{
    console.log('Nigga its else')
}

/**
 * grade
 * >= 80a
 * >=70b
 * >=60c
 * >=50d
 * 
 */
/*
let score = prompt('ใส่ตัวเลข')
if(score >= 80){
    console.log('A')
}
else if(score >= 70){
    console.log('B')
}
else if(score >= 60){
    console.log('C')
}
else if(score >= 50){
    console.log('D')
}
else {
    console.log('F')
}


 * && และ
 * || หรือ
 * ! not ไม่
 */
/*
let counter = 0

while(counter <= 9){
    console.log('Hi')
    //counter = counter+1
}   //counter += 1
    //counter++

for (let counter = 0; counter<10; counter++){
    console.log('Hi')
}*/
/*
let age1 =20
let age2 =25
let age3 =30

let ages =[20,25,30]

console.log('age1 age2 age3',age1,age2,age3)
console.log('age1 age2 age3 ')
console.log('age1 age2 age3',ages)

console.log('Index',ages[0])

ages.push(25)
console.log('push array',ages)

ages.pop()
console.log('Pop arrays',ages)
*/
/*
let ages =[20,25,30,35,40]

ages.sort()
console.log(ages)

let name_list = ['aa',   'bb'    ,'cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)

for(let index = 0; index < name_list.length; index++){
    console.log('name list ',name_list[index])
}
let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
    age: 35,
    name: 'bb',
    grade: 'B'
}]
student.push({
    age: 35,
    name: 'bb',
    grade: 'B'

})

for(let index = 0; index<student.length; index++){
    console.log('Student Number',(index +1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)


}
let score1 = 55
let score = 65
let grade =' '

function calculat_grade(score){
if(score >= 80){
     grade('A')
}
else if(score >= 70){
    grade('B')
}
else if(score >= 60){
    grade('C')
}
else if(score >= 50){
    grade('D')
}
else {
    grade('F')
}
return grade
}



let grade1 = calculat_grade(score1)
console.log('Grade',grade1)*/

/*
let score=[20,30,40,50]


for(let index = 0; index < score.length; index++){
    console.log('score',score[index])
    
    }


let newScore = score.filter((s)=> {
    if(s>=30){
        return true
    }else
        {
            false
        }
    }
)

score.forEach((ns) => {
    console.log('score', ns)

})*/

let students =[{
    name: 'aa',
    score: '50',
    grade: 'D'
},{
    name: 'bb',
    score: '80',
    grade: 'A'
}
]
let student = students.find((s)=>{
    if(s.name == 'aa'){
        return true
    }
})
let double_score = students.map((s)=>{
    s.score=s.score*2
    return s
})

let highScore = students.filter((score)=>{
    if(s.score>=50){
        return true
    }
})

console.log(student)
console.log('double_score',double_score)
