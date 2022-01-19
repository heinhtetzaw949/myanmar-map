
    let currentPlace = document.querySelector(".currentPlace");
    let allPath = document.querySelectorAll("path");

    allPath.forEach(currentPath=>{
        currentPath.addEventListener("mouseover",_=>{
            allPath.forEach(c=>c.classList.remove("active"));
            currentPath.classList.add("active");
            currentPlace.innerText = currentPath.getAttribute("name");
        });
    })

    document.querySelector("[name='Yangon']").classList.add("active");
    currentPlace.innerText = "Yangon";