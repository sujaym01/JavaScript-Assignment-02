// Converted Display Data From API Reference Start Here
const loadData = (global) => {
    // console.log(global);
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/${global}`)
    .then((res) => res.json())
    // .then((data) => console.log(data))
    // .then((data) => console.log(data.data))
    .then((data) => displayData(data.data));
          
};

const videoPlayer = document.getElementById("Video-Player");

const displayData = (item) => {
    // console.log(item);
    accordianContainer.innerHTML = "";
    if(item.length == 0) {
        displayErrorMessage();   
    }else{
        errorMessage.innerHTML ="";
    }

    // document.getElementById("total-catagory").innerText = item.length;

    // const videoPlayer = document.getElementById("Video-Player");
    const row = document.createElement("div");
    row.classList.add("row");

    item.forEach((items) => {
        // console.log(items);

        const verifiedBadge = items.authors[0].verified ? '<i id="verified-badge"class="fa-1x fa fa-check-circle"></i>':'';
    
        let timeText;
        if (items.others.posted_date != '') {
            const timeMin = parseInt(items.others.posted_date);
            const hours = parseInt((timeMin / 3600));
            const minutes = timeMin % 60;
           timeText = `${hours}hours ${minutes} minutes ago`;
           
        }else{
            timeText = '';
        }
                // console.log(items.others.posted_date);
                // const d = items.others.posted_date;
                // const minutes = parseInt(d/60);
                // const hours = parseInt(minutes / 60);
                // const  convertedMinute = minutes % 60;
                // const timeText =`${hours}hrs ${convertedMinute} min ago`;
                // console.log(minutes,hours,convertedMinute);

        const col = document.createElement("div");
        col.classList.add("col-12","col-md-4","col-lg-3","d-block","d-flex","d-md-flex","d-lg-flex");

        const card = document.createElement("div");
        card.classList.add("card","mt-2","mt-md-3","mt-lg-3","border-0");

        col.appendChild(card);
        row.appendChild(col);

        card.innerHTML = `

            <div class="img-container">
                <img class="img-fluid border rounded-2" src="${items.thumbnail}" alt="img">
                <div class="img-text">${timeText}</div>
            </div>
                
            <div class="mt-3 mt-md-3 mt-lg-3 d-flex">
                <img class="profile-img" src="${items.authors[0].profile_picture}" alt="img">
                <div>
                    <h5 class="fs-5 mt-1  mt-md-1 mt-lg-1 ">${items.title}</h5>
                    <p>${items.authors[0].profile_name} ${verifiedBadge}</p>
                    <p>${items.others.views} views</p>
                </div>
            </div>
        `;                
    });
                
    videoPlayer.innerHTML="";
    videoPlayer.appendChild(row);   
};

loadData(1000);

// Converted Display Data From API Reference End Here

// All Catagories Function Start Here

const allCatagories = () => {
    // console.log("hello");
    fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json())
    .then((data) => allCatagoriesData(data.data));
};

const allCatagoriesData = (item) => {
    // console.log(item);

    // const btnSection = document.getElementById("btn-section");
    // console.log(btnSection);

    const categoryBtn = document.getElementsByClassName("category-btn");

    item.forEach((items) => {
        // console.log(items);
        const btn = document.createElement("span");
        btn.innerHTML = `
            <button onclick="loadData(${items.category_id})"
                type="button" class="btn btn-outline-danger btn-sm"
            >
                ${items.category}
            </button>
        `;
        categoryBtn[0].appendChild(btn);
    });   
};
    
allCatagories();

// All Catagories Function End Here

//display Error Message Function Start Here

const errorMessage = document.getElementById("display_error_message");

const displayErrorMessage = () => {
    
    // console.log(errorMessage);

    errorMessage.innerHTML = `
        <div class="my-4 my-md-4 my-lg-4">
            <img class="img-fluid d-block m-auto" src="../images/Icon.png" alt="icon">
        </div>
        <div class="text-center">
            <h4>Oops!! Sorry, There is no content here.</h4>
        </div>
    `; 
};

//Display Error Message Function End Here

// Blog Button Accordian Section Start Here

const accordianContainer = document.getElementById("accordian-container")

const accordianFunction = () => {
    accordianContainer.innerHTML =`
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button id="accordion-button1" class="accordion-button collapsed"
                        type="button"data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false"aria-controls="flush-collapseOne"
                    >
                        Discuss the scope of var,let and const!
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div>
                            <h4 class="text-info">VAR :</h4>
                            <ul>
                                <li>
                                    <p>
                                        <span class="text-danger">Function Scope :</span>
                                        The scope of the var keyword is the global or function scope.
                                        It means variables defined outside the function can be accessed
                                        globally,and variables defined inside a particular function
                                        can be accessed with in the function.
                                    </p>
                                </li>
                                <li>
                                    <p><span class="text-danger">Hoisting :</span>
                                        Hoisting done, with initializing as 'default' value.
                                    </p>
                                </li>
                            </ul> 
                        </div>

                        <div>
                            <h4 class="text-info">LET :</h4>
                            <ul>
                                <li>
                                    <p>
                                        <span class="text-danger">Function Scope :</span>
                                        The scope of a let variable is only block scoped.
                                        It can't be accessible outside the particular block ({block}).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="text-danger">Hoisting :</span>
                                        Hoisting is done, but not initialized .This is the reason for the error
                                        when we access the let variable before declaration/initialization.
                                    </p>
                                </li>
                            </ul> 
                        </div>

                        <div>
                            <h4 class="text-info">CONST :</h4>
                            <ul>
                                <li>
                                    <p>
                                        <span class="text-danger">Function Scope :</span>
                                        The const keyword has all the properties that are the same as the 'let'
                                        keyword, except the user cannot update it.It is block scoped.When users
                                        declare a const variable, they need to initialize it, otherwise,it returns
                                        an error. The user cannot update the const variable once it is declared.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="text-danger">Hoisting :</span>Hoisting is done,
                                        but not initialized .This is the reason for the error when we access
                                        the const variable before declaration/initialization.
                                    </p>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button id="accordion-button2" class="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo"
                    >
                        Tell us the use cases of null and undefined!
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div>
                            <h4 class="#">Defining Null :</h4>
                            <ul>
                                <li>
                                    <p>
                                        In JavaScript, null is a special value that represents the absence
                                        of an object. It is often used to indicate that a variable does not
                                        have a value or that an object does not exist. Null is not the same as
                                        an empty string or a zero value, as those values are still considered to
                                        have a value. Instead, null represents the absence of a value or object.
                                    </p>
                                </li> 
                            </ul> 
                        </div>

                        <div>
                            <h4 class="#">Defining Undefined :</h4>
                            <ul>
                                <li>
                                    <p>
                                        In JavaScript, undefined is a special value that is assigned to a variable
                                        by default when the variable is declared but no value is explicitly assigned
                                        to it. It is often used to check if a variable has been assigned a value or not.
                                    </p>
                                </li>
                            </ul> 
                        </div>

                        <div>
                            <h4 class="#">The Difference Between Null and Undefined :</h4>
                            <ul>
                                <li>
                                    <p>
                                        The main difference between null and undefined is that undefined
                                        dictates that a variable has been declared,but has not yet been
                                        assigned a value. Null on the other hand is a value that can be 
                                        assigned to a variable.
                                    </p>
                                </li>

                                <div class="bg-danger p-2 p-md-3 p-lg-3">
                                    <p>For example, consider the following code :</p>
                                    <p>let name;</p>
                                    <p>console.log(name); //Output: undefined</p>
                                    <p>name = null;</p>
                                    <p>console.log(name); //Output: null</p>
                                </div>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button id="accordion-button3" class="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" 
                        aria-expanded="false" aria-controls="flush-collapseThree"
                    >
                        What do you mean by REST API?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" 
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">

                        <div>
                            <h4>REST API Introduction:</h4>
                            <p>
                                Representational State Transfer (REST) is an architectural style 
                                that defines a set of constraints to be used for creating web services. 
                                REST API is a way of accessing web services in a simple and flexible way
                                without having any processing. It's used to fetch or give some information 
                                from a web service. All communication done via REST API uses only HTTP request.
                            </p>
                        </div>

                        <div>
                            <h4>Working :</h4>
                            <p>
                                A request is sent from client to server in the form of a web URL as HTTP
                                GET or POST or PUT or DELETE request. After that, a response comes back from
                                the server in the form of a resource which can be anything like HTML,XML,Image, 
                                or JSON. But now JSON is the most popular format being used in Web Services.
                            </p>
                        </div>
                        <div>
                            <img class="img-fluid align-items-center" src="./images/rest_api.jpeg" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;   
};  

document.getElementById("blog-btn").addEventListener("click",
    function(e) {
        accordianFunction();       
        errorMessage.innerHTML="";
        videoPlayer.innerHTML="";
});
// Blog Button Accordian Section end Here




