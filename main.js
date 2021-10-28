
const button = document.getElementById('buscar');

const listaRespos = async username => {
    
    const respos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
        .then(res => res.json());
    
    const content = document.getElementById('contenido');

    const markup = respos.map(repo => 
         `<li>
        
        <a href="${repo.html_url}">${repo.name}</a>
        
        </li>`
    );
    
    content.innerHTML = `${markup.join('')}`
};


button.onclick = function () {
    const nameRepo = document.getElementById("name").value;

    listaRespos(nameRepo);
}



