let current =0
arr = new Array
arr[0]="image1.jpg"
arr[1]="image2.jpg"
arr[2]="image3.jpg"
arr[3]="image4.jpg"
arr[4]="image5.jpg"
document.addEventListener("DOMContentLoaded",() => {
    document.querySelector("#image").src = arr[0]
    document.querySelector("#next").addEventListener("click",(e) => {
        console.log(current);
        if(current ==4)
        {
            
            document.querySelector("#image").src = arr[0]
            current = 0
        }
        else
        {
            current++
            document.querySelector("#image").src = arr[current]
        }
    });
    document.querySelector("#previous").addEventListener("click",(e) => {
        console.log(current);
        if(current ==0)
        {
            
            document.querySelector("#image").src = arr[4]
            current = 4
        }
        else
        {
            current--
            document.querySelector("#image").src = arr[current]
        }
    });
});