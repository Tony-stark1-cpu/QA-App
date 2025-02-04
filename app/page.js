"use client";

import React, { useState, useEffect } from "react"; // ✅ Import useEffect here
import { Container, Typography, Button, Box, TextField, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";


const questions = {
  "Romantic 💖": [
    "What was the first thing you noticed about me that made you feel something special?",
    "If we could have our dream date anywhere in the world, where would it be and what would we do?",
    "What song reminds you of me the most, and why?",
    "Describe how you feel when you hear my voice.",
    "What is one little thing I do that makes you feel loved?",
    "If I could wake up next to you right now, what’s the first thing you’d say or do?",
    "If we were living together, what’s the first thing we’d do every morning?",
    "What's one love letter you’d write to me in a single sentence?",
    "What’s your favorite memory of us together so far?",
    "If we were cuddling right now, what’s one thing you’d whisper to me?",
    "What’s one promise you’d make to me that you’d never break?",
    "If I were to plan the most romantic surprise for you, what should it include?",
    "What’s something you wish I told you more often?",
    "If you had to describe how I make you feel using only a color, what color would it be and why?",
    "What’s the one thing that makes you feel closest to me despite the distance?",
    "If I could teleport to you right now for 5 minutes, what would we do?",
    "What’s your favorite thing about us that makes our relationship special?",
    "If we wrote a love letter together, what would be the first line?",
    "What’s one thing about me that makes you fall for me over and over again?",
    "If we could freeze time and stay in one moment together forever, which moment would you choose?",
    "What’s something you haven’t told me yet that you think would make me fall even harder for you?",
    "If I could kiss you right now, where would you want it, and why?",
    "What’s one thing about me that you find irresistibly adorable?",
    "If you could bottle up one memory of us together, which one would you keep forever?",
    "What’s one small, random thing that reminds you of me when I’m not around?",
    "What is one little thing I do that makes you feel loved?",
    "If I could wake up next to you right now, what’s the first thing you’d say or do?",
    "If we were living together, what’s the first thing we’d do every morning?",
    "What's one love letter you’d write to me in a single sentence?",
    "If our love story were a movie, what would be the title and why?"
  ],
  "Flirty 😉": [
    "If you had to describe our chemistry in three words, what would they be?",
    "What’s one thing you think about me when you’re alone?",
    "If we were playing truth or dare, what’s the first dare you’d give me?",
    "What’s a secret about you that only I get to know?",
    "What’s the most teasing thing I’ve ever said or done that made you blush?",
    "If I whispered something into your ear right now, what would you want it to be?",
    "What’s one thing about me that turns you on the most?",
    "If I were right next to you, what’s the first thing you’d do?",
    "What’s one compliment about my looks you’ve been holding back?",
    "If we could spend 24 hours together, what’s something mischievous you’d want us to do?",
    "What’s the most attractive thing I do without realizing it?",
    "What’s something unexpectedly sexy about me that you haven’t told me yet?",
    "If you had to pick one part of my body to kiss first, where would it be?",
    "If I dared you to describe how badly you want me right now, how would you say it?",
    "What’s the sexiest thing you’ve ever thought about us doing?",
    "If we played strip Cards right now, who do you think would lose first—and why?",
    "If we were at a party together, how would you flirt with me?",
    "If I could only send you one flirty text every morning, what message would make you weak every time?",
    "What’s the sexiest outfit you’d love to see me in?",
    "If we were hiding under the covers together, what’s the first thing you’d whisper to me?",
    "If I leaned in really close to your ear and whispered something, what would you want me to say?",
    "What’s the most adventurous thing you've ever done in the name of love?",
    "If I sent you a surprise picture right now, what kind would you want?",
    "If you could make one wish about our next night together, what would it be?",
    "What’s your favorite way to tease me when we’re chatting?",
    "If we had a secret signal for “I want you right now,” what would it be?",
    "Describe, in the most teasing way possible, what you’d do if I was sitting on your lap.",
    "Do you ever think about me at random moments during the day?",
    "What’s a secret talent of yours that would surprise me?",
    "If I asked you to send me a 3-word text to make me think about you all night, what would you write?"
  ],
  "Spicy 🔥": [
    "If I gave you full control over me for a night, what’s the first thing you’d do?",
    "What’s the sexiest text I could send you right now?",
    "If I asked you to describe your wildest fantasy with me, what would it be?",
    "What’s one thing you’d want me to do to you over a video call?",
    "If we were in a room alone for an hour with no rules, what’s the first move you’d make?",
    "What’s something you’ve always wanted me to say during an intimate moment?",
    "Describe in detail how you’d tease me if we were in the same bed right now.",
    "What’s the naughtiest thought you’ve ever had about me?",
    "If we played a 'no touching' rule game while being close, who would break first and why?",
    "What’s one thing you’d whisper in my ear to make me weak?",
    "If I told you to type out your deepest desire in the most detailed way possible, what would you write?",
    "If I asked you to send me a text that would make me blush instantly, what would you type?",
    "Imagine I’m lying down, waiting for you—what’s the first thing you’d do to me?",
    "If you could describe the way you want me to touch you in just 5 words, what would they be?",
    "What’s one naughty command you’d give me if I promised to obey?",
    "What’s the dirtiest thing you’ve ever imagined us doing together?",
    "If you could control what I wear (or don’t wear) for a night, what would you choose?",
    "If I challenged you to text me something so steamy I couldn’t focus for the rest of the day, what would you say?",
    "If I were blindfolded, what’s the first thing you’d want to do to me?",
    "If we were playing a teasing challenge, what’s the one thing you’d do to make sure I lose first?",
    "If I let you take full control of me for an entire night, what’s the first three things you’d do?",
    "If I were completely at your mercy for one night, what’s the first thing you’d do?",
    "If I told you to make me weak with just one text, what would you type?",
    "If I promised to do anything you ask for 10 minutes, how would you use your time?",
    "If I were there right now, would you let me tie you up, or would you rather tie me down?",
    "What’s the filthiest thought you’ve ever had about me but never said out loud?",
    "What’s one forbidden desire you’ve imagined us doing together?",
    "What’s a taboo thought you’ve had about me but never dared to say out loud?",
    "What’s one fantasy you’ve been too shy to tell me about?",
    "What’s the dirtiest order you’d love to whisper in my ear while pinning me down?",
    "If you had to tease me slowly, what’s the first thing you’d start with?",
    "Describe the slowest, most teasing way you’d undress me if we were alone right now.",
    "If you could leave one mark on my body that only we’d know about, where would it be and how would you do it?",
    "If I challenged you to edge me mercilessly over a video call, how would you do it?",
    "If we were playing a no touching challenge, how would you make me give in first?",
    "Describe, in the most detailed way, exactly what you’d do to me if we had no limits for one night.",
    "If I were lying in bed, waiting for you with nothing but the sheets, how would you make your first move?",
    "If I were blindfolded, what’s the first thing you’d want to do to me?",
    "Imagine you can only use your lips on me for an entire night—where do you start, and what do you do?",
    "What’s something so dirty and hot that you’d only whisper it in my ear?",
    "What’s the most wicked thought you've ever had about me when you were alone?",
    "If I told you to describe exactly how you’d want me to please you, what would you say?",
    "If I asked you to text me something that would make my whole body tingle, what would you send?",
    "What’s the most reckless thing you’d do with me if no one was watching?",
    "What’s the most daring place you’ve ever fantasized about us being intimate?",
    "What’s the most intense orgasm you’ve ever had, and can I top it?",
    "How do you feel about using ice or heat as part of our foreplay?",
    "If I let you give me one command that I had to obey without question, what would it be?",
    "What’s the most dominant thing you’d want me to do to you?",
    "If I whispered exactly what I want to do to you in your ear, how would you react?",
    "If I told you to type out your deepest desire in the most detailed way possible, what would you write?"
  ],
  "Dirty 😈": [
    "If I were completely tied up, what’s the first thing you’d do to me?",
    "If I gave you a 60-second timer to make me beg, how would you do it?",
    "If you could only use your hands or your mouth on me, which would you choose and why?",
    "What’s one explicit fantasy you’d act out if I gave you total control?",
    "If I told you to describe exactly how you touch yourself when you think of me, what would you say?",
    "If I was on my knees in front of you, what’s the first thing you’d say to me?",
    "Describe the naughtiest way you’d wake me up if we were sleeping together.",
    "If I dared you to drive me insane over a voice message, what would you say in the most seductive tone?",
    "If I were there, would you let me use toys on you, or would you rather use them on me?",
    "If I were there, would you let me record us together, just for us to watch later?",
    "What’s the most embarrassing place you’ve ever gotten turned on thinking about me?",
    "If I sent you a naughty picture right now, what would you want to see?",
    "Do you ever touch yourself while thinking about me?If yes When?",
    "Do you like Threesome or Foursome?",
    "Do you ever been turned on by anyone else other than Me?",
    "Which Sex position do you like the most?",
    "When did you watch porn recently?",
    "Are you in a Mood to watch porn?if Yes which Category?",
    "Have you ever accidentally sent a sext to the wrong person?If Yes whom and what is that?",
    "What’s your favorite body part of mine?",
    "What’s your biggest roleplay fantasy?",
    "Would you rather only have morning sex for the rest of your life, or never have morning sex again?",
    "What was your first sexual fantasy?",
    "Which celebrity would you like to  make out with?",
    "What sexual act arouses you the most?",
    "What is your favorite type of foreplay?",
    "What is the weirdest sexual request you have ever received?",
    "Name 2 sexual things you're not into and Why?",
    "Name your favorite places to be touched(Only 2) and rank them",
    "Have you thought of Mastrubating in the Bathroom",
    "Do you like getting spanked during sex?",
    "How do you feel about watching a couple have sex?",
    "Have you ever thought of incorporating food into foreplay?",
    "What’s the sexiest dare you’ve ever agreed to do(Not given by me)?",
    "How do you feel about anal sex?",
    "Do you like the idea of tying me up or being tied up?",
    "Doggy style or cowgirl?",
    "Is this making you wet?"
    
    

  ],
  "Dare 🎭": [
    "Send me a voice note describing in detail what you’d do to me if we were together right now.",
    "Record a video of yourself whispering something so naughty that I’ll be thinking about it all day and Send me",
    "Send me a message telling me exactly what you’d do if I was in bed with you, waiting for you with nothing on.",
    "Whisper into your phone what you'd do to me if I was completely at your mercy for an entire night—record and send it.",
    "Write a naughty “bucket list” item involving us and share it with me—something we’ve never done but you crave.",
    "Take a photo of your bed and tell me exactly what you’d want us to do there.",
    "Write me a dirty poem or short story involving us—something that would make me blush",
    "I dare you to send a photo of the outfit you’d wear if we were having a private night in private Room",
    "Write down three places on your body you’d let me trace with my fingertips… and send it.",
    "I dare you to leave me a voicemail pretending we’re in the middle of a steamy moment. Use your imagination.",
    "Close your eyes, and describe exactly what you’d do to me if I were there right now. Record and Send me",
    "I dare you to write out a detailed plan for our first hour together when we reunite… and share it.",
    "I dare you to send me a voice note of your honest reaction if I showed up at your door",
    "Text me a flirty message using only emojis that represents how you feel about me.",
    "Give yourself a sensual massage(Anywhere) on camera and show me how you would do it if I were there.",
    "Send me a picture of your favorite part of your body, but make it artistic and sexy!",
    "Show me how you would kiss me if we were face-to-face right now, using only your lips on the screen.",
    "Film a 10-second video of your hand slowly tracing your collarbone, hips, and inner thigh—then describe where you wish my hands were.",
    "Moan my name and Send me",
    "Spend 5 Mins imagining me near you,confess what you imagined about us—what surprised you? What made you crave more?",
    "I will be Deciding what dress you will wear Tommorow(Including Inners).You have to ask me the night before",
    "Search for porn and send me a Video link that you like!",
    "Film and Send a video pretending you’re performing oral on me. Include sound effects",
    "Send me a video of you slowly undressing, but pause at the most teasing moment and tell me what you’d want me to do next.",
    "Make me Wet and Hard in 5-Min,if you don't you will lose",
    "Think Orange- Boy as me and Make him Touch your body where you want me to touch, Record and Send Me",
    "Send me a sexy Pic which you have never sent me before(Don't ask me how you want)",
    "Kiss me 20 times and Record and send it",
    "Record a tour Video under your dress with you wearing it",
    "Send me Soapy Tits😁",
    "Send me pic of your Inner you are wearing right now",
    "Touch the Cuties through the Clothes and send me that",
    "Touch Your Pussy through the Inner and send me ",
    "Imagine Your Fingers as Me. Record and send what will you do to it",
    "Touch Your ass inside your Inner(No need Proof)",
    "Remove all your inners Inside your bedsheet when you are inside the room, Send me the Proof!"

    
  ]
};
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [dareOptions, setDareOptions] = useState([]);
  const router = useRouter();

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setDareOptions([]); // Reset dare options if switching categories

    if (category === "Dare 🎭") {
      setShowRules(true);
      return;
    }

    const res = await fetch('/api/get-answered-questions');
    const data = await res.json();
    const alreadyAnswered = data.answeredQuestions.map(q => q.question);

    let availableQuestions = questions[category].filter(q => !alreadyAnswered.includes(q));

    if (availableQuestions.length === 0) {
      setQuestion("You have answered all questions in this category! 🎉");
      return;
    }

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setQuestion(randomQuestion);
  };

  const acceptDare = async () => {
    setShowRules(false);

    const res = await fetch('/api/get-answered-questions');
    const data = await res.json();
    const alreadyAnswered = data.answeredQuestions.map(q => q.question);

    let availableQuestions = questions["Dare 🎭"].filter(q => !alreadyAnswered.includes(q));

    if (availableQuestions.length < 2) {
      setQuestion("You have completed all dares! 🎭🔥");
      return;
    }

    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      let rand = Math.floor(Math.random() * availableQuestions.length);
      if (!randomIndexes.includes(rand)) {
        randomIndexes.push(rand);
      }
    }

    setDareOptions([availableQuestions[randomIndexes[0]], availableQuestions[randomIndexes[1]]]);
  };

  const handleDareSelection = (selectedDare) => {
    setQuestion(selectedDare);
    setDareOptions([]); // Hide dare options after selection
  };

  const handleSubmit = async () => {
    if (!answer) return;
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: selectedCategory, question, answer })
    });

    if (res.ok) {
      setSelectedCategory('');
      setQuestion('');
      setAnswer('');
      alert('Your response has been submitted! ✅');
      router.push('/');
    } else {
      alert('Error submitting your response.');
    }
  };

  return (
    <Container 
      maxWidth="sm" 
      className="fade-in"
      sx={{ 
        textAlign: 'center', 
        py: 4, 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 10px rgba(0,0,0,0.2)' }}>
        Romantic Spicy Q&A 💖🔥
      </Typography>

      {!selectedCategory ? (
        <>
          <Typography variant="h5" gutterBottom sx={{ color: '#fff', mb: 2 }}>
            Choose a category:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {Object.keys(questions).map((category) => (
              <Grid item key={category}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  startIcon={<FavoriteIcon />} 
                  className="glow-button"
                  sx={{
                    background: 'linear-gradient(45deg, #ff758c, #ff7eb3)',
                    borderRadius: '30px',
                    px: 4,
                    py: 1,
                    fontWeight: 'bold'
                  }}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Button>
              </Grid>
            ))}
          </Grid>
        </>
      ) : showRules ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
            🎭 Dare Rules 🎭
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>🔥 Choose a dare you feel comfortable doing.</Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>🔥 1) You must complete the Dare no matter what.</Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>💬 2) Answer "I will" or "Later" in the text box and complete the Dare in WhatsApp.</Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>⏳ 3) If you cannot do the Dare at the moment, you must complete it within 6 hours.</Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>🥵 4) Please Choose Only if are in a Mood to do some nughty Dares.</Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>🫥 5) If you want to Go back close and open the Link.</Typography>
          <Typography variant="body1" sx={{ color: '#fff', fontStyle: "italic", fontWeight: "bold", mb: 2 }}>❤️ 4) Love you Thango. ❤️</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            className="glow-button"
            onClick={acceptDare}
          >
            I Accept 🎭
          </Button>
        </Box>
      ) : dareOptions.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
            Choose a Dare 🎭🔥
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2, display: 'block', width: '100%' }} 
            onClick={() => handleDareSelection(dareOptions[0])}
          >
            {dareOptions[0]}
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2, display: 'block', width: '100%' }} 
            onClick={() => handleDareSelection(dareOptions[1])}
          >
            {dareOptions[1]}
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
            {selectedCategory}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: '#fff', fontStyle: 'italic', mb: 2 }}>
            {question}
          </Typography>
          <TextField
            label="Answer here..."
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            sx={{ 
              backgroundColor: '#fff', // ✅ White background
              borderRadius: '8px', 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ccc' }, // Light grey border
                '&:hover fieldset': { borderColor: '#ff758c' }, // Highlight border on hover
                '&.Mui-focused fieldset': { borderColor: '#ff416c' } // Highlight border on focus
              },
              '& textarea': { color: '#000' } // ✅ Ensures text is black
            }}
          />

          <Button variant="contained" color="primary" className="glow-button" onClick={handleSubmit}>
            Submit ❤️
          </Button>
        </Box>
      )}
    </Container>
  );
}
