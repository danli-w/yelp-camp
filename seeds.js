var mongoose 		= require("mongoose");
var Campground 	= require("./models/campground");
var Comment			= require("./models/comment");

// var data 				= [
// 	{
// 		name: "Cloud's Nest",
// 		image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c7d2b79d0924ecd5e_340.jpg",
// 		description: "Tip steak pastrami, shankle tail shankle ham tip beef andouille braunschweiger, ham pork braunschweiger ham ham pancetta ham leberkas, pastrami cow landjaeger cow pork porchetta drumstick, landjaeger beef jerky ham jerky. Filet shoulder leberkas cow fatback bregenwurst ham sirloin pig cow mignon pork ham andouille ham hock tip pastrami pig short, salami braunschweiger brisket."
// 	},
// 	{
// 		name: "Stone Trail",
// 		image: "http://il9.picdn.net/shutterstock/videos/11865671/thumb/1.jpg",
// 		description: "Tip steak pastrami, shankle tail shankle ham tip beef andouille braunschweiger, ham pork braunschweiger ham ham pancetta ham leberkas, pastrami cow landjaeger cow pork porchetta drumstick, landjaeger beef jerky ham jerky. Filet shoulder leberkas cow fatback bregenwurst ham sirloin pig cow mignon pork ham andouille ham hock tip pastrami pig short, salami braunschweiger brisket."
// 	},
// 	{
// 		name: "Rattlesnake Peak",
// 		image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2b79d0924ecd5e_340.jpg",
// 		description: "Tip steak pastrami, shankle tail shankle ham tip beef andouille braunschweiger, ham pork braunschweiger ham ham pancetta ham leberkas, pastrami cow landjaeger cow pork porchetta drumstick, landjaeger beef jerky ham jerky. Filet shoulder leberkas cow fatback bregenwurst ham sirloin pig cow mignon pork ham andouille ham hock tip pastrami pig short, salami braunschweiger brisket."
// 	}
// ];

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Canyon Floor", 
        image: "c",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];

// Campground.create({
// 	name: "Salmon Creek",
// 	image: "https://pixabay.com/get/57e8d1464d53a514f6da8c7dda793f7f1636dfe2564c704c7d2c7ddd974dc55d_340.jpg"
// }, function(err, campground){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			console.log("NEWLY CREATED CAMPGROUND: ");
// 			console.log(campground);
// 		}
// 	}
// );

function seedDB() {
	// REMOVE ALL CAMPGROUNDS
//	Campground.remove({}, function(err) {
	Campground.deleteMany({}, function(err) {
		if(err) {
			console.log(err);
		}
		console.log("Removed Campgrounds.");
			// ADD A FEW CAMPGROUNDS
			data.forEach(function(seed) {
				Campground.create(seed, function(err, campground) {
					if(err) {
						console.log(err);
				} else {
					console.log("Added a campground.");
				// ADD A FEW COMMENTS
					Comment.create(
						{
							text: "This place is great, but i wish there was internet!!",
							author: "Homer"
						}, function(err, comment) {
							if(err) {
								console.log(err);
							} else {	
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment!");
							}
						});
				}	
			});
		});
	});	

}

module.exports = seedDB;


