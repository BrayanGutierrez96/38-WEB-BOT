const div = document.createElement("div");
const divContainer = document.createElement("div");
const divImg = document.createElement("img");

divContainer.className = "cards";
div.className = "card-contenedor";
divImg.className = "img-card";
divImg.src =
  "https://s3-alpha-sig.figma.com/img/d30d/0131/26a9d6ec26ec808f0d4dc99274d1d01d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqNFnc-Y-9nMs7Bk-JwDk2JTzZkl-8Gp2F1~iC3vr8Z19sQIY6xXG7paXp7QYM9nt90Js7i~imBl2Q5LDBfHkM2qFvA6vV9pfbAOZcpVbspNEmMQ0Ry2YLQElX1lbUb1HYD76GaGBCpJdeJp1fDhj1WolLFYPKGfV7yTr8B0UyzyZ00MH8gQLXWX-TKQsr1AHgohyDoXNoVKhV05vGSFBu2GIeGnGWZmvrHwFHm~Y97kI2vQ9ks~E7L~WpBoNyf7BynDBNh-hmpZ-MDe15zX9vCTxepaVr8S~A45nxCSiUB5Sb3j8zkCoR4-FHJaVfK16~55EDS6PeVT8ZB-UnvV2Q__";

div.className = "img-card";
document.body.appendChild(divContainer);
divContainer.appendChild(div);
div.appendChild(divImg);
