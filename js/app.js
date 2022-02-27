const loadPhotos = async () => {
    const url = ('https://jsonplaceholder.typicode.com/photos');
    const res = await fetch(url);
    const data = await res.json();
    displayPhotos(data);
}
const displayPhotos = photos => {
    // for (const photo of photos) {
    //     console.log(photo)
    // }
    if (photos.length === 100) {
        console.log(photos);
    }
    const album = document.getElementById('album');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div>
                    <div onclick="showDetail('${photo}')" class="card h-100">
                        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${photo.title}</h5>
                            <p class="card-text">${photo.url}</p>
                        </div>
                    </div>
                </div>
        `;
        album.appendChild(div);

    });
};
const showDetail = (photo) => {
    const photodetail = document.getElementById('photo-detail');
    photodetail.innerHTML = '';
    const divs = document.createElement('div');
    divs.classList.add('card');
    divs.innerHTML = `                
    <div class="h-100">
    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${photo.title}</h5>
    <p class="card-text">${photo.id}</p>
    <p class="card-text">${photo.url}</p>
    </div>
    </div>
    `;
    photodetail.appendChild(divs);
}