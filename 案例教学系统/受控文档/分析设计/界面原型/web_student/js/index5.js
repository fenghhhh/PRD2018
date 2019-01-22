let reportCountList=["152","222","199","287","534","309","479","556","532","656","650"];

let lineCompositeData = {
	labels: ["JAN", "MAR", "APR", "MAY", "JUN", "JUL",
		"AUG", "SEPT", "OCT", "NOV", "DEC"],

	yMarkers: [
		{
			label: "Average 100 reports/month",
			value: 420,
		}
	],

	datasets: [{
		"name": "Events",
		"values": reportCountList,
	}]
};


let c1 = document.querySelector("#chart-composite-1");

let lineCompositeChart = new Chart (c1, {
	title: "Work/Online hours - Yearly (reported)",
	data: lineCompositeData,
	type: 'line',
	height: 190,
	colors: ['green'],
	isNavigable: 1,
	valuesOverPoints: 1,

	lineOptions: {
		dotSize: 8
	},
});