
const loadPost = async()=>{
    document.getElementById("loading-spiner").classList.remove("hidden");
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const posts = data.posts;

    const allPostContainer = document.getElementById("all-post-container");
    posts.forEach((items) =>{
        document.getElementById("loading-spiner").classList.add("hidden");
        const div = document.createElement("div");
        div.classList = `hero bg-base-200 rounded-xl mb-4`;
        div.innerHTML = `
        <div class="hero-content flex-col lg:flex-row">
            <img src="${items.image}" class="max-w-20 rounded-lg shadow-2xl" />
            <div>
                <div class="flex gap-8">
                    <h4># ${items.category}</h4>
                    <h4>Author: ${items.author.name}</h4>
                </div>
                <h1 class="text-sm font-bold text-[#12132D] mt-3">${items.title}</h1>
                <p class="py-6">${items.description}</p>
                    <div class="flex justify-between">
                        <div class="flex gap-12">
                            <div class="flex gap-2 items-center">
                                <img src="images/comment.png" alt="">
                                <P>${items.comment_count}</P>
                                </div>
                                    <div class="flex gap-2 items-center">
                                        <img src="images/tabler-icon-eye.png" alt="">
                                        <P>${items.view_count}</P>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <img src="images/tabler-icon-clock-hour-9.png" alt="">
                                        <P>${items.posted_time} min</P>
                                    </div>
                                </div>
                                <button onclick="clickPost('${items.title}', '${items.view_count}')" class="btn"><img src="images/email 1.png" alt=""></button>
                            </div>
                        </div>
                    </div>
        `;
        
        allPostContainer.appendChild(div);
    })
}


const clickPost = (data, views)=>{
    const readCount = document.getElementById("read-count").innerText;
    const value = parseInt(readCount);
    let newReadCount = value + 1;
    setInnerText("read-count", newReadCount);

    const titleViewContainer = document.getElementById("title-view-container");
    const div = document.createElement("div");
    div.classList = `flex justify-between bg-white p-4 rounded-xl mb-2`;
    div.innerHTML = `
            <h2>${data}</h2>
                <div class="flex gap-2 items-center">
                    <img src="images/tabler-icon-eye.png" alt="">
                    <P>${views}</P>
                </div>
    `;
    titleViewContainer.appendChild(div);
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


const loadLatestPost = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    
    const latestPostContainer = document.getElementById("latest-post-container");
    data.forEach((item)=>{
        const divNew = document.createElement("div");
        divNew.classList = `card bg-base-100 shadow-xl`;
        divNew.innerHTML = `
                <figure class="px-10 pt-10 ">
                        <img src="${item.cover_image}" />
                </figure>
                    <div class="card-body">
                        <div class="flex gap-5">
                            <img src="images/date.png" alt="">
                            <p>${item.author?.posted_date || 'No publish date'}</p>
                        </div>
                        <h2 class="card-title font-extrabold">${item.title}</h2>
                        <p>${item.description}</p>
                        <div class="card-actions">
                            <img src="${item.profile_image}" alt="" class="w-11 rounded-full">
                            <div>
                                <h1 class="font-bold">${item.author.name}</h1>
                                <p>${item.author?.designation || 'Unknown'}</p>
                            </div>
                        </div>
                    </div>
        `;
        latestPostContainer.appendChild(divNew);
    })
}

// const handleSearch = () =>{
//     const value = document.getElementById("input-field").value;
//     if(value){
//         loadPost(value);
//     }
//     else{
//         alert("please enter a valid name");
//     }
// }

loadLatestPost();

loadPost();