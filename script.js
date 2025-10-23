function handlesubmit(){
    const inp_ele = document.getElementById("input");
    let input = inp_ele.value;
    inp_ele.value="";
    const content_ele = document.getElementById("content");
    content_ele.innerHTML+=`<br><br><h4>User:</h4>${input}`;
    setTimeout(function(){
        puter.ai.chat(input,{
        model: 'gpt-5-nano',
        }).then((data)=>{
        //console.log(data.message.content)
        content_ele.innerHTML+=`<br><br><h4>ChatGPT:</h4>${marked.parse(data.message.content)}`;
        });
    },1000)
}

