function byebye(img){
    console.log('removing image')
    let image=img
    image.classList.add("boxgo")
    setTimeout(() => {
        image.classList.remove("boxgo")
        image.style.display="none";
    }, 300);
}

function pinclick(pin, link, comment=0){
    console.log('Displaying image: '+link)
    let box=document.getElementById("box")
    box.src=link
    box.style.transformOrigin=pin.style.left+" "+pin.style.top
    box.style.display="block"
    pin.src="imgs/gpin.png"
    console.log(comments[comment])
}
function howbtn(link){
    console.log('Displaying image: '+link)
    let box=document.getElementById("box")
    box.style.transformOrigin="1100px 50px"
    box.src=link
    box.style.display="block"
}

let images = ['screenshots/2026031019182200_c.jpg','screenshots/2021080818235400_s.jpg','screenshots/2021040117212000_s.jpg','screenshots/2026031221191500_c.jpg','screenshots/2021073110423300_s.jpg','screenshots/2020120513581200_s.jpg','screenshots/2026022712025600_c.jpg','screenshots/2026031019213500_c.jpg','screenshots/2026031019285100_c.jpg','screenshots/2026031019165600_c.jpg','screenshots/2021052714290100_s.jpg','screenshots/2021022013210600_s.jpg','screenshots/2026011418432500_c.jpg','screenshots/2026021214505200_c.jpg','screenshots/2020100414563700_s.jpg','screenshots/2022072612353600_c.jpg','screenshots/2020051215563900_s.jpg','screenshots/2026020113331700_c.jpg','screenshots/2021031514024800_s.jpg','screenshots/2021082923590600_s.jpg','screenshots/2024051723172800_c.jpg','screenshots/2024042917023600_c.jpg','screenshots/2021081514333000_s.jpg','screenshots/2021052415185000_s.jpg','screenshots/2026031313554600_c.jpg','screenshots/2026031221231600_c.jpg','screenshots/2023031718255600_c.jpg','screenshots/2026031019315700_c.jpg','screenshots/2021033112194200_s.jpg','screenshots/2020112612001300_s.jpg','screenshots/2020071521571000_s.jpg','screenshots/2020111606355500_s.jpg','screenshots/2020040714451000_s.jpg','screenshots/2026031019161800_c.jpg','screenshots/2020092814594300_s.jpg','screenshots/2026010200080200_c.jpg','screenshots/2021110409420100_c.jpg','screenshots/2026031019255700_c.jpg','screenshots/2020072915011300_s.jpg','screenshots/2026031019335000_c.jpg','screenshots/2024042917032400_c.jpg','screenshots/2021020219065700_s.jpg','screenshots/2021030217242900_s.jpg','screenshots/2020091413082300_s.jpg','screenshots/2026031019141600_c.jpg','screenshots/2026012715225400_c.jpg','screenshots/2020100414575400_s.jpg','screenshots/2020123121412700_s.jpg','screenshots/2026020212325300_c.jpg','screenshots/2024042916561800_c.jpg','screenshots/2024042916581600_c.jpg','screenshots/2026012715045200_c.jpg','screenshots/2026020513335700_c.jpg','screenshots/2026012715213900_c.jpg','screenshots/2026031221213700_c.jpg','screenshots/2024042916552100_c.jpg','screenshots/2026041715402500_c.jpg','screenshots/2026041715460300_c.jpg','screenshots/2026041715422500_c.jpg','screenshots/2026041715375000_c.jpg','screenshots/2026041715403300_c.jpg','screenshots/2026041715345200_c.jpg','screenshots/2026041715380800_c.jpg','screenshots/2026041715390500_c.jpg','screenshots/2026041715323500_c.jpg','screenshots/2026040121285100_c.jpg','screenshots/2026040217532400_c.jpg','screenshots/2026041715353500_c.jpg','screenshots/2026041715360800_c.jpg','screenshots/2026040121301800_c.jpg','screenshots/2026041715425200_c.jpg','screenshots/2026041715472300_c.jpg','screenshots/2026041715435600_c.jpg','screenshots/2026041715370200_c.jpg','screenshots/2026041715413200_c.jpg','screenshots/2026040217551100_c.jpg','screenshots/2026041715405900_c.jpg','screenshots/2026041715321100_c.jpg','screenshots/2026041715432600_c.jpg','screenshots/2026041715334100_c.jpg','screenshots/2026041715444400_c.jpg','screenshots/2026041715462400_c.jpg','screenshots/2026041715342700_c.jpg','screenshots/2026041715313200_c.jpg','screenshots/2026041715482000_c.jpg','screenshots/2026041715491600_c.jpg','screenshots/2026041715395000_c.jpg']
const imgarray=[]
function preload(){
console.log('Preloading images')
    for(i in images){
        const img = new Image();
        img.src = images[i];
        imgarray.push(img)
    }

}

console.log('Oh hey, you\'re checking out the console. Cool. Not that there\'s much here, unless you\'re really into actions being logged.')
let secret = 'Yahaha! You found me!'
const comments=["No comment yet",
    "A little stargazing spot at the edge of Fruit Hill.",
    "Me and my boy KC having a snack in the music area",
    "Me and Melba at the riverside park. My New Leaf town had cherries, so I've planted some around town.",
    "I love that Tia's house is a little café. Probably a key part of the reason I built Tia's Tea Garden.",
    "Set up a little reading spot near Melba's old house. I should read more irl...",
    "After I got the comically large teddy bear, I knew I needed to put it in my house, so I built a little playroom for it:)",
    "I think the coffee stall was my first custom design. I've come pretty far since then, huh.",
    "Henry is my sister's favorite villager. I enhanced his house after the Happy home paradise DLC came out, but tried to align with the original style.",
    "I had tried to decorate this hill with asian style items for years, but it never looked the way I wanted. When Kabuki moved in it finally saw some use as his garden.",
    "Static's house. Idk he seemed like the type to have a rusty old gas pump outside his house lolmao. It was cool and I had to put it somewhere.",
    "Villagers playing instruments are super cute, so I had to set up a music area to boost the odds of seeing it. Also try to guess my favorite song lol",
    "I came up with the name Snowcape because the town in New Leaf kinda sticks out into the ocean like a cape(geography). Also I love winter and the snow kinda covers the ground like a cape(fabric). Double meaning, very clever:)",
    "The hotel got me back into this game, which is what led to me making this map and then this whole site around it. I always knew Kapp'n was the GOAT.",
    "This used to be the entire museum section before I made the Cyber-Brochure™. I didn't even think I'd make anything beyond the map back then. Oh how far I've come.",
    "I remember I saw someone on Reddit make a big elaborate park with the butterfly models. The idea compressed nicely into this 4x6 spot",
    "Making coffee IRL while going to the Roost used to be part of my morning routine. Idk how, but it made the coffee better.",
    "I saw a lot of people make a cool hill with their museum on top. Guess I wanted to be different haha",
    "I angled the camera to hide the fact that this cute little squirrel has a better gaming setup than me.",
    "Sometimes it's really nice to just sit down next to a villager and relax for a bit.",
    "I honestly like the fireworks here way more than in real life, because my ears are sensitive and the loud explosions kinda suck.",
    "This game is so incredibly comfy at night.",
    "I made Rainbow Park after finally getting every color for every flower. The path is lined with all of them.",
    "My friend was careless with emote permissions on her Discord server, so there used to be a :JørgenEatingIceCream: emote in there.",
    "Afternoon nap at the plaza",
    "This little island generated naturally on the map. I knew from day 1 that I was gonna put my house there.",
    "Fun decorating tip: If you put gyroids on the wall behind a pet bed it looks like they're sitting in it.",
    "My favorite butterfly is probably the great purple emperror.",
    "Jørgen fact: I don't really like popcorn.",
    "Me and Willow making sure we stay in shape.",
    "I love all the cute lil festivals they host at the plaza.",
    "My sister used to visit my island pretty frequently back in the day.",
    "Me and Fauna hanging out in our super cool and well designed outfits.(I'm very unbiased)",
    "Everyone celebrating that they no longer need to jump the river to visit me.",
    "Oh no he rocked way too hard and got tired. Sleep tight, Static:)",
    "Jørgen fact: I lived 5 minutes from the ocean while studying, so I went swimming a lot during summer.",
    "Nighttime stroll with the citrus cat. Snowcape looks great at night.",
    "Very reasonable wallpaper for the main room of my house:",
    "After the hotel opened, it felt wrong to welcome the guests to an empty beach, so I built this lil area.",
    "Do people actually nap outside IRL? I'm always nervous that some person or animal might show up.",
    "Pumpkins are great. Back when I used to bake a lot more, pumpkin pie was my go-to.",
    "I made this area because I needed somewhere on my island to harvest bamboo. Then I designed it so most of the bamboo is inaccessible. Classic Jørgen move lmao.",
    "I have at least 10 screenshots of Fauna sitting in this area, because it's cute every time.",
    "CRABS",
    "They say justice never sleeps, but they've clearly never met Super Nate. Justice loves taking breaks.",
    "Willow's house was pretty great already, but I added a few extra pieces of decor to really bring the place together.",
    "I've pitced the idea of making a timeline room to everyone who's visited my house. It's just such a cute way to look back at your town.",
    "Fishing up enough tires for the playground SUCKED, but it was worth it in the end tbh.",
    "The bamboo area was so nice that I had to celebrate with some fireworks after finishing it.",
    "I used to have a rule of only having one animal per species, but those kinds of rules only last until someone cool enough shows up.",
    "Buy his snacks please.",
    "I used to drink a lot of tea, so when a teapot themed villager showed up I had no choice but to build her a whole outdoor café where she can serve tea and cake.",
    "They are 10 steps away from multiple cafés that serve hot drinks. Why are they freezing their butts off in the cold sand?",
    "Melba currently lives on Fauna's old spot by the waterfall. I wonder how she deals with the noise.",
    "They're hanging out and watching TV, but the TV isn't even on. Are they stupid?",
    "This man has an open fire in his house. Do not trust him. He is a menace.",
    "Back in 2021, I made some text saying Welcome to Snowcape in order to greet anyone coming out from the airport. This is the origin of the name of the site.",
    "I use bricks for the main paths around central Snowcape because I like the look of them.",
    "I wish different paths could have a little less grass between them, but I still think the ground pattern looks pretty decent.",
    "When I finally got every fruit, I made a little hilltop orchard where I could grow them all.",
    "Set up a ladder to quickly get to Tammy's house. I used to have a pipe straight from my house to hers, but it clashed with the farm. I think there is some sort of primal need to visit Tammy buried in my subconscious.",
    "I got some Amiibo to get access to the Sanrio furniture, and I have to say it looks pretty nice in the tea garden.",
    "The fairground also has a secret path leading to the eastern beach.",
    "There's a little campground tucked away by the riverside. I'm pretty happy with how comfy I managed to make it.",
    "These small gaps in the path layout are my favorite thing to decorate, because you can just pick a random item like a phonebooth and build the area around it.",
    "My beaches used to be really empty before the hotel showed up. I don't know why, but it's way harder to build something I'm happy with on the sand.",
    "When I redesign villager houses, I have a rule to never change the floor and wallpaper. So if this goober wants a chainlink fence, I gotta make the chainlink fence look good.",
    "The festivals are cool and stuff, but I really like the vibe of a slow day at the plaza.",
    "I really should decorate around Ione's house, but Celeste refuses to give me the crafting recipe for those cute lil star lamps.",
    "I like keeping a small portion of the island natural. I grew up in the countryside, so a bit of forest feels right.",
    "In earlt versions of the game, you couldn't change villager's houses yet, so I moved Tammy out and back in using Amiibo to reset her house. That's why Henry is before her in the list of villagers.",
    "Women want me fish fear me",
    "When I cook IRL I usually either watch a youtube video in the background, or I put on music and dance around the kitchen like an idiot.",
    "Oh wow look at his cool sandcastle.",
    "I needed to make a farm after they added crops in an update. Tammy keeps talking about growing flowers, so I figured she'd be the perfect person to run it.",
    "The whole southwest of Snowcape used to be flat, but I think the plaza is much comfier when it's surrounded by cliffs.",
    "When Dota 2 introduced guilds, I made one called the Citrus Cat Fan Club. I never got any members on account of being a massive introvert, but it was neat to have the [TANGY] tag next to my name while playing.",
    "Tia's Tea Garden turned out really nice, so I got the itch to build another café. Fortunately I had the perfect guy to run it already living on Snowcape. Buy his snacks please.",
    "Needed some activities for tourists after the hotel was added. Rainbow park in the background looks pretty nice as well, doesn't it?",
    "They've been playing for a while. I'm still not sure who's winning.",
    "There was a pond on this hill before I decorated it, so I incorporated it into the area. Happy I did, 'cause it looks pretty.",
    "OH NO GODZILLA IS COMING TO DESTROY THE STATUE OF LIBERTY! RUN!",
    "Left an opening in the fence so I can vault over the river. It's surprisingly useful.",
    "I had some empty land and a bunch of fairground rides. This would probably make more sense to build near the town center, but I don't care lol.",
    "I tried to make sure there are enough benches around the island in case you get tired and need a break. Also putting down a bench instantly makes empty spots look way nicer.",
    "I've been thinking about redesigning the main room for at least 5 years now, but I can never settle on an idea, so it's probably staying like this forever.",
    "I think the cityscape wall is really cool, so I've always wanted to make a penthouse. It took me weeks to plan the whole thing and aquire all the necessary furniture.",
    "I made Henry's yard pretty early on, so I wasn't that good at decorating yet. Do I really need to fix it? Henry just goes to the plaza to sing anyway, it's not like he spends time here."
]