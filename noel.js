document.getElementById("login").addEventListener("click",function(){
    document.querySelector(".body").style.display="flex"
    document.querySelector(".wrapper").style.display="none"
  })
  const text = document.querySelector(".sec-text")
  const textload = () =>{
    setTimeout(() =>{
        text.textContent = "Chúc tất cả mọi người giáng sinh vui vẻ"
    },0)
    setTimeout(() =>{
        text.textContent = "Bên gia đình cùng người mình thương"
    },2500)
    setTimeout(() =>{
        text.textContent = "Và đón chào năm mới hạnh phúc!"
    },5000)
    setTimeout(() =>{
        text.textContent = "Happy Christmas Day and Happy New Year"
    },7500)
}
textload()
