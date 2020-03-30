document.addEventListener("DOMContentLoaded",() => {
	let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");
    document.querySelector("#Validate").addEventListener("click",(e) => {
		console.log('click');
		console.log('input1',input1.value);
        console.log('input2',input2.value);

    if(input1.value != input2.value)
    {
        alert("The passwords entered don't match.")
    }
    else if(input1.value.length < 8)
    {
        alert("The passwords are not at least 8 characters long.")
    }
    else if(input1.value.length >= 8 &&input1.value == input2.value)
    {
        alert("Verified!")
    }

    });
});