const { Client, IntentsBitField, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const express = require('express'); 

const app = express();
const port = 3000; // You can change this to your desired port

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
  ],
});

const easyWords = ["Jumps over the lazy dog" ,
"A quick brown fox" ,
"Jumps over a dog" ,
"The lazy dog sleeps" ,
"Quick brown fox" ,
"Lazy dog sleeps" ,
"Jump high" ,
"Run fast" ,
"Red car" ,
"Blue sky" ,
"Green grass" ,
"Happy days" ,
"Good morning" ,
"Hello world" ,
"How are you?" ,
"I am fine" ,
"Thank you" ,
"Your welcome" ,
"Please and thank you" ,
"One two three" ,
"Red, green, blue" ,
"Up and down" ,
"Left and right" ,
"Round and round" ,
"Fast and slow" ,
"Hot and cold" ,
"Big and small" ,
"Long and short" ,
"Black and white" ,
"Yes or no" ,
"On and off" ,
"In and out" ,
"Up and down" ,
"Over and under" ,
"Around and around" ,
"Happy birthday" ,
"Merry Christmas" ,
"Happy New Year" ,
"Good night" ,
"Sweet dreams" ,
"See you later" ,
"Take care" ,
"Have a nice day" ,
"I love you" ,
"You are welcome" ,
"Please help me" ,
"Thank you very much" ,
"I appreciate it" ,
"You're the best" ,
"I agree" ,
"I disagree" ,
"Maybe later" ,
"I understand" ,
"I don't know" ,
"I think so" ,
"I hope so" ,
"Let's go" ,
"Come here" ,
"Go away" ,
"Stop now" ,
"Look out" ,
"Listen up" ,
"Hurry up" ,
"Slow down" ,
"Turn around" ,
"Look here" ,
"Come on" ,
"Keep going" ,
"Give it a try" ,
"Good job" ,
"Well done" ,
"Nice work" ,
"Keep practicing" ,
"You can do it" ,
"I believe in you" ,
"Never give up" ,
"Try again" ,
"One more time" ,
"Let's play" ,
"Ready, set, go" ,
"Stop and wait" ,
"Take a break" ,
"Have fun" ,
"Be careful" ,
"Stay safe" ,
"Help me please" ,
"Can you help me?" ,
"I need your help" ,
"Thank you for your help" ,
"I am sorry" ,
"Excuse me" ,
"If you please" ,
"May I help you?" ,
"What's your name?" ,
"My name is..." ,
"Nice to meet you" ,
"How are you doing?" ,
"I am doing well" ,
"Have a good day" ,
"See you soon"];
const mediumWords = ["The cat sat on the mat" ,
"A dog is man's best friend" ,
"The sky is blue" ,
"The grass is green" ,
"The sun is shining" ,
"The rain is falling" ,
"The wind is blowing" ,
"The birds are singing" ,
"The flowers are blooming" ,
"The trees are growing" ,
"The moon is shining" ,
"The stars are twinkling" ,
"The ocean is blue" ,
"The mountains are high" ,
"The forest is green" ,
"The river is flowing" ,
"The waterfall is crashing" ,
"The beach is sandy" ,
"The sand is hot" ,
"The sun is warm" ,
"The water is cool" ,
"The air is fresh" ,
"The food is delicious" ,
"The coffee is hot" ,
"The tea is strong" ,
"The wine is good" ,
"The beer is cold" ,
"The music is loud" ,
"The movie is good" ,
"The book is interesting" ,
"The game is exciting" ,
"The sport is fun" ,
"The dance is beautiful" ,
"The art is amazing" ,
"The science is fascinating" ,
"The math is difficult" ,
"The history is interesting" ,
"The English is hard" ,
"The French is difficult" ,
"The Spanish is easy" ,
"The German is hard" ,
"The Italian is beautiful" ,
"The Japanese is difficult" ,
"The Chinese is hard" ,
"The Russian is difficult" ,
"The Arabic is difficult" ,
"The Hindi is difficult" ,
"The Bengali is difficult" ,
"The Punjabi is difficult" ,
"The Tamil is difficult" ,
"The Telugu is difficult" ,
"The Malayalam is difficult" ,
"The Kannada is difficult" ,
"The Marathi is difficult" ,
"The Gujarati is difficult" ,
"The Odia is difficult" ,
"The Assamese is difficult" ,
"The Bengali is difficult" ,
"The Bodo is difficult" ,
"The Manipuri is difficult" ,
"The Mizo is difficult" ,
"The Naga is difficult" ,
"The Khasi is difficult" ,
"The Garo is difficult" ,
"The Hmar is difficult" ,
"The Kachin is difficult" ,
"The Karen is difficult" ,
"The Shan is difficult" ,
"The Mon is difficult" ,
"The Karenni is difficult" ,
"The Kayah is difficult" ,
"The Lahu is difficult" ,
"The Akha is difficult" ,
"The Wa is difficult" ,
"The Lisu is difficult" ,
"The Palaung is difficult" ,
"The Karenni is difficult" ,
"The Shan is difficult" ,
"The Mon is difficult" ,
"The Karenni is difficult" ,
"The Kayah is difficult" ,
"The Lahu is difficult" ,
"The Akha is difficult" ,
"The Wa is difficult" ,
"The Lisu is difficult" ,
"The Palaung is difficult" ,
"The Karenni is difficult" ,
"The Shan is difficult" ,
"The Mon is difficult" ,
"The Karenni is difficult" ,
"The Kayah is difficult" ,
"The Lahu is difficult" ,
"The Akha is difficult" ,
"The Wa is difficult" ,
"The Lisu is difficult" ,
"The Palaung is difficult" ,
"The Karenni is difficult" ,
"The Shan is difficult" ,
"The Mon is difficult" ,
"The Karenni is difficult" ,
"The Kayah is difficult" ,
"The Lahu is difficult" ,
"The Akha is difficult" ,
"The Wa is difficult" ,
"The Lisu is difficult" ,
"The Palaung is difficult" ,
"The Karenni is difficult" ,
"The Shan is difficult" ,
"The Mon is difficult" ,
"The Karenni is difficult" ,
"The Kayah is difficult" ,
"The Lahu is difficult" ,
"The Akha is difficult" ,
"The Wa is difficult" ,
"The Lisu is difficult" ,
"The Palaung is difficult"];
const hardWords = ["cryptography", "authentication", "authorization", "cybersecurity", "machinelearning",
"Supercalifragilisticexpialidocious" ,
"Pneumonoultramicroscopicsilicovolcanoconiosis" ,
"Antidisestablishmentarianism" ,
"Pseudopseudohypoparathyroidism" ,
"Floccinaucinihilipilification" ,
"Honorificabilitudinitatibus" ,
"Hippopotomonstrosesquipedalianism" ,
"Sesquipedalian" ,
"Obfuscation" ,
"Indubitably" ,
"Quintessential" ,
"Serendipitous" ,
"Mellifluous" ,
"Magnanimous" ,
"Ubiquitous" ,
"Ethereal" ,
"Nostalgia" ,
"Melancholic" ,
"Conscientious" ,
"Perseverence" ,
"Perambulate" ,
"Equivocal" ,
"Paradoxical" ,
"Synergistic" ,
"Circumnavigate" ,
"Simultaneously" ,
"Synchronicity" ,
"Quintessence" ,
"Fortuitous" ,
"Indefatigable" ,
"Magniloquent" ,
"Loquacious" ,
"Verisimilitude" ,
"Infallibility" ,
"Indelible" ,
"Inimitable" ,
"Invincible" ,
"Inscrutable" ,
"Intangible" ,
"Intricate" ,
"Intriguing" ,
"Invaluable" ,
"Invulnerable" ,
"Irascible" ,
"Irrational" ,
"Irrevocable" ,
"Irresistible" ,
"Irreversible" ,
"Irrelevant" ,
"Irreplaceable" ,
"Irreproachable" ,
"Iridescent" ,
"Itinerant" ,
"Inexorable" ,
"Inexplicable" ,
"Inexcusable" ,
"Inexplicable" ,
"Infallible" ,
"Indefatigable" ,
"Indelible" ,
"Inimitable" ,
"Invincible" ,
"Inscrutable" ,
"Intangible" ,
"Intricate" ,
"Intriguing" ,
"Invaluable" ,
"Invulnerable" ,
"Irascible" ,
"Irrational" ,
"Irrevocable" ,
"Irresistible" ,
"Irreversible" ,
"Irrelevant" ,
"Irreplaceable" ,
"Irreproachable" ,
"Iridescent" ,
"Itinerant" ,
"Inexorable" ,
"Inexplicable" ,
"Inexcusable" ,
"Inexplicable" ,
"Infallible" ,
"Indefatigable" ,
"Indelible" ,
"Inimitable" ,
"Invincible" ,
"Inscrutable" ,
"Intangible" ,
"Intricate" ,
"Intriguing" ,
"Invaluable" ,
"Invulnerable" ,
"Irascible" ,
"Irrational" ,
"Irrevocable" ,
"Irresistible" ,
"Irreversible" ,
"Irrelevant" ,
"Irreplaceable" ,
"Irreproachable" ,
"Iridescent" ,
"Itinerant" ,
"Inexorable" ,
"Inexplicable" ,
"Inexcusable" ,
"Inexplicable" ,
"Infallible" ,
"Indefatigable" ,
"Indelible" ,
"Inimitable" ,
"Invincible" ,
"Inscrutable" ,
"Intangible" ,
"Intricate" ,
"Intriguing" ,
"Invaluable" ,
"Invulnerable" ,
"Irascible" ,
"Irrational" ,
"Irrevocable" ,
"Irresistible" ,
"Irreversible" ,
"Irrelevant" ,
"Irreplaceable" ,
"Irreproachable" ,
"Iridescent" ,
"Itinerant" ,
"Inexorable" ,
"Inexplicable" ,
"Inexcusable" ,
"Inexplicable"];

client.once('ready', async () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);

  const commands = [
    new SlashCommandBuilder()
      .setName('fasttype')
      .setDescription('Start a fast typing race.')
      .addStringOption((option) =>
        option
          .setName('difficulty')
          .setDescription('Choose difficulty level')
          .setRequired(true)
          .addChoices(
            { name: 'Easy', value: 'easy' },
            { name: 'Medium', value: 'medium' },
            { name: 'Hard', value: 'hard' }
          )
      ),
  ];

  try {
    await client.application.commands.set(commands);
    console.log('Slash commands deployed globally.');
  } catch (error) {
    console.error('Error deploying commands:', error);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'fasttype') {
    const difficulty = interaction.options.getString('difficulty');
    let wordList;

    switch (difficulty) {
      case 'easy':
        wordList = easyWords;
        break;
      case 'medium':
        wordList = mediumWords;
        break;
      case 'hard':
        wordList = hardWords;
        break;
      default:
        await interaction.reply('Invalid difficulty. Use /fasttype with easy, medium, or hard.');
        return;
    }

    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    const wordEmbed = new EmbedBuilder()
      .setTitle('Fast Type Challenge')
      .setDescription(`**Type this:** ${randomWord}`)
      .setColor('#0099FF');

    await interaction.reply({ embeds: [wordEmbed] });

    const startTime = performance.now();

    const filter = (msg) => msg.author.id === interaction.user.id && msg.content.trim().toLowerCase() === randomWord.toLowerCase();

    const collector = interaction.channel.createMessageCollector({ filter, time: 30000 });

    let winner = null;

    collector.on('collect', (msg) => {
      if (!winner) {
        const endTime = performance.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2); 
        const wordsPerMinute = (60 / timeTaken).toFixed(2); 

        collector.stop();

        const resultEmbed = new EmbedBuilder()
          .setTitle('Fast Type Results')
          .setDescription(`${msg.author} finished the race! 🏆`)
          .addFields(
            { name: 'Time', value: `${timeTaken} seconds`, inline: true },
            { name: 'Words Per Minute', value: `${wordsPerMinute} WPM`, inline: true },
            { name: 'Accuracy', value: '100%', inline: true } // Always 100% accuracy if the word is typed correctly
          )
          .setColor('#00FF00')
          .setFooter({ text: 'Great job!' });

        interaction.followUp({ embeds: [resultEmbed] });
      }
    });

    collector.on('end', (collected, reason) => {
      if (!winner) {
        const timeoutEmbed = new EmbedBuilder()
          .setTitle('Typing Race Timeout')
          .setDescription(`⏳ Time's up! No one typed the word correctly.`)
          .setColor('#FF0000');

        interaction.followUp({ embeds: [timeoutEmbed] });
      }
    });
  }
});

client.login(process.env.TOKEN);

// Simple HTTP server
app.get('/', (req, res) => {
  res.send('Hello from the Fast Type Bot!');
});

app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});
