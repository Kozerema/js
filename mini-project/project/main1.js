let url = new URL(location.href)
let id = url.searchParams.get('id')

let container = document.getElementsByTagName('div')[0]
fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(value => {

        for (const item in value) {
            let div = document.createElement('div')
            // div.classList.add('member')
            if (typeof value[item] !== "object") {
                div.innerText = `${item}: ${value[item]}`
            } else {
                div.innerText = `${item}:`
                for (const key in value[item]) {
                    let div1 = document.createElement('div')
                    if (typeof value[item][key] !== 'object') {
                        div1.innerText = `${key}: ${value[item][key]}`

                    } else {
                        div1.innerText = `${key}`
                        for (const div1Key in value[item][key]) {
                            let div2 = document.createElement('div')
                            if (typeof value[item][key][div1Key] !== 'object') {
                                div2.innerText = `${div1Key} ${value[item][key][div1Key]}`

                            }
                            div1.appendChild(div2)
                        }

                    }
                    div.appendChild(div1)

                }

            }
            container.appendChild(div)
        }


    })

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let btn = document.querySelector('.btn')
btn.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json())
        .then(value => {
            for (const item of value) {
                let postBlock = document.createElement('div')
                postBlock.innerText = item.title + ' -- '
                let a = document.createElement('a')
                a.innerText = 'details about post'
                a.href = 'post-details.html?coment=' + JSON.stringify(item)
                postBlock.appendChild(a)
                container.appendChild(postBlock)
            }
        })
}