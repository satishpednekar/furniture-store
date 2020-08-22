const routes = [
    {
        path: '/',
        getTemplate:  (params) =>  homepageHandler()
    },
    {
        path: '/shop',
        getTemplate: (params) => Promise.resolve(`<h1>Shop Page</h1>`),
    },
    {
        path: '/magazine',
        getTemplate: (params) => Promise.resolve(`<h1>Magazine Page</h1>`),
    },
    {
        path: '/products/:productId',
        getTemplate: (params) => detailsHandler(params.productId)
    },
];


    async function homepageHandler() {
        let res = await fetch(`/furniture`);
        let data = await res.json();

        let cards = '<div class="container"><div class="row mt-n5">';

        for(let i=0; i<data.length; i++) {
            cards += `<div onclick="router.loadRoute('products', ${data[i].itemId})" class="card col mx-2 mt-5 col-xl-3 col-lg-3 col-md-2 col-sm-1" style="padding:0;">
                <img class="img-thumbnail" src="${data[i].thumbnailImage}">
                <div class="card-body">
                    <h5 class="card-title">${data[i].name}</h5>
                    <div class="d-flex">
                        <span style="width:100%;" class="card-text">${data[i].collection}</span>
                        <span class="card-text">${data[i].price}</span>
                    </div>
                </div>
            </div>`;
        }

        cards += `</div></div>`;

        const filters = `<div class="card">
        <article class="card-group-item">
            <header class="card-header">
                <h6 class="title">Collections</h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
                <form>
                    <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="">
                        <span class="form-check-label">
                        Lounge
                        </span>
                    </label> <!-- form-check.// -->
                    <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="">
                        <span class="form-check-label">
                        Table and Chairs
                        </span>
                    </label>  <!-- form-check.// -->
                    <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="">
                        <span class="form-check-label">
                        Arcmchair
                        </span>
                    </label>  <!-- form-check.// -->
                </form>
    
                </div> <!-- card-body.// -->
            </div>
        </article> <!-- card-group-item.// -->
        
        <article class="card-group-item">
            <header class="card-header">
                <h6 class="title">Color</h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
                <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value="">
                    <span class="form-check-label">
                    Black
                    </span>
                </label>
                <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value="">
                    <span class="form-check-label">
                    Blue
                    </span>
                </label>
                <label class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadio" value="">
                    <span class="form-check-label">
                    Red
                    </span>
                </label>
                </div> <!-- card-body.// -->
            </div>
        </article> <!-- card-group-item.// -->

        <article class="card-group-item">
        <header class="card-header">
            <h6 class="title">Category</h6>
        </header>
        <div class="filter-content">
            <div class="card-body">
            <label class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadio" value="">
                <span class="form-check-label">
                First hand items
                </span>
            </label>
            <label class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadio" value="">
                <span class="form-check-label">
                Brand new items
                </span>
            </label>
            <label class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadio" value="">
                <span class="form-check-label">
                Some other option
                </span>
            </label>
            </div> <!-- card-body.// -->
        </div>
    </article> <!-- card-group-item.// -->
    <article>
    <header class="card-header">
        <h6 class="title">Price Range</h6>
    </header>
        <div class="filter-content">
            <div class="card-body">
                <input type="range" class="custom-range" id="price-range">
            </div>   
        </div> 
    </article>
    <button type="submit" class="mt-2 btn btn-primary">Search</button>
    </div>`;

        let template = `<div class="row" style="padding:10px;">
        <div class="col-3">${filters}</div>
        <div class="col-9">${cards}</div>
        </div>`;


        return template;
    }

    async function detailsHandler(id) {
        let res = await fetch(`/furniture/${id}`);
        let data = await res.json();

        if(!data) {
            return `Details not found!`;
        }

        let slides="";

        data.images.forEach((element,index, arr) => {
            slides += `<div class="carousel-item ${index ==0 ? 'active' : ''}">
                <img class="d-block w-100" style="height: calc(100vh - 100px)" src="${element}" alt="slide">
            </div>`;
        });

        let carousel = `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="width:100%;">
        <div class="carousel-inner">
            ${slides}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>`;

        let info = `<section> 
            <h6>${data.name}</h6>
            <h2>${data.collection}</h2>
            <p>${data.description}</p>
            <p>Colors</p>
            <p>${data.colors.join(", ")}</p>
            <div>
                <p>Price per unit </p>
                <div>${data.price}</div>
                <br>
                <button class="btn btn-primary" type="submit">Buy Now</button>
            </div>
        </section>`;

        let template=`<div class="row m-5">
        <div class="col-6">${carousel}</div>
        <div class="col-6">${info}</div>
        </div>`;

        return template;
    }

