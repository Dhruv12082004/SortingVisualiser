const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 15) {
	
//for loop to generate 15 bars
for (let i = 0; i < num; i += 1) {

	// To Generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;
	
	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	
		bar.style.height = `${value * 3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;
	
	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar_id");

	// Assign value to "label"
	barLabel.innerHTML = value;
	
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}
let delay = 1000;
function getSort(sort,l , r){
	switch(sort){
		case 'selection':SelectionSort(delay);
		break;
		case 'bubble':BubbleSort(delay);
		break;
		case 'insertion':InsertionSort(delay);
		break;
		case 'quick':QuickSort(delay,l , r);
		break;
		default:break;
	}

}
let lastSelectedSpeed =1;
function setSpeed(value){
	lastSelectedSpeed = value;
switch(value){
	case 0.5:delay=2000;
	break;
	case 1:delay = 1000;
	break;
	case 1.5:delay=500;
	break;
	case 2:delay=100;
	break;
	default:delay=1000;
	
}
const speeds = [0.5, 1, 1.5, 2];
    speeds.forEach(speed => {
        const btn = document.getElementById(`Button_${speed}`);
        if (btn) btn.style.backgroundColor = "lightgray";
		// default color
    });

 const activeBtn = document.getElementById(`Button_${value}`);
    if (activeBtn) activeBtn.style.backgroundColor = "blue"; // Selected color
}
// asynchronous function to perform "Selection Sort"


// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}
function calculateSpeed(){
	document.getElementById("show").style.display="block";
}

// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
 const speeds = [0.5, 1, 1.5, 2];
    speeds.forEach(speed => {
        const btn = document.getElementById(`Button_${speed}`);
        if (speed === lastSelectedSpeed) {
            btn.disabled = false;
            btn.style.backgroundColor = "blue"; // Keep it highlighted
        } else {
            btn.disabled = true;
            btn.style.backgroundColor = "grey";
        }
    });
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "grey";

// To disable the button "Selection Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "grey";

document.getElementById("Button3").disabled = true;
document.getElementById("Button3").style.backgroundColor = "grey";

document.getElementById("Button4").disabled = true;
document.getElementById("Button4").style.backgroundColor = "grey";

document.getElementById("Button5").disabled = true;
document.getElementById("Button5").style.backgroundColor = "grey";


}


async function SelectionSort(delay) {

let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
var min_idx = 0;
disable();
	 document.getElementById("Button2").style.backgroundColor = "#6f459e";
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";
		
	// To pause the execution of code for delay amount  milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, delay)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;// height change of swapped bars
	var temp2 = bars[min_idx].childNodes[0].innerText;//text change of swapped bars
	bars[min_idx].style.height = bars[i].style.height;// swap ith and min_index bar height
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;//swap ith and min_index bar text
	bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}
// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}




async function BubbleSort(delay = 300) {

     disable();
	 document.getElementById("Button3").style.backgroundColor = "#6f459e";

	var bars = document.querySelectorAll(".bar");

	// BubbleSort Algorithm
	for (var i = 0; i < bars.length; i += 1) {
		for (var j = 0; j < bars.length - i - 1; j += 1) {

			// To change background-color of the
			// bars to be compared
			bars[j].style.backgroundColor = "#FF4949";
			bars[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

		
			var value1 = parseInt(bars[j].childNodes[0].innerHTML);
			var value2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

			// To compare value of two bars
			if (value1 > value2) {
				var temp1 = bars[j].style.height;
	var temp2 = bars[j].childNodes[0].innerText;
	bars[j].style.height = bars[j+1].style.height;
	bars[j+1].style.height = temp1;
	bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
	bars[j+1].childNodes[0].innerText = temp2;
				
			}
			await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);


			// Changing the color to the previous one
			bars[j].style.backgroundColor = "rgb(24, 190, 255)";
			bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
		}

		//changing the color of greatest element
		//found in the above traversal
		bars[bars.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
   
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	
	// To enable the button "bubble Sort" after final(sorted)
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#6f459e";

}


// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 600) {
	disable();
	document.getElementById("Button4").style.backgroundColor = "#6f459e";
let bars = document.querySelectorAll(".bar");


// Provide lightgreen colour to 0th bar
bars[0].style.backgroundColor = " rgb(49, 226, 13)";
for (var i = 1; i < bars.length; i += 1) {

	// Assign i-1 to j
	var j = i - 1;

	// To store the integer value of ith bar to key
	var key =parseInt(bars[i].childNodes[0].innerHTML);

	// To store the ith bar height to height
	var height = bars[i].style.height;
	
	//Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	
	

	// For placin g selected element at its correct position
	while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
		
	// Provide darkblue color to the jth bar
	bars[j].style.backgroundColor = "darkblue";
		
	// For placing jth element over (j+1)th element
	var temp1 = bars[j].style.height;
	var temp2 = bars[j].childNodes[0].innerText;
	bars[j].style.height = bars[j+1].style.height;
	bars[j+1].style.height = temp1;
	bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
	bars[j+1].childNodes[0].innerText = temp2;
	

	// Assign j-1 to j
	j = j - 1;

	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, delay)
	);
		
	// Provide lightgreen color to the sorted part
	for(var k=i;k>=0;k--){
		bars[k].style.backgroundColor = " rgb(49, 226, 13)";
	}
	}

	// Placing the selected element to its correct position
	bars[j + 1].style.height = height;
	bars[j + 1].childNodes[0].innerHTML = key;
	
	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);
	
	// Provide light green color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}


	
// To enable the button
// "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#6f459e";
}



//quick Sort 
async function partition(l, r, delay = 700) {
    var bars = document.querySelectorAll(".bar");

    // Store pivot value
    var pivot = Number(bars[l].childNodes[0].innerHTML);
    var count = 0;
    bars[l].style.backgroundColor = "red"; // Pivot color

    // Count how many are <= pivot
    for (var i = l + 1; i <= r; i++) {
        bars[i].style.backgroundColor = "yellow"; // Comparing
        await new Promise((resolve) => setTimeout(resolve, delay));

        var value = Number(bars[i].childNodes[0].innerHTML);
        if (value <= pivot) {
            count++;
            bars[i].style.backgroundColor = "lightgreen"; // Element ≤ pivot
        } else {
            bars[i].style.backgroundColor = "orange"; // Element > pivot
        }
    }


    var pivotIndex = l + count;

    // Swap pivot to correct position
	if(count>0){

    var temp1 = bars[pivotIndex].style.height;
    var temp2 = bars[pivotIndex].childNodes[0].innerText;

    bars[pivotIndex].style.height = bars[l].style.height;
    bars[l].style.height = temp1;

    bars[pivotIndex].childNodes[0].innerText = bars[l].childNodes[0].innerText;
    bars[l].childNodes[0].innerText = temp2;

    bars[pivotIndex].style.backgroundColor = "green"; // Final position of pivot
    bars[l].style.backgroundColor = ""; // Reset pivot old position
}
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Rearranging elements around pivotIndex
    var start = l;
    var end = r;

    while (start < pivotIndex && end > pivotIndex) {
        var value1 = Number(bars[start].childNodes[0].innerHTML);
        var value2 = Number(bars[end].childNodes[0].innerHTML);

        while (value1 <= pivot && start < pivotIndex) {
            bars[start].style.backgroundColor = "lightgreen"; // Already in place
            start++;
            value1 = Number(bars[start].childNodes[0].innerHTML);
        }

        while (value2 > pivot && end > pivotIndex) {
            bars[end].style.backgroundColor = "orange"; // Already in place
            end--;
            value2 = Number(bars[end].childNodes[0].innerHTML);
        }

        if (start < pivotIndex && end > pivotIndex) {
            // Swap
            var tempH = bars[start].style.height;
            var tempVal = bars[start].childNodes[0].innerText;

            bars[start].style.height = bars[end].style.height;
            bars[end].style.height = tempH;

            bars[start].childNodes[0].innerText = bars[end].childNodes[0].innerText;
            bars[end].childNodes[0].innerText = tempVal;

            bars[start].style.backgroundColor = "purple";
            bars[end].style.backgroundColor = "purple";

            await new Promise((resolve) => setTimeout(resolve, delay));

            // Reset to neutral
            bars[start].style.backgroundColor = "lightgreen";
            bars[end].style.backgroundColor = "orange";

            start++;
            end--;
        }
    }

    // Reset all non-green bars
    for (let k = l; k <= r; k++) {
        if (bars[k].style.backgroundColor !== "green") {
            bars[k].style.backgroundColor = "white";
        }
    }

    return pivotIndex;
}



// Asynchronous QuickSort function
async function QuickSort( delay = 100, l , r) {
	disable();
	document.getElementById("Button5").style.backgroundColor = "#6f459e";
if (l < r) {
	// Storing the index of pivot element after partition
	var pivot_idx = await partition(l, r, delay);
	// Recursively calling quicksort for left partition
	    await new Promise((resolve) => setTimeout(resolve, delay*3 ));

	await QuickSort(delay,l, pivot_idx-1);
	// Recursively calling quicksort for right partition
	await QuickSort(delay,pivot_idx + 1, r);
}
   if (l === 0 && r === document.querySelectorAll(".bar").length - 1) {
        const bars = document.querySelectorAll(".bar");
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = "green";
        }
    }
document.getElementById("Button1").disabled = false;

document.getElementById("Button1").style.backgroundColor = "#6f459e";


// To enable the button
// "Quick Sort" after final(sorted)
document.getElementById("Button5").disabled = false;

document.getElementById("Button5").style.backgroundColor = "#6f459e";

}



























