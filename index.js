require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import express
const { Client, GatewayIntentBits, EmbedBuilder, Colors } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const app = express(); // Create an express application
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Use environment variables for the token and client ID
const TOKEN = process.env.DISCORD_TOKEN; 
const CLIENT_ID = process.env.DISCORD_CLIENT_ID; 

// Define your slash commands
const commands = [
    {
        name: 'fasttype',
        description: 'Type the given phrase as fast as you can!',
    },
];

const rest = new REST({ version: '9' }).setToken(TOKEN);

// Register the commands globally
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), {
            body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Set up a simple HTTP endpoint
app.get('/', (req, res) => {
    res.send('Hello! The bot is running.');
});

// Start the HTTP server
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
app.listen(PORT, () => {
    console.log(`HTTP server is running on port ${PORT}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'fasttype') {
        const phrases = [
            "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "A picture is worth a thousand words.",
    "Actions speak louder than words.",
    "Beauty is in the eye of the beholder.",
    "Brevity is the soul of wit.",
    "A watched pot never boils.",
    "When in Rome, do as the Romans do.",
    "The early bird catches the worm.",
    "Don't count your chickens before they hatch.",
    "Every cloud has a silver lining.",
    "Fortune favors the bold.",
    "Good things come to those who wait.",
    "If it ain't broke, don't fix it.",
    "Ignorance is bliss.",
    "It's better to be safe than sorry.",
    "Laughter is the best medicine.",
    "No man is an island.",
    "Practice makes perfect.",
    "The pen is mightier than the sword.",
    "There's no place like home.",
    "Time flies when you're having fun.",
    "You can't judge a book by its cover.",
    "A penny saved is a penny earned.",
    "Actions have consequences.",
    "Better late than never.",
    "Birds of a feather flock together.",
    "Cleanliness is next to godliness.",
    "Don't bite the hand that feeds you.",
    "Don't put all your eggs in one basket.",
    "Every rose has its thorn.",
    "Familiarity breeds contempt.",
    "Haste makes waste.",
    "Honesty is the best policy.",
    "If you can't stand the heat, get out of the kitchen.",
    "It takes two to tango.",
    "Jack of all trades, master of none.",
    "Knowledge is power.",
    "Let sleeping dogs lie.",
    "Money can't buy happiness.",
    "No pain, no gain.",
    "Out of sight, out of mind.",
    "Practice what you preach.",
    "Rome wasn't built in a day.",
    "Silence is golden.",
    "The grass is always greener on the other side.",
    "The road to hell is paved with good intentions.",
    "There's no such thing as a free lunch.",
    "Two heads are better than one.",
    "What goes around comes around.",
    "When the going gets tough, the tough get going.",
    "You can't have your cake and eat it too.",
    "You reap what you sow.",
    "A fool and his money are soon parted.",
    "A house divided against itself cannot stand.",
    "A leopard can't change its spots.",
    "A rolling stone gathers no moss.",
    "All good things come to an end.",
    "All's fair in love and war.",
    "An apple a day keeps the doctor away.",
    "As you sow, so shall you reap.",
    "Barking dogs seldom bite.",
    "Blood is thicker than water.",
    "Charity begins at home.",
    "Clean slate.",
    "Curiosity killed the cat.",
    "Don't judge a man until you've walked a mile in his shoes.",
    "Don't throw the baby out with the bathwater.",
    "Every dog has its day.",
    "Fool me once, shame on you; fool me twice, shame on me.",
    "Good fences make good neighbors.",
    "He who laughs last laughs best.",
    "Hope for the best, but prepare for the worst.",
    "If you want something done right, do it yourself.",
    "In the land of the blind, the one-eyed man is king.",
    "It’s not the size of the dog in the fight, it’s the size of the fight in the dog.",
    "Keep your friends close and your enemies closer.",
    "Knowledge is a treasure, but practice is the key to it.",
    "Let the cat out of the bag.",
    "Life is what happens when you're busy making other plans.",
    "Make hay while the sun shines.",
    "Misery loves company.",
    "No use crying over spilled milk.",
    "One man's trash is another man's treasure.",
    "Out of the frying pan and into the fire.",
    "Patience is a virtue.",
    "Penny for your thoughts.",
    "Practice makes perfect.",
    "Put your best foot forward.",
    "Revenge is a dish best served cold.",
    "The apple doesn't fall far from the tree.",
    "The best things in life are free.",
    "The calm before the storm.",
    "The devil is in the details.",
    "The early bird gets the worm.",
    "The proof of the pudding is in the eating.",
    "The squeaky wheel gets the grease.",
    "There's no time like the present.",
    "To err is human; to forgive, divine.",
    "Too many cooks spoil the broth.",
    "Turn over a new leaf.",
    "What doesn't kill you makes you stronger.",
    "When it rains, it pours.",
    "You can't make an omelet without breaking eggs.",
    "You can't teach an old dog new tricks.",
    "You win some, you lose some.",
    "A bird in the hand is worth two in the bush.",
    "A chain is only as strong as its weakest link.",
    "A friend in need is a friend indeed.",
    "A house is not a home.",
    "A little knowledge is a dangerous thing.",
    "A stitch in time saves nine.",
    "All bark and no bite.",
    "All roads lead to Rome.",
    "Beggars can't be choosers.",
    "Better safe than sorry.",
    "Blood will out.",
    "Caught between a rock and a hard place.",
    "Don't count your blessings before they hatch.",
    "Don't put the cart before the horse.",
    "Every little bit helps.",
    "Faint heart never won fair lady.",
    "Fools rush in where angels fear to tread.",
    "Good things come in small packages.",
    "If it sounds too good to be true, it probably is.",
    "If you can't beat them, join them.",
    "If you lie down with dogs, you will get up with fleas.",
    "In for a penny, in for a pound.",
    "It takes one to know one.",
    "Keep your chin up.",
    "Kill two birds with one stone.",
    "Let bygones be bygones.",
    "Make a mountain out of a molehill.",
    "Money talks.",
    "No news is good news.",
    "One step at a time.",
    "Put all your eggs in one basket.",
    "Rome wasn't built in a day.",
    "Seeing is believing.",
    "The best laid plans of mice and men often go awry.",
    "The grass is always greener on the other side.",
    "The more things change, the more they stay the same.",
    "There's no place like home.",
    "Time and tide wait for no man.",
    "To each their own.",
    "Too good to be true.",
    "Two wrongs don't make a right.",
    "What goes up must come down.",
    "When the cat's away, the mice will play.",
    "You can't always get what you want.",
    "You can't have it both ways.",
    "You can't teach an old dog new tricks.",
    "You reap what you sow.",
    "Your guess is as good as mine."
        ];

        const phrase = phrases[Math.floor(Math.random() * phrases.length)];

        // Send the initial embed for the typing challenge
        const challengeEmbed = new EmbedBuilder()
            .setTitle('Fast Type Challenge')
            .setDescription(`Type this phrase as fast as you can:\n\n**"${phrase}"**`)
            .setColor(Colors.Blue);

        await interaction.reply({ embeds: [challengeEmbed] });

        // Wait for the user's response
        const filter = response => response.author.id === interaction.user.id;
        const collector = interaction.channel.createMessageCollector({ filter }); // No time limit

        let startTime = Date.now();

        collector.on('collect', collected => {
            const userInput = collected.content.trim(); // Trim whitespace
            const targetPhrase = phrase.trim(); // Trim whitespace

            console.log(`User  typed: "${userInput}"`); // Debugging line

            // Compare the trimmed and lowercased inputs
            if (userInput.toLowerCase() === targetPhrase.toLowerCase()) {
                collector.stop('correct');

                const endTime = Date.now();
                const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
                const numWords = targetPhrase.split(' ').length;
                const wpm = (numWords / timeTaken) * 60; // Calculate words per minute
                const accuracy = 100; // Assuming the user typed the phrase correctly

                // Create the result embed
                const resultEmbed = new EmbedBuilder()
                    .setTitle('Fast Type Result')
                    .addFields(
                        { name: 'Time Taken', value: `${timeTaken.toFixed(2)} seconds`, inline: true },
                        { name: 'Words Per Minute', value: `${wpm.toFixed(2)} wpm`, inline: true },
                        { name: 'Accuracy', value: `${accuracy}%`, inline: true }
                    )
                    .setColor(Colors.Green);

                interaction.followUp({ embeds: [resultEmbed] });
            } else {
                interaction.followUp(`That's not correct! Keep trying!`);
            }
        });
    }
});

// Log in to Discord with your bot's token
client.login(TOKEN);
