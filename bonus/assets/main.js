// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)

const cardContainerEl = document.getElementById("cardContainer");
const addMemberBtnEl = document.getElementById("addMemberBtn");
// form html elements
const addFormEl = document.getElementById("addForm");
const formNameEl = document.getElementById("floatingName");
const formRoleEl = document.getElementById("floatingRole");
const formImgEl = document.getElementById("floatingImg");
const formEmailEl = document.getElementById("floatingEmail");

//display add member form
addMemberBtnEl.addEventListener("click", ()=>{
    if(addFormEl.classList.contains("d-none")){
        addMemberBtnEl.innerText = "Annulla";
        addFormEl.classList.toggle("d-none");
        resetForm();
    }
    else{
        addMemberBtnEl.innerHTML = 'add member<i class="fa-solid fa-plus ms-1"></i>'
        addFormEl.classList.toggle("d-none");

    }
});

// add member and display cards
addFormEl.addEventListener("submit", (ev) =>{
    ev.preventDefault();
    const name = formNameEl.value;
    const role = formRoleEl.value;
    const img = `img/${formImgEl.value}.png`;
    const email = formEmailEl.value;
    const memberToAdd ={
        name,
        role,
        img,
        email
    }
    resetForm();
    teamMembers.push(memberToAdd);
    renderCard(cardContainerEl, teamMembers);
    addMemberBtnEl.innerHTML = 'add member<i class="fa-solid fa-plus ms-1"></i>'
    addFormEl.classList.toggle("d-none");
});


function resetForm(){
    formNameEl.value = "";
    formRoleEl.value = "";
    formImgEl.value = "";
    formEmailEl.value = "";
};

function renderCard(parent, arr){
    parent.innerHTML = "";
    for(let i = 0; i < arr.length; i++){
        const teamMember = arr[i];
        const card = `
            <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="row g-0">
                        <div class=" col-md-4 text-center">
                            <img src="./${teamMember.img}" class="team-img  " alt="team member photo">
                        </div>
                        <div class="col-md-8 bg-dark text-white">
                            <div class="card-body d-flex flex-column">
                                <h4 class="card-title fw-bold">${teamMember.name}</h4>
                                <p class="card-text">${teamMember.role}</p>
                                <p class="card-text"><a href="#">${teamMember.email}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        parent.innerHTML += card;
    }
};

renderCard(cardContainerEl, teamMembers);



