var tl= new TimelineMax({
    		// paused: true
    	});

    	tl.to('.panel', 5, {opacity: 1,  ease: Circ.easeOut })
        .to('.pageOneRedBox', 1, {opacity: .85, y: 10, ease: Back.easeOut.config(1.7) }, 1)
        .to('.pageOneUnboldFont', 1, {opacity: 1, y: 10}, "-=2.5")
        .to('.pageOneBoldFont', 1, {opacity: 1, y: 10}, "-=2")
        .to('.pageOneButton', 1, {opacity: 1, y: 10}, "-=3")
        .to('.pageOneCompanyLogo', 1, {opacity: 1, y: 10}, "-=2.8");

        tl.to(".redBackground", .5, {opacity: 1, y: 10})
        .to('.pageTwoAndThreeButton', 1, {opacity: 1, y: 8})
        .to('.pageTwoAndThreeCompanyLogo', .5, {opacity: 1, y: 8})
        .to('.pageTwoRedBox', 1, {opacity: .85, y: 10, ease: Back.easeOut.config(1.7) }, 6)
        .to('.pageTwoSmallRedBox', 1, {opacity: .85, y: 10, ease: Back.easeOut.config(1.7) }, 6)
        .to('.pageTwoSmallRedBox2', 1, {opacity: .85, x: 10, ease: Back.easeOut.config(1.7) }, 6)
        .to('.pageTwoBoldFont', 1, {opacity: 1, y: 10}, 6)
        .to('.pageTwoUnboldFont', 1, {opacity: 1, y: 10}, 7);
        

        tl.to(".thirdPageBackground", .5, {opacity: 1, ease: Circ.easeOut}, 11)
        .to(".thirdPageLogo", .5, {opacity: 1, ease: Circ.easeOut}, 11)
        .to('.pageThreeRedBox', 1, {opacity: .95, y: 10, ease: Back.easeOut.config(1.7) }, 11)
        .to('.hybridText', 1, {opacity: 1, y: 10}, 12)
        .to('.pageThreeText', 1, {opacity: 1, y: 10}, 12)
        .to('.pageTwoAndThreeButton', 1, {opacity: 1, y: 12})
        .to('.pageTwoAndThreeCompanyLogo', 1, {opacity: 1, y: 12.5});
    
        