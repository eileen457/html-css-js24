const regexPattern=document.getElementById("pattern");
const stringToTest=document.getElementById("test-string");
const testButton=document.getElementById("test-btn");
const testResult=document.getElementById("result");


const caseInsensitiveFlag=document.getElementById("i");
const globalFlag=document.getElementById("g");

function getFlags(){
  let flags="";

 if(globalFlag.checked){
    flags+="g";
  }
  if(caseInsensitiveFlag.checked){
    flags+="i";
  }
  return flags;
}

testButton.addEventListener("click",()=>{
  const regex= new RegExp(regexPattern.value,getFlags());
  const text=stringToTest.textContent;

  const match=text.match(regex);

  if(match){
    testResult.textContent=match.join(", ");
    stringToTest.innerHTML=text.replace(regex,(match)=> `<span class="highlight">${match}</span>`);
  }else{
    testResult.textContent="no match";
    stringToTest.innerHTML=text;
  }
  
});
