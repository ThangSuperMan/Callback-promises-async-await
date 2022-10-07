// Callback
// const posts = [
//   { title: 'Post one', body: 'This is post one' },
//   { title: 'Post two', body: 'This is post twon' },
// ]

// function getPosts() {
//   setTimeout(() => {
//     let output = ''
//     posts.forEach((post, index) => {
//       console.log('setTimout of getPost method');
//       output += `<li>${post.title}</li/>`
//       document.body.innerHTML = output
//     })
//   }, 10000)
// }

// function createPost(post, callback) {
//   console.log(post);
//   setTimeout(() => {
//     console.log('setTimout of createPost method');
//     posts.push({ title: 'Post three', body: 'This is post threee' })
//     callback()
//   }, 2000)
// }

// function sayHi() {
//   console.log('sayhi callback');
// }

// createPost({ title: 'Post three', body: 'This is post threee' }, getPosts)
// console.log('me first');

// Promises
const posts = [
  { title: 'Post one', body: 'This is post one' },
  { title: 'Post two', body: 'This is post twon' },
]

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post) => {
      console.log('setTimout of getPost method');
      output += `<li>${post.title}</li/>`
      document.body.innerHTML = output
    })
  }, 1000)
}

function createPost(post) {
  console.log('post inputs');
  console.log(post);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('setTimout of createPost method');
      posts.push({ title: 'Post three', body: 'This is post threee' })
      const err = false

      // Compare between !err == true
      if (!err) {
        resolve()
      } else {
        reject("Error: Some thing went wrong!")
      }
    }, 2000)
  })
}


// createPost({ title: 'Post three', body: 'This is post threee' })
//   .then(getPosts)
//   .catch(myErr => console.log(`myError: ${myErr}`))
// console.log('me first');

// Promise.all
// const promise1 = Promise.resolve('Hello wrold')
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => (
//   setTimeout(resolve('Good buy'), 2000)
// ))

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4])
//   .then((values) => console.log(values))

async function init() {
  await createPost({ title: 'Post three', body: 'This is post threee' })
  console.log('me')
  getPosts()
}

init()
