const head0 = document.createElement("h1");
head0.innerHTML = "Freelander Forum";
head0.style.textAlign = "center";
document.body.appendChild(head0)

const average = document.createElement ("h2")
average.innerHTML = "The Average starting price is $30.";
average.style.textAlign = "center";
average.style.fontSize = "24px";
document.body.appendChild(average);

const free = document.createElement("h2");
free.innerHTML = "Available Free Lancers";
free.style.textAlign = "center";
free.style.fontSize = "28px";
document.body.appendChild(free)

const freelancers =[
    {name: "Alice", Occupation: "Writer", sp: "$30"}, 
    {name: "Bob", Occupation: "Teacher", sp: "$50"}, 
    {name: "Carol", Occupation: "Programmer", sp: "$70"}
];


