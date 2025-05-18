let htmlinput=document.querySelector(".html-editor textarea")
let cssinput=document.querySelector(".css-editor textarea")
let jsinput=document.querySelector(".js-editor textarea")
let save=document.querySelector("#save")
let outputContainer=document.querySelector(".output-container")
let output=document.querySelector("#output")
let full=document.querySelector("#full")
let copy=document.querySelectorAll(".copy")

save.addEventListener("click",()=>{
output.contentDocument.body.innerHTML=htmlinput.value;
output.contentDocument.head.innerHTML=`<style>${cssinput.value}</style>`
output.contentWindow.eval(jsinput.value)
})

full.addEventListener("click",()=>{
outputContainer.classList.toggle("output-full-active")
if(outputContainer.classList.contains("output-full-active")){
    full.style.transform="rotate(180deg)"
}else{
    full.style.transform="rotate(0deg)"
}
})

copy.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.classList.contains("copy1")){
            navigator.clipboard.writeText(htmlinput.value)
        }
        else if(e.classList.contains("copy2")){
            navigator.clipboard.writeText(cssinput.value)
        }
        else{
            navigator.clipboard.writeText(jsinput.value)
        }
    })
    
})




