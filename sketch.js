var b,n,e1,e2,e3,r,four,cn=0,bn=0,word,lc,y=130


function setup() {
  
  b=createButton("Submit")
  b.position(400,100)

  n=createInput()
  n.position(100,100)

  e1=createElement("h1")
  e1.html("Word")
  e1.position(600,80)

  e2=createElement("h1")
  e2.html("Bulls")
  e2.position(900,80)

  e3=createElement("h1")
  e3.html("Cows")
  e3.position(1200,80)

  r=Math.round(random(0,s.length-1))
  four=s[r]
  
  b.mousePressed(bulls)
  
}

function draw() {
  background(255,255,255);  
 
  console.log(s.length-1)
 
}
function bulls(){
  var a1=four.charAt(0)
  var a2=four.charAt(1)
  var a3=four.charAt(2)
  var a4=four.charAt(3)

  word=n.value()

  lc=word.toLowerCase()

  console.log(lc)

  if(word.length!=4){
    alert("Enter a four letter word")
  }

  if(lc.charAt(0)===a1){
    bn++
  }
  if(lc.charAt(1)===a2){
    bn++
  }
  if(lc.charAt(2)===a3){
    bn++
  }
  if(lc.charAt(3)===a4){
    bn++
  }

  if(lc.charAt(0)===a2||lc.charAt(0)===a3||lc.charAt(0)===a4){
    cn++
  }
  if(lc.charAt(1)===a1||lc.charAt(1)===a3||lc.charAt(1)===a4){
    cn++
  }
  if(lc.charAt(2)===a1||lc.charAt(2)===a2||lc.charAt(2)===a4){
    cn++
  }
  if(lc.charAt(3)===a1||lc.charAt(3)===a2||lc.charAt(3)===a3){
    cn++
  }
  
  if(lc.length===4){
    for(var i=0;i<s.length;i++){
      if(s [i].includes(lc)){
        break
      }
    }
    if(i<s.length){
      b1=createElement("h2")
      b1.html(lc)
      b1.position(600,y)
      
      b2=createElement("h2")
      b2.html(bn)
      b2.position(900,y)

      b3=createElement("h2")
      b3.html(cn)
      b3.position(1200,y)

      y=y+50
    }
    else if(i===s.length){
      alert("Enter a valid word")
    }

  }
}
