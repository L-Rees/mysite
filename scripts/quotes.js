$(document).ready(function(){
     var quoteArr = [ 
	{quote: "If I stop to kick every barking dog I am not going to get where I'm going.", speaker: "Jackie Joyner-Kersee"},
	{quote: "Optimism is the faith that leads to achievement.", speaker: "Helen Keller"},
	{quote: "You are the one that possesses the keys to your being. You carry the passport to your own happiness.", speaker: "Diane von Furstenberg"},
	{quote: "I was smart enough to go through any door that opened.", speaker: "Joan Rivers"},
	{quote: "Cautious, careful people, always casting about to preserve their reputations can never effect a reform.", speaker: "Susan B. Anthony"},
	{quote: "When the whole world is silent, even one voice becomes powerful.", speaker: "Malala Yousafzai"},
	{quote: "Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.", speaker: "Golda Meir"},
	{quote: "Knowing what must be done does away with fear.", speaker: "Rosa Parks"},
	{quote: "I didn't get there by wishing for it or hoping for it, but by working for it.", speaker: "Estée Lauder"},
	{quote: "Power's not given to you. You have to take it.", speaker: "Beyoncé Knowles Carter"},
	{quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", speaker: "Amelia Earhart"},
	{quote: "The difference between successful people and others is how long they spend time feeling sorry for themselves.", speaker: "Barbara Corcoran"},
	{quote: "You can waste your lives drawing lines. Or you can live your life crossing them.", speaker: "Shonda Rhimes"},
	{quote: "I'd rather regret the things I've done than regret the things I haven't done.", speaker: "Lucille Ball"},
	{quote: "I hope the fathers and mothers of little girls will look at them and say 'yes, women can.'", speaker: "Dilma Rousseff"},
	{quote: "Beware of monotony; it's the mother of all the deadly sins.", speaker: "Edith Wharton"},
	{quote: "If you don't risk anything, you risk even more.", speaker: "Erica Jong"},
	{quote: "I have stood on a mountain of no's for one yes.", speaker: "B. Smith"},
	{quote: "The way we talk to our children becomes their inner voice.", speaker: "Peggy O'Mara"},
	{quote: "You can never leave footprints that last if you are always walking on tiptoe.", speaker: "Leymah Gbowee"},
	{quote: "If you don't like the road you're walking, start paving another one.", speaker: "Dolly Parton"},
	{quote: "If you think taking care of yourself is selfish, change your mind. If you don't, you're simply ducking your responsibilities.", speaker: "Ann Richards"},
	{quote: "You can't give up! If you give up, you're like everybody else.", speaker: "Chris Evert"},
	{quote: "No matter how difficult and painful it may be, nothing sounds as good to the soul as the truth.", speaker: "Martha Beck"},
	{quote: "Done is better than perfect.", speaker: "Sheryl Sandberg"},
	{quote: "One of the secrets to staying young is to always do things you don't know how to do, to keep learning.", speaker: "Ruth Reichl"},
	{quote: "Be first and be lonely.", speaker: "Ginni Rometty"},
	{quote: "One cannot accomplish anything without fanaticism.", speaker: "Eva Perón"},
	{quote: "Look your best - who said love is blind?", speaker: "Mae West"},
	{quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.", speaker: "Madeleine Albright"},
	{quote: "Don't take too much credit for your children — or too much blame!", speaker: "Debora Spar"},
	{quote: "You can imprison a man, but not an idea. You can exile a man, but not an idea. You can kill a man, but not an idea.", speaker: "Benazir Bhutto"},
	{quote: "Step out of the history that is holding you back. Step into the new story you are willing to create.", speaker: "Oprah Winfrey"},
	{quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.", speaker: "Jane Goodall"},
	{quote: "I firmly believe you never should spend your time being the former anything.", speaker: "Condoleezza Rice"},
	{quote: "I may be wearing makeup, but I can throw a fastball by you at the same time.", speaker: "Jennie Finch"},
	{quote: "A good compromise is one where everybody makes a contribution.", speaker: "Angela Merkel"},
	{quote: "A strong woman is a woman determined to do something others are determined not be done.", speaker: "Marge Piercy"},
	{quote: "I choose to make the rest of my life the best of my life.", speaker: "Louise Hay"},
	{quote: "Drama is very important in life: You have to come on with a bang. You never want to go out with a whimper.", speaker: "Julia Child"},
	{quote: "If your home environment is good and peaceful and easy, your life is better and easier.", speaker: "Lori Greiner"},
	{quote: "In order to be irreplaceable one must always be different.", speaker: "Coco Chanel"},
	{quote: "The question isn't who is going to let me; it's who is going to stop me.", speaker: "Ayn Rand"},
	{quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", speaker: "Mother Teresa"},
	{quote: "Take criticism seriously, but not personally. If there is truth or merit in the criticism, try to learn from it. Otherwise, let it roll right off you.", speaker: "Hillary Clinton"},
	{quote: "When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak.", speaker: "Audre Lorde"},
	{quote: "Learn from the mistakes of others. You can't live long enough to make them all yourself.", speaker: "Eleanor Roosevelt"},
	{quote: "Women will only have true equality when men share with them the responsibility of bringing up the next generation.", speaker: "Ruth Bader Ginsburg"},
	{quote: "Above all, be the heroine of your life, not the victim.", speaker: "Nora Ephron"},
	{quote: "You should treat your marriage like a business that you wouldn't want to let fail.", speaker: "Lisa Ling"},
	{quote: "It's one of the greatest gifts you can give yourself, to forgive. Forgive everybody.", speaker: "Maya Angelou"},
	{quote: "Change your life today. Don't gamble on the future, act now, without delay.", speaker: "Simone de Beauvoir"},
	{quote: "If you're not making some notable mistakes along the way, you're certainly not taking enough business and career chances.", speaker: "Sallie Krawcheck"},
	{quote: "A surplus of effort could overcome a deficit of confidence.", speaker: "Sonia Sotomayor"},
	{quote: "Doubt is a killer. You just have to know who you are and what you stand for.", speaker: "Jennifer Lopez"},
	{quote: "You can be the lead in your own life.", speaker: "Kerry Washington"},
	{quote: "You can't please everyone, and you can't make everyone like you.", speaker: "Katie Couric"},
	{quote: "No one changes the world who isn't obsessed.", speaker: "Billie Jean King"},
	{quote: "The best thing to hold onto in life is each other.", speaker: "Audrey Hepburn"},
	{quote: "Normal is not something to aspire to, it's something to get away from.", speaker: "Jodie Foster"},
	{quote: "I am always busy, which is perhaps the chief reason why I am always well.", speaker: "Elizabeth Cady Stanton"},
	{quote: "I learned a long time ago that there is something worse than missing the goal, and that's not pulling the trigger.", speaker: "Mia Hamm"},
	{quote: "When I'm hungry, I eat. When I'm thirsty, I drink. When I feel like saying something, I say it.", speaker: "Madonna"},
	{quote: "Owning our story can be hard but not nearly as difficult as spending our lives running from it.", speaker: "Brene Brown"},
	{quote: "I do not try to dance better than anyone else. I only try to dance better than myself.", speaker: "Arianna Huffington"},
	{quote: "I'm always perpetually out of my comfort zone.", speaker: "Tory Burch"},
	{quote: "If you can't go straight ahead, you go around the corner.", speaker: "Cher"},
	{quote: "If you don't get out of the box you've been raised in, you won't understand how much bigger the world is.", speaker: "Angelina Jolie"},
	{quote: "Everyone shines, given the right lighting.", speaker: "Susan Cain"},
	{quote: "If you're someone people count on, particularly in difficult moments, that's a sign of a life lived honorably.", speaker: "Rachel Maddow"},
	{quote: "When you embrace your difference, your DNA, your look or heritage or religion or your unusual name, that's when you start to shine.", speaker: "Bethenny Frankel"},
	{quote: "You can't be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.", speaker: "Tina Fey"},
	{quote: "If you just set out to be liked, you would be prepared to compromise on anything at any time, and you would achieve nothing.", speaker: "Margaret Thatcher"},
	{quote: "The challenge is not to be perfect...it's to be whole.", speaker: "Jane Fonda"},
	{quote: "Don't look at your feet to see if you are doing it right. Just dance.", speaker: "Anne Lamott"},
	{quote: "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.", speaker: "Indira Gandhi"},
	{quote: "All careers go up and down like friendships, like marriages, like anything else, and you can't bat a thousand all the time.", speaker: "Julie Andrews"},
	{quote: "If somebody can do something  percent as good as you think you would have done it yourself, then you've got to let it go.", speaker: "Sara Blakely"},
	{quote: "This journey has always been about reaching your own other shore no matter what it is, and that dream continues.", speaker: "Diana Nyad"},
	{quote: "You have trust in what you think. If you splinter yourself and try to please everyone, you can't.", speaker: "Annie Leibovitz"},
	{quote: "If you find someone you love in your life, then hang on to that love.", speaker: "Princess Diana"},
	{quote: "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.", speaker: "J.K. Rowling"},
	{quote: "When you're through changing, you're through.", speaker: "Martha Stewart"},
	{quote: "We need to start work with the idea that we're going to learn every day. I learn, even at my position, every single day.", speaker: "Chanda Kochhar"},
	{quote: "Cherish forever what makes you unique, cuz you're really a yawn if it goes.", speaker: "Bette Midler"},
	{quote: "Style is a way to say who you are without having to speak.", speaker: "Rachel Zoe"},
	{quote: "Dying seems less sad than having lived too little.", speaker: "Gloria Steinem"},
	{quote: "When I believe in something, I'm like a dog with a bone.", speaker: "Melissa McCarthy"},
	{quote: "Women asking for raises should not only know their value, but they should ask with the confidence that they're helping the company to be successful.", speaker: "Senator Kirsten Gillibrand"},
	{quote: "Whenever you are blue or lonely or stricken by some humiliating thing you did, the cure and the hope is in caring about other people.", speaker: "Diane Sawyer"},
	{quote: "I need to listen well so that I hear what is not said.", speaker: "Thuli Madonsela"},
	{quote: "I try to live in a little bit of my own joy and not let people steal it or take it.", speaker: "Hoda Kotb"},
	{quote: "It's not the absence of fear, it's overcoming it. Sometimes you've got to blast through and have faith.", speaker: "Emma Watson"},
	{quote: "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.", speaker: "Anais Nin"},
	{quote: "I learned compassion from being discriminated against. Everything bad that's ever happened to me has taught me compassion.", speaker: "Ellen DeGeneres"},
	{quote: "When I'm tired, I rest. I say, 'I can't be a superwoman today.'", speaker: "Jada Pinkett Smith"},
	{quote: "Don't live life in the past lane.", speaker: "Samantha Ettus"},
	{quote: "Many receive advice, only the wise profit from it.", speaker: "Harper Lee"},
];

	var newQuote = function(){
		var randomNumber = Math.floor(Math.random() * (quoteArr.length - 1));
		var randomQuote = quoteArr[randomNumber];
		$("#quote").html(function(){
			return randomQuote.quote;
		});
		$("#speaker").html(function(){
			return randomQuote.speaker;
		});
		$("#twitter").attr("data-text", function(){
			return "\"" + randomQuote.quote + "\"\n" + randomQuote.speaker;
		})
	};
	newQuote();


    $("#more").click(newQuote);

});


