
/* ==========================================
   COSMERE BOOK DATABASE
   ========================================== */

// All 25 works in the approved Suggested Reading Order.

const COSMERE_BOOKS = [

    // MISTBORN ERA 1

    {
        id: "the_final_empire",
        title: "The Final Empire",
        series: "Mistborn Era 1",
        type: "Novel",
        year: 2006,
        cover: "images/Cosmere/Mistborn/the_final_empire.jpg"
    },

    {
        id: "the_well_of_ascension",
        title: "The Well of Ascension",
        series: "Mistborn Era 1",
        type: "Novel",
        year: 2007,
        cover: "images/Cosmere/Mistborn/the_well_of_ascension.jpg"
    },

    {
        id: "the_hero_of_ages",
        title: "The Hero of Ages",
        series: "Mistborn Era 1",
        type: "Novel",
        year: 2008,
        cover: "images/Cosmere/Mistborn/the_hero_of_ages.jpg"
    },

    // STANDALONE WORKS

    {
        id: "elantris",
        title: "Elantris",
        series: "Elantris",
        type: "Novel",
        year: 2005,
        cover: "images/Cosmere/Standalones/elantris.jpg"
    },

    {
        id: "the_emperors_soul",
        title: "The Emperor's Soul",
        series: "Sel Standalone",
        type: "Novella",
        year: 2012,
        cover: "images/Cosmere/Standalones/the_emperor's_soul.jpg"
    },

    {
        id: "warbreaker",
        title: "Warbreaker",
        series: "Standalone",
        type: "Novel",
        year: 2009,
        cover: "images/Cosmere/Standalones/warbreaker.jpg"
    },

    {
        id: "white_sand",
        title: "White Sand",
        series: "White Sand",
        type: "Graphic Novel Omnibus",
        year: 2022,
        cover: "images/Cosmere/Standalones/white_sand_omnibus.jpg"
    },

    {
        id: "shadows_for_silence_in_the_forests_of_hell",
        title: "Shadows for Silence in the Forests of Hell",
        series: "Threnody Standalone",
        type: "Novella",
        year: 2013,
        cover: "images/Cosmere/Standalones/shadows_for_silence_in_the_forests_of_hell.jpg"
    },

    // THE STORMLIGHT ARCHIVE

    {
        id: "the_way_of_kings",
        title: "The Way of Kings",
        series: "The Stormlight Archive",
        type: "Novel",
        year: 2010,
        cover: "images/Cosmere/Stormlight Archive/the_way_of_kings.jpg"
    },

    {
        id: "words_of_radiance",
        title: "Words of Radiance",
        series: "The Stormlight Archive",
        type: "Novel",
        year: 2014,
        cover: "images/Cosmere/Stormlight Archive/words_of_radiance.jpg"
    },

    {
        id: "edgedancer",
        title: "Edgedancer",
        series: "The Stormlight Archive",
        type: "Novella",
        year: 2016,
        cover: "images/Cosmere/Stormlight Archive/edgedancer.jpg"
    },

    {
        id: "oathbringer",
        title: "Oathbringer",
        series: "The Stormlight Archive",
        type: "Novel",
        year: 2017,
        cover: "images/Cosmere/Stormlight Archive/oathbringer.jpg"
    },

    {
        id: "dawnshard",
        title: "Dawnshard",
        series: "The Stormlight Archive",
        type: "Novella",
        year: 2020,
        cover: "images/Cosmere/Stormlight Archive/dawnshard.jpg"
    },

    // MISTBORN ERA 2 AND RELATED WORKS

    {
        id: "the_alloy_of_law",
        title: "The Alloy of Law",
        series: "Mistborn Era 2",
        type: "Novel",
        year: 2011,
        cover: "images/Cosmere/Mistborn/the_alloy_of_law.jpg"
    },

    {
        id: "shadows_of_self",
        title: "Shadows of Self",
        series: "Mistborn Era 2",
        type: "Novel",
        year: 2015,
        cover: "images/Cosmere/Mistborn/shadows_of_self.jpg"
    },

    {
        id: "the_bands_of_mourning",
        title: "The Bands of Mourning",
        series: "Mistborn Era 2",
        type: "Novel",
        year: 2016,
        cover: "images/Cosmere/Mistborn/the_bands_of_mourning.jpg"
    },

    {
        id: "secret_history",
        title: "Mistborn: Secret History",
        series: "Mistborn Companion",
        type: "Novella",
        year: 2016,
        cover: "images/Cosmere/Mistborn/secret_history.jpg"
    },

    {
        id: "the_lost_metal",
        title: "The Lost Metal",
        series: "Mistborn Era 2",
        type: "Novel",
        year: 2022,
        cover: "images/Cosmere/Mistborn/the_lost_metal.jpg"
    },

    // THE STORMLIGHT ARCHIVE CONTINUED

    {
        id: "rhythm_of_war",
        title: "Rhythm of War",
        series: "The Stormlight Archive",
        type: "Novel",
        year: 2020,
        cover: "images/Cosmere/Stormlight Archive/rhythm_of_war.jpg"
    },

    {
        id: "wind_and_truth",
        title: "Wind and Truth",
        series: "The Stormlight Archive",
        type: "Novel",
        year: 2024,
        cover: "images/Cosmere/Stormlight Archive/wind_and_truth.jpg"
    },

    // COSMERE SECRET PROJECTS

    {
        id: "the_sunlit_man",
        title: "The Sunlit Man",
        series: "Cosmere Secret Projects",
        type: "Novel",
        year: 2023,
        cover: "images/Cosmere/Secret Projects/the_sunlit_man.jpg"
    },

    {
        id: "tress_of_the_emerald_sea",
        title: "Tress of the Emerald Sea",
        series: "Cosmere Secret Projects",
        type: "Novel",
        year: 2023,
        cover: "images/Cosmere/Secret Projects/tress_of_the_emerald_sea.jpg"
    },

    {
        id: "yumi_and_the_nightmare_painter",
        title: "Yumi and the Nightmare Painter",
        series: "Cosmere Secret Projects",
        type: "Novel",
        year: 2023,
        cover: "images/Cosmere/Secret Projects/yumi_and_the_nightmare_painter.jpg"
    },

    {
        id: "isles_of_the_emberdark",
        title: "Isles of the Emberdark",
        series: "Cosmere Secret Projects",
        type: "Novel",
        year: 2025,
        cover: "images/Cosmere/Secret Projects/isles_of_the_emberdark.jpg"
    },

    {
        id: "the_fires_of_december",
        title: "The Fires of December",
        series: "Cosmere Secret Projects",
        type: "Novel",
        year: 2026,
        cover: "images/Cosmere/Secret Projects/the_fires_of_december.jpg"
    }

];


/* ==========================================
   COSMERE READING ORDERS
   ========================================== */

// Extract the book IDs in the exact Suggested Reading Order.
const COSMERE_SUGGESTED_ORDER = COSMERE_BOOKS.map(book => book.id);

// The same 25 books, arranged by publication date.
const COSMERE_PUBLICATION_ORDER = [
    "elantris",                               // 2005
    "the_final_empire",                       // 2006
    "the_well_of_ascension",                  // 2007
    "the_hero_of_ages",                       // 2008
    "warbreaker",                             // 2009
    "the_way_of_kings",                       // 2010
    "the_alloy_of_law",                       // 2011
    "the_emperors_soul",                      // 2012
    "shadows_for_silence_in_the_forests_of_hell", // 2013
    "words_of_radiance",                      // 2014
    "shadows_of_self",                        // 2015
    "the_bands_of_mourning",                  // 2016
    "secret_history",                         // 2016
    "edgedancer",                             // 2016
    "oathbringer",                            // 2017
    "dawnshard",                              // 2020
    "rhythm_of_war",                          // 2020
    "the_lost_metal",                         // 2022
    "white_sand",                             // 2022 Omnibus
    "tress_of_the_emerald_sea",               // 2023
    "yumi_and_the_nightmare_painter",         // 2023
    "the_sunlit_man",                         // 2023
    "wind_and_truth",                         // 2024
    "isles_of_the_emberdark",                 // 2025
    "the_fires_of_december"                   // 2026
];


/* ==========================================
   COSMERE BOOK DESCRIPTIONS
   ========================================== */

// Books without spoiler prerequisites have visible spoiler-free descriptions.
// Protected books reveal their descriptions only after a reader opts in.

const COSMERE_DESCRIPTIONS = {

    // MISTBORN ERA 1

    the_final_empire:
        "For a thousand years, the immortal Lord Ruler " +
        "has governed the Final Empire with absolute " +
        "authority. Ash falls from the sky, unnatural " +
        "mists cover the nights, and the oppressed skaa " +
        "live beneath the power of a ruthless nobility. " +
        "Vin, a young street thief who has learned " +
        "to survive through suspicion and secrecy, " +
        "discovers that she possesses an extraordinary " +
        "magical ability. Recruited by Kelsier, " +
        "a charismatic criminal with a dangerous ambition, " +
        "she joins a crew of talented thieves planning " +
        "an impossible heist: to challenge the power " +
        "of the Lord Ruler himself. As Vin learns " +
        "to master Allomancy, a magic system fueled " +
        "by metals, she must infiltrate noble society, " +
        "earn the trust of her companions, and " +
        "confront the seemingly invincible forces " +
        "that have ruled the world for centuries.",

    the_well_of_ascension:
        "Kelsier is dead, and Vin has defeated the Lord Ruler, " +
        "bringing an end to a thousand years of tyranny. " +
        "But overthrowing an empire is easier than rebuilding one. " +
        "Elend Venture now rules Luthadel, supported by Vin and " +
        "the surviving members of Kelsier's crew. As rival armies " +
        "threaten the city, political tensions grow, and the mists " +
        "begin behaving in disturbing ways, their hard-won freedom " +
        "is placed in jeopardy. Meanwhile, the mysterious legend " +
        "of the Well of Ascension may hold answers to dangers " +
        "far greater than those surrounding Luthadel.",

    the_hero_of_ages:
        "The Lord Ruler is gone, but the world is far from saved. " +
        "At the Well of Ascension, Vin was deceived into releasing " +
        "Ruin, an ancient force determined to destroy Scadrial. " +
        "Elend Venture survived his near-fatal injuries and became " +
        "a Mistborn, yet even his newfound powers may not be enough " +
        "to confront the catastrophe unfolding around them. " +
        "As ashfalls intensify, earthquakes shake the land, and " +
        "the mists grow increasingly dangerous, Vin, Elend, and " +
        "their allies desperately search for clues left behind " +
        "by the Lord Ruler. With civilization approaching collapse, " +
        "they must discover how to save a world threatened by " +
        "a power they barely understand.",


    // STANDALONE WORKS

    elantris:
        "Once a magnificent city of living gods, Elantris " +
        "was a place where ordinary people could be transformed " +
        "into powerful beings blessed with extraordinary magic. " +
        "But ten years ago, an unexplained catastrophe destroyed " +
        "its glory, leaving its inhabitants cursed and its " +
        "magic broken. When Prince Raoden suddenly suffers " +
        "the same mysterious transformation, he is secretly " +
        "exiled to the ruined city, where suffering and " +
        "despair have replaced its former splendor. " +
        "Meanwhile, Princess Sarene arrives in the kingdom " +
        "of Arelon for an arranged marriage, only to become " +
        "entangled in dangerous political struggles. " +
        "As a determined religious missionary named Hrathen " +
        "works to convert the kingdom, the futures of " +
        "these three individuals become connected to " +
        "the mystery of Elantris and the forgotten " +
        "power that once sustained it.",

    the_emperors_soul:
        "Shai is a brilliant Forger, a master of a magical " +
        "art capable of rewriting an object's history " +
        "to transform it into something entirely different. " +
        "But after being caught attempting to steal " +
        "a priceless imperial artifact, she faces execution. " +
        "Her only chance of survival comes from an " +
        "extraordinary offer: the emperor has been left " +
        "unconscious by an assassination attempt, and " +
        "his advisers need Shai to create a new soul " +
        "for him before the empire descends into chaos. " +
        "Given fewer than one hundred days to accomplish " +
        "the impossible, Shai must study the emperor's " +
        "life, uncover the nature of his identity, " +
        "and navigate the schemes of those holding " +
        "her prisoner, all while searching for " +
        "a way to regain her freedom.",

    warbreaker:
        "In a world where color and human Breath fuel " +
        "an extraordinary form of magic, the kingdom " +
        "of Hallandren is ruled by a mysterious God King " +
        "and a court of resurrected gods. To prevent " +
        "a possible war, Princess Siri of Idris is " +
        "unexpectedly sent to marry the God King, " +
        "entering a dazzling royal court filled with " +
        "dangerous traditions and political secrets. " +
        "Her older sister Vivenna, who had spent " +
        "her life preparing for that marriage, " +
        "sets out to rescue her. Meanwhile, Lightsong, " +
        "a god who questions his own divinity, " +
        "begins noticing troubling signs beneath " +
        "the kingdom's celebrations. As tensions " +
        "between Hallandren and Idris escalate, " +
        "their separate journeys become entangled " +
        "in a struggle involving religion, " +
        "political intrigue, and mysterious magic.",

    white_sand:
        "On the planet Taldain, one half of the world " +
        "faces a relentless sun while the other lies " +
        "beneath a dark sky. On the sunlit side, " +
        "the legendary Sand Masters possess the ability " +
        "to command sand through a rare form of magic. " +
        "Kenton, one of the weakest members of their " +
        "order, struggles to earn the respect of his " +
        "fellow Sand Masters. But when a devastating " +
        "attack threatens to destroy the organization, " +
        "he finds himself facing responsibilities " +
        "far beyond anything he expected. " +
        "Meanwhile, Khriss, a mysterious scholar " +
        "from the planet's dark side, pursues " +
        "answers to questions of her own. " +
        "Their paths converge amid assassinations, " +
        "political rivalries, and an increasingly " +
        "dangerous struggle over the future " +
        "of Sand Mastery.",

    shadows_for_silence_in_the_forests_of_hell:
        "Deep within the haunted forests of Threnody, " +
        "the spirits of the dead wander among the living. " +
        "These deadly shades obey terrifying supernatural " +
        "laws, and every traveler knows the Simple Rules: " +
        "never kindle a flame, never shed another's blood, " +
        "and never run at night. Breaking these rules " +
        "can bring a swift and horrifying death. " +
        "Silence Montane runs a small waystop, offering " +
        "travelers shelter from the dangers outside. " +
        "But maintaining her home and protecting her " +
        "family requires more than running an ordinary inn. " +
        "When dangerous criminals cross her path, " +
        "Silence is drawn into a deadly pursuit through " +
        "a forest where even the smallest mistake " +
        "can awaken the restless dead.",

    // THE STORMLIGHT ARCHIVE

    the_way_of_kings:
        "On Roshar, a world battered by devastating " +
        "magical storms, powerful kingdoms wage war " +
        "over ancient weapons and the legacy of " +
        "a forgotten order of knights. On the " +
        "Shattered Plains, Kaladin, a former soldier " +
        "trained in medicine, has been reduced to " +
        "slavery and forced into the deadly service " +
        "of an army that treats its bridgemen as " +
        "expendable. Meanwhile, Dalinar Kholin, " +
        "a powerful Alethi highprince, struggles " +
        "with mysterious visions of an ancient past " +
        "that threaten his reputation and his sanity. " +
        "Across the world, Shallan Davar, a young " +
        "scholar hiding desperate intentions, seeks " +
        "to become the apprentice of the renowned " +
        "Jasnah Kholin. As their separate journeys " +
        "unfold, forgotten magic begins to awaken " +
        "and the mysteries surrounding the ancient " +
        "Knights Radiant become increasingly important " +
        "to the fate of Roshar.",

    words_of_radiance:
        "After surviving the horrors of bridge duty, Kaladin " +
        "and the men of Bridge Four have finally escaped " +
        "slavery. Dalinar Kholin rescued them from Sadeas's " +
        "control after the highprince betrayed his army " +
        "during the battle at the Tower. Now serving as " +
        "a captain in Dalinar's forces, Kaladin must protect " +
        "the Kholin family while secretly learning to " +
        "control the extraordinary Surgebinding abilities " +
        "he shares with Syl. Meanwhile, Dalinar struggles " +
        "to unite the divided Alethi highprinces, even " +
        "as his visions warn of an approaching catastrophe. " +
        "Far from the Shattered Plains, Shallan and Jasnah " +
        "have uncovered disturbing evidence connecting " +
        "the seemingly harmless parshmen to the ancient " +
        "Voidbringers. Their research draws them toward " +
        "the heart of the war, where Shallan must also " +
        "confront the secrets of her own mysterious powers. " +
        "As the assassin Szeth continues his deadly mission " +
        "across Roshar, old rivalries and newly awakening " +
        "magic threaten to reshape the conflict. " +
        "With the Knights Radiant beginning to return, " +
        "the fate of Roshar may depend on people who " +
        "are still struggling to understand what " +
        "they are becoming.",

    edgedancer:
        "The Knights Radiant are returning, and the " +
        "arrival of the Everstorm has thrown Roshar " +
        "into an age of uncertainty. During the events " +
        "of Words of Radiance, a young girl named Lift " +
        "revealed extraordinary abilities while " +
        "attempting to rob the palace in Azir. " +
        "With the help of her unusual spren companion, " +
        "Wyndle, she escaped a terrifying man known " +
        "as Darkness, who was hunting people with " +
        "emerging Surgebinding powers. Lift also " +
        "saved the life of Gawx, who subsequently " +
        "became the emperor of Azir and offered her " +
        "protection. But palace life has never suited " +
        "Lift's restless personality. When she learns " +
        "that Darkness has appeared in the city " +
        "of Yeddaw, she sets out to investigate " +
        "his activities. There, she discovers that " +
        "the same dangerous hunter continues targeting " +
        "people with extraordinary abilities. " +
        "As Lift navigates an unfamiliar city, " +
        "she must begin to understand what it " +
        "truly means to become a Knight Radiant " +
        "in a world that is rapidly changing.",

    oathbringer:
        "The Battle of Narak has ended, but victory has come " +
        "at a terrible price. The Parshendi have summoned " +
        "the Everstorm, unleashing a new threat upon Roshar " +
        "and awakening the enslaved parshmen across the world. " +
        "Meanwhile, the ancient city of Urithiru has been " +
        "rediscovered, becoming a refuge for Dalinar Kholin's " +
        "forces and the newly returning Knights Radiant. " +
        "Having bonded the Stormfather, Dalinar now understands " +
        "that uniting Alethkar alone will not be enough. " +
        "With a new Desolation threatening civilization, " +
        "he must persuade the kingdoms of Roshar to abandon " +
        "their rivalries and stand together. Yet his bloody " +
        "reputation as the Blackthorn makes earning their " +
        "trust extraordinarily difficult. Kaladin, now a " +
        "Windrunner, struggles with the complicated reality " +
        "of the awakened parshmen, whose anger toward humanity " +
        "may be justified. Shallan, having embraced her " +
        "Lightweaving abilities, investigates the mysteries " +
        "hidden within Urithiru. As ancient enemies return " +
        "and the Knights Radiant struggle to rebuild their " +
        "lost orders, Dalinar must confront the consequences " +
        "of his past while attempting to unite a divided " +
        "world against an approaching catastrophe.",

    dawnshard:
        "Following the devastating confrontation at " +
        "Thaylen Field, Dalinar Kholin's coalition and " +
        "the Knights Radiant continue their struggle " +
        "against Odium's forces. Although humanity " +
        "survived that battle, the war for Roshar " +
        "is far from over. Meanwhile, Rysn Ftori, " +
        "a young merchant who lost the use of her legs " +
        "during an earlier trading expedition, has " +
        "become the owner of a ship and the companion " +
        "of Chiri-Chiri, a rare winged creature known " +
        "as a larkin. When Chiri-Chiri begins suffering " +
        "from a mysterious illness, Rysn discovers " +
        "that the creature's ancestral home may hold " +
        "the answer. At the same time, Navani Kholin " +
        "learns of a ghost ship connected to Akinah, " +
        "a dangerous island near the mysterious " +
        "land of Aimia. Knights Radiant who approach " +
        "the island find their Stormlight mysteriously " +
        "drained, making an expedition by sea necessary. " +
        "Rysn joins the mission alongside Lopen, " +
        "a Windrunner and former member of Bridge Four. " +
        "As their ship approaches the forbidden island, " +
        "the expedition must confront the dangers " +
        "surrounding its ancient secrets, while Rysn " +
        "searches for a way to save Chiri-Chiri.",

    rhythm_of_war:
        "A year has passed since the Battle of Thaylen Field, " +
        "where Dalinar Kholin rejected Odium's attempt to " +
        "claim him and united the forces of humanity against " +
        "the enemy. Yet despite that remarkable victory, " +
        "the war for Roshar has become a brutal stalemate. " +
        "Dalinar's coalition and the Knights Radiant continue " +
        "fighting the armies of the singers and the Fused, " +
        "with neither side able to secure a decisive advantage. " +
        "Meanwhile, Navani Kholin and her scholars are " +
        "developing revolutionary fabrial technologies " +
        "that could transform the nature of warfare. " +
        "Kaladin Stormblessed, still haunted by the emotional " +
        "cost of battle and his inability to protect everyone, " +
        "must confront his changing place among the Windrunners. " +
        "As increasingly powerful Fused return to the conflict, " +
        "the shortage of honorspren willing to bond humans " +
        "threatens the Radiants' future. To address this crisis, " +
        "Shallan and Adolin prepare a dangerous diplomatic " +
        "mission into Shadesmar, hoping to convince the " +
        "honorspren to support humanity once more. " +
        "At Urithiru, the ancient tower city remains a " +
        "mystery, its extraordinary magical systems still " +
        "largely dormant. As new discoveries challenge " +
        "everything the Radiants understand about their " +
        "powers, their enemies begin preparing an audacious " +
        "operation that could change the course of the war.",

    wind_and_truth:
        "The war for Roshar is approaching its most critical " +
        "moment. Following the struggle to reclaim Urithiru, " +
        "Navani Kholin has bonded the Sibling, restoring " +
        "the tower's ancient powers and becoming a Bondsmith. " +
        "Kaladin Stormblessed has sworn the Fourth Ideal of " +
        "the Windrunners, while Shallan and Adolin have " +
        "uncovered disturbing truths about the history " +
        "of the Knights Radiant and their spren. " +
        "Yet an even greater confrontation now approaches. " +
        "Dalinar Kholin has negotiated a contest of champions " +
        "with Odium, agreeing that the fate of Roshar " +
        "will be decided in just ten days. Unknown to most, " +
        "the god's previous Vessel, Rayse, has been killed " +
        "and replaced by Taravangian, whose intelligence " +
        "and ruthless determination make him an " +
        "unpredictable adversary. As the countdown begins, " +
        "Dalinar and Navani search for knowledge that " +
        "might give them an advantage in the coming contest. " +
        "Meanwhile, Kaladin accompanies Szeth to Shinovar, " +
        "where the former assassin must confront the " +
        "corruption threatening his homeland and seek " +
        "answers connected to the Herald Ishar. " +
        "Across Roshar, the coalition struggles to defend " +
        "its territories as the war intensifies, while " +
        "Shallan and her allies pursue ancient mysteries " +
        "connected to the Unmade and the fate of the spren. " +
        "With only ten days remaining before the contest, " +
        "the Knights Radiant face a desperate struggle " +
        "whose outcome could reshape the future of Roshar " +
        "and the wider Cosmere.",

    // MISTBORN ERA 2

    the_alloy_of_law:
        "Centuries after the age of the original Mistborn " +
        "trilogy, Scadrial has entered a new era of " +
        "industry and technological progress. " +
        "Railways, electric lighting, and growing cities " +
        "are transforming society, but the ancient " +
        "powers of Allomancy and Feruchemy remain. " +
        "Waxillium Ladrian, a skilled lawman and " +
        "a rare Twinborn who can manipulate metal " +
        "and alter his own weight, has spent years " +
        "bringing criminals to justice in the " +
        "lawless frontier known as the Roughs. " +
        "Following a personal tragedy, Wax returns " +
        "to the bustling city of Elendel to assume " +
        "his responsibilities as the head of a noble house. " +
        "But when a series of mysterious robberies " +
        "threatens the city, he discovers that " +
        "leaving his dangerous past behind may " +
        "be far more difficult than he imagined.",

    shadows_of_self:
        "After exposing Miles Hundredlives and defeating the " +
        "Vanishers, Waxillium Ladrian has established himself " +
        "as a formidable lawman in Elendel. Yet the conspiracy " +
        "he uncovered is far from over. His uncle Edwarn, " +
        "previously believed dead, is secretly involved with " +
        "the mysterious organization known as the Set. " +
        "As Wax continues investigating its activities, " +
        "a series of brutal murders threatens to plunge " +
        "Elendel into chaos. Political corruption, religious " +
        "tensions, and growing unrest place the city on " +
        "the edge of catastrophe. Together with Wayne " +
        "and Marasi, Wax must uncover the force behind " +
        "the violence before the fragile stability of " +
        "Scadrial's rapidly changing society collapses.",

    the_bands_of_mourning:
        "Following the devastating events in Elendel, " +
        "Waxillium Ladrian struggles with the revelation " +
        "that Lessie was actually Paalm, a kandra who " +
        "had been sent by Harmony to watch over him. " +
        "Having lost the woman he loved for a second time, " +
        "Wax finds his faith in Harmony deeply shaken. " +
        "Meanwhile, the mysterious Set continues operating " +
        "in the shadows, and questions surrounding the " +
        "unknown metal connected to Paalm remain unresolved. " +
        "When evidence emerges suggesting that the legendary " +
        "Bands of Mourning might actually exist, Wax is " +
        "drawn into an expedition beyond Elendel. " +
        "These mythical metalminds are believed to grant " +
        "extraordinary Allomantic and Feruchemical powers. " +
        "Joined by Wayne, Marasi, and Steris, Wax must " +
        "investigate their possible location while " +
        "confronting the growing influence of the Set " +
        "and his complicated relationship with Harmony.",

    secret_history:
        "Kelsier was killed by the Lord Ruler, but his story " +
        "did not end with his death. Refusing to pass into " +
        "the Beyond, the Survivor finds himself existing " +
        "in the Cognitive Realm, a mysterious dimension " +
        "beyond the ordinary physical world. Meanwhile, " +
        "the events of the original Mistborn trilogy " +
        "continue to unfold: Vin defeats the Lord Ruler, " +
        "Ruin escapes from the Well of Ascension, and " +
        "Scadrial approaches destruction before Sazed " +
        "ultimately takes up the powers of Ruin and " +
        "Preservation to become Harmony. Yet behind " +
        "these world-changing events lies another story. " +
        "Unable to interact with the physical world " +
        "normally, Kelsier must navigate unfamiliar " +
        "realms, confront forces far beyond anything " +
        "he understood in life, and search for ways " +
        "to influence the fate of the world he left " +
        "behind. Mistborn: Secret History revisits " +
        "the original trilogy from an unexpected " +
        "perspective, revealing hidden dimensions " +
        "of Scadrial and its magical history.",

    the_lost_metal:
        "Six years after the events of The Bands of Mourning, " +
        "Waxillium Ladrian has largely left his life as a " +
        "lawman behind. Now a senator in Elendel, married " +
        "to Steris and raising a family, Wax works to " +
        "protect the city through politics rather than " +
        "gunfights. However, the shadowy organization " +
        "known as the Set remains a dangerous threat. " +
        "Although his uncle Edwarn is dead, Wax has " +
        "discovered that his own sister, Telsin, is " +
        "deeply involved in the conspiracy. Meanwhile, " +
        "tensions between Elendel and the Outer Cities " +
        "continue to escalate, threatening the stability " +
        "of the Basin. When Marasi and Wayne uncover " +
        "suspicious weapons shipments connected to " +
        "Bilming, their investigation exposes signs " +
        "of a much larger threat. As Wax discovers " +
        "evidence of a devastating new explosive " +
        "technology, the mysterious power worshipped " +
        "by the Set becomes an increasingly urgent " +
        "concern. With Harmony's influence complicating " +
        "his decisions, Wax must determine whether " +
        "he can continue living as a politician and " +
        "family man or return to the dangerous role " +
        "he thought he had finally escaped. The " +
        "Lost Metal brings Mistborn Era 2 toward " +
        "its conclusion as the stakes expand " +
        "beyond the streets of Elendel.",

    // COSMERE SECRET PROJECTS

    the_sunlit_man:
        "For years, a mysterious traveler known as " +
        "Nomad has fled across the Cosmere, pursued " +
        "by a relentless group called the Night Brigade. " +
        "Using extraordinary abilities to escape " +
        "from one planet to another, he has survived " +
        "by constantly staying ahead of his enemies. " +
        "But when his powers become dangerously depleted, " +
        "he finds himself stranded on Canticle, " +
        "a hostile world where the rising sun burns " +
        "with enough intensity to melt the ground itself. " +
        "Survival requires constant movement, and " +
        "the planet's inhabitants face dangers " +
        "far beyond the merciless sunlight. " +
        "Drawn into a conflict between an oppressive " +
        "ruler and those resisting his authority, " +
        "Nomad must find a way to survive long enough " +
        "to escape. Yet the secrets of his past " +
        "may prove just as dangerous as the " +
        "world threatening to consume him.",

    tress_of_the_emerald_sea:
        "On a small island surrounded by an extraordinary " +
        "emerald-green sea, a young woman named Tress " +
        "lives a peaceful and predictable life. " +
        "She spends her days collecting cups brought " +
        "from distant lands and enjoying the company " +
        "of her closest friend, Charlie. " +
        "But the oceans of her world are unlike " +
        "any ordinary sea: instead of water, they " +
        "are filled with dangerous magical spores " +
        "that can react violently to the slightest " +
        "touch of moisture. When Charlie is taken " +
        "away on a voyage and fails to return, " +
        "Tress decides to abandon the safety " +
        "of her island to search for him. " +
        "Her journey takes her aboard a ship " +
        "and into a world of pirates, strange " +
        "magic, and deadly spore oceans, " +
        "where even the simplest mistake " +
        "can become a matter of life and death.",

    yumi_and_the_nightmare_painter:
        "Yumi has spent her entire life following " +
        "strict traditions in a world where gifted " +
        "individuals can summon powerful spirits " +
        "through the careful arrangement of stones. " +
        "Although her abilities are essential " +
        "to her society, she dreams of freedom " +
        "from the responsibilities placed upon her. " +
        "Elsewhere, in a city surrounded by endless " +
        "darkness, a young man known as Painter " +
        "works to protect people from supernatural " +
        "nightmares by capturing them through art. " +
        "Despite his unusual profession, he struggles " +
        "with loneliness, disappointment, and " +
        "the consequences of his past. " +
        "When a mysterious connection unexpectedly " +
        "brings their lives together, Yumi and " +
        "Painter must learn to understand each " +
        "other's extraordinary worlds. " +
        "As they investigate the strange circumstances " +
        "connecting them, their discoveries threaten " +
        "to challenge everything they believe " +
        "about their lives and responsibilities.",

    isles_of_the_emberdark:
        "In a distant era of the Cosmere, powerful " +
        "spacefaring civilizations are expanding " +
        "their influence across the stars. " +
        "Sixth of the Dusk, a skilled trapper from " +
        "the deadly island of Patji, belongs to " +
        "a people who share a unique bond with " +
        "supernatural birds known as Aviar. " +
        "But the arrival of technologically advanced " +
        "outsiders threatens their independence " +
        "and way of life. Determined to find " +
        "a future for his people, Dusk ventures " +
        "beyond a mysterious portal into the emberdark, " +
        "a strange realm connecting distant worlds. " +
        "Meanwhile, Starling, a young dragon trapped " +
        "in human form, travels with a struggling " +
        "starship crew whose freedom is at risk. " +
        "When an ancient map offers the possibility " +
        "of a valuable discovery, their separate " +
        "quests draw them toward the same mysteries. " +
        "Together, their journeys explore a galaxy " +
        "where ancient magic and advanced technology " +
        "are becoming increasingly intertwined.",

    the_fires_of_december:
        "In a forgotten kingdom sustained by flowing " +
        "rivers of colorful demon blood, a young " +
        "orphan named December has grown up trying " +
        "to find her place in a society that " +
        "expects her to follow a predetermined path. " +
        "But when an extraordinary experience " +
        "reveals the approach of a devastating plague, " +
        "she discovers that the kingdom's mysterious " +
        "blood rivers may soon become the source " +
        "of an unimaginable catastrophe. " +
        "With little influence and no reason " +
        "for the powerful to believe her warnings, " +
        "December sets out along the River Violet " +
        "to reach the royal court before disaster strikes. " +
        "Accompanied by a talkative priestess " +
        "and an aspiring fashion designer, " +
        "she must navigate dangerous political " +
        "intrigue, unfamiliar societies, and " +
        "powerful individuals who may hold " +
        "the key to saving her homeland."

};


/* ==========================================
   COSMERE SPOILER REQUIREMENTS
   ========================================== */

// Each ID lists the earlier books the description may spoil.
// These are warning boundaries, not extra works in a reading order.

const COSMERE_SPOILER_PREREQUISITES = {

    // MISTBORN ERA 1

    the_well_of_ascension: [
        "the_final_empire"
    ],

    the_hero_of_ages: [
        "the_final_empire",
        "the_well_of_ascension"
    ],

    // MISTBORN ERA 2

    shadows_of_self: [
        "the_alloy_of_law"
    ],

    the_bands_of_mourning: [
        "the_alloy_of_law",
        "shadows_of_self"
    ],

    secret_history: [
        "the_final_empire",
        "the_well_of_ascension",
        "the_hero_of_ages",
        "the_bands_of_mourning"
    ],

    the_lost_metal: [
        "the_alloy_of_law",
        "shadows_of_self",
        "the_bands_of_mourning",
        "secret_history"
    ],

    // THE STORMLIGHT ARCHIVE

    words_of_radiance: [
        "the_way_of_kings"
    ],

    edgedancer: [
        "the_way_of_kings",
        "words_of_radiance"
    ],

    oathbringer: [
        "the_way_of_kings",
        "words_of_radiance",
        "edgedancer"
    ],

    dawnshard: [
        "the_way_of_kings",
        "words_of_radiance",
        "edgedancer",
        "oathbringer"
    ],

    rhythm_of_war: [
        "the_way_of_kings",
        "words_of_radiance",
        "edgedancer",
        "oathbringer",
        "dawnshard"
    ],

    wind_and_truth: [
        "the_way_of_kings",
        "words_of_radiance",
        "edgedancer",
        "oathbringer",
        "dawnshard",
        "rhythm_of_war"
    ]

};


/* ==========================================
   COSMERE DATABASE HELPERS
   ========================================== */

// Look up an entry using its stable ID.
function findCosmereBook(bookId) {
    return COSMERE_BOOKS.find(book => book.id === bookId);
}

// Resolve the IDs in either reading-order array into book objects.
function getCosmereReadingOrder(orderType) {
    const orderIds = orderType === "publication"
        ? COSMERE_PUBLICATION_ORDER
        : COSMERE_SUGGESTED_ORDER;

    return orderIds.map(bookId => findCosmereBook(bookId));
}

// Get the introduction shared by all places a book appears.
function getCosmereDescription(bookId) {
    return COSMERE_DESCRIPTIONS[bookId] ??
        "A story set within Brandon Sanderson's Cosmere universe.";
}

// Check whether a book needs a spoiler warning.
function getCosmereSpoilerPrerequisites(bookId) {
    return COSMERE_SPOILER_PREREQUISITES[bookId] ?? [];
}
