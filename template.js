// Header Function
function HeaderComponent() {
    let main = document.querySelector("#main");

    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("style", "height:70px; border: 1px solid black");
    headerDiv.setAttribute("class", "bg-dark d-flex flex-row justify-content-between align-items-center");

    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("style", "width:20%;height:50px cursor:pointer;");
    leftDiv.setAttribute("class", "d-flex flex-column justify-content-center align-items-center");
    let label = document.createElement("span");
    label.innerText = "Amazon";
    label.setAttribute("class", "text-danger");
    label.setAttribute("style", "font-weight:bolder cursor:pointer;");
    label.addEventListener("click", function () {
        let main = document.getElementById("sub");
        main.innerHTML = "";

        cardFun();
    });
    leftDiv.appendChild(label);

    let small = document.createElement("small");
    small.innerText = "Apni Dukan";
    small.setAttribute("class", "text-white");
    leftDiv.appendChild(small);

    let midDiv = document.createElement("div");
    midDiv.setAttribute("style", "width:55%;height:50px cursor:pointer;");
    midDiv.setAttribute("class", "d-flex justify-content-center align-items-center");

    let searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder", "Search for Products");
    searchInput.setAttribute("style", "width:90%;height:40px;border-radius:5px;");
    midDiv.appendChild(searchInput);

    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("style", "width:20%;height:50px;");
    rightDiv.setAttribute("class", "d-flex align-items-center justify-content-around");

    let signIn = document.createElement("button");
    signIn.innerHTML = "<b>SIGN-IN</b>";
    signIn.setAttribute("class", "text-black");
    signIn.setAttribute("onclick", "signIn()");
    rightDiv.appendChild(signIn);

    let signUp = document.createElement("button");
    signUp.innerHTML = "<b>SIGN-UP</b>";
    signUp.setAttribute("class", "text-black");
    signUp.setAttribute("onclick", "signUp()");
    rightDiv.appendChild(signUp);

    headerDiv.appendChild(leftDiv);
    headerDiv.appendChild(midDiv);
    headerDiv.appendChild(rightDiv);
    main.appendChild(headerDiv);
}
// Sign In Function
function signIn() {
    let sub = document.getElementById("sub");
    sub.innerHTML = "";

    let sign = document.getElementById("show");
    if (sign) {
        sign.style.display = "block";
        return;
    }

    let signInDiv = document.createElement("div");
    signInDiv.setAttribute("id", "show");
    signInDiv.setAttribute("class", "bg-danger text-white p-4 rounded mx-auto mt-5 d-flex flex-column align-items-center");
    signInDiv.setAttribute("style", "width: 45%; height: 400px; border: 1px solid black;");

    let title = document.createElement("h2");
    title.innerHTML = "<b>Sign-In</b>";
    title.setAttribute("class", "text-center mb-4");

    let formContainer = document.createElement("div");
    formContainer.setAttribute("class", "w-75");
    formContainer.setAttribute("id", "Fcontainer");

    let nameF = document.createElement("div");
    nameF.setAttribute("class", "mb-3");

    let labelN = document.createElement("label");
    labelN.innerText = "User Name:";
    labelN.setAttribute("class", "fw-bold w-25");

    let userName = document.createElement("input");
    let nErr = document.createElement("small");
    userName.setAttribute("type", "text");
    userName.setAttribute("id", "nameU");
    userName.setAttribute("class", "form-control");
    userName.setAttribute("onkeyup", "nameValidation()");
    nErr.setAttribute("id", "nError");
    nErr.setAttribute("class", "text-warning w-100 d-block mt-1");

    userName.setAttribute("placeholder", "Enter User Name");
    userName.setAttribute("class", "form-control w-75");

    nameF.appendChild(labelN);
    nameF.appendChild(userName);
    nameF.appendChild(nErr);

    let passF = document.createElement("div");
    passF.setAttribute("class", "mb-3");

    let labelP = document.createElement("label");
    labelP.innerText = "Password:";
    labelP.setAttribute("class", "fw-bold w-25");

    let pass = document.createElement("input");
    let pErr = document.createElement("small");
    pErr.setAttribute("id", "pError");
    pErr.setAttribute("class", "text-warning");
    pass.setAttribute("type", "password");
    pass.setAttribute("placeholder", "Enter Your Password");
    pass.setAttribute("class", "form-control w-75");
    pass.setAttribute("id", "passU");
    pass.setAttribute("onkeyup", "passValidation()");

    passF.appendChild(labelP);
    passF.appendChild(pass);
    passF.appendChild(pErr);

    let newUser = document.createElement("small");
    newUser.innerHTML = "New User? sign-UP here.";
    newUser.setAttribute("class", "text-warning");
    newUser.setAttribute("style", "cursor:pointer");
    newUser.addEventListener("click", () => {
        signUp();
    });
    let submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.setAttribute("class", "btn btn-primary w-100 ");
    submit.setAttribute("onclick", "validateSignIN()");

    formContainer.appendChild(nameF);
    formContainer.appendChild(passF);
    formContainer.appendChild(newUser);
    formContainer.appendChild(submit);
    signInDiv.appendChild(title);
    signInDiv.appendChild(formContainer);
    sub.appendChild(signInDiv);
}
//Sign Up Function
function signUp() {
    let sub = document.getElementById("sub");
    sub.innerHTML = "";

    let sign = document.getElementById("show");
    if (sign) {
        sign.style.display = "block";
        return;
    }

    let signInDiv = document.createElement("div");
    signInDiv.setAttribute("id", "show");
    signInDiv.setAttribute("class", "bg-danger text-white p-4 rounded mx-auto mt-5 d-flex flex-column align-items-center");
    signInDiv.setAttribute("style", "width: 45%; height: 500px; border: 1px solid black;");

    let title = document.createElement("h2");
    title.innerHTML = "<b>Sign-Up</b>";
    title.setAttribute("class", "text-center mb-4");

    let formContainer = document.createElement("div");
    formContainer.setAttribute("class", "w-75");
    formContainer.setAttribute("id", "Fcontainer");

    // Name 
    let nameF = document.createElement("div");
    nameF.setAttribute("class", "mb-3");

    let labelN = document.createElement("label");
    labelN.innerText = "Name:";
    labelN.setAttribute("class", "fw-bold w-25");

    let userName = document.createElement("input");
    let nErr = document.createElement("small");
    userName.setAttribute("type", "text");
    userName.setAttribute("id", "name");
    userName.setAttribute("class", "form-control");
    userName.setAttribute("onkeyup", "nameValidation()");
    nErr.setAttribute("id", "nError");
    nErr.setAttribute("class", "text-warning w-100 d-block mt-1");

    userName.setAttribute("placeholder", "Enter Name :");
    userName.setAttribute("class", "form-control w-75");

    nameF.appendChild(labelN);
    nameF.appendChild(userName);
    nameF.appendChild(nErr);

    //email 
    let emailF = document.createElement("div");
    emailF.setAttribute("class", "mb-3");

    let labelE = document.createElement("label");
    labelE.innerText = "Email-ID:";
    labelE.setAttribute("class", "fw-bold w-25");

    let email = document.createElement("input");
    let eErr = document.createElement("small");
    eErr.setAttribute("id", "eErr");
    eErr.setAttribute("class", "text-warning");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Enter Your Email");
    email.setAttribute("class", "form-control w-75");
    email.setAttribute("id", "email");
    email.setAttribute("onkeyup", "emailValiSignUP()");

    emailF.appendChild(labelE);
    emailF.appendChild(email);
    emailF.appendChild(eErr);


    //PassWord
    let passF = document.createElement("div");
    passF.setAttribute("class", "mb-3");

    let labelP = document.createElement("label");
    labelP.innerText = "Password:";
    labelP.setAttribute("class", "fw-bold w-25");

    let pass = document.createElement("input");
    let pErr = document.createElement("small");
    pErr.setAttribute("id", "pError");
    pErr.setAttribute("class", "text-warning");
    pass.setAttribute("type", "password");
    pass.setAttribute("placeholder", "Enter Your Password");
    pass.setAttribute("class", "form-control w-75");
    pass.setAttribute("id", "pass");
    pass.setAttribute("onkeyup", "passValiSignUP()");

    passF.appendChild(labelP);
    passF.appendChild(pass);
    passF.appendChild(pErr);

    let submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.setAttribute("class", "btn btn-primary w-100 mt-3");

    submit.setAttribute("onclick", "validateSignUP()");

    formContainer.appendChild(nameF);
    formContainer.appendChild(passF);
    formContainer.appendChild(emailF);
    formContainer.appendChild(submit);
    signInDiv.appendChild(title);
    signInDiv.appendChild(formContainer);
    sub.appendChild(signInDiv);
}

// Sign In Validations

//User Name
function nameValidation() {
    let nameError = document.getElementById("nError");
    let n = document.getElementById("nameU");

    if (n.value.trim() === "") {
        nameError.innerText = "Enter User Name";
        nameError.classList.add("text-warning");
        return false;
    } else {
        nameError.innerText = "";
        nameError.classList.remove("text-warning");
        return true;
    }
}
//Password
function passValidation() {
    let pass = document.getElementById("passU");
    let p = document.getElementById("pError");
    if (pass.value.trim() === "") {
        p.innerHTML = "Pass is required";
        return false
    }
    else if (pass.value.length < 6 || pass.value.length > 10) {
        p.innerHTML = "Pass must be 6 to 10";
        return false
    } else {
        p.innerHTML = "";
        return true
    }
    return flag
}
//Validat Sign In
function validateSignIN() {
    let nameValid = nameValidation();
    let passValid = passValidation();
    if (nameValid && passValid) {
        let Uname = document.getElementById("nameU").value;
        let Upass = document.getElementById("passU").value;
        let data = JSON.parse(localStorage.getItem("User Data")) || [];
        let found = data.find(user => user.email == Uname && user.pass == Upass);
        console.log(found);
        if (found) {
            sessionStorage.setItem("isLoggedIn", "true");
            alert("You have Successfully Sing-In...");
            signRemove();
            cardFun();
            return true;
        } else {
            alert("Invalid User Name || Password ");
            return false;
        }
    }

}

//Sign UP Validations

//Name 
function nameValiSignUP() {
    let nameError = document.getElementById("nError");
    let n = document.getElementById("name");

    if (n.value.trim() === "") {
        nameError.innerText = "Enter User Name";
        nameError.classList.add("text-warning");
        return false;
    } else {
        nameError.innerText = "";
        nameError.classList.remove("text-warning");
        return true;
    }
}
//Password
function passValiSignUP() {
    let pass = document.getElementById("pass");
    let p = document.getElementById("pError");
    if (pass.value.trim() === "") {
        p.innerHTML = "Pass is required";
        return false
    }
    else if (pass.value.length < 6 || pass.value.length > 10) {
        p.innerHTML = "Pass must be 6 to 10";
        return false
    } else {
        p.innerHTML = "";
        return true
    }
    return flag
}
//Email
function emailValiSignUP() {
    let status = true;
    let email = document.getElementById("email").value;
    let emailerr = document.getElementById("eErr");

    if (email.length == 0) {
        status = false;
        emailerr.innerText = "email is required";
    }
    else if (!email.includes("@")) {
        status = false;
        emailerr.innerText = "invalid email";

    }
    else {
        emailerr.innerText = "";
        return status;
    }


}
//Validat Sing UP
function validateSignUP() {
    let nameValid = nameValiSignUP();
    let passValid = passValiSignUP();
    let emailValid = emailValiSignUP();

    if (nameValid && passValid && emailValid) {
        let newUser = {
            name: document.getElementById("name").value,
            pass: document.getElementById("pass").value,
            email: document.getElementById("email").value
        };

        let users = JSON.parse(localStorage.getItem("User Data")) || [];

        if (users.some(user => user.email === newUser.email)) {
            alert("Email already registered. Try Sign in.");
            return;
        }
        users.push(newUser);

        localStorage.setItem("User Data", JSON.stringify(users));

        alert("Sign-Up Successful! Please Log In.");
        signRemove();
        signIn();
        return true;
    }
    return false;
}
//Remove Function
function signRemove() {
    let sign = document.getElementById("show");
    if (sign) {
        sign.remove();
    }
}
// Home Card Add function
function cardFun() {
    let sub = document.getElementById("sub");
    let cardField = document.createElement("div");
    cardField.setAttribute("class", "container mt-3");
    cardField.setAttribute("id", "cardF");
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");
    cardField.appendChild(rowDiv);

    let data = getData();
    for (let product of data) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-md-3 p-2");

        let productField = document.createElement("div");
        productField.setAttribute("style", "box-shadow: 10px 10px 10px grey;height:auto");
        productField.setAttribute("class", "d-flex flex-column align-items-center");
      
        let productImg = document.createElement("img");
        productImg.setAttribute("src", product.thumbnail);
        productImg.setAttribute("style", "width:100%;height:150px");
        productField.appendChild(productImg);

        let productTitle = document.createElement("p");
        productTitle.setAttribute("class", "mt-2");
        productTitle.innerHTML = `<b>${product.title.substring(0, 20)}</b>`;
        productField.appendChild(productTitle);

        let price = document.createElement("h5");
        price.innerHTML = `<label class='text-success'>${product.price} Rs.</label>`;
        productField.appendChild(price);

        let btnViewMore = document.createElement("button");
        btnViewMore.innerText = "View more";
        btnViewMore.setAttribute("class", "btn btn-danger");
        btnViewMore.setAttribute("style", "width:100%");
        btnViewMore.addEventListener("click", () => {
            console.log("View More Clicked:", product);
            ViewMoreComponent(product);
            //console.log(product); 
        });
        productField.appendChild(btnViewMore);

        colDiv.appendChild(productField);
        rowDiv.appendChild(colDiv);
    }

    sub.appendChild(cardField);

}

// View More 
function ViewMoreComponent(product) {
    console.log(product);
    let sub = document.getElementById("sub");
    let cardField = document.getElementById("cardF");
    sub.removeChild(cardField);

    let container = document.createElement("div");
    container.setAttribute("class", "container mt-5");
    container.setAttribute("id", "viewMoreF");

    let row = document.createElement("div");
    row.setAttribute("class", "row");

    let fDiv = document.createElement("div");
    fDiv.setAttribute("class", "col-md-6 d-flex flex-column");
    fDiv.setAttribute("style", "height:500px;box-shadow:10px 10px 10px grey");
    let img = document.createElement("img");
    img.setAttribute("id", "mainImg");
    img.setAttribute("src", product.thumbnail);
    img.setAttribute("style", "width:100%; height:350px;")
    fDiv.appendChild(img);

    let mulitImg = document.createElement("div");
    mulitImg.setAttribute("style", "height:150px");
    mulitImg.setAttribute("class", "d-flex flex-row justify-content-around align-items-center");
    for (let image of product.images) {
        let imgObj = document.createElement("img");
        imgObj.setAttribute("style", "width:150px;height:100px cursor:pointer");
        imgObj.setAttribute("src", image);
        mulitImg.appendChild(imgObj);

        imgObj.addEventListener("click", () => {
            let mainImg = document.getElementById("mainImg");
            let temp = mainImg.src;
            mainImg.src = imgObj.src;
            imgObj.src = temp;

        });
    }
    fDiv.appendChild(mulitImg);

    row.appendChild(fDiv);

    let sDiv = document.createElement("div");
    sDiv.setAttribute("class", "col-md-6 d-flex flex-column p-2");
    sDiv.setAttribute("style", "height:500px;box-shadow:10px 10px 10px grey;");

    let detailsField = document.createElement("div");
    detailsField.setAttribute("class", "d-flex flex-column p-3");
    detailsField.setAttribute("style", "width:100%; height:500px");

    let title = document.createElement("h5");
    title.innerHTML = product.title + ` [<label class='text-primary'>${product.brand}</label>]`;
    detailsField.appendChild(title);

    let pDesc = document.createElement("p");
    pDesc.innerHTML = product.description;
    detailsField.appendChild(pDesc);

    let price = document.createElement("p");
    price.innerHTML = "<b>Price : </b>" + product.price + ` <br><b> discount : </b> <lable class='text-primary'>${product.discountPercentage}</lable>`;
    detailsField.appendChild(price);

    let warranty = document.createElement("p");
    warranty.innerHTML = "<b>Warranty  : </b> " + product.warrantyInformation;
    detailsField.appendChild(warranty);

    let shippingInfo = document.createElement("p");
    shippingInfo.innerHTML = "<b>Shipping  : </b> " + product.shippingInformation;
    detailsField.appendChild(shippingInfo);

    let availStatus = document.createElement("p");
    availStatus.innerHTML = "<b>Availibilty Status : </b> " + product.availabilityStatus;
    detailsField.appendChild(availStatus);

    let returnPolicy = document.createElement("p");
    returnPolicy.innerHTML = "<b>Return Policy : </b>" + product.returnPolicy;
    detailsField.appendChild(returnPolicy);

    let rating = document.createElement("p");
    rating.innerHTML = "<b>Rating : </b>" + product.rating;
    detailsField.appendChild(rating);

    let buyNow = document.createElement("button");
    buyNow.setAttribute("class", "btn btn-warning");
    buyNow.innerText = "Buy now";
    buyNow.setAttribute("style", "width:100%");
    detailsField.appendChild(buyNow);

    buyNow.addEventListener("click", () => {
        let isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (isLoggedIn == "true") {
            alert("Proceeding...");
            buyNowPro(product);
        } else {
            alert("Please Sign-In first...");
            signIn();
        }
    });
    let thirdField = document.createElement("div");
    thirdField.setAttribute("style", "border:1px solid black; width: 100%; height:auto; box-shadow:10px 10px 10px grey");
    thirdField.setAttribute("class", "container mt-3 p-3");
    
    let reviewTitle = document.createElement("h3");
    reviewTitle.innerText = "Customer Reviews";
    reviewTitle.setAttribute("class", "mb-3 text-center");
    thirdField.appendChild(reviewTitle);
    
    let reviewRow = document.createElement("div");
    reviewRow.setAttribute("class", "row");
    thirdField.appendChild(reviewRow);
    
    // ✅ Loop through `product.reviews` array
    for (let review of product.reviews) {
        let reviewCol = document.createElement("div");
        reviewCol.setAttribute("class", "col-md-4 p-2");
    
        let reviewCard = document.createElement("div");
        reviewCard.setAttribute("style", "box-shadow: 5px 5px 10px grey; padding: 15px; border-radius: 10px; background-color: white;");
        reviewCard.setAttribute("class", "d-flex flex-column align-items-start");
    
        let reviewerName = document.createElement("h5");
        reviewerName.innerHTML = `<b>${review.reviewerName}</b>`;
        reviewerName.setAttribute("class", "text-primary");
    
        let reviewText = document.createElement("p");
        reviewText.innerHTML = `"${review.comment}"`;
        reviewText.setAttribute("class", "mt-2");
    
        let rating = document.createElement("p");
        rating.innerHTML = `<b>Rating:</b> ⭐ ${review.rating} / 5`;
        rating.setAttribute("class", "text-warning");
    
        reviewCard.appendChild(reviewerName);
        reviewCard.appendChild(reviewText);
        reviewCard.appendChild(rating);
    
        reviewCol.appendChild(reviewCard);
        reviewRow.appendChild(reviewCol);
    }
    
    sDiv.appendChild(detailsField);

    row.appendChild(sDiv);
    container.appendChild(row);
    sub.appendChild(container);
    container.appendChild(thirdField);
}
function buyNowPro(product) {
    let sub = document.getElementById("sub");
    let viewMoreField = document.getElementById("viewMoreF");
    if (viewMoreField) {
        sub.removeChild(viewMoreField);
    }

    let bField = document.createElement("div");
    bField.setAttribute("class", "row m-5 ");
    bField.setAttribute("id", "buyNowF");


    let img = document.createElement("img");
    img.setAttribute("src", product.thumbnail);
    img.setAttribute("style", "width:50%; height:350px;");
    bField.appendChild(img);

    bField.setAttribute("style", "width:90%;height:500px; box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5), -10px -10px 15px rgba(89, 83, 83, 0.5);align-items: center; justify-content: center; ");

    let detailsField = document.createElement("div");
    detailsField.setAttribute("class", "d-flex flex-column col-md-6  p-2 ");
    bField.appendChild(detailsField);
    let orderDetails = document.createElement("p");
    orderDetails.innerHTML = `${product.title}`;
    detailsField.appendChild(orderDetails);

    let price = document.createElement("p");
    price.setAttribute("class", "")
    price.innerHTML = `<b style='font-size:20px;'>${product.price}<b>` + "Rs.";
    detailsField.appendChild(price);

    let returnPolicy = document.createElement("p");
    returnPolicy.innerHTML = "<b>Return Policy : </b>" + product.returnPolicy;
    detailsField.appendChild(returnPolicy);

    let quantityField = document.createElement("div");
    quantityField.setAttribute("style", "display: flex; align-items: center; border: 1px solid blue; width: 200px; height: 50px;");

    let addField = document.createElement("div");
    addField.innerHTML = "1";
    addField.setAttribute("style", "width: 50%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; border-right: 1px solid blue;");

    let plusField = document.createElement("button");
    plusField.innerHTML = "<b>+</b>";
    plusField.setAttribute("style", "width: 25%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 20px;  background: white; cursor: pointer;background-color:thistle ;");

    let minusField = document.createElement("button");
    minusField.innerHTML="<b>-</b>";
    minusField.setAttribute("style", "width: 25%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 20px;  background: white; cursor: pointer;background-color:thistle ;");



    let totalPriceField = document.createElement("p"); 
    // let actualPrice = parseFloat(product.price); 
    totalPriceField.innerHTML = `<b>Total Price : </b> ${product.price} Rs.`;
    detailsField.appendChild(totalPriceField);

    plusField.addEventListener("click", () => {
        let currentQ = 1*(addField.innerHTML.trim());
        currentQ += 1;
        addField.innerHTML = currentQ;


        let totalPrice = currentQ * product.price;
        totalPriceField.innerHTML = `<b>Total Price : </b> ${totalPrice.toFixed(2)} Rs.`;
    });
    minusField.addEventListener("click", () => {
        let currentQ = 1*(addField.innerHTML.trim());
        currentQ -= 1;
        addField.innerHTML = currentQ;


        let totalPrice =  product.price/currentQ;
        totalPriceField.innerHTML = `<b>Total Price : </b> ${totalPrice.toFixed(2)} Rs.`;
    });

    detailsField.appendChild(totalPriceField);
    quantityField.appendChild(minusField);
    quantityField.appendChild(addField);
    quantityField.appendChild(plusField);
    detailsField.appendChild(quantityField);


    let confirmButton = document.createElement("button");
    confirmButton.setAttribute("class", "btn btn-success m-3");
    confirmButton.innerText = "Confirm Purchase";
    confirmButton.setAttribute("style", "width:50%");
    confirmButton.addEventListener("click", () => {
        alert("Purchase Successful!");
        sub.removeChild(bField);
        cardFun();
    });

    detailsField.appendChild(confirmButton);
    sub.appendChild(bField);
}

function cardFun() {
    let sub = document.getElementById("sub");
    let cardField = document.createElement("div");
    cardField.setAttribute("class", "container mt-3");
    cardField.setAttribute("id", "cardF");
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");
    cardField.appendChild(rowDiv);

    let data = getData();
    for (let product of data) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-md-3 p-2");

        let productField = document.createElement("div");
        productField.setAttribute("style", "box-shadow: 10px 10px 10px grey;height:auto");
        productField.setAttribute("class", "d-flex flex-column align-items-center");
      
        let productImg = document.createElement("img");
        productImg.setAttribute("src", product.thumbnail);
        productImg.setAttribute("style", "width:100%;height:150px");
        productField.appendChild(productImg);

        let productTitle = document.createElement("p");
        productTitle.setAttribute("class", "mt-2");
        productTitle.innerHTML = `<b>${product.title.substring(0, 20)}</b>`;
        productField.appendChild(productTitle);

        let price = document.createElement("h5");
        price.innerHTML = `<label class='text-success'>${product.price} Rs.</label>`;
        productField.appendChild(price);

        let btnViewMore = document.createElement("button");
        btnViewMore.innerText = "View more";
        btnViewMore.setAttribute("class", "btn btn-danger");
        btnViewMore.setAttribute("style", "width:100%");
        btnViewMore.addEventListener("click", () => {
            console.log("View More Clicked:", product);
            ViewMoreComponent(product);
            //console.log(product); 
        });
        productField.appendChild(btnViewMore);

        colDiv.appendChild(productField);
        rowDiv.appendChild(colDiv);
    }

    sub.appendChild(cardField);

}

function recipesData(){
    let rdata = [{"id":1,"name":"Classic Margherita Pizza","ingredients":["Pizza dough","Tomato sauce","Fresh mozzarella cheese","Fresh basil leaves","Olive oil","Salt and pepper to taste"],"instructions":["Preheat the oven to 475°F (245°C).","Roll out the pizza dough and spread tomato sauce evenly.","Top with slices of fresh mozzarella and fresh basil leaves.","Drizzle with olive oil and season with salt and pepper.","Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.","Slice and serve hot."],"prepTimeMinutes":20,"cookTimeMinutes":15,"servings":4,"difficulty":"Easy","cuisine":"Italian","caloriesPerServing":300,"tags":["Pizza","Italian"],"userId":166,"image":"https://cdn.dummyjson.com/recipe-images/1.webp","rating":4.6,"reviewCount":98,"mealType":["Dinner"]},{"id":2,"name":"Vegetarian Stir-Fry","ingredients":["Tofu, cubed","Broccoli florets","Carrots, sliced","Bell peppers, sliced","Soy sauce","Ginger, minced","Garlic, minced","Sesame oil","Cooked rice for serving"],"instructions":["In a wok, heat sesame oil over medium-high heat.","Add minced ginger and garlic, sauté until fragrant.","Add cubed tofu and stir-fry until golden brown.","Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.","Pour soy sauce over the stir-fry and toss to combine.","Serve over cooked rice."],"prepTimeMinutes":15,"cookTimeMinutes":20,"servings":3,"difficulty":"Medium","cuisine":"Asian","caloriesPerServing":250,"tags":["Vegetarian","Stir-fry","Asian"],"userId":143,"image":"https://cdn.dummyjson.com/recipe-images/2.webp","rating":4.7,"reviewCount":26,"mealType":["Lunch"]},{"id":3,"name":"Chocolate Chip Cookies","ingredients":["All-purpose flour","Butter, softened","Brown sugar","White sugar","Eggs","Vanilla extract","Baking soda","Salt","Chocolate chips"],"instructions":["Preheat the oven to 350°F (175°C).","In a bowl, cream together softened butter, brown sugar, and white sugar.","Beat in eggs one at a time, then stir in vanilla extract.","Combine flour, baking soda, and salt. Gradually add to the wet ingredients.","Fold in chocolate chips.","Drop rounded tablespoons of dough onto ungreased baking sheets.","Bake for 10-12 minutes or until edges are golden brown.","Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."],"prepTimeMinutes":15,"cookTimeMinutes":10,"servings":24,"difficulty":"Easy","cuisine":"American","caloriesPerServing":150,"tags":["Cookies","Dessert","Baking"],"userId":34,"image":"https://cdn.dummyjson.com/recipe-images/3.webp","rating":4.9,"reviewCount":13,"mealType":["Snack","Dessert"]},{"id":4,"name":"Chicken Alfredo Pasta","ingredients":["Fettuccine pasta","Chicken breast, sliced","Heavy cream","Parmesan cheese, grated","Garlic, minced","Butter","Salt and pepper to taste","Fresh parsley for garnish"],"instructions":["Cook fettuccine pasta according to package instructions.","In a pan, sauté sliced chicken in butter until fully cooked.","Add minced garlic and cook until fragrant.","Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.","Season with salt and pepper to taste.","Combine the Alfredo sauce with cooked pasta.","Garnish with fresh parsley before serving."],"prepTimeMinutes":15,"cookTimeMinutes":20,"servings":4,"difficulty":"Medium","cuisine":"Italian","caloriesPerServing":500,"tags":["Pasta","Chicken"],"userId":136,"image":"https://cdn.dummyjson.com/recipe-images/4.webp","rating":4.9,"reviewCount":82,"mealType":["Lunch","Dinner"]},{"id":5,"name":"Mango Salsa Chicken","ingredients":["Chicken thighs","Mango, diced","Red onion, finely chopped","Cilantro, chopped","Lime juice","Jalapeño, minced","Salt and pepper to taste","Cooked rice for serving"],"instructions":["Season chicken thighs with salt and pepper.","Grill or bake chicken until fully cooked.","In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.","Dice the cooked chicken and mix it with the mango salsa.","Serve over cooked rice."],"prepTimeMinutes":15,"cookTimeMinutes":25,"servings":3,"difficulty":"Easy","cuisine":"Mexican","caloriesPerServing":380,"tags":["Chicken","Salsa"],"userId":26,"image":"https://cdn.dummyjson.com/recipe-images/5.webp","rating":4.9,"reviewCount":63,"mealType":["Dinner"]},{"id":6,"name":"Quinoa Salad with Avocado","ingredients":["Quinoa, cooked","Avocado, diced","Cherry tomatoes, halved","Cucumber, diced","Red bell pepper, diced","Feta cheese, crumbled","Lemon vinaigrette dressing","Salt and pepper to taste"],"instructions":["In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.","Drizzle with lemon vinaigrette dressing and toss to combine.","Season with salt and pepper to taste.","Chill in the refrigerator before serving."],"prepTimeMinutes":20,"cookTimeMinutes":15,"servings":4,"difficulty":"Easy","cuisine":"Mediterranean","caloriesPerServing":280,"tags":["Salad","Quinoa"],"userId":197,"image":"https://cdn.dummyjson.com/recipe-images/6.webp","rating":4.4,"reviewCount":59,"mealType":["Lunch","Side Dish"]},{"id":7,"name":"Tomato Basil Bruschetta","ingredients":["Baguette, sliced","Tomatoes, diced","Fresh basil, chopped","Garlic cloves, minced","Balsamic glaze","Olive oil","Salt and pepper to taste"],"instructions":["Preheat the oven to 375°F (190°C).","Place baguette slices on a baking sheet and toast in the oven until golden brown.","In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.","Season with salt and pepper to taste.","Top each toasted baguette slice with the tomato-basil mixture.","Drizzle with balsamic glaze before serving."],"prepTimeMinutes":15,"cookTimeMinutes":10,"servings":6,"difficulty":"Easy","cuisine":"Italian","caloriesPerServing":120,"tags":["Bruschetta","Italian"],"userId":137,"image":"https://cdn.dummyjson.com/recipe-images/7.webp","rating":4.7,"reviewCount":95,"mealType":["Appetizer"]},{"id":8,"name":"Beef and Broccoli Stir-Fry","ingredients":["Beef sirloin, thinly sliced","Broccoli florets","Soy sauce","Oyster sauce","Sesame oil","Garlic, minced","Ginger, minced","Cornstarch","Cooked white rice for serving"],"instructions":["In a bowl, mix soy sauce, oyster sauce, sesame oil, and cornstarch to create the sauce.","In a wok, stir-fry thinly sliced beef until browned. Remove from the wok.","Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok.","Add the cooked beef back to the wok and pour the sauce over the mixture.","Stir until everything is coated and heated through.","Serve over cooked white rice."],"prepTimeMinutes":20,"cookTimeMinutes":15,"servings":4,"difficulty":"Medium","cuisine":"Asian","caloriesPerServing":380,"tags":["Beef","Stir-fry","Asian"],"userId":18,"image":"https://cdn.dummyjson.com/recipe-images/8.webp","rating":4.7,"reviewCount":58,"mealType":["Dinner"]},{"id":9,"name":"Caprese Salad","ingredients":["Tomatoes, sliced","Fresh mozzarella cheese, sliced","Fresh basil leaves","Balsamic glaze","Extra virgin olive oil","Salt and pepper to taste"],"instructions":["Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.","Tuck fresh basil leaves between the slices.","Drizzle with balsamic glaze and extra virgin olive oil.","Season with salt and pepper to taste.","Serve immediately as a refreshing salad."],"prepTimeMinutes":10,"cookTimeMinutes":0,"servings":2,"difficulty":"Easy","cuisine":"Italian","caloriesPerServing":200,"tags":["Salad","Caprese"],"userId":128,"image":"https://cdn.dummyjson.com/recipe-images/9.webp","rating":4.6,"reviewCount":82,"mealType":["Lunch"]},{"id":10,"name":"Shrimp Scampi Pasta","ingredients":["Linguine pasta","Shrimp, peeled and deveined","Garlic, minced","White wine","Lemon juice","Red pepper flakes","Fresh parsley, chopped","Salt and pepper to taste"],"instructions":["Cook linguine pasta according to package instructions.","In a skillet, sauté minced garlic in olive oil until fragrant.","Add shrimp and cook until pink and opaque.","Pour in white wine and lemon juice. Simmer until the sauce slightly thickens.","Season with red pepper flakes, salt, and pepper.","Toss cooked linguine in the shrimp scampi sauce.","Garnish with chopped fresh parsley before serving."],"prepTimeMinutes":15,"cookTimeMinutes":20,"servings":3,"difficulty":"Medium","cuisine":"Italian","caloriesPerServing":400,"tags":["Pasta","Shrimp"],"userId":114,"image":"https://cdn.dummyjson.com/recipe-images/10.webp","rating":4.3,"reviewCount":5,"mealType":["Dinner"]},{"id":11,"name":"Chicken Biryani","ingredients":["Basmati rice","Chicken, cut into pieces","Onions, thinly sliced","Tomatoes, chopped","Yogurt","Ginger-garlic paste","Biryani masala","Green chilies, sliced","Fresh coriander leaves","Mint leaves","Ghee","Salt to taste"],"instructions":["Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt.","In a pot, sauté sliced onions until golden brown. Remove half for later use.","Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot.","Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions.","Cover and cook on low heat until the rice is fully cooked and aromatic.","Serve hot, garnished with additional coriander and mint leaves."],"prepTimeMinutes":30,"cookTimeMinutes":45,"servings":6,"difficulty":"Medium","cuisine":"Pakistani","caloriesPerServing":550,"tags":["Biryani","Chicken","Main course","Indian","Pakistani","Asian"],"userId":133,"image":"https://cdn.dummyjson.com/recipe-images/11.webp","rating":5,"reviewCount":32,"mealType":["Lunch","Dinner"]},{"id":12,"name":"Chicken Karahi","ingredients":["Chicken, cut into pieces","Tomatoes, chopped","Green chilies, sliced","Ginger, julienned","Garlic, minced","Coriander powder","Cumin powder","Red chili powder","Garam masala","Cooking oil","Fresh coriander leaves","Salt to taste"],"instructions":["In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.","Add chicken pieces and cook until browned on all sides.","Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.","Cover and simmer until the chicken is tender and the oil separates from the masala.","Garnish with fresh coriander leaves and serve hot with naan or rice."],"prepTimeMinutes":20,"cookTimeMinutes":30,"servings":4,"difficulty":"Easy","cuisine":"Pakistani","caloriesPerServing":420,"tags":["Chicken","Karahi","Main course","Indian","Pakistani","Asian"],"userId":49,"image":"https://cdn.dummyjson.com/recipe-images/12.webp","rating":4.8,"reviewCount":68,"mealType":["Lunch","Dinner"]},{"id":13,"name":"Aloo Keema","ingredients":["Ground beef","Potatoes, peeled and diced","Onions, finely chopped","Tomatoes, chopped","Ginger-garlic paste","Cumin powder","Coriander powder","Turmeric powder","Red chili powder","Cooking oil","Fresh coriander leaves","Salt to taste"],"instructions":["In a pan, heat cooking oil and sauté chopped onions until golden brown.","Add ginger-garlic paste and sauté until fragrant.","Add ground beef and cook until browned. Drain excess oil if needed.","Add diced potatoes, chopped tomatoes, and spices. Mix well.","Cover and simmer until the potatoes are tender and the masala is well-cooked.","Garnish with fresh coriander leaves and serve hot with naan or rice."],"prepTimeMinutes":25,"cookTimeMinutes":35,"servings":5,"difficulty":"Medium","cuisine":"Pakistani","caloriesPerServing":380,"tags":["Keema","Potatoes","Main course","Pakistani","Asian"],"userId":152,"image":"https://cdn.dummyjson.com/recipe-images/13.webp","rating":4.6,"reviewCount":53,"mealType":["Lunch","Dinner"]},{"id":14,"name":"Chapli Kebabs","ingredients":["Ground beef","Onions, finely chopped","Tomatoes, finely chopped","Green chilies, chopped","Coriander leaves, chopped","Pomegranate seeds","Ginger-garlic paste","Cumin powder","Coriander powder","Red chili powder","Egg","Cooking oil","Salt to taste"],"instructions":["In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds.","Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well.","Add an egg to bind the mixture and form into round flat kebabs.","Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides.","Serve hot with naan or mint chutney."],"prepTimeMinutes":30,"cookTimeMinutes":20,"servings":4,"difficulty":"Medium","cuisine":"Pakistani","caloriesPerServing":320,"tags":["Kebabs","Beef","Indian","Pakistani","Asian"],"userId":152,"image":"https://cdn.dummyjson.com/recipe-images/14.webp","rating":4.7,"reviewCount":98,"mealType":["Lunch","Dinner","Snacks"]},{"id":15,"name":"Saag (Spinach) with Makki di Roti","ingredients":["Mustard greens, washed and chopped","Spinach, washed and chopped","Cornmeal (makki ka atta)","Onions, finely chopped","Green chilies, chopped","Ginger, grated","Ghee","Salt to taste"],"instructions":["Boil mustard greens and spinach until tender. Drain and blend into a coarse paste.","In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown.","Add the greens paste and cook until it thickens.","Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads).","Cook the rotis on a griddle until golden brown.","Serve hot saag with makki di roti and a dollop of ghee."],"prepTimeMinutes":40,"cookTimeMinutes":30,"servings":3,"difficulty":"Medium","cuisine":"Pakistani","caloriesPerServing":280,"tags":["Saag","Roti","Main course","Indian","Pakistani","Asian"],"userId":43,"image":"https://cdn.dummyjson.com/recipe-images/15.webp","rating":4.3,"reviewCount":86,"mealType":["Breakfast","Lunch","Dinner"]},{"id":16,"name":"Japanese Ramen Soup","ingredients":["Ramen noodles","Chicken broth","Soy sauce","Mirin","Sesame oil","Shiitake mushrooms, sliced","Bok choy, chopped","Green onions, sliced","Soft-boiled eggs","Grilled chicken slices","Norwegian seaweed (nori)"],"instructions":["Cook ramen noodles according to package instructions and set aside.","In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer.","Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender.","Divide the cooked noodles into serving bowls and ladle the hot broth over them.","Top with green onions, soft-boiled eggs, grilled chicken slices, and nori.","Serve hot and enjoy the authentic Japanese ramen!"],"prepTimeMinutes":20,"cookTimeMinutes":25,"servings":2,"difficulty":"Medium","cuisine":"Japanese","caloriesPerServing":480,"tags":["Ramen","Japanese","Soup","Asian"],"userId":85,"image":"https://cdn.dummyjson.com/recipe-images/16.webp","rating":4.9,"reviewCount":38,"mealType":["Dinner"]},{"id":17,"name":"Moroccan Chickpea Tagine","ingredients":["Chickpeas, cooked","Tomatoes, chopped","Carrots, diced","Onions, finely chopped","Garlic, minced","Cumin","Coriander","Cinnamon","Paprika","Vegetable broth","Olives","Fresh cilantro, chopped"],"instructions":["In a tagine or large pot, sauté chopped onions and minced garlic until softened.","Add diced carrots, chopped tomatoes, and cooked chickpeas.","Season with cumin, coriander, cinnamon, and paprika. Stir to coat.","Pour in vegetable broth and bring to a simmer. Cook until carrots are tender.","Stir in olives and garnish with fresh cilantro before serving.","Serve this flavorful Moroccan dish with couscous or crusty bread."],"prepTimeMinutes":15,"cookTimeMinutes":30,"servings":4,"difficulty":"Easy","cuisine":"Moroccan","caloriesPerServing":320,"tags":["Tagine","Chickpea","Moroccan"],"userId":207,"image":"https://cdn.dummyjson.com/recipe-images/17.webp","rating":4.5,"reviewCount":50,"mealType":["Dinner"]},{"id":18,"name":"Korean Bibimbap","ingredients":["Cooked white rice","Beef bulgogi (marinated and grilled beef slices)","Carrots, julienned and sautéed","Spinach, blanched and seasoned","Zucchini, sliced and grilled","Bean sprouts, blanched","Fried egg","Gochujang (Korean red pepper paste)","Sesame oil","Toasted sesame seeds"],"instructions":["Arrange cooked white rice in a bowl.","Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts.","Place a fried egg on top and drizzle with gochujang and sesame oil.","Sprinkle with toasted sesame seeds before serving.","Mix everything together before enjoying this delicious Korean bibimbap!","Feel free to customize with additional vegetables or protein."],"prepTimeMinutes":30,"cookTimeMinutes":20,"servings":2,"difficulty":"Medium","cuisine":"Korean","caloriesPerServing":550,"tags":["Bibimbap","Korean","Rice"],"userId":121,"image":"https://cdn.dummyjson.com/recipe-images/18.webp","rating":4.9,"reviewCount":56,"mealType":["Dinner"]},{"id":19,"name":"Greek Moussaka","ingredients":["Eggplants, sliced","Ground lamb or beef","Onions, finely chopped","Garlic, minced","Tomatoes, crushed","Red wine","Cinnamon","Allspice","Nutmeg","Olive oil","Milk","Flour","Parmesan cheese","Egg yolks"],"instructions":["Preheat oven to 375°F (190°C).","Sauté sliced eggplants in olive oil until browned. Set aside.","In the same pan, cook chopped onions and minced garlic until softened.","Add ground lamb or beef and brown. Stir in crushed tomatoes, red wine, and spices.","In a separate saucepan, make béchamel sauce: melt butter, whisk in flour, add milk, and cook until thickened.","Remove from heat and stir in Parmesan cheese and egg yolks.","In a baking dish, layer eggplants and meat mixture. Top with béchamel sauce.","Bake for 40-45 minutes until golden brown. Let it cool before slicing.","Serve slices of moussaka warm and enjoy this Greek classic!"],"prepTimeMinutes":45,"cookTimeMinutes":45,"servings":6,"difficulty":"Medium","cuisine":"Greek","caloriesPerServing":420,"tags":["Moussaka","Greek"],"userId":173,"image":"https://cdn.dummyjson.com/recipe-images/19.webp","rating":4.3,"reviewCount":26,"mealType":["Dinner"]},{"id":20,"name":"Butter Chicken (Murgh Makhani)","ingredients":["Chicken thighs, boneless and skinless","Yogurt","Ginger-garlic paste","Garam masala","Kashmiri red chili powder","Tomato puree","Butter","Heavy cream","Kasuri methi (dried fenugreek leaves)","Sugar","Salt to taste"],"instructions":["Marinate chicken thighs in a mixture of yogurt, ginger-garlic paste, garam masala, and Kashmiri red chili powder.","In a pan, melt butter and sauté the marinated chicken until browned.","Add tomato puree and cook until the oil separates. Stir in heavy cream.","Sprinkle kasuri methi, sugar, and salt. Simmer until the chicken is fully cooked.","Serve this creamy butter chicken over rice or with naan for an authentic Pakistani/Indian experience."],"prepTimeMinutes":30,"cookTimeMinutes":25,"servings":4,"difficulty":"Medium","cuisine":"Pakistani","caloriesPerServing":480,"tags":["Butter chicken","Curry","Indian","Pakistani","Asian"],"userId":138,"image":"https://cdn.dummyjson.com/recipe-images/20.webp","rating":4.5,"reviewCount":44,"mealType":["Dinner"]},{"id":21,"name":"Thai Green Curry","ingredients":["Chicken thighs, boneless and skinless","Green curry paste","Coconut milk","Fish sauce","Sugar","Eggplant, sliced","Bell peppers, sliced","Basil leaves","Jasmine rice for serving"],"instructions":["In a pot, simmer green curry paste in coconut milk.","Add chicken, fish sauce, and sugar. Cook until chicken is tender.","Stir in sliced eggplant and bell peppers. Simmer until vegetables are cooked.","Garnish with fresh basil leaves.","Serve hot over jasmine rice and enjoy this Thai classic!"],"prepTimeMinutes":20,"cookTimeMinutes":30,"servings":4,"difficulty":"Medium","cuisine":"Thai","caloriesPerServing":480,"tags":["Curry","Thai"],"userId":153,"image":"https://cdn.dummyjson.com/recipe-images/21.webp","rating":4.2,"reviewCount":18,"mealType":["Dinner"]},{"id":22,"name":"Mango Lassi","ingredients":["Ripe mango, peeled and diced","Yogurt","Milk","Honey","Cardamom powder","Ice cubes"],"instructions":["In a blender, combine diced mango, yogurt, milk, honey, and cardamom powder.","Blend until smooth and creamy.","Add ice cubes and blend again until the lassi is chilled.","Pour into glasses and garnish with a sprinkle of cardamom.","Enjoy this refreshing Mango Lassi!"],"prepTimeMinutes":10,"cookTimeMinutes":0,"servings":2,"difficulty":"Easy","cuisine":"Indian","caloriesPerServing":180,"tags":["Lassi","Mango","Indian","Pakistani","Asian"],"userId":76,"image":"https://cdn.dummyjson.com/recipe-images/22.webp","rating":4.7,"reviewCount":15,"mealType":["Beverage"]},{"id":23,"name":"Italian Tiramisu","ingredients":["Espresso, brewed and cooled","Ladyfinger cookies","Mascarpone cheese","Heavy cream","Sugar","Cocoa powder"],"instructions":["In a bowl, whip heavy cream until stiff peaks form.","In another bowl, mix mascarpone cheese and sugar until smooth.","Gently fold the whipped cream into the mascarpone mixture.","Dip ladyfinger cookies into brewed espresso and layer them in a serving dish.","Spread a layer of the mascarpone mixture over the cookies.","Repeat layers and finish with a dusting of cocoa powder.","Chill in the refrigerator for a few hours before serving.","Indulge in the decadence of this classic Italian Tiramisu!"],"prepTimeMinutes":30,"cookTimeMinutes":0,"servings":6,"difficulty":"Medium","cuisine":"Italian","caloriesPerServing":350,"tags":["Tiramisu","Italian"],"userId":130,"image":"https://cdn.dummyjson.com/recipe-images/23.webp","rating":4.6,"reviewCount":0,"mealType":["Dessert"]},{"id":24,"name":"Turkish Kebabs","ingredients":["Ground lamb or beef","Onions, grated","Garlic, minced","Parsley, finely chopped","Cumin","Coriander","Red pepper flakes","Salt and pepper to taste","Flatbread for serving","Tahini sauce"],"instructions":["In a bowl, mix ground meat, grated onions, minced garlic, chopped parsley, and spices.","Form the mixture into kebab shapes and grill until fully cooked.","Serve the kebabs on flatbread with a drizzle of tahini sauce.","Enjoy these flavorful Turkish Kebabs with your favorite sides."],"prepTimeMinutes":25,"cookTimeMinutes":15,"servings":4,"difficulty":"Easy","cuisine":"Turkish","caloriesPerServing":280,"tags":["Kebabs","Turkish","Grilling"],"userId":26,"image":"https://cdn.dummyjson.com/recipe-images/24.webp","rating":4.6,"reviewCount":78,"mealType":["Dinner"]},{"id":25,"name":"Blueberry Banana Smoothie","ingredients":["Blueberries, fresh or frozen","Banana, peeled and sliced","Greek yogurt","Almond milk","Honey","Chia seeds (optional)"],"instructions":["In a blender, combine blueberries, banana, Greek yogurt, almond milk, and honey.","Blend until smooth and creamy.","Add chia seeds for extra nutrition and blend briefly.","Pour into a glass and enjoy this nutritious Blueberry Banana Smoothie!"],"prepTimeMinutes":10,"cookTimeMinutes":0,"servings":1,"difficulty":"Easy","cuisine":"Smoothie","caloriesPerServing":220,"tags":["Smoothie","Blueberry","Banana"],"userId":16,"image":"https://cdn.dummyjson.com/recipe-images/25.webp","rating":4.8,"reviewCount":30,"mealType":["Breakfast","Beverage"]},{"id":26,"name":"Mexican Street Corn (Elote)","ingredients":["Corn on the cob","Mayonnaise","Cotija cheese, crumbled","Chili powder","Lime wedges"],"instructions":["Grill or roast corn on the cob until kernels are charred.","Brush each cob with mayonnaise, then sprinkle with crumbled Cotija cheese and chili powder.","Serve with lime wedges for squeezing over the top.","Enjoy this delicious and flavorful Mexican Street Corn!"],"prepTimeMinutes":15,"cookTimeMinutes":15,"servings":4,"difficulty":"Easy","cuisine":"Mexican","caloriesPerServing":180,"tags":["Elote","Mexican","Street food"],"userId":93,"image":"https://cdn.dummyjson.com/recipe-images/26.webp","rating":4.6,"reviewCount":2,"mealType":["Snack","Side Dish"]},{"id":27,"name":"Russian Borscht","ingredients":["Beets, peeled and shredded","Cabbage, shredded","Potatoes, diced","Onions, finely chopped","Carrots, grated","Tomato paste","Beef or vegetable broth","Garlic, minced","Bay leaves","Sour cream for serving"],"instructions":["In a pot, sauté chopped onions and garlic until softened.","Add shredded beets, cabbage, diced potatoes, grated carrots, and tomato paste.","Pour in broth and add bay leaves. Simmer until vegetables are tender.","Serve hot with a dollop of sour cream on top.","Enjoy the hearty and comforting flavors of Russian Borscht!"],"prepTimeMinutes":30,"cookTimeMinutes":40,"servings":6,"difficulty":"Medium","cuisine":"Russian","caloriesPerServing":220,"tags":["Borscht","Russian","Soup"],"userId":1,"image":"https://cdn.dummyjson.com/recipe-images/27.webp","rating":4.3,"reviewCount":39,"mealType":["Dinner"]},{"id":28,"name":"South Indian Masala Dosa","ingredients":["Dosa batter (fermented rice and urad dal batter)","Potatoes, boiled and mashed","Onions, finely chopped","Mustard seeds","Cumin seeds","Curry leaves","Turmeric powder","Green chilies, chopped","Ghee","Coconut chutney for serving"],"instructions":["In a pan, heat ghee and add mustard seeds, cumin seeds, and curry leaves.","Add chopped onions, green chilies, and turmeric powder. Sauté until onions are golden brown.","Mix in boiled and mashed potatoes. Cook until well combined and seasoned.","Spread dosa batter on a hot griddle to make thin pancakes.","Place a spoonful of the potato mixture in the center, fold, and serve hot.","Pair with coconut chutney for a delicious South Indian meal."],"prepTimeMinutes":40,"cookTimeMinutes":20,"servings":4,"difficulty":"Medium","cuisine":"Indian","caloriesPerServing":320,"tags":["Dosa","Indian","Asian"],"userId":138,"image":"https://cdn.dummyjson.com/recipe-images/28.webp","rating":4.4,"reviewCount":96,"mealType":["Breakfast"]},{"id":29,"name":"Lebanese Falafel Wrap","ingredients":["Falafel balls","Whole wheat or regular wraps","Tomatoes, diced","Cucumbers, sliced","Red onions, thinly sliced","Lettuce, shredded","Tahini sauce","Fresh parsley, chopped"],"instructions":["Warm falafel balls according to package instructions.","Place a generous serving of falafel in the center of each wrap.","Top with diced tomatoes, sliced cucumbers, red onions, shredded lettuce, and fresh parsley.","Drizzle with tahini sauce and wrap tightly.","Enjoy this Lebanese Falafel Wrap filled with fresh and flavorful ingredients!"],"prepTimeMinutes":15,"cookTimeMinutes":10,"servings":2,"difficulty":"Easy","cuisine":"Lebanese","caloriesPerServing":400,"tags":["Falafel","Lebanese","Wrap"],"userId":110,"image":"https://cdn.dummyjson.com/recipe-images/29.webp","rating":4.7,"reviewCount":84,"mealType":["Lunch"]},{"id":30,"name":"Brazilian Caipirinha","ingredients":["Cachaça (Brazilian sugarcane spirit)","Lime, cut into wedges","Granulated sugar","Ice cubes"],"instructions":["In a glass, muddle lime wedges with granulated sugar to release the juice.","Fill the glass with ice cubes.","Pour cachaça over the ice and stir well.","Sip and enjoy the refreshing taste of the Brazilian Caipirinha!","Adjust sugar and lime to suit your taste preferences."],"prepTimeMinutes":5,"cookTimeMinutes":0,"servings":1,"difficulty":"Easy","cuisine":"Brazilian","caloriesPerServing":150,"tags":["Caipirinha","Brazilian","Cocktail"],"userId":134,"image":"https://cdn.dummyjson.com/recipe-images/30.webp","rating":4.4,"reviewCount":55,"mealType":["Beverage"]}];
    
    localStorage.setItem("product-list", JSON.stringify(rdata));
}

// Set Data in local storage
function setData() {
    let data = [{ "id": 1, "title": "Essence Mascara Lash Princess", "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", "category": "beauty", "price": 9.99, "discountPercentage": 7.17, "rating": 4.94, "stock": 5, "tags": ["beauty", "mascara"], "brand": "Essence", "sku": "RCH45Q1A", "weight": 2, "dimensions": { "width": 23.17, "height": 14.43, "depth": 28.01 }, "warrantyInformation": "1 month warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "Low Stock", "reviews": [{ "rating": 2, "comment": "Very unhappy with my purchase!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "John Doe", "reviewerEmail": "john.doe@x.dummyjson.com" }, { "rating": 2, "comment": "Not as described!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Nolan Gonzalez", "reviewerEmail": "nolan.gonzalez@x.dummyjson.com" }, { "rating": 5, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Scarlett Wright", "reviewerEmail": "scarlett.wright@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 24, "meta": { "createdAt": "2024-05-23T08:56:21.618Z", "updatedAt": "2024-05-23T08:56:21.618Z", "barcode": "9164035109868", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" }, { "id": 2, "title": "Eyeshadow Palette with Mirror", "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.", "category": "beauty", "price": 19.99, "discountPercentage": 5.5, "rating": 3.28, "stock": 44, "tags": ["beauty", "eyeshadow"], "brand": "Glamour Beauty", "sku": "MVCFH27F", "weight": 3, "dimensions": { "width": 12.42, "height": 8.63, "depth": 29.13 }, "warrantyInformation": "1 year warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Liam Garcia", "reviewerEmail": "liam.garcia@x.dummyjson.com" }, { "rating": 1, "comment": "Very disappointed!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Nora Russell", "reviewerEmail": "nora.russell@x.dummyjson.com" }, { "rating": 5, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Elena Baker", "reviewerEmail": "elena.baker@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 32, "meta": { "createdAt": "2024-05-23T08:56:21.618Z", "updatedAt": "2024-05-23T08:56:21.618Z", "barcode": "2817839095220", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png" }, { "id": 3, "title": "Powder Canister", "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.", "category": "beauty", "price": 14.99, "discountPercentage": 18.14, "rating": 3.82, "stock": 59, "tags": ["beauty", "face powder"], "brand": "Velvet Touch", "sku": "9EN8WLT2", "weight": 8, "dimensions": { "width": 24.16, "height": 10.7, "depth": 11.07 }, "warrantyInformation": "2 year warranty", "shippingInformation": "Ships in 1-2 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Ethan Thompson", "reviewerEmail": "ethan.thompson@x.dummyjson.com" }, { "rating": 4, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Levi Hicks", "reviewerEmail": "levi.hicks@x.dummyjson.com" }, { "rating": 5, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.618Z", "reviewerName": "Hazel Gardner", "reviewerEmail": "hazel.gardner@x.dummyjson.com" }], "returnPolicy": "60 days return policy", "minimumOrderQuantity": 25, "meta": { "createdAt": "2024-05-23T08:56:21.618Z", "updatedAt": "2024-05-23T08:56:21.618Z", "barcode": "0516267971277", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png" }, { "id": 4, "title": "Red Lipstick", "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.", "category": "beauty", "price": 12.99, "discountPercentage": 19.03, "rating": 2.51, "stock": 68, "tags": ["beauty", "lipstick"], "brand": "Chic Cosmetics", "sku": "O5IF1NTA", "weight": 5, "dimensions": { "width": 14.37, "height": 13.94, "depth": 14.6 }, "warrantyInformation": "Lifetime warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Great product!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Leo Rivera", "reviewerEmail": "leo.rivera@x.dummyjson.com" }, { "rating": 4, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Oscar Powers", "reviewerEmail": "oscar.powers@x.dummyjson.com" }, { "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Carter Rivera", "reviewerEmail": "carter.rivera@x.dummyjson.com" }], "returnPolicy": "90 days return policy", "minimumOrderQuantity": 6, "meta": { "createdAt": "2024-05-23T08:56:21.619Z", "updatedAt": "2024-05-23T08:56:21.619Z", "barcode": "9444582199406", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png" }, { "id": 5, "title": "Red Nail Polish", "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.", "category": "beauty", "price": 8.99, "discountPercentage": 2.46, "rating": 3.91, "stock": 71, "tags": ["beauty", "nail polish"], "brand": "Nail Couture", "sku": "YUIIIP4W", "weight": 9, "dimensions": { "width": 8.11, "height": 10.89, "depth": 29.06 }, "warrantyInformation": "1 year warranty", "shippingInformation": "Ships in 1 week", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Leo Rivera", "reviewerEmail": "leo.rivera@x.dummyjson.com" }, { "rating": 5, "comment": "Great product!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Evan Reed", "reviewerEmail": "evan.reed@x.dummyjson.com" }, { "rating": 4, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Evelyn Sanchez", "reviewerEmail": "evelyn.sanchez@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 46, "meta": { "createdAt": "2024-05-23T08:56:21.619Z", "updatedAt": "2024-05-23T08:56:21.619Z", "barcode": "3212847902461", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png" }, { "id": 6, "title": "Calvin Klein CK One", "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.", "category": "fragrances", "price": 49.99, "discountPercentage": 0.32, "rating": 4.85, "stock": 17, "tags": ["fragrances", "perfumes"], "brand": "Calvin Klein", "sku": "DZM2JQZE", "weight": 5, "dimensions": { "width": 11.53, "height": 14.44, "depth": 6.81 }, "warrantyInformation": "5 year warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Sophia Brown", "reviewerEmail": "sophia.brown@x.dummyjson.com" }, { "rating": 3, "comment": "Very disappointed!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Madison Collins", "reviewerEmail": "madison.collins@x.dummyjson.com" }, { "rating": 1, "comment": "Poor quality!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Maya Reed", "reviewerEmail": "maya.reed@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 20, "meta": { "createdAt": "2024-05-23T08:56:21.619Z", "updatedAt": "2024-05-23T08:56:21.619Z", "barcode": "2210136215089", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png", "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png", "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png" }, { "id": 7, "title": "Chanel Coco Noir Eau De", "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.", "category": "fragrances", "price": 129.99, "discountPercentage": 18.64, "rating": 2.76, "stock": 41, "tags": ["fragrances", "perfumes"], "brand": "Chanel", "sku": "K71HBCGS", "weight": 4, "dimensions": { "width": 21.27, "height": 28, "depth": 11.89 }, "warrantyInformation": "1 week warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 1, "comment": "Disappointing product!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Lincoln Kelly", "reviewerEmail": "lincoln.kelly@x.dummyjson.com" }, { "rating": 4, "comment": "Great product!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Lincoln Kelly", "reviewerEmail": "lincoln.kelly@x.dummyjson.com" }, { "rating": 4, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Lucas Allen", "reviewerEmail": "lucas.allen@x.dummyjson.com" }], "returnPolicy": "60 days return policy", "minimumOrderQuantity": 5, "meta": { "createdAt": "2024-05-23T08:56:21.619Z", "updatedAt": "2024-05-23T08:56:21.619Z", "barcode": "1435582999795", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png", "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png", "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png" }, { "id": 8, "title": "Dior J'adore", "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.", "category": "fragrances", "price": 89.99, "discountPercentage": 17.44, "rating": 3.31, "stock": 91, "tags": ["fragrances", "perfumes"], "brand": "Dior", "sku": "E70NB03B", "weight": 10, "dimensions": { "width": 21.51, "height": 7, "depth": 26.51 }, "warrantyInformation": "Lifetime warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Zoe Nicholson", "reviewerEmail": "zoe.nicholson@x.dummyjson.com" }, { "rating": 4, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Addison Wright", "reviewerEmail": "addison.wright@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Clara Berry", "reviewerEmail": "clara.berry@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 8, "meta": { "createdAt": "2024-05-23T08:56:21.619Z", "updatedAt": "2024-05-23T08:56:21.619Z", "barcode": "0887083199279", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png", "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png", "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png" }, { "id": 9, "title": "Dolce Shine Eau de", "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.", "category": "fragrances", "price": 69.99, "discountPercentage": 11.47, "rating": 2.68, "stock": 3, "tags": ["fragrances", "perfumes"], "brand": "Dolce & Gabbana", "sku": "1NBFK980", "weight": 5, "dimensions": { "width": 17, "height": 24.57, "depth": 13.3 }, "warrantyInformation": "5 year warranty", "shippingInformation": "Ships in 1-2 business days", "availabilityStatus": "Low Stock", "reviews": [{ "rating": 4, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Xavier Wright", "reviewerEmail": "xavier.wright@x.dummyjson.com" }, { "rating": 1, "comment": "Poor quality!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Mila Hernandez", "reviewerEmail": "mila.hernandez@x.dummyjson.com" }, { "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.619Z", "reviewerName": "Sophia Brown", "reviewerEmail": "sophia.brown@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 9, "meta": { "createdAt": "2024-05-23T08:56:21.619Z", "updatedAt": "2024-05-23T08:56:21.619Z", "barcode": "1939383392674", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png", "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png", "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png" }, { "id": 10, "title": "Gucci Bloom Eau de", "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.", "category": "fragrances", "price": 79.99, "discountPercentage": 8.9, "rating": 2.69, "stock": 93, "tags": ["fragrances", "perfumes"], "brand": "Gucci", "sku": "FFKZ6HOF", "weight": 10, "dimensions": { "width": 22.28, "height": 17.81, "depth": 27.18 }, "warrantyInformation": "No warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Aria Parker", "reviewerEmail": "aria.parker@x.dummyjson.com" }, { "rating": 4, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Natalie Harris", "reviewerEmail": "natalie.harris@x.dummyjson.com" }, { "rating": 4, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Ava Harris", "reviewerEmail": "ava.harris@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 10, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "8232190382069", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png", "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png", "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png" }, { "id": 11, "title": "Annibale Colombo Bed", "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.", "category": "furniture", "price": 1899.99, "discountPercentage": 0.29, "rating": 4.14, "stock": 47, "tags": ["furniture", "beds"], "brand": "Annibale Colombo", "sku": "4KMDTZWF", "weight": 3, "dimensions": { "width": 28.75, "height": 26.88, "depth": 24.47 }, "warrantyInformation": "2 year warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Julian Newton", "reviewerEmail": "julian.newton@x.dummyjson.com" }, { "rating": 5, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Madison Collins", "reviewerEmail": "madison.collins@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Clara Berry", "reviewerEmail": "clara.berry@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "7113807059215", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png", "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png", "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png" }, { "id": 12, "title": "Annibale Colombo Sofa", "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.", "category": "furniture", "price": 2499.99, "discountPercentage": 18.54, "rating": 3.08, "stock": 16, "tags": ["furniture", "sofas"], "brand": "Annibale Colombo", "sku": "LUU95CQP", "weight": 3, "dimensions": { "width": 20.97, "height": 19.11, "depth": 25.81 }, "warrantyInformation": "1 month warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Tyler Davis", "reviewerEmail": "tyler.davis@x.dummyjson.com" }, { "rating": 5, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Hannah Robinson", "reviewerEmail": "hannah.robinson@x.dummyjson.com" }, { "rating": 3, "comment": "Waste of money!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Madison Collins", "reviewerEmail": "madison.collins@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "0426785817074", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png", "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png", "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png" }, { "id": 13, "title": "Bedside Table African Cherry", "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.", "category": "furniture", "price": 299.99, "discountPercentage": 9.58, "rating": 4.48, "stock": 16, "tags": ["furniture", "bedside tables"], "brand": "Furniture Co.", "sku": "OWPLTZYX", "weight": 10, "dimensions": { "width": 25.43, "height": 20.2, "depth": 24.95 }, "warrantyInformation": "6 months warranty", "shippingInformation": "Ships in 1-2 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "John Doe", "reviewerEmail": "john.doe@x.dummyjson.com" }, { "rating": 4, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Avery Carter", "reviewerEmail": "avery.carter@x.dummyjson.com" }, { "rating": 4, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Evelyn Sanchez", "reviewerEmail": "evelyn.sanchez@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 5, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "2913244159666", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png", "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png", "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png" }, { "id": 14, "title": "Knoll Saarinen Executive Conference Chair", "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.", "category": "furniture", "price": 499.99, "discountPercentage": 15.23, "rating": 4.11, "stock": 47, "tags": ["furniture", "office chairs"], "brand": "Knoll", "sku": "RKHVJ4FE", "weight": 3, "dimensions": { "width": 16.59, "height": 21.46, "depth": 29.07 }, "warrantyInformation": "Lifetime warranty", "shippingInformation": "Ships in 3-5 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Leah Gutierrez", "reviewerEmail": "leah.gutierrez@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Nolan Gonzalez", "reviewerEmail": "nolan.gonzalez@x.dummyjson.com" }, { "rating": 2, "comment": "Waste of money!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Stella Morris", "reviewerEmail": "stella.morris@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 5, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "0726316339746", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png", "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png", "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png" }, { "id": 15, "title": "Wooden Bathroom Sink With Mirror", "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.", "category": "furniture", "price": 799.99, "discountPercentage": 11.22, "rating": 3.26, "stock": 95, "tags": ["furniture", "bathroom"], "brand": "Bath Trends", "sku": "7OLTIEVO", "weight": 6, "dimensions": { "width": 7.32, "height": 22.64, "depth": 12.37 }, "warrantyInformation": "6 months warranty", "shippingInformation": "Ships in 3-5 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Charlotte Lopez", "reviewerEmail": "charlotte.lopez@x.dummyjson.com" }, { "rating": 1, "comment": "Would not recommend!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "William Gonzalez", "reviewerEmail": "william.gonzalez@x.dummyjson.com" }, { "rating": 2, "comment": "Not worth the price!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Ava Harrison", "reviewerEmail": "ava.harrison@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "7839797529453", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png", "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png", "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png" }, { "id": 16, "title": "Apple", "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.", "category": "groceries", "price": 1.99, "discountPercentage": 1.97, "rating": 2.96, "stock": 9, "tags": ["fruits"], "sku": "QTROUV79", "weight": 8, "dimensions": { "width": 8.29, "height": 5.58, "depth": 12.41 }, "warrantyInformation": "2 year warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Great product!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Logan Lee", "reviewerEmail": "logan.lee@x.dummyjson.com" }, { "rating": 4, "comment": "Great product!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Elena Long", "reviewerEmail": "elena.long@x.dummyjson.com" }, { "rating": 1, "comment": "Not as described!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Grayson Coleman", "reviewerEmail": "grayson.coleman@x.dummyjson.com" }], "returnPolicy": "60 days return policy", "minimumOrderQuantity": 44, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "2517819903837", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png" }, { "id": 17, "title": "Beef Steak", "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.", "category": "groceries", "price": 12.99, "discountPercentage": 17.99, "rating": 2.83, "stock": 96, "tags": ["meat"], "sku": "BWWA2MSO", "weight": 9, "dimensions": { "width": 23.35, "height": 13.48, "depth": 26.4 }, "warrantyInformation": "1 month warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Ethan Martinez", "reviewerEmail": "ethan.martinez@x.dummyjson.com" }, { "rating": 3, "comment": "Disappointing product!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Owen Fisher", "reviewerEmail": "owen.fisher@x.dummyjson.com" }, { "rating": 4, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Scarlett Wright", "reviewerEmail": "scarlett.wright@x.dummyjson.com" }], "returnPolicy": "90 days return policy", "minimumOrderQuantity": 21, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "8335515097879", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png" }, { "id": 18, "title": "Cat Food", "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.", "category": "groceries", "price": 8.99, "discountPercentage": 9.57, "rating": 2.88, "stock": 13, "tags": ["pet supplies", "cat food"], "sku": "C3F8QN6O", "weight": 9, "dimensions": { "width": 15.4, "height": 13.97, "depth": 25.13 }, "warrantyInformation": "3 months warranty", "shippingInformation": "Ships in 1-2 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Mateo Bennett", "reviewerEmail": "mateo.bennett@x.dummyjson.com" }, { "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Aurora Barnes", "reviewerEmail": "aurora.barnes@x.dummyjson.com" }, { "rating": 5, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Ellie Stewart", "reviewerEmail": "ellie.stewart@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 48, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "5503491330693", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png" }, { "id": 19, "title": "Chicken Meat", "description": "Fresh and tender chicken meat, suitable for various culinary preparations.", "category": "groceries", "price": 9.99, "discountPercentage": 10.46, "rating": 4.61, "stock": 69, "tags": ["meat"], "sku": "G5YEHW7B", "weight": 7, "dimensions": { "width": 15.96, "height": 29.24, "depth": 26.25 }, "warrantyInformation": "Lifetime warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Sophia Jones", "reviewerEmail": "sophia.jones@x.dummyjson.com" }, { "rating": 5, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Maya Reed", "reviewerEmail": "maya.reed@x.dummyjson.com" }, { "rating": 4, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Harper Turner", "reviewerEmail": "harper.turner@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 46, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "0966223559510", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png", "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png" }, { "id": 20, "title": "Cooking Oil", "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.", "category": "groceries", "price": 4.99, "discountPercentage": 18.89, "rating": 4.01, "stock": 22, "tags": ["cooking essentials"], "sku": "Q6ZP1UY8", "weight": 8, "dimensions": { "width": 8.18, "height": 27.45, "depth": 27.88 }, "warrantyInformation": "Lifetime warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Mason Parker", "reviewerEmail": "mason.parker@x.dummyjson.com" }, { "rating": 3, "comment": "Poor quality!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Jonathan Pierce", "reviewerEmail": "jonathan.pierce@x.dummyjson.com" }, { "rating": 5, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Alexander Hernandez", "reviewerEmail": "alexander.hernandez@x.dummyjson.com" }], "returnPolicy": "60 days return policy", "minimumOrderQuantity": 2, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "6707669443381", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png" }, { "id": 21, "title": "Cucumber", "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.", "category": "groceries", "price": 1.49, "discountPercentage": 11.44, "rating": 4.71, "stock": 22, "tags": ["vegetables"], "sku": "6KGF2K6Z", "weight": 9, "dimensions": { "width": 11.04, "height": 20.5, "depth": 8.18 }, "warrantyInformation": "5 year warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Elijah Hill", "reviewerEmail": "elijah.hill@x.dummyjson.com" }, { "rating": 5, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Liam Garcia", "reviewerEmail": "liam.garcia@x.dummyjson.com" }, { "rating": 4, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Ella Cook", "reviewerEmail": "ella.cook@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 7, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "2597004869708", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png" }, { "id": 22, "title": "Dog Food", "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.", "category": "groceries", "price": 10.99, "discountPercentage": 18.15, "rating": 2.74, "stock": 40, "tags": ["pet supplies", "dog food"], "sku": "A6QRCH37", "weight": 2, "dimensions": { "width": 29.39, "height": 29.77, "depth": 20.54 }, "warrantyInformation": "1 year warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Leo Rivera", "reviewerEmail": "leo.rivera@x.dummyjson.com" }, { "rating": 4, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Alexander Jones", "reviewerEmail": "alexander.jones@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Addison Wright", "reviewerEmail": "addison.wright@x.dummyjson.com" }], "returnPolicy": "90 days return policy", "minimumOrderQuantity": 29, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "7957222289508", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png" }, { "id": 23, "title": "Eggs", "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.", "category": "groceries", "price": 2.99, "discountPercentage": 5.8, "rating": 4.46, "stock": 10, "tags": ["dairy"], "sku": "YA617RI7", "weight": 4, "dimensions": { "width": 12.3, "height": 10.99, "depth": 15.53 }, "warrantyInformation": "3 year warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 2, "comment": "Very unhappy with my purchase!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Mateo Perez", "reviewerEmail": "mateo.perez@x.dummyjson.com" }, { "rating": 4, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Cameron Perez", "reviewerEmail": "cameron.perez@x.dummyjson.com" }, { "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Aurora Barnes", "reviewerEmail": "aurora.barnes@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 43, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "7095702028776", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png" }, { "id": 24, "title": "Fish Steak", "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.", "category": "groceries", "price": 14.99, "discountPercentage": 7, "rating": 4.83, "stock": 99, "tags": ["seafood"], "sku": "XNIH1MTA", "weight": 8, "dimensions": { "width": 20.14, "height": 8.4, "depth": 10.01 }, "warrantyInformation": "1 year warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Michael Johnson", "reviewerEmail": "michael.johnson@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Julian Newton", "reviewerEmail": "julian.newton@x.dummyjson.com" }, { "rating": 5, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Lila Hudson", "reviewerEmail": "lila.hudson@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 49, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "4250692197342", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png" }, { "id": 25, "title": "Green Bell Pepper", "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.", "category": "groceries", "price": 1.29, "discountPercentage": 15.5, "rating": 4.28, "stock": 89, "tags": ["vegetables"], "sku": "HU7S7VQ0", "weight": 7, "dimensions": { "width": 7.32, "height": 14.31, "depth": 21.38 }, "warrantyInformation": "5 year warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Maya Reed", "reviewerEmail": "maya.reed@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Madison Collins", "reviewerEmail": "madison.collins@x.dummyjson.com" }, { "rating": 5, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Ethan Thompson", "reviewerEmail": "ethan.thompson@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "7583442707568", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png" }, { "id": 26, "title": "Green Chili Pepper", "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.", "category": "groceries", "price": 0.99, "discountPercentage": 18.51, "rating": 4.43, "stock": 8, "tags": ["vegetables"], "sku": "Y4RM3JCB", "weight": 2, "dimensions": { "width": 18.67, "height": 21.17, "depth": 25.26 }, "warrantyInformation": "No warranty", "shippingInformation": "Ships in 1-2 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 2, "comment": "Disappointing product!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Mateo Bennett", "reviewerEmail": "mateo.bennett@x.dummyjson.com" }, { "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Natalie Price", "reviewerEmail": "natalie.price@x.dummyjson.com" }, { "rating": 4, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Avery Barnes", "reviewerEmail": "avery.barnes@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 43, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "8400326844874", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png" }, { "id": 27, "title": "Honey Jar", "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.", "category": "groceries", "price": 6.99, "discountPercentage": 1.91, "rating": 3.5, "stock": 25, "tags": ["condiments"], "sku": "BTBNIIOU", "weight": 9, "dimensions": { "width": 26.53, "height": 27.11, "depth": 6.63 }, "warrantyInformation": "2 year warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Nicholas Bailey", "reviewerEmail": "nicholas.bailey@x.dummyjson.com" }, { "rating": 5, "comment": "Awesome product!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Gabriel Hayes", "reviewerEmail": "gabriel.hayes@x.dummyjson.com" }, { "rating": 5, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "James Garcia", "reviewerEmail": "james.garcia@x.dummyjson.com" }], "returnPolicy": "90 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "0668665656044", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png" }, { "id": 28, "title": "Ice Cream", "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.", "category": "groceries", "price": 5.49, "discountPercentage": 7.58, "rating": 3.77, "stock": 76, "tags": ["desserts"], "sku": "VEZMU1EQ", "weight": 5, "dimensions": { "width": 17.66, "height": 24.49, "depth": 25.98 }, "warrantyInformation": "2 year warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Great product!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Elena Baker", "reviewerEmail": "elena.baker@x.dummyjson.com" }, { "rating": 5, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Madeline Simpson", "reviewerEmail": "madeline.simpson@x.dummyjson.com" }, { "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Caleb Nelson", "reviewerEmail": "caleb.nelson@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 19, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "9603960319256", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png", "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png", "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png", "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png" }, { "id": 29, "title": "Juice", "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.", "category": "groceries", "price": 3.99, "discountPercentage": 5.45, "rating": 3.41, "stock": 99, "tags": ["beverages"], "sku": "M2K19S06", "weight": 2, "dimensions": { "width": 8.97, "height": 12.26, "depth": 15.05 }, "warrantyInformation": "1 week warranty", "shippingInformation": "Ships in 1-2 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Leo Rivera", "reviewerEmail": "leo.rivera@x.dummyjson.com" }, { "rating": 2, "comment": "Not worth the price!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Ethan Martinez", "reviewerEmail": "ethan.martinez@x.dummyjson.com" }, { "rating": 4, "comment": "Excellent quality!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Max Parker", "reviewerEmail": "max.parker@x.dummyjson.com" }], "returnPolicy": "90 days return policy", "minimumOrderQuantity": 26, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "8546824122355", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png" }, { "id": 30, "title": "Kiwi", "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.", "category": "groceries", "price": 2.49, "discountPercentage": 10.32, "rating": 4.37, "stock": 1, "tags": ["fruits"], "sku": "0X3NORB9", "weight": 8, "dimensions": { "width": 27.3, "height": 7.48, "depth": 15.08 }, "warrantyInformation": "6 months warranty", "shippingInformation": "Ships in 3-5 business days", "availabilityStatus": "Low Stock", "reviews": [{ "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Nora Russell", "reviewerEmail": "nora.russell@x.dummyjson.com" }, { "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Dylan Wells", "reviewerEmail": "dylan.wells@x.dummyjson.com" }, { "rating": 5, "comment": "Great product!", "date": "2024-05-23T08:56:21.620Z", "reviewerName": "Noah Hernandez", "reviewerEmail": "noah.hernandez@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 8, "meta": { "createdAt": "2024-05-23T08:56:21.620Z", "updatedAt": "2024-05-23T08:56:21.620Z", "barcode": "3325493172934", "qrCode": "https://assets.dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png" }]

    localStorage.setItem("product-list", JSON.stringify(data));
}
// Get data from local storage

function getData() {
    let jsonString = localStorage.getItem("product-list");
    let data = JSON.parse(jsonString);
    return data;
}
