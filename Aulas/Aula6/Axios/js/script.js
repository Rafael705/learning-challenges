console.log(axios);

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
            // params: {
            Headers: {
                "Content-Type": "application/json",
                
            }
            // }
        });
        
        
        console.log(response);
        return response.data;
        
    } 
    
    catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};


getData();

const container = document.querySelector("#user-container");
const printData = async () => {
    const data = await getData();
    console.log(data);
    data.forEach(user => {
        const div = document.createElement("div");
        container.appendChild(div);
        
        const nameElement = document.createElement("h2");
        nameElement.innerText = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.innerText = user.email;
        div.appendChild(emailElement);

        const phoneElement = document.createElement("p");
        phoneElement.innerText = user.phone;
        div.appendChild(phoneElement);

    });
}
printData();

const form = document.querySelector("#form");
const titileInput = document.querySelector("#titile");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: titileInput.value, 
        body: bodyInput.value, 
        userId: 1
})
}) ;  
