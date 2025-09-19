// // 1.  Create a Promise  that returns  the string  "Hello Async" after 2 seconds.
const ex1 = new Promise(res => setTimeout(() => res("Hello Async"), 2000))

ex1.then(msg => console.log(`Ex1: ${msg}`))

// // 2.  Write a function  that returns  a Promise  resolving  with  the number 10 after  1 second.
const ex2 = new Promise(res => setTimeout(() => res(10), 1000))

ex2.then(msg => console.log(`Ex2: ${msg}`))

// // 3.  Write a function  that rejects a Promise  with  the error  "Something went wrong" after  1 second.
const ex3 = new Promise((_, rej) => setTimeout(() => rej("Something went wrong"), 1000))

ex3.catch(msg => console.log(`Ex3: ${msg}`))

// // 4. Use .then() and  .catch() to handle  a Promise  that returns  a random  number.
const ex4 = new Promise((res, rej) => {
    const numb = Math.random();
    setTimeout(() => {
        if (numb < 0.05) res(numb);
        else rej(numb);
    }, 1000)
})

ex4.then(msg => console.log(`Ex4 Resolve: ${msg}`)).catch(msg => console.log(`Ex4 Reject: ${msg}`))

// // 5.  Create a function  simulateTask(time) that returns  a Promise  resolving  with  "Task done" after  time ms.

const simulateTask = (time: number) => {
    return new Promise(res => setTimeout(() => res("Task Done"), time))
}

simulateTask(500).then(msg => console.log(`Ex5 Resolve: ${msg}`))


// // 6.  Use  Promise.all() to run  3 simulated  Promises  in paralle l  and print  the result.
const simulateTaskUpgraded = (time: number, taskNumber: number) => {
    return new Promise(res => setTimeout(() => res(`Task ${taskNumber} Done`), time))
}

Promise
    .all([simulateTaskUpgraded(300, 1), simulateTaskUpgraded(600, 2), simulateTaskUpgraded(900, 3)])
    .then(msg => console.log(`Ex6 Resolve All: ${msg}`))

// // 7.  Use  Promise.race() to return  whichever  Promise  resolves  first.
Promise
    .race([simulateTaskUpgraded(300, 1), simulateTaskUpgraded(600, 2), simulateTaskUpgraded(900, 3)])
    .then(msg => console.log(`Ex7 Resolve Race: ${msg}`))

// // 8.  Create a Promise  chain:  square the number  2, then double  it, then add 5.
Promise
    .resolve(2)
    .then(n => n * n)
    .then(n => n * 2)
    .then(n => n + 5)
    .then(msg => console.log(`Ex8: ${msg}`))

// // 9.  Write a Promise  that reads an array after 1 second and filters  even numbers.
new Promise<number[]>(res => setTimeout(() => res([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1000))
    .then(arr => arr.filter(x => x % 2 == 0))
    .then(arr => console.log(`Ex9 Resolve: ${arr}`))

// // 10.  Use  .finally() to log  "Done" when  a Promise  finishes  (success or failure).
ex4
    .then(msg => console.log(`Ex10 Resolve: ${msg}`))
    .catch(msg => console.log(`Ex10 Reject: ${msg}`))
    .finally(() => console.log(`Ex10 Done`))

// // 11.  Convert  Exercise  1 into  async/await.
const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))
const ex11 = async () => {
    await sleep(2000);
    return "Hello Async";
}

ex11().then(res => console.log(`Ex11: ${res}`))

// // 12.  Write an async function  that calls  simulateTask(2000) and logs  the result.
const ex12 = async () => {
    return await simulateTask(2000);
}

ex12().then(res => console.log(`Ex12: ${res}`))

// // 13.  Handle  errors using  try/catch with  async/await.
const ex13 = async () => {
    const randomNumb = Math.random()
    try {
        if (randomNumb < 0.5) throw Error("Something went wrong");
        else console.log(`Ex13: ${randomNumb}`)
    } catch (e) {
        console.error(`Ex13 Error: ${e}`)
    }
}

ex13()

// // 14. Write an async function  that takes a number,  waits  1 second, and returns  the number  × 3.
const ex14 = async (numb: number) => {
    await sleep(1000)
    return numb * 3;
}

ex14(9).then(res => console.log(`Ex14: ${res}`))

// // 15.  Call  multiple  async functions  sequentially  using  await.
const ex15 = async () => {
    const a = await ex14(6)
    const b = await ex14(7)
    const c = await ex14(8)
    console.log(`Ex15 seq: ${a}, ${b}, ${c}`)
}

ex15()

// // 16.  Call  multiple  async functions  in  parallel  using  Promise.all().
const ex16 = async () => {
    const results = await Promise.all([ex14(6), ex14(7), ex14(8)])
    console.log(`Ex16: ${results}`)
}

ex16()

// // 17.  Use  for await...of to iterate  over an array of Promises.
const ex17 = async () => {
    const arr = [ex14(6), ex14(7), ex14(8)]
    for await (const x of arr) {
        console.log(`EX17 item: ${x}`)
    }
}

ex17()

// // 18. Write an async  function  fetchUser(id) that simulates  an API call  (resolves  a user 
// // object after 1 second).
const ex18 = async (id: number) => {
    await sleep(1000);
    return {id, name: "Huỳnh Đức Phú"}
}

ex18(22653551).then(res => console.log(`Ex18: ${JSON.stringify(res)}`));

// // 19.  Create an async function  fetchUsers(ids: number[]) that calls  fetchUser for each ID.
const fetchUsers = async (ids: number[]) => {
    return Promise.all(ids.map(x => ex18(x)))
}

fetchUsers([1, 2, 3]).then(res => console.log(`Ex19: ${JSON.stringify(res)}`));

// // 20.  Add a timeout:  if  the API call  takes more than  2 seconds, throw  an error.
const withTimeout = (promise: Promise<any>, ms: number = 2000) => {
    return Promise.race([
        promise,
        new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))
    ]);
}

withTimeout(ex18(1), 2000)
    .then(res => console.log(`Ex20 Fast: ${JSON.stringify(res)}`));

withTimeout(ex15(), 2000)
    .then(res => console.log(`Ex20 Slow: ${res}`))
    .catch(e => console.error(`Ex20 Error: ${e}`))

// // 21.  Use  fetch to get data from  a public  API (e.g., https://jsonplaceholder.typicode.com/todos/1).
const ex21 = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (res.ok) return res.json();
    else throw new Error("Something went wrong");
}

ex21(1).then(res => console.log(`Ex21: ${JSON.stringify(res)}`))

// // 22.  Call  the API multiple  times  and log  the results.
const ex22 = async (ids: number[]) => {
    const res = await Promise.all(ids.map(x => ex21(x)))
    console.log(`Ex22: ${JSON.stringify(res)}`)
}

ex22([1, 2, 3]);

// // 23.  Write an async function  that fetches  a list  of todos and filters  out those that are not
// // completed.
interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const ex23 = async (): Promise<Todo[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

  const todos: Todo[] = await res.json();
  return todos.filter(todo => !todo.completed);
};

ex23().then(todos => console.log("Ex23 Todos chưa hoàn thành:", todos));


// // 24.  Write an async function  postData() that sends a POST request to a test API.
interface PostPayload {
  title: string;
  body: string;
  userId: number;
}

const postData = async (url: string, data: PostPayload) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(`Something went wrong`);
  
  const responseData = await response.json();
  return responseData;
};

postData("https://jsonplaceholder.typicode.com/posts", {
  title: "Huỳnh Đức Phú",
  body: "Test gửi dataa",
  userId: 1,
})
  .then(data => console.log("Ex24 Resolve:", data))

// // 25.  Create a function  downloadFile that simulates  downloading  a file  in 3 seconds and logs 
// // when  done.
const downloadFile = async (fileName: string = "file.zip") => {
    await sleep(3000);
    console.log(`Ex25 Downloaded: ${fileName}`)
    return fileName;
}

downloadFile();

// // 26.  Use async/await  with  setTimeout to simulate  a 5- second wait. 
const ex26 = async () => {
    console.log("Ex26 Start")
    await sleep(5000);
    console.log("Ex26 Done")
}

ex26();

// // 27.  Write a function  fetchWithRetry(url, retries) that retries  up to  retries times  if 
// // the API call  fails.
const fetchWithRetry = async (url: string, retries: number = 3): Promise<any> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);     
    
      if (!response.ok) throw Error("Something went wrong")
      return await response.json();

    } catch (error) {
      console.warn(`Lần thử ${attempt} thất bại.`, error);

      if (attempt === retries) 
        throw new Error(`Thất bại sau ${retries} lần thử.`);
      

      sleep(1000)
    }
  }
};

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3)
  .then(data => console.log("Ex27 Success:", data))
  .catch(err => console.error("Ex27 Final Error:", err.message));

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1a", 3)
  .then(data => console.log("Ex27 Success:", data))
  .catch(err => console.error("Ex27 Final Error:", err.message));  


// // 28.  Write an async function  batchProcess() that processes 5 async tasks at once (use 
// // Promise.all).
const batchProcess = async () => {
    const results = await Promise.all([ex14(6), ex14(7), ex14(8), ex14(9), ex14(10)])
    console.log("Ex28:", results);
}

batchProcess();

// // 29.  Write an async function  queueProcess() that processes tasks sequenti ally  in  a queue.
const queueProcess = async () => {
    const ids = [1, 2, 3, 4, 5];
    for (const id of ids) {
        const result = await ex14(id); 
        console.log(`Ex29 Item: ${result}`);
    }

    console.log("Ex29 Done");
}

queueProcess()

// // 30.  Use async/await  + Promise.allSettled()  to handle  multiple  API calls  and display  their 
// // success/failure  status.
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/xxxxxxxxxxxxxxxxxxxxx"
];

const fetchUrl = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

const ex30 = async () => {
  const tasks = urls.map(url => fetchUrl(url)); 

  const results = await Promise.allSettled(tasks); 

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Ex30 [${index}] Success:`, result.value);
    } else {
      console.error(`Ex30 [${index}] Failed:`, result.reason.message);
    }
  });
};

ex30();


