//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
let target = document.querySelector('.target');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {

            let block = document.createElement('div');
            block.innerText = `id: ${user.id}; name: ${user.name}`;
            block.classList.add('target')

            let btn = document.createElement('button');
            btn.innerText = 'Details';
            btn.classList.add('btn');

            target.append(block, btn);

            btn.onclick = function () {
                window.location.href = `user-details.html?id=${user.id}`;
            }
        }

    })





