function contactMe(){
    let contact = () => `   
    <h2 class="font-header  mx-5 text-5xl flex flex-col justify-center font-bold text-center ombre">
        Contact
    </h2>
    <div class="container mt-12 w-80 flex flex-col justify-center mx-auto">   
        <h1 class='line1 text-indigo-500'>C:\\Users\\> <span class='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 font-bold'>Developer</span></h1>
        <h1 class='line2 text-indigo-500'> C:\\Users\\> cd <span class="text-indigo-200">mlp.dwwb@gmail.com</span></h1>
    </div>
    `;

    let contactSession = document.getElementById("contact");
    contactSession.innerHTML = contact(); 
}

setInterval(() => {contactMe()}, 8000);
contactMe()


