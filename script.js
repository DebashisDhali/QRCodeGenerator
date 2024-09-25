let btn = document.querySelector("button");
let generate = document.querySelector(".generator");
let inputedInfo = document.querySelector("#inputedText");
let qrcode = document.querySelector(".qr");
let image = document.querySelector("#image");

const renderQR=(url)=>{
  if(!url) return;
  else{
    image.src=url;
    qrcode.classList.add("show");
  }

}

const show = (event) => {
  event.preventDefault();
  let info = inputedInfo.value;

  const qrurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${info}`;
  if (info) {
    renderQR(qrurl);
  }
  else{
    return;
  }
  // console.log(info);
  // form.reset();
};

btn.addEventListener("click", show);

//what is keyup? //Not clear

inputedInfo.addEventListener("keyup", () => {
  //working process of trim() //Done

  if (!inputedInfo.value.trim()) {
    qrcode.classList.remove("show");
  }
});



