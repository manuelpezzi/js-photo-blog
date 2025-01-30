const gallery = document.getElementById('gallery')
const modal = document.getElementById('modaleCustom')
const modalBtn = document.getElementById('cancelFetch')
const modalContent = document.querySelector(".modalContent");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        data.forEach(pic => {

            const col = document.createElement('div')
            col.className = "col-md-4 col-sm-6 d-flex justify-content-cener";

            const polaroid = document.createElement("div");
            polaroid.className = 'polaroid';
            polaroid.innerHTML =
                `    <img class="pin" src="img/pin.svg" alt="pin">
                     <img class ="img-fluid photo" src="${pic.url}" alt="${pic.title}">
                     <p>${pic.title}</p>
                     <p class = "data">${pic.date}</p>
        
        </div>
        `;
            polaroid.querySelector('.photo').addEventListener('click', () => {
                modalContent.innerHTML = `
                     <img id="imgMoldal" class="imgFluid" src="${pic.url}" alt="foto modale">
                <button id="cancelFetch" class="btn btn-danger mt-3"> chiudi</button>
            </div>
                    `;
                modal.style.display = 'flex';

                document.getElementById('cancelFetch').addEventListener('click', () => {
                    modal.style.display = 'none';
                })

            });



            col.appendChild(polaroid);
            gallery.appendChild(col);

        });
    })

