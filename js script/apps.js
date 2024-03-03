// console.log('data');

const loadPost = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const posts = data.posts;
    console.log(posts);

    const allPostContainer = document.getElementById("all-post-container");
    posts.forEach((items) =>{
        console.log(items);
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
                                <button class="btn"><img src="images/email 1.png" alt=""></button>
                            </div>
                        </div>
                    </div>
        `;
        allPostContainer.appendChild(div);
    })
}

loadPost();