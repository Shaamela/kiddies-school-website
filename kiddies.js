// var new_li = document.createElement('li');
 // var anchor = document.createElement('a');
 // var new_ = document.getElementById('nav-bar').getElementsByTagName('ul')[0].getElementsByTagName('div')[0];
 // new_.appendChild(new_li);
 // new_li.appendChild(anchor);
 // anchor.innerHTML = 'Blog';

 // new_.insertBefore(new_li, new_.getElementsByTagName('li')[0]);

 // To remove elements from the DOM
// console.log(new_);
// console.log(new_li);
// var removed = new_.removeChild(new_li)


// var content = document.getElementById('content');
// var show_more =document.getElementById('show-more');

// show_more.onclick = function(){
//     if(content.className == "open"){
//         content.className = "";
//         show_more.innerHTML ="SHOW MORE"
//     } else{
//         content.className = "open";
//         show_more.innerHTML = "SHOW LESS";
//     }
// }

// particlesJS.init({
//     selector: '#particle-container',
//     maxParticles: 200,
//     size: { value:3,
//         random:true

//     },
//     color:{
//         value: '#ff0000'
//     },
//     shape: 'circle',
//     opacity:{
//         value: 0.5,
//         random: true
//     },
//     speed:2

// });

// var modes = document.getElementById('light');
// var toggle = document.getElementById("toggle");

// // toggle.onclick = function(){
//     if (mode.getAttribute('href') === "assets/light.css"){
//         mode.setAttribute('href', 'assets/dark.css');
//     // }else{
//     //     mode.setAttribute('href', 'assets/light.css');
//     // }
// }
// }

// function mToggle(){
//         const modes = document.getElementById('light');
//         const toggle = document.getElementById('toggle');
//         if (modes.getAttribute('href') === 'assets/light.css'){
//         modes.setAttribute('href', 'assets/dark.css');
//         toggle.className = 'fa fa-moon';
      
    
//     }
// }
// var toggle = document.getElementById('toggles');

// toggle.onclick = function(){
//     const mode = document.getElementById('light');
//     const att = mode.getAttribute('href');

//     if(att === "assets/css/light.css"){
//         mode.setAttribute("href", "assets/css/dark.css");
//         console.log(mode, att);
        
//     }
// };


// function myFunc(){
// var button = document.getElementById('button');
// console.log('done');
        
//         // var modes = document.getElementById('light');
        // if (modes.getAttribute('href') !== 'assets/css/light.css'){
         
        //  mode.setAttribute("href", "assets/css/light.css");
 

    
        








      //   function modeToggle(){
      //       const mode = document.getElementById('light');
            
      //       const toggle = document.getElementById('toggle');
      //       if (mode.getAttribute('href') === 'assets/css/light.css'){
      //         mode.setAttribute('href', 'assets/css/dark.css');
            
      //         // topgrey.src = 'assets/images/shape-top-grey-80.png';
             
          
      //     }};


      //     function mToggle(){
      //       console.log('test');
      //   const modes = document.getElementById('light');
      //   const toggles = document.getElementById('toggles');
      //   if (modes.getAttribute('href') !== 'assets/css/light.css'){
      //     modes.setAttribute('href', 'assets/css/light.css');
          
        
      //   };
      
      
      //  };

    function toggleTheme(){
      const themeLink = document.getElementById("theme-link");
      const toggleButton = document.getElementById("toggle-button");
      const body = document.body;
      if (body.getAttribute('data-theme') === 'light'){
         themeLink.setAttribute('href', 'assets/css/dark.css');
        toggleButton.style.backgroundColor = 'gold';
         body.setAttribute('data-theme', 'dark');

      

      }else {
        themeLink.setAttribute('href', 'assets/css/light.css');
        toggleButton.style.backgroundColor= 'grey';
        body.setAttribute('data-theme', 'light');
      }
    }


    const comment = document.querySelector(".comment");
    const parent = document.querySelector('.aby');
    const profession = document.querySelector(".prof");
    const view =document.querySelector('.view');
    
    files = [
      {person: 'Dr Lambert',
      profession: 'Estate Surveyor', 
      opinion:"The best school in the whole of UK. It's a save haven for most parents who cherish quality education but do not have the wherewithal to sponsor the wards"},
      {person: 'Engr Ahmad Vini',
       profession: 'Engineering', opinion: "Thank God for Kiddies School. My children have transfomed to world beaters in their academic pursuit"
      },
      {person: 'Dr Joe',
      profession: 'Journalist',
      opinion: 'The Trail Blazer'
  
      }
  ]

   
  
    

    comment.addEventListener('click', () => {
      var val = Math.random() * files.length;
  
      val = Math.floor(val);
      files.map((file) => {
      parent.innerText = files[val].person;
      profession.innerText = files[val].profession;
      view.innerHTML = files[val].opinion;





      }
    
    
    )
    })

       
    

    
        
          
        
          
          
          
                
          
          
          
                                         

   