function getUrlParameterValue(url, parameter) {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  return searchParams.get(parameter);
}

// Example URL
var url =
  "https://example.com/page?utm_medium=webplugin&utm_campaign=poweredby";

const medium_val = getUrlParameterValue(exampleUrl, "utm_medium");
const campaign_val = getUrlParameterValue(exampleUrl, "utm_campaign");

console.log(medium_val);
console.log(campaign_val);


// reverse a number 

function reverseNumber(num){
    let result = 0;
    while(num > 0){
        const lastVal = num % 10;
        result = result * 10 + lastVal;
        num = Math.floor(num / 10);
    }

    console.log(result);
}

// best project

// Food App - 

// 1 - This React app is designed to be user-friendly and
// intuitive web app.

// 2 - Fetched data from realtime Swiggy API.

// 3 - Implemented conditional rendering and Shimmer UI in
// app.

// 4 - The restaurant data and menu list is fetched dynamically
// and displayed in an organized manner.

// 5 - Added nested and dynamic routing.

// 6 - Created custom hooks.

// 7 - Implemented lazy loading on the web app.

// 8- Created a redux store i.e. allowing users to easily browse
// and add items to their cart and added a button to remove
// all items added to the cart.

// github link - https://github.com/AdityaPratap24/food-app-s

// PS - I have worked on real world projects in my internship
