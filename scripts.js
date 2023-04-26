function student(name, n1, n2) {
  this.name = name
  this.grade1 = n1
  this.grade2 = n2
}

function pass(n1, n2) {
  let media = (n1 + n2) / 2
  if (media.toFixed(2) < 7) {
    return `infelizmente nao foi dessa vez, tente novamente! Sua media foi: ${media}.`
  } else {
    return `parabens vc esta aprovado(a) no concurso! Sua media foi: ${media}.`
  }
}

let students = []

let student1 = new student('Joao', 4, 8)
let student2 = new student('Julia', 9, 10)
let student3 = new student('Marcelo', 10, 7)
let student4 = new student('Milena', 3.99, 9.99)

students.push(student1)
students.push(student2)
students.push(student3)
students.push(student4)

for (let student of students) {
  console.log(`Olá ${student.name}, ${pass(student.grade1, student.grade2)}`)
}
