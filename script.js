async function getImage() {
    let url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

async function renderImage() {
    let image = await getImage();
    let html = '';
    image.forEach(img => {
        let htmlSegment = `<div key=${img.id} class="img">
            <img src="${img.thumbnailUrl}">
        </div>`;
        html += htmlSegment;
    });
    

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderImage();
async function renderData() {
    let data = await getImage();
    let html1 = '';
    data.forEach(dat => {
        let htmlSegments = `<div key=${dat.id}} class="modal-content">
        <span class="close">&times;</span>
        <img src=${dat.url} alt="">
        <h5>${dat.title}</h5>
      </div>`;
        html1 += htmlSegments;
    });

    let containers = document.querySelector('.modal');
    containers.innerHTML = html1;
}

renderData();

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

