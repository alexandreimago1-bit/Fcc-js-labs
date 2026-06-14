let email = "alexandrei.mago1@gmail.com";
function maskEmail(email){
let firstLetter = email[0]
let middle = email.slice(1,email.indexOf("@")-1)
let lastLetter = email[email.indexOf("@")- 1]
let masked = "*".repeat(middle.length)
let domain = email.slice(email.indexOf("@"))

return firstLetter + masked + lastLetter + domain
}
console.log(maskEmail(email))
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
