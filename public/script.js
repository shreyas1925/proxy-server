const row = document.querySelector("#row");

const apicall = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=4275f573e8ba4f06be195172d387666a",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const data = await res.json();

  //   console.log(data);

  shownews(data.articles);
  console.log(data.articles, "ss");
};

const shownews = (data) => {
  data.map((data) => {
    const card = `<div class="col-sm col-lg-4 col-md-4 mb-3">
        <div class="card" style="height:500px">
          <img class="card-img-top" src="${data.urlToImage}" alt="Card image cap" style="height:200px"/>
          <div class="card-body d-flex flex-grow flex-column card_body overflow-none">
            <h5 class="card-title text-dark font-weight-bold">${data.author}</h5>
            <p class="card-text text-dark">
              ${data.description}
            </p>
            </div>
            <a href="#" class="btn btn-primary ">Content</a>
        </div>
        </div>`;
    row.insertAdjacentHTML("afterbegin", card);
  });
};
