
$(document).ready(function() {
let button= document.getElementById("start-btn");
let text= document.getElementById("text");
let message= document.getElementById("message");
let result= document.getElementById("result");
let startTime, endTime;

text.disabled=true;

const SetofWords= [
"	There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.",

" The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but couldn't make out exactly what the yelling was about. That was exactly why she had put them on. She knew her mom would enter her room at any minute, and she could pretend that she hadn't heard any of the previous yelling. ",

" Don't forget that gifts often come with costs that go beyond their purchase price. When you purchase a child the latest smartphone, you're also committing to a monthly phone bill. When you purchase the latest gaming system, you're likely not going to be satisfied with the games that come with it for long and want to purchase new titles to play. " ,

"  It was so great to hear from you today and it was such weird timing, he said. 'This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago. I'd love to get together and tell you about it if you're up for a cup of coffee,' he continued, laying the trap he'd been planning for years.",

"   On July 21, 1969, at precisely 10:56 EDT, Commander Neil Armstrong emerged from the Lunar Module and took his famous first step onto the moon’s surface.",

"  She asked the question even though she didn't really want to hear the answer. It was a no-win situation since she already knew. If he told the truth, she'd get confirmation of her worst fears. If he lied, she'd know that he wasn't who she thought he was which would be almost as bad. Yet she asked the question anyway and waited for his answer.",

"   The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk.",

"   It is scientifically proven that excessive use of aspirin turns it into a toxin. Its toxic effects are Kidney Damage, severe metabolic derangements, respiratory and central nervous system effects, strokes, fatal haemorrhages of the brain, intestines & lungs and eventually death.",

"   All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well-trained teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.",

"   There are three reasons why I prefer jogging to other sports. One reason is that jogging is a cheap sport. I can practise it anywhere at any time with no need for a ball or any other equipment."
];


const start = () => {
let index= Math.floor(Math.random()*SetofWords.length);
$("#message").html(SetofWords[index]);
let date= new Date();
startTime = date.getTime();
}

const end= () => {
	let date= new Date();
	let endTime= date.getTime();
	let timeTaken= (endTime-startTime-800)/1000;
	console.log(timeTaken);

	let totalWords= (message.innerText.split(" ")).length;
	if((text.value.trim()).length>0)
	{
		var wordsCount= (text.value.split(" ")).length;
	}
	else {
		var wordsCount=0;
	}

	console.log(totalWords+ " "+wordsCount+message.innerText);

	let speed= Math.round(((60/timeTaken)*wordsCount));

	let correctWords=accuracy(text.value,message.innerText);
	console.log('Total Words:'+wordsCount+ 'Correct Words:'+correctWords);


	$("#result h4").html(`Speed:  ${speed} wpm <br>
						Words Typed: ${wordsCount}  <br>
						Correct Words: ${correctWords} <br>
						Accuracy:	${Math.round((correctWords/wordsCount)*100)}%`);
	$("#message").html("Text will appear here once you click on Start");
	$("#text").prop("disabled",true);
}

const accuracy = (str,message) => {

message=(message.split(" "));
let count=0;
console.log(message);
 str.trim().split(" ").forEach(function (item) {
            console.log("item: "+item+ message.indexOf(item));
            if(message.indexOf(item) > -1)
            	count++;

        });
 return count;
}


button.addEventListener('click',function(){
		console.log("Clicked ");
	if(this.innerText === "Start")
	{
		$("textarea").val("");
		console.log('Started');
		this.innerText="Stop";
		$("#result").fadeOut();
		$("#text").prop("disabled",false);
		start();

	}
	else
	{
		$("#result").fadeIn();
		console.log('Stopped');
		$(this).html("Start");
		end();


	}
});



});
