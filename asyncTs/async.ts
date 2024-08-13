let url1: string = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
    userId: number;
    id: number;
    completed: boolean;
    title: string;
}

const getData1 = async (): Promise<Todo[]> => {
    try {
        const res: any = await fetch(url1);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Todo[] = await res.json();
        return data;
    } catch (error: unknown) {
        console.error("Fetching error:", error);
        throw error; 
    }
};

getData1()
    .then((res : any) => console.log(res))
    .catch((err: unknown) => console.error("Fetching error:", err));

