function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    let timeString = `${hours}:${minutes}:${ampm}`;
    document.getElementById("clock").innerText = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();



function getMotivationalQuote() {
    const quotes = [
        '"The people who are crazy enough to think they can change the world are the ones who do." – Steve Jobs',
        '"Your time is limited, so don’t waste it living someone else’s life." – Steve Jobs',
        '"The best way to predict the future is to invent it." – Alan Kay',
        '"I do not fear computers. I fear the lack of them." – Isaac Asimov',
        '"The science of today is the technology of tomorrow." – Edward Teller',
        '"It’s not that we use technology, we live technology." – Godfrey Reggio',
        '"You have to work on the right problem, at the right time, in the right way." – Elon Musk',
        '"I think it is possible for ordinary people to choose to be extraordinary." – Elon Musk',
        '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." – Aristotle',
        '"Great companies are built on great products." – Elon Musk',
        '"Innovation distinguishes between a leader and a follower." – Steve Jobs',
        '"Live as if you were to die tomorrow. Learn as if you were to live forever." – Mahatma Gandhi',
        '"If something is important enough, even if the odds are against you, you should still do it." – Elon Musk',
        '"Any sufficiently advanced technology is indistinguishable from magic." – Arthur C. Clarke',
        '"If you don’t fail occasionally, you’re not trying hard enough." – Elon Musk',
        '"The only way to learn a new programming language is by writing programs in it." – Dennis Ritchie',
        '"Education is not the learning of facts, but the training of the mind to think." – Albert Einstein',
        '"Sometimes it is the people no one can imagine anything of who do the things no one can imagine." – Alan Turing',
        '"You don’t learn to walk by following rules. You learn by doing, and by falling over." – Richard Branson',
        '"The function of good software is to make the complex appear to be simple." – Grady Booch',
        '"Do not go where the path may lead, go instead where there is no path and leave a trail." – Ralph Waldo Emerson',
        '"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer',
        '"If debugging is the process of removing software bugs, then programming must be the process of putting them in." – Edsger Dijkstra',
        '"I have not failed. I’ve just found 10,000 ways that won’t work." – Thomas Edison',
        '"Stay hungry, stay foolish." – Steve Jobs',
        '"The greatest glory in living lies not in never falling, but in rising every time we fall." – Nelson Mandela',
        '"In technology, whatever can be done will be done." – Andy Grove',
        '"The important thing is not to stop questioning. Curiosity has its own reason for existing." – Albert Einstein',
        '"Make every detail perfect and limit the number of details to perfect." – Jack Dorsey',
        '"I would rather fail in a cause that will ultimately succeed than succeed in a cause that will ultimately fail." – Woodrow Wilson',
        '"Paso corto, vista larga." – Pitbull'
    ];

    let today = new Date().getDate() % quotes.length;
    document.getElementById("motivational-quote").innerText = quotes[today];
}

getMotivationalQuote();
