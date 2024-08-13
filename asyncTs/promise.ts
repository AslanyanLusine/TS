let url: string = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
    userId: number;
    id: number;
    completed: boolean;
    title: string;
}

const getData = (): Promise<Todo[]> => {
    return new Promise<Todo[]>((resolve, reject) => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    return reject(new Error('Network response was not ok'));
                }
                return res.json();
            })
            .then((data: Todo[]) => {
                resolve(data);
            })
            .catch(error => {
                reject(error)
            });
    });
};

getData()
    .then(res => console.log(res))
    .catch(err => console.error("Fetching error:", err));
