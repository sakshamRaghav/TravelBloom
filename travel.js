
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
      image: "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="
    },
    {
      name: "Andaman Islands",
      type: "beach",
      info: "Tropical paradise with clear blue waters.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Havelock_Island%2C_Sandy_lagoon%2C_Andaman_Islands.jpg/640px-Havelock_Island%2C_Sandy_lagoon%2C_Andaman_Islands.jpg"
    },
    {
      name: "Manali",
      type: "mountain",
      info: "Snow-capped peaks and scenic valleys.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg/640px-Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg"
    },
    {
      name: "Leh-Ladakh",
      type: "mountain",
      info: "Adventure destination with breathtaking views.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Moonscape%2C_Mountains%2C_Lamayuru%2C_Ladakh%2C_India.jpg/640px-Moonscape%2C_Mountains%2C_Lamayuru%2C_Ladakh%2C_India.jpg"
    },
    {
      name: "Jaipur",
      type: "city",
      info: "The Pink City known for forts and rich culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jaipur_03-2016_02_Amber_Fort.jpg/640px-Jaipur_03-2016_02_Amber_Fort.jpg"
    },
    {
      name: "Rishikesh",
      type: "river",
      info: "Peaceful town on the Ganges, ideal for rafting and yoga.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sunset_-_Lakshman_Jhula.jpg/640px-Sunset_-_Lakshman_Jhula.jpg"
    },
    {
      name: "Kerala Backwaters",
      type: "lake",
      info: "Calm lagoons surrounded by lush greenery.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kerala_backwaters%2C_Canal%2C_Palm_trees%2C_India.jpg/640px-Kerala_backwaters%2C_Canal%2C_Palm_trees%2C_India.jpg"
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


