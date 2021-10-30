const row = document.querySelector("#row");
const container = document.querySelector(".container");

const apicall = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=`,
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
    const card = `
    <div class="col-sm col-lg-4 col-md-6 mb-3">
        <div class="card" style="height:500px">
          <img class="card-img-top" src="${data.urlToImage}" alt="Card image cap" style="height:240px"/>
          <div class="card-body d-flex flex-grow flex-column card_body overflow-none">
            <h5 class="card-title text-dark font-weight-bold">${data.author}</h5>
            <p class="card-text text-dark">
              ${data.description}
            </p>
            </div>
            <a href="#" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">Content</a>
        </div>
    </div>`;

    const modal = `
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-info font-weight-bold" id="exampleModalLabel">${data.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-dark">
              ${data.content}
            </div>
            <div class="modal-footer">
            <p class="font-weight-bold text-primary">🚀 Source ${data.source.name}</p>
              
            </div>
          </div>
        </div>
      </div>
        `;

    row.insertAdjacentHTML("afterbegin", card);
    container.insertAdjacentHTML("beforeend", modal);
  });
};
