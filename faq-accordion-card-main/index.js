const faqHolder = document.querySelectorAll(".faq-holder");
const faqAnswer = document.querySelectorAll(".faq-answer");
const icons = document.querySelectorAll(".icon");

for(let div of faqAnswer){
    div.style.display = "none";
}

const handleIconClick = (e) => {
        
        if(e.srcElement.parentElement.parentElement.parentElement.children[1].style.display === "block"){
            e.srcElement.parentElement.parentElement.parentElement.children[1].style.display = "none";
        }else{
            e.srcElement.parentElement.parentElement.parentElement.children[1].style.display = "block";
        }

        // console.log(e.target.classList.contains("rotate"));
        if(e.target.classList.contains("rotate")){
            e.target.classList.remove("rotate");
        }else{
            e.target.classList.add("rotate");
        }
};

for(const img of icons){
    img.addEventListener("click", handleIconClick);
}