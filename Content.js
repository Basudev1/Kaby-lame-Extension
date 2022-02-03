let basuImages = [
  "https://wallpapercave.com/dwp1x/wp9464208.jpg",
  "https://wallpapercave.com/wp/wp9464209.jpg",
  "https://wallpapercave.com/dwp1x/wp9464212.jpg",
  "https://wallpapercave.com/dwp1x/wp9464220.jpg",
  "https://wallpapercave.com/wp/wp9464221.jpg",
  "https://wallpapercave.com/dwp1x/wp9464238.jpg",
  "https://wallpapercave.com/wp/wp9464243.jpg",
  "https://media.gettyimages.com/photos/khaby-lame-attends-the-red-carpet-of-the-movie-illusions-perdues-the-picture-id1338669355?k=20&m=1338669355&s=612x612&w=0&h=qh3n0PgoJZ4ozycQ6rFKr-GXK_mm5DttOwj4THI4AmM=",
  "https://media.gettyimages.com/photos/khaby-lame-attends-the-red-carpet-of-the-movie-illusions-perdues-the-picture-id1338669377?k=20&m=1338669377&s=612x612&w=0&h=qx0l-YdpUZicQrexZ89FAcxb5N9KALQ0GkPC7VpvyRw=",
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * basuImages.length);
  imgs[i].src = basuImages[randomImg];
}
const headings = document.getElementsByTagName("h3");
for (let i = 0; i < h1.length; i++) {
  h3[i].innerText = "Kaby Lame";
}
