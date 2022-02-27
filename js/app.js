const loadPhotos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const res = await fetch(url);
    const data = await res.json();
    displayPhotos(data);
}
const displayPhotos = photos => {
    // for (const photo of photos) {
    //     console.log(photo)
    // }

    // console.log(photos);

    const album = document.getElementById('album');
    photos.forEach(photo => {
        // console.log(photo)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div>
                    <div onclick="loadDetail('${photo.id}')" class="card h-100">
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
const loadDetail = async id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    showDetail(data);
}
const showDetail = photo => {
    console.log(photo);
    const photodetail = document.getElementById('photo-detail');
    photodetail.innerHTML = '';
    const divs = document.createElement('div');
    divs.classList.add('card');
    divs.innerHTML = `                
            
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                    <p class="card-text">${photo.id}</p>
                    <p class="card-text">${photo.url}</p>
                </div>
            
    `;
    photodetail.appendChild(divs);
}