/* Template: Corso - Free Training Course Landing Page Template
   Author: Inovatik
   Created: Nov 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Countdown Timer - The Final Countdown */
	$('#clock').countdown('2020/12/27 08:50:56') /* change here your "countdown to" date */
	.on('update.countdown', function(event) {
		var format = '<span class="counter-number">%D<br><span class="timer-text">Days</span></span><span class="counter-number">%H<br><span class="timer-text">Hours</span></span><span class="counter-number">%M<br><span class="timer-text">Minutes</span></span><span class="counter-number">%S<br><span class="timer-text">Seconds</span></span>';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) {
	$(this).html('This offer has expired!')
		.parent().addClass('disabled');
    });


    /* Image Slider 2 - Swiper */
    var imageSliderOne = new Swiper('.image-slider-1', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });


    /* Image Slider - Swiper */
    var imageSliderTwo = new Swiper('.image-slider-2', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: true,
        spaceBetween: 30,
        slidesPerView: 5,
		breakpoints: {
            // when window is <= 580px
            580: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window is <= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window is <= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            },

        }
    });


    /* Text Slider - Swiper */
	var textSlider = new Swiper('.text-slider', {
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
        },
        spaceBetween: 70,
        slidesPerView: 2,
		breakpoints: {
            // when window is <= 1199px
            1199: {
                slidesPerView: 1,
            },
        }
    });
    

    /* Video Lightbox - Magnific Popup */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {        
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/', 
                    id: function(url) {        
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });


    /* Details Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
    
    
    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });

    

    // -------------------------------------------
    // START - Gun Lab Auto Complete
    // -------------------------------------------
    const searchInputs = document.querySelectorAll('input[id^="gunLabWeaponSearch"]');
    const dropdowns = document.querySelectorAll('.custom-dropdown');
    const optionsLists = document.querySelectorAll('.options-list');

    let searchOptions = [
        "AKM - GLACIER",
        "AKM - STAR SEA",
        "AKM - GHILLIE DRAGON",
        "AKM - GOLD PIRATE",
        "AKM - WANDERING TYRANT",
        "AUG - WANDERING CIR",
        "AWM - GODZILLA",
        "AWM - MAUVE AVENGER",
        "PP-BIZON - SKULLCRUSHER",
        "PP-BIZON - BLAZING",
        "DP28 - JADE DRAGON",
        "DP28 - GILDED DRAGON",
        "DP28 - ENIGMATIC KILLER",
        "GROZA - EVENTIDE ARIA",
        "GROZA - RYOMEN SUKUNA",
        "KAR98K - NEBULA HUNTER",
        "KAR98K - MOONLIT GRACE",
        "KAR98K - NIGHT ROCK",
        "M16A4 - AURORA PULSE",
        "M16A4 - SKELETAL CORE",
        "M24 - KILLER TUNE",
        "M24 - PHARAOH MIGHT",
        "M24 - LADY BUTTERFLY",
        "M249 - PARTY PARCEL",
        "M249 - WINTER QUEEN",
        "MG3 - SOARING DRAGON",
        "M416 - GLACIER",
        "M416 - FOOL",
        "M416 - WANDERER",
        "M762 - STRAY REBELLION",
        "M762 - DEADLY PRECISION",
        "M762 - 8-BIT UNICORN",
        "MINI14 - ICICLE",
        "PAN - ACCOLADE",
        "PAN - NIGHT ROCK",
        "PAN - TASTY CHEESE",
        "QBZ - DAZZLING SUN",
        "QBZ - FATAL STRIKE",
        "SCAR-L - PUMPKIN",
        "SCAR-L - BLOODSTAINED",
        "SCAR-L - DROP THE BASS",
        "SKORPION - GOLDEN CIPHER",
        "SKS - SNOWCAPPED",
        "SKS - LADY CARMINE",
        "SKS - METAL MEDLEY",
        "THOMPSON - STEAMPUNK",
        "THOMPSON - CANDY CANE",
        "UMP45 - EMP",
        "UMP45 - ANNIVERSARY (AUTO MAX)",
        "UMP45 - PLATINUM RIPPER",
        "UMP45 - 8-BIT BLAST",
        "UMP45 - RAINBOW",
        "UZI - SHIMMER PWR",
        "UZI - ETHEREAL EMBLEM",
        "UZI - ROMANTIC MOMENTS",
        "VECTOR - BLOOD TOOTH",
        "VECTOR - GOLDEN EARL",
        "VSS - CROW",
        "MACHETE - DRAKONBANE"
    ];

    const updateResults = (event) => {
    const inputField = event.currentTarget;
    const inputValue = inputField.value.trim().toLowerCase();
    const dropdown = inputField.closest('.query-filter').querySelector('.custom-dropdown');
    const optionsList = dropdown.querySelector('.options-list');

    let options = "";

    if (inputValue.length > 0) {
        searchOptions.forEach((option) => {
        if (option.toLowerCase().includes(inputValue)) {
            options += `<li>${option}</li>`;
        }
        });
    }

    optionsList.innerHTML = options;

    if (options.length > 0) {
        dropdown.classList.add("open");
    } else {
        dropdown.classList.remove("open");
    }
    };

    searchInputs.forEach((input) => {
    input.addEventListener("keyup", (event) => updateResults(event));
    });

    optionsLists.forEach((optionsList) => {
    optionsList.addEventListener("click", (event) => {
        const clickedItem = event.target;
        if (clickedItem.tagName === "LI") {
        const inputField = clickedItem.closest('.query-filter').querySelector('input.form-control-input');
        const dropdown = inputField.closest('.query-filter').querySelector('.custom-dropdown');
        inputField.value = clickedItem.textContent;
        dropdown.classList.remove("open");
        }
    });
    });



    // -------------------------------------------
    // END - Gun Lab Auto Complete
    // -------------------------------------------

    // -------------------------------------------
    // START - X SUIT Auto Complete
    // -------------------------------------------
    const xsuitSearchInputs = document.querySelectorAll('input[id^="xsuitSearch"]');
    const xsuitOptionsLists = document.querySelectorAll('.options-list-xsuit');

    const xsuitSearchOptions = [
        "GOLDEN PHARAOH X SUIT",
        "BLOOD RAVEN X SUIT",
        "POSEIDON X SUIT",
        "AVALANCHE X SUIT",
        "SILVANUS X SUIT",
        "STYGIAN LIEGE X SUIT"
    ];

    const updateXsuitResults = (event) => {
    const inputField = event.currentTarget;
    const inputValue = inputField.value.trim().toLowerCase();
    const dropdown = inputField.closest('.query-filter').querySelector('.custom-dropdown-xsuit');
    const optionsList = dropdown.querySelector('.options-list-xsuit');

    let options = "";

    if (inputValue.length > 0) {
        xsuitSearchOptions.forEach((option) => {
        if (option.toLowerCase().includes(inputValue)) {
            options += `<li>${option}</li>`;
        }
        });
    }

    optionsList.innerHTML = options;

    if (options.length > 0) {
        dropdown.classList.add("open");
    } else {
        dropdown.classList.remove("open");
    }
    };

    xsuitSearchInputs.forEach((input) => {
    input.addEventListener("keyup", (event) => updateXsuitResults(event));
    });

    xsuitOptionsLists.forEach((optionsList) => {
    optionsList.addEventListener("click", (event) => {
        const clickedItem = event.target;
        if (clickedItem.tagName === "LI") {
        const inputField = clickedItem.closest('.query-filter').querySelector('input.form-control-input');
        const dropdown = inputField.closest('.query-filter').querySelector('.custom-dropdown-xsuit');
        inputField.value = clickedItem.textContent;
        dropdown.classList.remove("open");
        }
    });
    });



    // -------------------------------------------
    // END - X SUIT Auto Complete
    // -------------------------------------------

    // -------------------------------------------
    // START - EXPENSIVE VEHICLE Auto Complete
    // -------------------------------------------
    const vehicleSearchInputs = document.querySelectorAll('input[id^="vehicleSearch"]');
    const vehcileOptionsLists = document.querySelectorAll('.options-list-vehicle');

    const vehicleSearchOptions = [
        "BUGATTI VEYRON 16.4",
        "BUGATTI VEYRON 16.4 (GOLD)",
        "BUGATTI LA VOITURE NOIRE",
        "BUGATTI LA VOITRE NOIRE (ALLOY)",
        "KOENIGSEGG JESKO (RAINBOW)",
        "KOENIGSEGG JESKO (SILVER GRAY)",
        "LAMBORGHINI AVENTADOR SVJ BLUE",
        "LAMBORGHINI ESTOQUE METAL GRAY",
        "LAMBORGHINI URUS GIALLO (UAZ)",
        "LAMBORGHINI URUS GIALLO INTI",
        "MCLAREN 570S (ROYAL BLACK)",
        "TESLA CYBERTRUCK (BLACK-QUARZ)",
        "TESLA ROADSTER (AMETHYST)",
        "TESLA ROADSTER (DIAMOND)"
    ];

    const updateVehickeResults = (event) => {
    const inputField = event.currentTarget;
    const inputValue = inputField.value.trim().toLowerCase();
    const dropdown = inputField.closest('.query-filter').querySelector('.custom-dropdown-vehicle');
    const optionsList = dropdown.querySelector('.options-list-vehicle');

    let options = "";

    if (inputValue.length > 0) {
        vehicleSearchOptions.forEach((option) => {
        if (option.toLowerCase().includes(inputValue)) {
            options += `<li>${option}</li>`;
        }
        });
    }

    optionsList.innerHTML = options;

    if (options.length > 0) {
        dropdown.classList.add("open");
    } else {
        dropdown.classList.remove("open");
    }
    };

    vehicleSearchInputs.forEach((input) => {
    input.addEventListener("keyup", (event) => updateVehickeResults(event));
    });

    vehcileOptionsLists.forEach((optionsList) => {
    optionsList.addEventListener("click", (event) => {
        const clickedItem = event.target;
        if (clickedItem.tagName === "LI") {
        const inputField = clickedItem.closest('.query-filter').querySelector('input.form-control-input');
        const dropdown = inputField.closest('.query-filter').querySelector('.custom-dropdown-vehicle');
        inputField.value = clickedItem.textContent;
        dropdown.classList.remove("open");
        }
    });
    });



    // -------------------------------------------
    // END - EXPENSIVE VEHICLE Auto Complete
    // -------------------------------------------

    

    // -------------------------------------------
    // START - FORM Section
    // -------------------------------------------
    const form = document.getElementById('descriptionForm');
    const textarea = document.getElementById('descriptionTextArea');
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const copyButton = document.getElementById('copyButton');
    copyButton.innerText = 'Copy to Clipboard'; // By Default after each change

    // Player Account Details
    const accountLevel = document.getElementById('accLevel').value;
    const evoLevel = document.getElementById('evoLevel').value;
    const startSeason = document.getElementById('sSeason').value;
    const achievePoints = document.getElementById('achPoints').value;

    // Mythic Fashion
    const mythicFashion = document.getElementById('mythicFashion').value;

    // RP Seasons
    const rpFirstSeason = document.getElementById('rpFirstSeason').value;
    const rpLastSeason = document.getElementById('rpLastSeason').value;

    // Gun Lab
    const gunLabWeaponSearchInputs = document.querySelectorAll('input[id^="gunLabWeaponSearch"]');
    const gunLabWeaponLevelInputs = document.querySelectorAll('select[id^="gunLabWeaponLevel"]');

    // X Suits
    const xsuitSearchInputs = document.querySelectorAll('input[id^="xsuitSearch"]');
    const xsuitnLevelInputs = document.querySelectorAll('select[id^="xsuitLevel"]');

    // Expensive Vehicles
    const vehicleSearchInputs = document.querySelectorAll('input[id^="vehicleSearch"]');

    // Conqueror Seasons
    const conquerorSearchInputs = document.querySelectorAll('input[id^="conquerorSeason"]');

    const conquerorMappings = [];

    conquerorSearchInputs.forEach((searchInput) => {
        const conquerorMapping = {
            skin: searchInput.value,
        };
        conquerorMappings.push(conquerorMapping);
    });

    const conquerorSection = conquerorMappings
    .map((mapping) => `👑SEASON ${mapping.skin} CONQUEROR`)
    .join('\n');

        
    // Weapon Array [MAPPING GUNS AND SKINS TO CLIPBOARD] -----------------
    const weaponMappings = [];

    gunLabWeaponSearchInputs.forEach((searchInput, index) => {
    const gunLabWeaponLevel = gunLabWeaponLevelInputs[index].value;
    const weaponMapping = {
        skin: searchInput.value,
        level: gunLabWeaponLevel
    };
        weaponMappings.push(weaponMapping);
    });

    // Kill Msg Count
    var killMsgCount = 0;

    console.log('Weapon Skin and Level Mappings:');
    weaponMappings.forEach((mapping, index) => {
        console.log(`Weapon ${index + 1}: Skin - ${mapping.skin}, Level - ${mapping.level}`);

        // Kill msg count logic
        const gunLevel = mapping.level;
        const extractedNumber = parseInt(gunLevel.match(/\d+/)[0]);

        if (extractedNumber > 3) {
            killMsgCount = killMsgCount + 1
        }
        console.log(killMsgCount)

    });

    // Concat '0' for KILL MSG COUNT
    var newkillMsgCount = 0;
    if (killMsgCount < 10) {
        newkillMsgCount = "0" + killMsgCount;
    } else {
        newkillMsgCount = killMsgCount;
    }

    const weaponSection = weaponMappings
    .map((mapping, index) => `🔥${mapping.skin} ${mapping.level}`)
    .join('\n');

    // Weapon Array END -----------------


    // Gun Lab Count
    const gunLabCount = weaponMappings.length;
    var newgunLabCount = 0;
    if (gunLabCount < 10) {
        newgunLabCount = "0" + gunLabCount;
    } else {
        newgunLabCount = gunLabCount;
    }


    // X Suit Array (Mapping to Clipboard)
    const xsuitMappings = [];

    xsuitSearchInputs.forEach((searchInput, index) => {
    const gunLabWeaponLevel = xsuitnLevelInputs[index].value;
    const xsuitMapping = {
        skin: searchInput.value,
        level: gunLabWeaponLevel
    };
        xsuitMappings.push(xsuitMapping);
    });

    const xsuitSection = xsuitMappings
    .map((mapping, index) => `☀${mapping.skin} ${mapping.level}`)
    .join('\n');


    // Expensive Vehicles [MAPPING TO CLIPBOARD]
    const vehicleMappings = [];

    vehicleSearchInputs.forEach((searchInput) => {
        const vehicleMapping = {
            skin: searchInput.value,
        };
        vehicleMappings.push(vehicleMapping);
    });

    const vehicleSection = vehicleMappings
    .map((mapping) => `🚗${mapping.skin}`)
    .join('\n');
 


        // Populating Text Area [DO NOT CHANGE LAYOUT BELOW]
        const headerSection = `🟢RARE INVENTORY | ${newgunLabCount} GUNS LAB | ${newkillMsgCount} KILL MSG | OLD RP | 03 TIME CONQUEROR | GLOBAL ACCOUNT


💕MYTHIC FASHION ACC(${mythicFashion}/300)


${xsuitSection}


${vehicleSection}


${conquerorSection}`;

        const mainSection = `\n\n
🔰ACCOUNT LEVEL - ${accountLevel}
🔰EVO LEVEL - ${evoLevel}
🔰START SEASON - ${startSeason}
🔰ACHIEVEMENTS - ${achievePoints}


🌟RP SEASON - ${rpFirstSeason} to ${rpLastSeason} MAX


◻${newgunLabCount} GUNS LAB | ${newkillMsgCount} KILL MSG

${weaponSection}


▫INFERNO RIDER HELMET
▫MUMMY SET
▫VAMPIRE SET
▫JOKER OF SPADES SET
▫VI SET
▫JAYCE SET
▫CYCLE 02 SET
▫CYCLE 03 SET
▫FOOL MASK
▫S2 WANDERER SET


▫03 GUN SLOTS UNLOCKED


✅LOGIN - TWITTER + 3RD MAIL (CLEAR LOGINS)


💰PRIZE - DM ME`;

        const footerLinksSection = `\n\n
✅ඔබට 𝐏𝐔𝐁𝐆 ගිණුමක් මිල දී ගැනීමට හෝ විකුණා ගැනීමට අවශ්‍යයි අපගේ WHATSAPP GROUP එකට එකතු වන්න

✅CONTACT ME IF YOU WANT TO BUY OR SELL 𝐏𝐔𝐁𝐆 ACCOUNT

WHATSAPP GROUP (01)

https://chat.whatsapp.com/Dev7rFcJyGn8EkCfCMqdjU

WHATSAPP GROUP (02)

https://chat.whatsapp.com/KNqtUxdoKR88Yu0417gUHh`;


        // Populate TextArea
        const finalText = headerSection + mainSection + footerLinksSection;
        textarea.value = finalText;

        // You can also clear the input field after submission if needed
        // nameInput.value = '';
    });

    // -------------------------------------------
    // START - GUN Row Insertion Section
    // -------------------------------------------
    // Get the container element where the new rows will be appended
    const container = document.querySelector('.gun-container');
    let gunCounter = 2;
    
    const searchOptions1 = [
        "AKM - GLACIER",
        "AKM - STAR SEA",
        "AKM - GHILLIE DRAGON",
        "AKM - GOLD PIRATE",
        "AKM - WANDERING TYRANT",
        "AUG - WANDERING CIR",
        "AWM - GODZILLA",
        "AWM - MAUVE AVENGER",
        "PP-BIZON - SKULLCRUSHER",
        "PP-BIZON - BLAZING",
        "DP28 - JADE DRAGON",
        "DP28 - GILDED DRAGON",
        "DP28 - ENIGMATIC KILLER",
        "GROZA - EVENTIDE ARIA",
        "GROZA - RYOMEN SUKUNA",
        "KAR98K - NEBULA HUNTER",
        "KAR98K - MOONLIT GRACE",
        "KAR98K - NIGHT ROCK",
        "M16A4 - AURORA PULSE",
        "M16A4 - SKELETAL CORE",
        "M24 - KILLER TUNE",
        "M24 - PHARAOH MIGHT",
        "M24 - LADY BUTTERFLY",
        "M249 - PARTY PARCEL",
        "M249 - WINTER QUEEN",
        "MG3 - SOARING DRAGON",
        "M416 - GLACIER",
        "M416 - FOOL",
        "M416 - WANDERER",
        "M762 - STRAY REBELLION",
        "M762 - DEADLY PRECISION",
        "M762 - 8-BIT UNICORN",
        "MINI14 - ICICLE",
        "PAN - ACCOLADE",
        "PAN - NIGHT ROCK",
        "PAN - TASTY CHEESE",
        "QBZ - DAZZLING SUN",
        "QBZ - FATAL STRIKE",
        "SCAR-L - PUMPKIN",
        "SCAR-L - BLOODSTAINED",
        "SCAR-L - DROP THE BASS",
        "SKORPION - GOLDEN CIPHER",
        "SKS - SNOWCAPPED",
        "SKS - LADY CARMINE",
        "SKS - METAL MEDLEY",
        "THOMPSON - STEAMPUNK",
        "THOMPSON - CANDY CANE",
        "UMP45 - EMP",
        "UMP45 - ANNIVERSARY (AUTO MAX)",
        "UMP45 - PLATINUM RIPPER",
        "UMP45 - 8-BIT BLAST",
        "UMP45 - RAINBOW",
        "UZI - SHIMMER PWR",
        "UZI - ETHEREAL EMBLEM",
        "UZI - ROMANTIC MOMENTS",
        "VECTOR - BLOOD TOOTH",
        "VECTOR - GOLDEN EARL",
        "VSS - CROW",
        "MACHETE - DRAKONBANE"
    ];
    
    const createNewRow = () => {
      const newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.innerHTML = `
        <div class="col-6">
          <div class="form-group specialFormGroup">
            <div class="query-filter">
              <input type="text" class="form-control-input" id="gunLabWeaponSearch${gunCounter}" name="gunLabWeaponSearch${gunCounter}">
              <label class="label-control" for="gunLabWeaponSearch${gunCounter}">Select the Upgradable Gun from Inventory</label>
              <div class="gun-lab-auto-complete" tabindex="0">
                <div class="custom-dropdown">
                  <ul class="options-list">
                  </ul>
                </div>
              </div>
            </div>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group">
            <select class="form-control-select" id="gunLabWeaponLevel${gunCounter}">
              <option class="select-option" value="" disabled selected>Select Gun Level</option>
              <option class="select-option" value="LEVEL 1">Level 1</option>
              <option class="select-option" value="LEVEL 2">Level 2</option>
              <option class="select-option" value="LEVEL 3">Level 3</option>
              <option class="select-option" value="LEVEL 4">Level 4</option>
              <option class="select-option" value="LEVEL 5">Level 5</option>
              <option class="select-option" value="LEVEL 6">Level 6</option>
              <option class="select-option" value="LEVEL 7 (MAX)">Level 7</option>
              <option class="select-option" value="LEVEL 8 (MAX)">Level 8</option>
            </select>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group">
            <button class="btn-outline-lg delete-gun-btn">Delete Gun</button>
            <div class="help-block with-errors"></div>
          </div>
        </div>
      `;
    
      gunCounter++;
      container.appendChild(newRow);
    
      // Attach the autocomplete logic to the newly added input field
      const newSearchInput = newRow.querySelector(`#gunLabWeaponSearch${gunCounter - 1}`);
      const newDropdown = newRow.querySelector('.custom-dropdown');
      const newOptionsList = newRow.querySelector('.options-list');
    
      const updateResults = (event) => {
        const inputValue = event.target.value.trim().toLowerCase();
        let options = "";
    
        if (inputValue.length > 0) {
          searchOptions1.forEach((option) => {
            if (option.toLowerCase().includes(inputValue)) {
              options += `<li>${option}</li>`;
            }
          });
        }
    
        newOptionsList.innerHTML = options;
    
        if (options.length > 0) {
          newDropdown.classList.add('open');
        } else {
          newDropdown.classList.remove('open');
        }
      };
    
      newSearchInput.addEventListener('keyup', updateResults);
    
      newOptionsList.addEventListener('click', (event) => {
        const clickedItem = event.target;
        if (clickedItem.tagName === 'LI') {
          newSearchInput.value = clickedItem.textContent;
          newDropdown.classList.remove('open');
        }
      });
    };
    
    const addGunBtn = document.querySelector('.add-gun-btn');
    addGunBtn.addEventListener('click', createNewRow);
    
    container.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-gun-btn')) {
        const row = event.target.closest('.row');
        row.remove();
      }
    });
    


    // -------------------------------------------
    // END - GUN Row Insertion Section
    // -------------------------------------------

    // -------------------------------------------
    // START - XSUIT Row Insertion Section
    // -------------------------------------------
    // Get the container element where the new rows will be appended
    const xsuitcontainer = document.querySelector('.xsuit-container');
    let xsuitCounter = 2;
    
    const xsuitSearchOptions1 = [
        "GOLDEN PHARAOH X SUIT",
        "BLOOD RAVEN X SUIT",
        "POSEIDON X SUIT",
        "AVALANCHE X SUIT",
        "SILVANUS X SUIT",
        "STYGIAN LIEGE X SUIT"
    ];
    
    const xsuitCreateNewRow = () => {
      const newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.innerHTML = `
        <div class="col-6">
          <div class="form-group specialFormGroup">
            <div class="query-filter">
              <input type="text" class="form-control-input" id="xsuitSearch${xsuitCounter}" name="xsuitSearch${xsuitCounter}" required>
              <label class="label-control" for="xsuitSearch${xsuitCounter}">Select X Suits from Inventory</label>
              <div class="gun-lab-auto-complete" tabindex="0">
                <div class="custom-dropdown-xsuit">
                  <ul class="options-list-xsuit">
                  </ul>
                </div>
              </div>
            </div>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group">
            <select class="form-control-select" id="xsuitLevel${xsuitCounter}" required>
              <option class="select-option" value="" disabled selected>Select X Suit Level</option>
              <option class="select-option" value="LEVEL 1">Level 1</option>
              <option class="select-option" value="LEVEL 2">Level 2</option>
              <option class="select-option" value="LEVEL 3">Level 3</option>
              <option class="select-option" value="LEVEL 4">Level 4</option>
              <option class="select-option" value="LEVEL 5">Level 5</option>
              <option class="select-option" value="LEVEL 6">Level 6</option>
              <option class="select-option" value="LEVEL 7">Level 7</option>
              <option class="select-option" value="LEVEL 8">Level 8</option>
            </select>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group">
            <button class="btn-outline-lg delete-xsuit-btn">Delete X Suit</button>
            <div class="help-block with-errors"></div>
          </div>
        </div>
      `;
    
      xsuitCounter++;
      xsuitcontainer.appendChild(newRow);
    
      // Attach the autocomplete logic to the newly added input field
      const newSearchInput = newRow.querySelector(`#xsuitSearch${xsuitCounter - 1}`);
      const newDropdown = newRow.querySelector('.custom-dropdown-xsuit');
      const newOptionsList = newRow.querySelector('.options-list-xsuit');
    
      const updateResults = (event) => {
        const inputValue = event.target.value.trim().toLowerCase();
        let options = "";
    
        if (inputValue.length > 0) {
            xsuitSearchOptions1.forEach((option) => {
            if (option.toLowerCase().includes(inputValue)) {
              options += `<li>${option}</li>`;
            }
          });
        }
    
        newOptionsList.innerHTML = options;
    
        if (options.length > 0) {
          newDropdown.classList.add('open');
        } else {
          newDropdown.classList.remove('open');
        }
      };
    
      newSearchInput.addEventListener('keyup', updateResults);
    
      newOptionsList.addEventListener('click', (event) => {
        const clickedItem = event.target;
        if (clickedItem.tagName === 'LI') {
          newSearchInput.value = clickedItem.textContent;
          newDropdown.classList.remove('open');
        }
      });
    };
    
    const addXsuitBtn = document.querySelector('.add-xsuit-btn');
    addXsuitBtn.addEventListener('click', xsuitCreateNewRow);
    
    xsuitcontainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-xsuit-btn')) {
        const row = event.target.closest('.row');
        row.remove();
      }
    });
    


    // -------------------------------------------
    // END - XSUIT Row Insertion Section
    // -------------------------------------------

    // -------------------------------------------
    // START - EXPENSIVE VEHICLE Row Insertion Section
    // -------------------------------------------
    // Get the container element where the new rows will be appended
    const vehiclecontainer = document.querySelector('.vehicle-container');
    let vehicleCounter = 2;
    
    const vehicleSearchOptions1 = [
        "BUGATTI VEYRON 16.4",
        "BUGATTI VEYRON 16.4 (GOLD)",
        "BUGATTI LA VOITURE NOIRE",
        "BUGATTI LA VOITRE NOIRE (ALLOY)",
        "KOENIGSEGG JESKO (RAINBOW)",
        "KOENIGSEGG JESKO (SILVER GRAY)",
        "LAMBORGHINI AVENTADOR SVJ BLUE",
        "LAMBORGHINI ESTOQUE METAL GRAY",
        "LAMBORGHINI URUS GIALLO (UAZ)",
        "LAMBORGHINI URUS GIALLO INTI",
        "MCLAREN 570S (ROYAL BLACK)",
        "TESLA CYBERTRUCK (BLACK-QUARZ)",
        "TESLA ROADSTER (AMETHYST)",
        "TESLA ROADSTER (DIAMOND)"
    ];
    
    const vehicleCreateNewRow = () => {
      const newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.innerHTML = `
        <div class="col-6">
          <div class="form-group specialFormGroup">
            <div class="query-filter">
              <input type="text" class="form-control-input" id="vehicleSearch${vehicleCounter}" name="vehicleSearch${vehicleCounter}" required>
              <label class="label-control" for="vehicleSearch${vehicleCounter}">Select Expensive Vehicles from Inventory</label>
              <div class="gun-lab-auto-complete" tabindex="0">
                <div class="custom-dropdown-vehicle">
                  <ul class="options-list-vehicle">
                  </ul>
                </div>
              </div>
            </div>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <button class="btn-outline-lg delete-vehicle-btn">Delete Expensive Vehicle</button>
            <div class="help-block with-errors"></div>
          </div>
        </div>
      `;
    
      vehicleCounter++;
      vehiclecontainer.appendChild(newRow);
    
      // Attach the autocomplete logic to the newly added input field
      const newSearchInput = newRow.querySelector(`#vehicleSearch${vehicleCounter - 1}`);
      const newDropdown = newRow.querySelector('.custom-dropdown-vehicle');
      const newOptionsList = newRow.querySelector('.options-list-vehicle');
    
      const updateResults = (event) => {
        const inputValue = event.target.value.trim().toLowerCase();
        let options = "";
    
        if (inputValue.length > 0) {
            vehicleSearchOptions1.forEach((option) => {
            if (option.toLowerCase().includes(inputValue)) {
              options += `<li>${option}</li>`;
            }
          });
        }
    
        newOptionsList.innerHTML = options;
    
        if (options.length > 0) {
          newDropdown.classList.add('open');
        } else {
          newDropdown.classList.remove('open');
        }
      };
    
      newSearchInput.addEventListener('keyup', updateResults);
    
      newOptionsList.addEventListener('click', (event) => {
        const clickedItem = event.target;
        if (clickedItem.tagName === 'LI') {
          newSearchInput.value = clickedItem.textContent;
          newDropdown.classList.remove('open');
        }
      });
    };
    
    const addVehicleBtn = document.querySelector('.add-vehicle-btn');
    addVehicleBtn.addEventListener('click', vehicleCreateNewRow);
    
    vehiclecontainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-vehicle-btn')) {
        const row = event.target.closest('.row');
        row.remove();
      }
    });
    


    // -------------------------------------------
    // END - EXPENSIVE VEHICLE Row Insertion Section
    // -------------------------------------------

    // -------------------------------------------
    // START - CONQUEROR SEASON Row Insertion Section
    // -------------------------------------------
    // Get the container element where the new rows will be appended
    const conquerorcontainer = document.querySelector('.conqueror-container');
    let conquerorCounter = 2;
        
    const conquerorCreateNewRow = () => {
      const newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.innerHTML = `        
        <div class="col-6">
          <div class="form-group">
              <input type="text" class="form-control-input" id="conquerorSeason${conquerorCounter}" name="conquerorSeason${conquerorCounter}">
              <label class="label-control" for="conquerorSeason${conquerorCounter}">Conqueror Seasons</label>
              <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <button class="btn-outline-lg delete-conqueror-btn">Delete Conqueror Season</button>
            <div class="help-block with-errors"></div>
          </div>
        </div>
      `;
    
      conquerorCounter++;
      conquerorcontainer.appendChild(newRow);
    
      // Attach the autocomplete logic to the newly added input field
      const newSearchInput = newRow.querySelector(`#vehicleSearch${conquerorCounter - 1}`);
    };
    
    const addConquerorBtn = document.querySelector('.add-conqueror-btn');
    addConquerorBtn.addEventListener('click', conquerorCreateNewRow);
    
    conquerorcontainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-conqueror-btn')) {
        const row = event.target.closest('.row');
        row.remove();
      }
    });
    

    // -------------------------------------------
    // END - CONQUEROR SEASON Row Insertion Section
    // -------------------------------------------

    // -------------------------------------------
    // END - FORM Section
    // -------------------------------------------

    /* Registration Form */
    $("#registrationForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            rformError();
            rsubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            rsubmitForm();
        }
    });

    function rsubmitForm() {
        // initiate variables with form content
		var name = $("#rname").val();
		var email = $("#remail").val();
		var phone = $("#rphone").val();
        var terms = $("#rterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/registrationform-process.php",
            data: "name=" + name + "&email=" + email + "&phone=" + phone + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    rformSuccess();
                } else {
                    rformError();
                    rsubmitMSG(false, text);
                }
            }
        });
	}

    function rformSuccess() {
        $("#registrationForm")[0].reset();
        rsubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function rformError() {
        $("#registrationForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function rsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#rmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    

    /* Newsletter Form */
    $("#newsletterForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            nformError();
            nsubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            nsubmitForm();
        }
    });

    function nsubmitForm() {
        // initiate variables with form content
		var email = $("#nemail").val();
        var terms = $("#nterms").val();
        $.ajax({
            type: "POST",
            url: "php/newsletterform-process.php",
            data: "email=" + email + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    nformSuccess();
                } else {
                    nformError();
                    nsubmitMSG(false, text);
                }
            }
        });
	}

    function nformSuccess() {
        $("#newsletterForm")[0].reset();
        nsubmitMSG(true, "Subscribed!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function nformError() {
        $("#newsletterForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function nsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#nmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Contact Form */
    $("#contactForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
		var name = $("#cname").val();
		var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
	}

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
		var name = $("#pname").val();
		var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
	}

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);