//Destructuration

const person = {
    name: 'Tony',
    age: 45,
    nickname: 'Ironman',
};

console.log(person.name);
console.log(person.age);
console.log(person.nickname);


const{name, age,nickname } = person;

console.log(name);
console.log(age);
console.log(nickname);

const UseContext= ({name, age, nickname, range = 'captain'})=> {
    // console.log(name);
    // console.log(age);
    // console.log(nickname);
    // console.log(range);

    return {
        finalNickname: nickname,
        finalAge: age,
        latlong : {
            lat: 14.454,
            long: 18.545
        }
    }
};

const {finalNickname, finalAge, latlong:{lat, long}} = UseContext(person);

console.log(finalAge, finalNickname);
console.log(lat, long);