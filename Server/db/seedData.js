const monsters = [
   {monster: "Slime"},

   {monster: "Dragon", details: "The origin of dragons can be traced back to Star King Dragon Veldanava, or more precisely the Elemental Dragon he gifted to his daughter Milim Nava.Upon the death of the Elemental Dragon and its subsequent transformation into a Chaos Dragon, its Factor spread throughout the world, spawning Dragons in areas high in Magicule concentration.", imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/a/ad/Arch_Dragon.png/revision/latest?cb=20190110052632"},

   {monster: "Goblin" },
   {monster: "Ogre"},
   {monster: "Hobgoblin"},
   {monster: "Tempest Wolf " },

   {monster: "Human", details: "Humans ｢人間ヒューマン, hyūman｣ are a race with an extremely low tolerance to magicules and a short life span, however their innate capacity for growth, very high reproductive rate and curiosity for knowledge made them Veldanava's race of choice to spread across the cosmos. They were the result of one of Twilight Valentine's many experiments.", imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/7/72/Fuze_Anime.png/revision/latest?cb=20190105062213" },

   {monster: "Orcs"},
   {monster: "Dwarf" },
   {monster: "Elf"},

   {monster: "Daemon", details: "Daemons ｢悪魔族デーモン, dēmon, lit. Devil Tribe｣ are a major race of naturally occuring Spiritual Lifeforms similiar to Angels and Elementals. They have an advantage against Angels but are in turn disadvantaged against Elementals.", imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/1/12/Demons.jpg/revision/latest?cb=20171228191456"},

   {monster: "Spirit"},
   {monster: "Harpie" },
   {monster: "Lion Beastman" }
]

const characters = [
   {
      name: 'Rimuru Tempest', title: 'Demon Lord', age: '4', monsterId: 1, placeId: 1,
      description: "The King of the country of Tempest. Once a human named Satoru Mikami, he was reincarnated into a slime after his death. He is somewhat naïve for a king, and peace loving, but still tries his best to rule as a good king. Rimuru is an eccentric and childish person by nature but this shouldn't be mistaken for immaturity and naivety. Underneath the surface, Rimuru is constantly analyzing, planning, and weighing the pros and cons of their actions, taking the smart move in the long term over more rash and emotional decisions. In betrayal of this composed and calculative demeanor, Rimuru is ruthless when it comes to handling people who have aroused genuine fury inside of them. They'll go as far as acts of brutal torture and murder without so much as batting an eye if it can be gotten away with, and they use more subtle methods like intimidation and blackmail when those cards are off the table.", 
      imgUrl: 'https://i.scdn.co/image/ab67616d0000b273c36330975ade41339f267614'
   },
   {
      name: 'Veldore', title: 'Star King Dragon', age: '20000', monsterId: 2, placeId: 1,
      description: "One of the Four True Dragons and the first intelligent being Rimuru meets after being reincarnated, he's the one who named him. He in turn received his last name from Rimuru. He had been sealed in a cave for three centuries when he met Rimuru, becoming his first friend.",
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7902ea50-b4ee-4852-bf15-a1f7788d0d17/deo7jtv-572419a9-4e42-4991-be50-33e3dfd215b2.jpg/v1/fill/w_1024,h_1683,q_75,strp/veldora_tempest_by_okumo2_deo7jtv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4MyIsInBhdGgiOiJcL2ZcLzc5MDJlYTUwLWI0ZWUtNDg1Mi1iZjE1LWExZjc3ODhkMGQxN1wvZGVvN2p0di01NzI0MTlhOS00ZTQyLTQ5OTEtYmU1MC0zM2UzZGZkMjE1YjIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jbqwQuxqh_t2u8Lrb9nh6R1H5mv3vjN-t5_Ak3_zysg',
   },
   {
      name: 'Rigurd', title: 'Goblin King', monsterId: 3, placeId: 1, description: 'The elder of the goblin village Rimuru meets and one of his first followers. After being given a name by Rimuru, he evolved and regained his youth and strength.', imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/rigurudo_anime.png'
   },
   {
      name: 'Gobta', title: 'Caption of the Shadow ', monsterId: 5, placeId: 1, description: "Gobta keeps his childlike goblin appearance even after being named and transforming into a hobgoblin, making him look extra cutesy and round.He may come off like a goofy airhead, which he definitely acts like on most occasions, but he actually has great intellect and wisdom that come out in important situations. Gobta trusts his friends above anything else and is a great asset.",
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Gobta-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Souei', title: 'Spy', monsterId: 4, placeId: 1, description: 'This overpowered fighter always keeps a calm and cool demeanor, not showing off his emotions to anyone around him. He is very loyal to Rimuru and his team and does an incredible job in his role in the group.', 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Souei-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Shion', title: 'Samurai', monsterId: 4, placeId: 1, description: "Though she is the leader of the Yomigaeri and one of the strongest fighters under Rimuru, Shion is quite clumsy. She can also be ditsy and overly naive at times.Despite her beautiful, gentle appearance, she uses her unimaginable strength to its max any chance she gets. Shion gets wiser as she progresses through her adventures with her friends. She is loyal, fierce, friendly, and a valuable member of Rimuru's team.",
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Shion-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Shuna', title: 'Princess', monsterId: 4, placeId: 1, description: "Shuna is a pretty adorable and short princess who is part of the Ogre tribe. Don't let her looks deceive you, she is a very powerful and strong asset to Rimuru's group.Shuna is very caring and protective of her loved ones and boasts some very refined manners and a personality to match. She is incredible at weaving and created the beautiful garments that she and her older brother Benimaru wear as Kijin.",
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Shuna-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Benimaru', title: 'Samurai General', monsterId: 4, placeId: 1, description: "Benimaru is very laid back, confident, loyal, and hot-headed. He cares deeply for his younger sister Shuna but he's been shown to have a pretty rough side to him as well. Though he had his reservations about taking over as chief of his tribe, he is a naturally great leader and is a strong, efficient military commander. His power is impressive and his skills are unmatched. Benimaru proved to be an efficient and beneficial member of Rimuru's team, making him a very important character in the anime series.",           
      imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/benimaru_anime_9.png'
   },
   {
      name: 'Ranga', title: 'Leader of the Tempest Wolf', monsterId: 6 , placeId: 1, description: 'Ranga is a wolf-dog unlike any other. He has incredible magic, immense power, and tough abilities to crush his enemies. However, he is still a wolf, so he does things typical dogs do, including wagging his tail and licking and getting attention from his master, Rimuru. He is very loyal and incredibly protective, not being super fond of suspicious strangers.', 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Ranga-Dog-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Hakurou', title: 'Teacher', age: '300', monsterId: 4, placeId: 1, description: "Just because Hakurou looks like an older man doesn't mean he's any less strong than his other fellow Kijin. He lived to be over 300 years old as an Ogre, even though Ogre's aren't supposed to age past 100, due to his incredible power. He is a patient, calm, and respectable teacher and is very strict with his students, including Rimuru.", 
      imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/hakurou_anime.png'
   },
   {
      name: 'Milim Nava', title: 'Best Friend/ Demon Lord', age: '20000', monsterId: 2, placeId: 3, description: "Milim is incredibly carefree and a bit reckless. She is very loud, excitable, and wants to reduce her boredom by being as rambunctious as possible. She had a very short temper before eventually mellowing out once she bonded with Rimuru. She sprouts wings and a horn in her battle form, making her look a bit more like a Dragonoid, the offspring of a True Dragon and a Human, than usual.", 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Demon-Lord-Milim.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Yuuki Kagurazaka', title: "Freedom Association's Grand Master", age: '23', monsterId: 7, placeId: 4, description: "Yuuki is a natural genius who quickly adapted and advanced his abilities when he was summoned to the fantasy world. He may appear to be very young, looking like a middle or high school student, but he is actually a grown man in his mid-twenties. He is great at working with people and is a successful politician and leader. Like many well-rounded protagonists, Yuuki holds both good and selfish characteristics that he enacts as he works to achieve his goals after a troublesome past.", 
      imgUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Kagurazaka-Yuuki-Slime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Gobzo', title: 'N/a', monsterId: 5, placeId: 1, description: "He is part of the Yomigaeri. Practically unkillable, with accelerated healing and durable souls as a result of being brought back to life, it's enough of a boost by itself to deserve working directly under Shion. He's got a massive crush on Shion, but she only has eyes for Rimuru.", 
      imgUrl: 'https://myanimelist.net/character/199019/Gobzo/pics'
   },
   {
      name: 'Geld', title: 'Orc King', monsterId: 8, placeId: 1, description: "The son and former right hand to the Orc King, who then became an Orc Disaster to try and prevent a famine. He was one of the survivors of the attack against the Starved Orcs, and was later named by Rimuru to carry the legacy of the good king which he does by heading Tempest's construction efforts.", 
      imgUrl: 'https://static.tvtropes.org/pmwiki/pub/images/geld.png'
   },
   {
      name: 'Kaijin', title: 'Master Engineer', monsterId: 9, placeId: 1, description: "Before he resigned in disgrace, Kaijin served as the head of Dwargo's engineering corps, a position that he earned due to his skill and leadership abilities. After he is exiled from Dwargo, he brings his skills to Tempest and serves as the chief architect of Tempest and one of its greatest engineers. Kaijin is skilled in many forms of craftwork. He is a master blacksmith, and under his direction, Tempest becomes a fully modern city with hot running water, electricity, and beautifully constructed homes. The city itself is a testament to his skill.", 
      imgUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/Kaijin.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Veasta', title: 'Capable Scientist', monsterId: 7, placeId: 1, description: "Prior to relocating to Tempest, Vesta served as the head of Dwargo's engineering corps, a position he assumed after the resignation of its former head, Kaijin. While he is initially antagonistic to Rimuru and Kaijin, over the course of the series he becomes a valuable asset. Rimuru Tempest wisely recognizes Vesta's skill and installs his laboratory in the Sealed Cave, tasking him with creating healing potions. With the help of Gabiru, he refines Tempest's potion-making process to mass-produce healing potions quickly and efficiently. He is a gifted scientist and well-deserving of his position as the lead researcher of Tempest.", 
      imgUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/Vesta.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Hinata Sakaguchi', title: 'Cunning Warrior', monsterId: 7, placeId: 4, description: "Although she has only made a brief appearance in the anime so far, it's already clear that Hinata Sakaguchi is a capable and cunning warrior. In her battle against Rimuru, she lays a brilliant trap that saps Rimuru of much of his strength. This is the first fight where Rimuru comes dangerously close to dying, which a testament to her foresight and strength.", 
      imgUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/06/Hinata-Sakaguchi.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Gazel Dwargo', title: 'Wise and Fair King', monsterId: 7, placeId: 2, description: "The king of the Armed Nation of Dwargon, Gazel Dwargo is Rimuru's most trusted and capable political ally. He is regarded as a wise and fair king, as evinced by his just rule and Dwargon's political, trade, and military power. Gazel demonstrates his political acumen by his quick realization of Rimuru's potential and the importance of establishing good relations with Tempest. His skill in diplomacy shines through in the way in which he mediates the dispute between Vesta and Kaijin, as his decision to entrust them to Tempest ensures Dwargon gains a valuable trade and military ally. In his role as the elder statesman, he coaches his junior ruler on the finer points of statecraft, further solidifying his ties with Rimuru and highlighting his wisdom.", 
      imgUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/Gazel-Dwargo.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Diablo', title: 'Demon Primordial', monsterId: 11, placeId: 1, description: "Diablo is introduced near the end of the first part of season 2, so fans of the anime have yet to learn about his capabilities. However, based upon his brief appearance, it's obvious that Diablo is now Rimuru's most powerful and brilliant subordinate. In his impressive fight against Razen (one of the best fights of the series), Diablo demonstrates a comprehension of magical techniques that rivals the abilities of a Demon Lord. As a Primordial Demon, he has existed since the beginning of time, and over those thousands of years, he is certain to have acquired vast amounts of knowledge. Fans can look forward to seeing more of him as the series progresses.", 
      imgUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/06/Diablo-The-Primordial-Demon.jpg?q=50&fit=crop&w=1500&dpr=1.5'
   },
   {
      name: 'Ramiris', title: 'Demon Lord', monsterId: 12, placeId: 5, description: "Ramiris is a first-generation demon lord, part of the elite group alongside Guy Crimson and Milim Nava. She holds the third seat of the Octagram and serves as the steward of the Labyrinth. Additionally, Ramiris is the leader of the heroes, providing them with divine protection and maintaining balance in the world. She currently resides in Tempest. Ramiris possesses a diverse set of skills, including Labyrinth Creation (Small World), Telepathy, Aspectual Magic, Mind/Mental Magic, Illusion Magic, Instant Death Magic, Elemental Magic (All Types), Space Magic, Fire Magic, Explosion Magic, Wind Magic, Lightning Magic, Water Magic, Ice Magic, Earth Magic, and Spirit Magic. These skills showcase her formidable magical abilities and strategic importance in the story.", 
      imgUrl: 'https://fictionhorizon.com/wp-content/uploads/2021/10/EP40_Preview3.jpg'
   },
   {
      name: 'Frey', title: 'Demon Lord', monsterId: 13, placeId: 6, description: "Frey, self-proclaimed Demon Lord and one of the youngest among the Ten Great Demon Lords, attained this status around the same time as Clayman and Carrion. Like them, Frey adopted the title of Demon Lord to actively boost her personal power base. She possesses skills such as Magic Jamming, enabling her to disrupt the flow of Magicules around herself, rendering her highly resistant to magic and interfering with external uses of Magicules within her skill’s effective range. Additionally, Frey possesses Magic Sense.", 
      imgUrl: 'https://fictionhorizon.com/wp-content/uploads/2021/10/Frey_Anime.png'
   },
   {
      name: 'Carrion', title: 'Demon Lord/ Beast Master', age: 500, monsterId: 14, placeId: 7, description: "Carrion, the Beast Master, is the former demon lord of the Ten Great Demon Lords and the current king of the Beast Kingdom of Eurazania. Serving as an aide to Milim Nava alongside Frey, Carrion possesses powerful skills such as Royal Beast, enabling a transformation into a chimera-like beast form. His abilities include Demon Lord’s Haki, amplifying his aura to coerce submission, Ultraspeed Regeneration for rapid healing, and Multilayer Barrier to deploy multiple resistive barriers draining magicules. These skills highlight Carrion’s formidable presence and versatility.", 
      imgUrl: 'https://fictionhorizon.com/wp-content/uploads/2021/10/Royal_Beast_Form_Anime.jpg'
   },
   {
      name: 'Guy Crimson', title: 'Demon Lord', monsterId: 11, placeId: 8, description: 'Guy Crimson, also known as Rouge, holds the title of the oldest Primordial and occupies the first seat of the Octagram. Residing on the continent of ice, his notable skill is Time Stop, showcasing a powerful ability to manipulate time.', 
      imgUrl: 'https://fictionhorizon.com/wp-content/uploads/2021/10/Guy-Crimson.jpg'
   },
   {
      name: 'Beretta', title: 'Bodyguard', age: '100', monsterId: 12, placeId: 5, description: "Beretta is the bodyguard of Ramiris. Once a Greater Daemon, they were summoned to inhabit a Golem created by Rimuru and act as Ramiris' guardian for 100 years. Upon possessing the Golem and being named, Beretta evolved into an Arch Doll. The original contract was later annulled, and Beretta became Ramiris' permanent subordinate with Rimuru as their secondary master granting them access to additional powers and potential for further evolution.", 
      imgUrl: 'https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/a/a6/Beretta_Anime.png/revision/latest?cb=20210731015150'
   },
   {
      name: 'Clayman', title: 'Demon Lord/ Marionette Master', age: '2000', monsterId: 11, placeId: 9, description: 'Clayman, known as Marionette Master, was a Demon Lord, in the era of the Ten Great Demon Lords. Being a Demon Lord Seed, he lacked some power in comparison to older generations of Demon Lords and thus plotted to bridge this power gap by awakening himself into a True Demon Lord through his schemes. He was considered to be a ghastly man, infamous for his acts of manipulating his subordinates and others like dolls. He becomes the mortal enemy of Rimuru Tempest by plotting the destruction of the Jura Tempest Federation and Rimuru themself, but is ultimately slain by the latter.', 
      imgUrl: 'https://pm1.aminoapps.com/7410/5e5e9a47ac1bd85274128411c185973798fb5e43r1-340-860v2_hq.jpg'
   },
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
   {name: 'Great Forest of Jura', owner: 'Rimuru Tempest', details: "For a long time, the Great Jura Forest had served as a buffer zone, mitigating direct confrontation between countries. It's unknown whether the land started off barren or was already a forest, but it was inhabited by Storm Dragon Veldora and had been his territory for centuries. Under the influence of his magical energy, the forest expanded and grew to cover a vast amount of land. When the Dryads and Treants led by Treyni sought a new home, after the incarnation of the Elemental Queen at the time perished, Veldora welcomed them with open arms. The Dryads happily took up the task of maintaining order in the forest, with Veldora as its guardian. Under the two, the monsters in the forest enjoyed security from outside forces.Until Veldora's disappearance from the forest, the demon lords had a mutual pact in place that forbade them from stepping foot there, to prevent Veldora's seal from being undone. Due to the presence of the dragon, even in his sealed state, his presence alone was presumably enough to deter the Eastern Empire from invading. The monsters of the forest were under the impression that they received divine protection from the Storm Dragon - that was why they could live inside that brutal surge of magic power it emitted. Though it was unpleasant, it was because of his existence that external aggression was impossible.After Rimuru's coronation as demon lord and his induction into the Octagram, he was granted ownership of the entire Jura Forest. Some of the forest was leveled in establishing Tempest, and future developing cities and villages now required permission from Demon Lord Rimuru to access the forest's resources.", 
   imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Ftenseislimeen%2Fpage%2Fitem%2Ftempest%2F2BRQ_k6HwIrWkapDNva0bP4K1LkqZ72Jwv&psig=AOvVaw2dDNlWxSJjZWHsXd24iqIh&ust=1706559558625000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDe2fbzgIQDFQAAAAAdAAAAABAD"},
   
   {name: 'Armed Nation of Dwargon', owner: 'Gazel Dwargo', details: "Dwargon is an immensely powerful nation, with its technological might being unmatched in the west. It's made up of three major cities, with Central being its capital. It was founded roughly a thousand years ago by the Hero King Guran Dwargo, using a naturally occurring hollow at the base of the Canaat Mountains as its foundation. The gates to the capital are the only point of entry, making it a natural fortress that has survived against many enemy attacks. Being inside a large underground cavern, the environment is naturally a bit chilly, but with the help of magic that is never a concern as the temperature can freely be altered to the people's convenience.",
   imgUrl:"https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/1/16/Dwargon_Inside.png/revision/latest?cb=20181028121109"},

   {name: 'City of the Forgotten Dragon', owner: 'Milim Nava', details: "In this society, all citizens are dragonewts with formidable combat abilities, ranked C and above. There is no standing army, except for the priest warriors. Instead of a government, the system revolves around the Central Temple, where all crops and goods are collected and distributed equally by the head priest. This distribution system ensures that everyone, whether a worker or non-worker, receives a guaranteed minimum share of wealth. Additionally, those who work harder are rewarded with additional supplies.This system resembles the concept of universal basic income that gained traction in modern Japan. However, there is a crucial consideration regarding the determination of each individual's contribution to society. Middray has been granted the exclusive right to decide these contributions by Milim, granting him considerable power in the city. However, to prevent abuse of power, the other priests serving him have the authority to dismiss him from office. This checks and balances system ensures that Middray cannot become a tyrant. Consequently, the city's tens of thousands of inhabitants are well-led and organized, defying initial expectations.",
   imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/a/ad/City_of_the_Forgotten_Dragon.png/revision/latest?cb=20210820180441"},

   {name: 'The Holy Church', owner: 'Holy Emperor', details: "The nation is led by Holy Emperor Louis Valentin, who, secretly is a Vampire and subordinate of Demon Lord Luminous Valentine — the God of Luminism, and the true ruler of Ruberios. Until his death, Roy Valentin, the twin brother of Louis, played the role of the evil Demon Lord Valentin to unite Ruberios against a supposed ever-present threat.To gain military strength and raise morale amongst the populace, the nation founded the Temple Knights and Crusaders led by Hinata Sakaguchi. These knights were recognized as a powerful military force across the Central World.", 
   imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/c/ca/Holy_Empire_Ruberios_LN.PNG/revision/latest?cb=20190125154437"},
   
   {name: 'Labyrinth', owner: 'Ramiris', details:"This labyrinth was created using Ramiris' Species Skill Labyrinth Creation. The labyrinth is a part of Tempest and it is also Ramiris’ territory. When Rimuru gave Ramiris permission to establish the labyrinth, he also granted her extraterritorial rights on that place. The inside of the labyrinth is under both Rimuru and Ramiris' control, it was a special area under the administration of joint sovereignty. Veldora is the final boss of the labyrinth and rules over the dungeon while Ramiris supervises it."},
   
   {name: 'Harpy Kindom Fulbrosia', owner: 'Frey', details: "Heaven's Wing Country Fulbrosia is a country located on top of a mountain border Great Jura Forest, ruled by former Demon Lord Frey. It became a vassal nation to Milim Nava during the events of The Octagram Soars Brightly, but the people's loyalty and management of the nation remains with Frey.",
   imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/d/d9/Fulbrosia.png/revision/latest?cb=20210810195703"},

   {name: 'Beast Kingdom of Eurazanina', owner: 'Carrion', details: "The Beast Kingdom Eurazania ｢獣王国ユーラザニア, yū-ōkoku yūrazania｣ is a country located south of the Great Jura Forest, and is inhabited by various bestial Demi-Humans. It became a vassal nation to Milim Nava during the events of The Octagram Soars Brightly, but the people's loyalty and management of the nation remains with Carrion.",
   imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/a/a6/Eurazania_Anime.png/revision/latest?cb=20210904082616"},

   {name: 'Frost Palace, Ice Continent', owner: 'Guy Crimson', details: "The Frost Palace was originally the Imperial Capital of the Super-Magic Empire during the era of the High Humans. It was the place Guy was summoned into the Central World by the Sorcerer Emperor Jahil. It remained intact due to Rain and Misery avoiding the use of destructive Magic when they slaughtered its inhabitants.After Guy roamed the planet and was defeated by Veldanava, he decided to settle down to carry out his purpose as The Demon Lord. His gaze landed on the ruins of the Imperial Capital from above and, deciding that it was fate, decided to make it his new home. After Velzard showed up and subsequently challenged Guy to a fight, the fierce conflict had frozen the capital solid and shifted the planet's axis, causing the entire continent they were standing on to now be the north pole. Guy, finding the frozen palace to be beautiful, decided to keep it frozen, with Velzard leaking out a small portion of her Aura from then on to ensure it",
   imgUrl: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/2/21/White_Ice_Palace.png/revision/latest?cb=20210810193957"},
   {name: 'Unknown', owner: 'Unknown'}
]

const comments = [
   {name: 'kira', characterId: 1, description: 'This is the best!'}
]

module.exports = {characters, monsters, places, comments}