// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)

//   {
//     name: "Marco Bianchi",
//     role: "Designer",
//     email: "marcobianchi@team.com",
//     img: "img/male1.png"
//   },
const cardContainerEl = document.getElementById("cardContainer");
function renderCard(parent, arr){
    for(let i = 0; i < arr.length; i++){
        const teamMember = arr[i];
        const card = `
            <div class="col-lg-4">
                <div class="card ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="./${teamMember.img}" class="img-fluid rounded-start" alt="team member photo">
                        </div>
                        <div class="col-md-8 bg-dark text-white">
                            <div class="card-body">
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



