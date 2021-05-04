import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from 'utils/variants';
import { PageTransition } from './PageTransition';


export function EditorPage({ editor }) {
  const { name, fullName, imgPath, bio } = editorData[editor];
  return (
    <PageTransition className='layout'>
      <div>
        <motion.img
          initial={{
            borderRadius: 'none'
          }}
          animate={{
            borderRadius: '50%'
          }}
          layoutId={`${name}_pic`}
          src={imgPath}
          alt={`${fullName}`}
        />
        <motion.h3
          style={{
            textTransform: 'uppercase'
          }}
          layoutId={`${name}_text`}
        >{fullName}</motion.h3>
      </div>
      <motion.section
        variants={containerVariants}
        initial='initial'
        animate='animate'
      >
        {bio.map((text, i) => (<motion.p layout variants={itemVariants} key={i}>{text}</motion.p>))}
      </motion.section>
    </PageTransition>
  );
}

const editorData = {
  jason: {
    name: 'jason',
    fullName: 'jason guisao',
    imgPath: '/jason.jpeg',
    bio: [
      'Jay Guisao is from Floral Park, NY; a forgettable village save for its abundance of tall trees. A contemporary gamer, Jay\'s first true love was his PS2 and the JRPG/racing simulator Road Trip Adventure.',
      'From there, he joined the vast ranks of Xbox owners with the arrival of the classic 360 console and dwelt in the fantastical universes of Dragon Age and Final Fantasy.',
      'These days, you\'ll find him wildly shot-calling for his amateur Apex Legends team as they rigorously venture to carve a path through the console competitive scene.',
      ''
    ]
  },
  marcus: {
    name: 'marcus',
    fullName: 'marcus stewart',
    imgPath: '/marcus.jpeg',
    bio: [
      'Marcus Stewart\'s life has always revolved around video games. He grew up playing them obsessively, studied game design in college, sold them at retail, and even appeared as an in-game character once.',
      'Marcus began writing about games in 2011 and spent years getting paid in both exposure and actual monies. He plays as much as he can but especially enjoys platformers, action/adventure, and RPG\'s.',
      'Marcus also streams on Twitch (Marcus Streams Games), records Let\'s Plays on his YouTube channel (Marcus Makes Media), and co-hosts the Sailor Moon comedy review show, A Podcast by Moonlight on Spotify and Apple Podcast.'
    ]
  },
  alex: {
    name: 'alex',
    fullName: 'alex van aken',
    imgPath: '/alexvanaken.jpeg',
    bio: [
      'From real-time strategy games of the late 90s to MMORPG\'s of the mid-2000s and all the way to current battle royales like Apex Legends, Alex has spent his life trying to find a better multiplayer game than Halo 2.',
      'Alex Van Aken hails from Richmond, VA originally, however, he has spent the last 5+ years podcasting and filming videos about games from his home in sunny Boulder, CO. When not enjoying a weekend brunch with his wife or spending evenings writing music, Alex loves to play video games (that\'s obvious, right?).',
      'In particular, he enjoys competitive first-person shooters, strategy and stealth games, MMORPG\'s, indies, and a bevy of battle royale titles. Van Aken\'s favorite games of all time include World of Warcraft, Halo, Animal Crossing, Celeste, and more recently, Zelda: Breath of the Wild.',
      ''
    ]
  },
  liana: {
    name: 'liana',
    fullName: 'liana ruppert',
    imgPath: '/lianaruppert.jpeg',
    bio: [
      'With an arguably unhealthy obsession with Dragon Age and Mass Effect, Liana is wildly passionate about all things in the gaming community. From shooters to RPGs, if it\'s out - she\'s playing it.',
      'A medically retired US Sailor and now full-time hoarder of gaming collectibles, Liana\'s passion for everything in the gaming industry is palpable. Also, if you lose her in a crowd, just casually mention any BioWare game and the crazy pterodactyl screech will without a doubt follow.'
    ]
  },  
  reiner: {
    name: 'reiner',
    fullName: 'andrew reiner',
    imgPath: '/reiner.jpeg',
    bio: [
      'Andrew Reiner has been a staple in the pages of Game Informer since 1995. His obsession with video games is linked to his earliest childhood memory – being picked up by his mother so he could view an Asteroids coin-op at a Pizza Hut.',
      'From weekly trips to arcades to owning every system that hit the market since the Atari 2600, Andrew has dedicated his life to video games. Andrew is also the co-writer of the book Prime: A Genesis Series Event, and guitarist in the band The Rapture Twins.',
      'He is working on his first game, a board game tentatively called Project Grendel, which will release in 2019.'
    ]
  },
  reeves: {
    name: 'reeves',
    fullName: 'ben reeves',
    imgPath: '/reeves.jpeg',
    bio: [
      'Games have always been a major part of Ben\'s entertainment diet. From playing Pac-Man forgeries on a Commodore 64 to scrounging for couch change so he could rent Double Dragon II for the 16th time, games have consumed more hours of his life than any other activity.',
      'After graduating with honors from the University of Colorado and receiving a degree in English with a creative writing emphasis, he combined his love for gaming and writing by pursuing a career in game journalism.',
      'Before joining Game Informer, Ben worked as in intern in the Avenger\'s office at Marvel Comics, where he unsuccessfully tried convincing his bosses to let him write a Bullseye comic. (He still has the script, Marvel)'
    ]
  },
  brian: {
    name: 'brian',
    fullName: 'brian shea',
    imgPath: '/brian.jpeg',
    bio: [
      'Brian\'s infatuation with gaming started in the NES days, but he truly fell in love while holding an SNES controller.',
      'From that point forward, he was playing video games whenever he could, first branching over to the Genesis, and then to every subsequent console that achieved any amount of success.',
      'Prior to joining the Game Informer team, he contributed to outlets like IGN, Kotaku, Official Xbox Magazine, GamesRadar, Joystiq, and others on a freelance basis.'
    ]
  },
  kim: {
    name: 'kim',
    fullName: 'kimberley wallace',
    imgPath: '/kim.jpeg',
    bio: [
      'Kimberley discovered her passion for games at an early age, forming a love for RPGs. A University of Iowa graduate with degrees in Journalism and English, she knew that combining games and writing was the only way to go for her career.',
      'Previously a freelance writer, Kimberley\'s work has been featured in Official Xbox Magazine, GamesRadar, PlayStation: The Official Magazine, and Joystiq. She strives to showcase the positive influence of games, something she has first-hand experience with, having games as a part of her pain management for a chronic illness.',
      'Besides her life revolving around cutscenes, she\'s also an avid hockey fan. Sorry, Minnesota – the Blackhawks will forever own her heart.'
    ]
  },
  dan: {
    name: 'dan',
    fullName: 'daniel tack',
    imgPath: '/daniel.jpeg',
    bio: [
      'Since graduating from Michigan State University with a degree in journalism, Daniel has covered interactive entertainment at a variety of outlets including Forbes.com. Growing up with Atari 2600 classics, Daniel fell in love with games during long sessions with the original Final Fantasy.',
      'As the years went by, Daniel\'s interests shifted away from consoles and toward the PC, where multiplayer online and indie titles were prevalent.',
      'Since then, Daniel has gravitated toward MMORPGs, MOBA/ARTS, DCGs, strategy, and modern roguelikes. Daniel enjoys poker, West Highland White Terriers, and a good cat gif.'
    ]
  }
};