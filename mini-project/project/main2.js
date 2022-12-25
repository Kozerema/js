// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);
let comentNew = url.searchParams.get('coment')
let parse = JSON.parse(comentNew)
let containerNew = document.querySelector('.container')


fetch('https://jsonplaceholder.typicode.com/posts/' + parse.id)
    .then(info => info.json())
    .then(info => {
        console.log(info)
        for (const item in info) {
            let postBlock = document.createElement('div')
            postBlock.innerText = `${item}: ${info[item]}`
            postBlock.classList.add('post')
            containerNew.appendChild(postBlock)
        }
    })

fetch('https://jsonplaceholder.typicode.com/posts/' + parse.id + '/comments')
    .then(value => value.json())
    .then(value => {
        for (const coment of value) {
            let p = document.createElement('p')
            p.innerText = `${coment.body}`
            p.classList.add('block')
            containerNew.append(p)
        }
    })

