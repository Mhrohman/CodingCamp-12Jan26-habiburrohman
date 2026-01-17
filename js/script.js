
console.log("JS LOADED")
welcomeMessage();

function welcomeMessage() {
   let userResponse = prompt("What is your name?");
   console.log(userResponse);
   if (userResponse===null||userResponse.trim()===""){
    userResponse="Guest";
   }
   document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse} ! to Oreo Website!`
}

new Date().toLocaleString()

const form = document.getElementById("messageForm");
const list = document.getElementById("messageList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // hapus teks "No messages yet"
  if (list.children[0]?.classList.contains("text-gray-400")) {
    list.innerHTML = "";
  }

  const item = document.createElement("div");
  item.className = "border rounded p-3 bg-gray-50";

  item.innerHTML = `
    <p class="font-semibold">${name}</p>
    <p class="text-xs text-gray-500">${email}</p>
    <p class="mt-2">${message}</p>
  `;

  list.prepend(item); // pesan terbaru di atas
  form.reset();
});

const logos = [
  "images/testi1.png",
  "images/testi2.png",
  "images/testi3.png",
  "images/testi4.png",
  "images/testi5.png",
  "images/testi6.png",
  "images/testi7.png",
  "images/testi8.png"
];

const ITEM_WIDTH = 288 + 24; // card + gap
const slider = document.getElementById("logo-slider");

logos.forEach(src => {
  const div = document.createElement("div");
  div.className =
    "w-72 h-40 flex-shrink-0 border rounded-lg bg-white overflow-hidden";

  div.innerHTML = `<img src="${src}" class="w-full h-full object-cover" />`;
  slider.appendChild(div);
});

let index = 0;
const visible = 4;
const maxIndex = logos.length - visible;

nextBtn.onclick = () => {
  index = Math.min(index + 1, maxIndex);
  slider.style.transform = `translateX(-${index * ITEM_WIDTH}px)`;
};

prevBtn.onclick = () => {
  index = Math.max(index - 1, 0);
  slider.style.transform = `translateX(-${index * ITEM_WIDTH}px)`;
};


