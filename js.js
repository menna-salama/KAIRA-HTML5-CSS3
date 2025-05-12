  const come1=document.querySelector('.come1');[0]
  const come2=document.querySelector('.come2');[0]
  const come3=document.querySelector('.come3');[0]
  const come4=document.querySelector('.come4');[0]
  window.onscroll=function(){
if (scrollY >410){
   come1.style.animation="fedupInUp  1.0s  forwards"  
   come2.style.animation="fedupInUp  1.1s forwards"  
   come3.style.animation="fedupInUp  1.2s   forwards "  
   come4.style.animation="fedupInUp  1.3s   forwards " 
   } else{
    come1.style.animation = "none";
    come2.style.animation = "none";
    come3.style.animation = "none";
    come4.style.animation = "none";

   }
  }
 
const priceElements = document.querySelectorAll(".price, .price2, .price3, .price4, .price5, .price6, .price7, .price8, .price9, .price10, .price11, .price12");

 
priceElements.forEach(function (priceElement) {
  
  const originalText = priceElement.textContent;

  priceElement.addEventListener("mouseenter", function () {
    this.textContent = "ADD TO CART";  
  });

  priceElement.addEventListener("mouseleave", function () {
    this.textContent = originalText;  
  });
});

 