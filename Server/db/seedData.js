const monsters = [
   {monster:"Slime"},
   {monster: "Dragon"},
   {monster: "Slime Blue Dragon"},
   {monster: "Goblin"},
   {monster: "Ogre"},
   {monster: "Hobgoblin"},
   {monster: "Tempest Wolf "},
   {monster: "Tempest Star Wolf"},
   {monster: "Human"},
   {monster: "Orcs"}
]

const characters = [
   {
      name: 'Rimuru Tempest', title: 'Demon Lord', age: '4', monsterId: 3, placeId: 1,
      description: 'The King of the country of Tempest. Once a human named Satoru Mikami, he was reincarnated into a slime after his death. He is somewhat naïve for a king, and peace loving, but still tries his best to rule as a good king.', imgUrl: 'https://i.scdn.co/image/ab67616d0000b273c36330975ade41339f267614'
   },
   {
      name: 'Veldore', title: 'Star King Dragon', age: '20,000+', monsterId: 2, placeId: 1,
      description: "One of the Four True Dragons and the first intelligent being Rimuru meets after being reincarnated, he's the one who named him. He in turn received his last name from Rimuru. He had been sealed in a cave for three centuries when he met Rimuru, becoming his first friend.",
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7902ea50-b4ee-4852-bf15-a1f7788d0d17/deo7jtv-572419a9-4e42-4991-be50-33e3dfd215b2.jpg/v1/fill/w_1024,h_1683,q_75,strp/veldora_tempest_by_okumo2_deo7jtv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4MyIsInBhdGgiOiJcL2ZcLzc5MDJlYTUwLWI0ZWUtNDg1Mi1iZjE1LWExZjc3ODhkMGQxN1wvZGVvN2p0di01NzI0MTlhOS00ZTQyLTQ5OTEtYmU1MC0zM2UzZGZkMjE1YjIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jbqwQuxqh_t2u8Lrb9nh6R1H5mv3vjN-t5_Ak3_zysg',
   },
   {
      name: 'Rigurd', title: 'Goblin King', age: 'Unknown', monsterId: 4, placeId: 1, description: 'The elder of the goblin village Rimuru meets and one of his first followers. After being given a name by Rimuru, he evolved and regained his youth and strength.', imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/rigurudo_anime.png'
   },
   {
      name: 'Gobta', title: 'Caption of the Shadow ', age: 'Unknown', monsterId: 4, placeId: 1, description: "Gobta keeps his childlike goblin appearance even after being named and transforming into a hobgoblin, making him look extra cutesy and round.He may come off like a goofy airhead, which he definitely acts like on most occasions, but he actually has great intellect and wisdom that come out in important situations. Gobta trusts his friends above anything else and is a great asset.",
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Gobta-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Souei', title: 'Spy', age: 'Unknown', monsterId: 5, placeId: 1, description: 'This overpowered fighter always keeps a calm and cool demeanor, not showing off his emotions to anyone around him. He is very loyal to Rimuru and his team and does an incredible job in his role in the group.', 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Souei-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Shion', title: 'Samurai', age: 'Unknown', monsterId: 5, placeId: 1, description: "Though she is the leader of the Yomigaeri and one of the strongest fighters under Rimuru, Shion is quite clumsy. She can also be ditsy and overly naive at times.Despite her beautiful, gentle appearance, she uses her unimaginable strength to its max any chance she gets. Shion gets wiser as she progresses through her adventures with her friends. She is loyal, fierce, friendly, and a valuable member of Rimuru's team.",
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Shion-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Shuna', title: 'Princess', age: 'Unknown', monsterId: 5, placeId: 1, description: "Shuna is a pretty adorable and short princess who is part of the Ogre tribe. Don't let her looks deceive you, she is a very powerful and strong asset to Rimuru's group.Shuna is very caring and protective of her loved ones and boasts some very refined manners and a personality to match. She is incredible at weaving and created the beautiful garments that she and her older brother Benimaru wear as Kijin.",
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Shuna-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Benimaru', title: 'Samurai General', age: 'Unknown', monsterId: 5, placeId: 1, description: "Benimaru is very laid back, confident, loyal, and hot-headed. He cares deeply for his younger sister Shuna but he's been shown to have a pretty rough side to him as well. Though he had his reservations about taking over as chief of his tribe, he is a naturally great leader and is a strong, efficient military commander. His power is impressive and his skills are unmatched. Benimaru proved to be an efficient and beneficial member of Rimuru's team, making him a very important character in the anime series.",           
      imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/benimaru_anime_9.png'
   },
   {
      name: 'Ranga', title: 'Leader of the Tempest Wolf', age: 'Unknown', monsterId: 8 , placeId: 1, description: 'Ranga is a wolf-dog unlike any other. He has incredible magic, immense power, and tough abilities to crush his enemies. However, he is still a wolf, so he does things typical dogs do, including wagging his tail and licking and getting attention from his master, Rimuru. He is very loyal and incredibly protective, not being super fond of suspicious strangers.', 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Ranga-Dog-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Hakurou', title: 'Teacher', age: '300+', monsterId: 5, placeId: 1, description: "Just because Hakurou looks like an older man doesn't mean he's any less strong than his other fellow Kijin. He lived to be over 300 years old as an Ogre, even though Ogre's aren't supposed to age past 100, due to his incredible power. He is a patient, calm, and respectable teacher and is very strict with his students, including Rimuru.", 
      imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/hakurou_anime.png'
   },
   {
      name: 'Milim Nava', title: 'Best Friend/ Demon Lord', age: '20,000+', monsterId: 2, placeId: 3, description: "Milim is incredibly carefree and a bit reckless. She is very loud, excitable, and wants to reduce her boredom by being as rambunctious as possible. She had a very short temper before eventually mellowing out once she bonded with Rimuru. She sprouts wings and a horn in her battle form, making her look a bit more like a Dragonoid, the offspring of a True Dragon and a Human, than usual.", 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Demon-Lord-Milim.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Yuuki Kagurazaka', title: "Freedom Association's Grand Master", age: '23', monsterId: 9, placeId: 4, description: "Yuuki is a natural genius who quickly adapted and advanced his abilities when he was summoned to the fantasy world. He may appear to be very young, looking like a middle or high school student, but he is actually a grown man in his mid-twenties. He is great at working with people and is a successful politician and leader. Like many well-rounded protagonists, Yuuki holds both good and selfish characteristics that he enacts as he works to achieve his goals after a troublesome past.", 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Kagurazaka-Yuuki-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Gobzo', title: 'N/a', age: 'Unknown', monsterId: 4, placeId: 1, description: "He is part of the Yomigaeri. Practically unkillable, with accelerated healing and durable souls as a result of being brought back to life, it's enough of a boost by itself to deserve working directly under Shion. He's got a massive crush on Shion, but she only has eyes for Rimuru.", 
      imgUrl: 'https://myanimelist.net/character/199019/Gobzo/pics'
   },
   {
      name: 'Geld', title: 'Orc King', age: 'Unknown', monsterId: 10, placeId: 1, description: "The son and former right hand to the Orc King, who then became an Orc Disaster to try and prevent a famine. He was one of the survivors of the attack against the Starved Orcs, and was later named by Rimuru to carry the legacy of the good king which he does by heading Tempest's construction efforts.", 
      imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/geld.png'
   },
   // {
   //    name: '', title: '', age: '', monsterId: , placeId: , description: '', 
   //    imgUrl: ''
   // },
   // {
   //    name: '', title: '', age: '', monsterId: , placeId: , description: '', imgUrl: ''
   // },
   // {
   //    name: '', title: '', age: '', monsterId: , placeId: , description: '', imgUrl: ''
   // },
   // {
   //    name: '', title: '', age: '', monsterId: , placeId: , description: '', imgUrl: ''
   // },
]


const places = [
   {name: 'Great Forest of Jura', owner: 'Rimuru Tempest'},
   {name: 'Kingdom of Falmuth', owner: 'Edward Edmaris Falmuth'},
   {name: 'N/a', owner: 'Milim Nava'},
   {name: '', owner: ''}
]

const comments = [
   {name: 'kira', characterId: 1, description: 'This is the best!'}
]

module.exports = {characters, monsters, places, comments}