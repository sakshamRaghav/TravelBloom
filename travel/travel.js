
function showLocation() {
  const input = document.getElementById("text").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (input === "") {
    resultDiv.innerHTML = "<p>Please enter a keyword like <b>beach</b>, <b>mountain</b>, or <b>city</b>.</p>";
    return;
  }

  const destinations = [
    {
      name: "Goa",
      type: "beach",
      info: "Golden beaches, palm trees, and fun nightlife!",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Baga_Beach_Goa.jpg"
    },
    {
      name: "Andaman Islands",
      type: "beach",
      info: "Tropical paradise with clear blue waters.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Andaman_Beach.jpg"
    },
    {
      name: "Manali",
      type: "mountain",
      info: "Snow-capped peaks and scenic valleys.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Manali_town_2004.jpg"
    },
    {
      name: "Leh-Ladakh",
      type: "mountain",
      info: "Adventure destination with breathtaking views.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ladakh_valley.jpg"
    },
    {
      name: "Jaipur",
      type: "city",
      info: "The Pink City known for forts and rich culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hawa_Mahal_in_Jaipur_2011.jpg"
    },
    {
      name: "Rishikesh",
      type: "river",
      info: "Peaceful town on the Ganges, ideal for rafting and yoga.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Rishikesh_laxman_jhula.jpg"
    },
    {
      name: "Kerala Backwaters",
      type: "lake",
      info: "Calm lagoons surrounded by lush greenery.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Backwaters_in_Kerala.jpg"
    }
  ];

  const filtered = destinations.filter(
    dest => dest.type.includes(input) || dest.name.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    resultDiv.innerHTML = `<p>No results found for "<b>${input}</b>". Try another keyword!</p>`;
    return;
  }

  filtered.forEach(dest => {
    const div = document.createElement("div");
    div.classList.add("place");
    div.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}">
      <div class="info">
        <h3>${dest.name}</h3>
        <p>${dest.info}</p>
        <p><b>Type:</b> ${dest.type}</p>
      </div>
    `;
    resultDiv.appendChild(div);
  });
}

function clearInput() {
  document.getElementById("text").value = "";
  document.getElementById("result").innerHTML = "";
}
