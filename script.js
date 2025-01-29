const gallery = document.getElementById('gallery')
fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        data.forEach(pic => {

            const col = document.createElement('div')
            col.className = "col-md-4 col-sm-6 d-flex justify-content-cener";

            const polaroid =
                `<div class ="polaroid">
                     <img class="pin" src="img/pin.svg" alt="pin">
                     <img class ="img-fluid photo" src="${pic.url}" alt="${pic.tiltle}">
                     <p>${pic.title}</p>
        
        </div>
        `;
            col.innerHTML = polaroid;
            gallery.appendChild(col);

        });
    })

