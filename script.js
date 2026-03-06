let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();

let title = document.getElementById("title").textContent;
let sub = document.getElementById("sub").textContent;

if (month >= 3 && day >= 17) {
	window.location.href = "https://sites.google.com/view/happynewdeparture/%E3%83%9B%E3%83%BC%E3%83%A0";
} else {
	document.getElementById("title").textContent = "あれれ？";
	document.getElementById("sub").textContent = "どうやらまだ開いちゃダメみたい！";
}