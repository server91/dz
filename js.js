
let users = {
};
for(let i = 1; i <= 10  ; ++i){
    let user = {};
    let userName = prompt ('Введите ваше имя');
    let userAge = prompt ('Введите возраст');
    user['name'] = userName;
    user['age'] = userAge;
    users[i] = user;
    console.log('Пользователь ' + i);
    console.log('Ваше имя ' + userName);
    console.log('Ваш возраст ' + userAge);
};

