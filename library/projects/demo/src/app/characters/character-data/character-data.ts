import { ICharacter, ICharacterTag } from './character-models';

export const HARRY_POTTER_TAGS: {[key: string]: ICharacterTag} = {
  ministryOfMagic: { id: '53426b9f-eea9-5737-8617-6cfb6aeab0c1', name: 'Ministry of Magic' },
  dumbledoresArmy: { id: '3c974aeb-eb33-56a6-ad23-238d2daae78a', name: 'Dumbledores Army' },
  deathEater: { id: '028e74a7-0913-5aaf-8e9c-590c783c5920', name: 'Death Eater' },
  orderOfThePhoenix: { id: '92aa986c-c2c9-5000-bd57-f778a78965c8', name: 'Order of the Phoenix' },
  inquisitorialSquad: { id: 'a9ae1873-575a-5949-a46e-a023dbca7669', name: 'InquisitorialSquad' },
  hogwartsPrefect: { id: '5ccd71de-d402-59ea-b63a-a2eb6e622d5b', name: 'prefect' },
  auror: { id: 'eb531f3e-f84c-53b1-a15c-25e78f3df891', name: 'auror' },
  student: { id: 'b30e0076-1515-51ec-b84d-5f82d6a3acbe', name: 'student' },
  professor: { id: '1236cf9f-4d0a-593d-8f51-5cc4127cda34', name: 'professor' },
  hufflepuff: { id: '09f7773a-bda8-5fce-b610-a90fd72f3eda', name: 'hufflepuff' },
  gryffindor: { id: '85ca6fe1-11be-5a09-b11b-7686635ac894', name: 'gryffindor' },
  ravenclaw: { id: 'b67e137f-87a7-5da7-b1fb-bb9694b67454', name: 'ravenclaw' },
  slytherin: { id: 'd6076c06-3d5a-544c-8b8d-25988c44e922', name: 'slytherin' },
  durmstrang: { id: '3aaeea2c-9759-5cb8-b180-c36871f7ccb9', name: 'durmstrang' },
  quidditch: { id: '929b4f57-0b20-570a-9de4-d4a613425983', name: 'quidditch' },
  muggleBorn: { id: '3b9e5016-bf9d-57d2-8e84-10966bd82190', name: 'muggle-born' },
  halfBlood: { id: 'bf9c4031-1c4b-5fa9-b854-54bdf452c378', name: 'half-blood' },
  pureBlood: { id: 'c4ddfae7-2f48-5305-bbef-66008facb84a', name: 'pure-blood' },
};

export const HARRY_POTTER_CHARACTERS: ICharacter[] = [
  {
    firstName: 'Hannah',
    lastName: 'Abbott',
    note: 'Hufflepuff student in Harry Potter\'s year. Prefect and member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.hufflepuff, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.hogwartsPrefect ],
    id: '89b2fcc3-7916-40f3-b546-ed43cc5d25ee'
  }, {
    firstName: 'Ludo',
    lastName: 'Bagman',
    note: 'Head of the Department of Magical Games and Sports within the Ministry of Magic.',
    tags: [ HARRY_POTTER_TAGS.ministryOfMagic ],
    id: '2289bd71-e1b6-488e-a195-3eb86deff26c'
  }, {
    firstName: 'Bathilda',
    lastName: 'Bagshot',
    note: 'Author of A History of Magic',
    tags: [],
    id: 'c750202c-6e3e-4cd3-ba43-0f7711e0bbe2'
  }, {
    firstName: 'Katie',
    lastName: 'Bell',
    note: 'Gryffindor Quidditch Chaser one year above Harry Potter. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy ],
    id: 'b9d5499e-dc89-47b9-a528-99eb5cebc6d9'
  }, {
    firstName: 'Cuthbert',
    lastName: 'Binns',
    note: 'ghost',
    tags: [],
    id: '14c5d799-81c0-4420-8821-da8e537a14ac'
  }, {
    firstName: 'Phineas Nigellus',
    lastName: 'Black',
    note: 'Great-great-grandfather of Sirius Black and former Hogwarts headmaster. His painting hangs in the office and assists the current headmaster.',
    tags: [],
    id: '11eaff13-0256-412e-8f73-5ccad6da2d48'
  }, {
    firstName: 'Sirius',
    lastName: 'Black',
    note: 'Harry\'s godfather who was a close friend of Harry\'s father James. Escapee from Azkaban prison and member of the Order of the Phoenix. Killed in the Battle of the Department of Mysteries by his cousin Bellatrix Lestrange.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: 'b5b1ba0f-5626-400f-a51b-8469e116373f'
  }, {
    firstName: 'Amelia',
    lastName: 'Bones',
    note: 'Head of the Department of Magical Law Enforcement',
    tags: [],
    id: '63adffd4-9552-4d3c-b268-2988d86c392c'
  }, {
    firstName: 'Susan',
    lastName: 'Bones',
    note: 'Hufflepuff student in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.hufflepuff, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '03c818a1-dbb2-47de-8d33-cb8bd9fe34da'
  }, {
    firstName: 'Terry',
    lastName: 'Boot',
    note: 'Ravenclaw student in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: 'd5ed778d-3cbd-429a-8379-7bbb3c87ab6e'
  }, {
    firstName: 'Lavender',
    lastName: 'Brown',
    note: 'Gryffindor student in Harry\'s year and member of Dumbledore\'s Army. Killed in the Battle of Hogwarts.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '507cf190-fb4f-4eb4-a227-d62c0d14649c'
  }, {
    firstName: 'Millicent',
    lastName: 'Bulstrode',
    note: 'Slytherin student in Harry\'s year. Member of Dolores Umbridge\'s Inquisitorial Squad.',
    tags: [ HARRY_POTTER_TAGS.slytherin, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.inquisitorialSquad ],
    id: 'cf161f1a-4d36-4097-8783-039f3e42d3f7'
  }, {
    firstName: 'Charity',
    lastName: 'Burbage',
    note: 'Professor of Muggle Studies at Hogwarts. Killed by Lord Voldemort.',
    tags: [],
    id: '1fba44e2-4d0b-4731-8a37-870627784ef8'
  }, {
    firstName: 'Frank',
    lastName: 'Bryce',
    note: 'Muggle gardener for the Riddle family. Killed by Lord Voldemort.',
    tags: [],
    id: 'cac5a9ca-35f8-41e9-8ad7-71eabb91a5d7'
  }, {
    firstName: 'Alecto',
    lastName: 'Carrow',
    note: 'Death Eater and sister of Amycus Carrow. Professor of Muggle Studies for one year',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '277a4478-93a7-4cb2-aee8-bccd3d389ac2'
  }, {
    firstName: 'Amycus',
    lastName: 'Carrow',
    note: 'Death Eater and brother of Alecto Carrow. Professor of Defence Against the Dark Arts for one year',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: 'cca52a20-35f1-43fa-9f02-b219ce1de802'
  }, {
    firstName: 'Reginald',
    lastName: 'Cattermole',
    note: 'Employee of the Magical Maintenance Department for the Ministry of Magic. Impersonated by Ron Weasley.',
    tags: [],
    id: 'a1364088-b816-4540-a307-a40b954ecc93'
  }, {
    firstName: 'Mary',
    lastName: 'Cattermole',
    note: 'Muggle-born wife of Reginald Cattermole. Saved by Harry Potter from the Muggle-born Registration Commission.',
    tags: [HARRY_POTTER_TAGS.muggleBorn],
    id: 'c44fe06d-9209-4839-b221-7ad7ecff13a3'
  }, {
    firstName: 'Cho',
    lastName: 'Chang',
    note: 'Ravenclaw Quidditch Seeker one year above Harry',
    tags: [ HARRY_POTTER_TAGS.ravenclaw ],
    id: '14c5ebf9-a0bb-4fe7-917e-ed2fa822996a'
  }, {
    firstName: 'Penelope',
    lastName: 'Clearwater',
    note: 'Ravenclaw prefect and girlfriend of Percy Weasley.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.hogwartsPrefect ],
    id: 'edba1a01-772f-43ea-b9f4-6b9727f5980e'
  }, {
    firstName: 'Michael',
    lastName: 'Corner',
    note: 'Ravenclaw student in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '15091b87-7cb1-407d-8f84-7a410b33fd19'
  }, {
    firstName: 'Vincent',
    lastName: 'Crabbe',
    note: 'Slytherin student in Harry\'s year and the son of a Death Eater. Slytherin Quidditch Beater and member of the Inquisitorial Squad. Killed by his own Fiendfyre spell.',
    tags: [ HARRY_POTTER_TAGS.slytherin, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.inquisitorialSquad ],
    id: '59fc0364-dc52-44f0-ad7a-3572626cd902'
  }, {
    firstName: 'Colin',
    lastName: 'Creevey',
    note: 'Muggle-born Gryffindor student one year below Harry. Older brother of Dennis Creevey',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student ],
    id: '4d0e836b-e9d3-4db3-9a1d-f75faed1a726'
  }, {
    firstName: 'Dennis',
    lastName: 'Creevey',
    note: 'Muggle-born Gryffindor student three years below Harry. Younger brother of Colin Creevey',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.muggleBorn ],
    id: '1a75864a-3f06-46f6-9205-4562a9b43c98'
  }, {
    firstName: 'Dirk',
    lastName: 'Cresswell',
    note: 'Muggle-born Head of the Goblin Liaison Office',
    tags: [HARRY_POTTER_TAGS.muggleBorn],
    id: '514c151a-6dbf-480f-836a-f5ecce1fffd0'
  }, {
    firstName: 'Barty',
    lastName: 'Crouch Sr',
    note: 'Head of the Department of International Magical Cooperation. Killed by his son Barty Crouch Jr.',
    tags: [],
    id: '42df9e86-5de0-4240-b641-6107151821b8'
  }, {
    firstName: 'Barty',
    lastName: 'Crouch Jr',
    note: 'Death Eater credited with facilitating the return of Lord Voldemort. Used Polyjuice Potion to impersonate Alastor Moody',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '7273f5c1-9162-41c5-9eea-370d3ad0626a'
  }, {
    firstName: 'Roger',
    lastName: 'Davies',
    note: 'Ravenclaw Quidditch Captain and Chaser. Attended Yule Ball with Fleur Delacour.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw ],
    id: '1fa2b284-dc8a-4794-8398-ae35e78eb677'
  }, {
    firstName: 'John',
    lastName: 'Dawlish',
    note: 'an Auror.',
    tags: [ HARRY_POTTER_TAGS.auror ],
    id: '3d729b2c-f677-4296-a12f-32f818b18fd2'
  }, {
    firstName: 'Fleur',
    lastName: 'Delacour',
    note: 'Participant in the Triwizard Tournament as a representative of wizarding school Beauxbatons. Later married Bill Weasley.',
    tags: [],
    id: '8208ca06-1992-4f07-ae1d-ec9983a58f8c'
  }, {
    firstName: 'Gabrielle',
    lastName: 'Delacour',
    note: 'Fleur\'s younger sister. Rescued by Harry during the Triwizard Tournament.',
    tags: [],
    id: 'f6cf8d0a-f184-4ca4-b228-c90ae52740e8'
  }, {
    firstName: 'Dedalus',
    lastName: 'Diggle',
    note: 'Member of the Order of the Phoenix who took the Dursleys into hiding.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: 'e67c5d84-95c2-495b-9164-0d19ad71f746'
  }, {
    firstName: 'Amos',
    lastName: 'Diggory',
    note: 'Cedric Diggory\'s father. Employee of the Department for the Regulation and Control of Magical Creatures.',
    tags: [],
    id: 'e4fd05e8-a50a-4435-997c-2373e149fce1'
  }, {
    firstName: 'Cedric',
    lastName: 'Diggory',
    note: 'Hufflepuff student and prefect two years above Harry. Quidditch Seeker and captain',
    tags: [ HARRY_POTTER_TAGS.hufflepuff, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.hogwartsPrefect ],
    id: '210873ff-4bf2-4caf-9e3f-b4fb28a6734e'
  }, {
    firstName: 'Elphias',
    lastName: 'Doge',
    note: 'School friend of Albus Dumbledore.',
    tags: [],
    id: 'f50d1b77-16a7-4c3d-8c83-188f8ab40f61'
  }, {
    firstName: 'Antonin',
    lastName: 'Dolohov',
    note: 'Death Eater who killed Fabian Prewett',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: 'cb6996e7-5214-455a-bab8-15f8b428edf9'
  }, {
    firstName: 'Aberforth',
    lastName: 'Dumbledore',
    note: 'Brother of Albus and Ariana Dumbledore. Owner of the Hog\'s Head tavern.',
    tags: [],
    id: '0fa2b480-4990-4ca3-bf60-3ec6f6a27b16'
  }, {
    firstName: 'Albus',
    lastName: 'Dumbledore',
    note: 'Transfiguration professor in Tom Riddle\'s time',
    tags: [],
    id: 'c0858107-5c70-410f-b804-23c44533fd67'
  }, {
    firstName: 'Ariana',
    lastName: 'Dumbledore',
    note: 'Sister of Albus and Aberforth Dumbledore',
    tags: [],
    id: '9a7bb5ae-732e-4c2b-a01c-f5e94b3fd081'
  }, {
    firstName: 'Kendra',
    lastName: 'Dumbledore',
    note: 'Wife of Percival Dumbledore. Mother of Albus',
    tags: [],
    id: '16dc4105-e66d-406d-9fc9-ec760d7d7772'
  }, {
    firstName: 'Percival',
    lastName: 'Dumbledore',
    note: 'Husband of Kendra Dumbledore',
    tags: [],
    id: 'd930cf7a-e6d1-41e4-8513-dbd1ccd15d66'
  }, {
    firstName: 'Dudley',
    lastName: 'Dursley',
    note: 'Muggle son of Vernon Dursley and Petunia Evans',
    tags: [],
    id: 'f5259094-b72d-4f39-ac1f-904990ca4e91'
  }, {
    firstName: 'Marge',
    lastName: 'Dursley',
    note: 'Muggle sister of Vernon Dursley.',
    tags: [],
    id: '474061c6-2e05-4de5-b062-ad5c636e30e2'
  }, {
    firstName: 'Petunia',
    lastName: 'Dursley',
    note: 'Harry\'s aunt',
    tags: [],
    id: 'e0b379c4-58e1-49d8-b7fa-c6acce6111b5'
  }, {
    firstName: 'Vernon',
    lastName: 'Dursley',
    note: 'Harry Potter\'s Muggle uncle. Petunia\'s husband and Dudley\'s father.',
    tags: [],
    id: '07d5ae81-1cca-4a92-8002-6b6ba4ca461a'
  }, {
    firstName: 'Marietta',
    lastName: 'Edgecombe',
    note: 'Ravenclaw student one year above Harry. Member of Dumbledore\'s Army who later betrays the group to Dolores Umbridge.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: 'e4f03b74-6ef1-4869-9f21-46a1823c55b0'
  }, {
    firstName: 'Arabella',
    lastName: 'Figg',
    note: 'Squib neighbor of the Dursleys. Member of the Order of the Phoenix.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: 'ce4ca050-ac6f-4566-a46e-4057e803d65f'
  }, {
    firstName: 'Argus',
    lastName: 'Filch',
    note: 'Squib caretaker of Hogwarts.',
    tags: [],
    id: '198b99c9-7f71-4075-b898-d89fe5409911'
  }, {
    firstName: 'Justin',
    lastName: 'Finch-Fletchley',
    note: 'Muggle-born Hufflepuff student in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.hufflepuff, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.muggleBorn ],
    id: '5f685938-54f2-497c-9867-e45edf41737c'
  }, {
    firstName: 'Seamus',
    lastName: 'Finnigan',
    note: 'Gryffindor student in Harry\'s year. Member of Dumbledore\'s Army and best friend of housemate Dean Thomas.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '15216cea-63db-4446-accd-d8b9db94b9af'
  }, {
    firstName: 'Marcus',
    lastName: 'Flint',
    note: 'Slytherin Quidditch captain.',
    tags: [ HARRY_POTTER_TAGS.slytherin ],
    id: '3690ae7f-012c-4517-84f3-9910838ae182'
  }, {
    firstName: 'Mundungus',
    lastName: 'Fletcher',
    note: 'Common thief and shifty Order of the Phoenix member.',
    tags: [],
    id: '59184fda-9287-4aed-ad3c-2356a81d6535'
  }, {
    firstName: 'Filius',
    lastName: 'Flitwick',
    note: 'Head of Ravenclaw House and Charms professor at Hogwarts.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw ],
    id: '643ec504-2203-483b-aa32-29d2bb457eca'
  }, {
    firstName: 'Florean',
    lastName: 'Fortescue',
    note: 'Ice cream vendor at Diagon Alley.',
    tags: [],
    id: 'aa43c3d4-8386-42ca-90b6-45047297ce5f'
  }, {
    firstName: 'Cornelius',
    lastName: 'Fudge',
    note: 'Minister for Magic in the first five books. Sacked after persistently denying Lord Voldemort\'s return.',
    tags: [],
    id: '43281a5c-d7c8-4648-9837-3b3f78f6683e'
  }, {
    firstName: 'Marvolo',
    lastName: 'Gaunt',
    note: 'The pure-blood father of Merope and Morfin Gaunt',
    tags: [HARRY_POTTER_TAGS.pureBlood],
    id: '0d8f88c6-14ce-4e67-95e2-8e1925e4cb81'
  }, {
    firstName: 'Merope',
    lastName: 'Gaunt',
    note: 'Tom Riddle\'s mother who died in childbirth.',
    tags: [],
    id: 'cf572009-f1ae-4148-abb5-1ed789241ca6'
  }, {
    firstName: 'Morfin',
    lastName: 'Gaunt',
    note: 'Marvolo\'s son and Merope\'s brother. Framed by his nephew Tom Riddle for Muggle killings',
    tags: [],
    id: 'f6eac8bc-1df5-4409-a2ae-5d0afcca4f8e'
  }, {
    firstName: 'Anthony',
    lastName: 'Goldstein',
    note: 'Ravenclaw student in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '69ed99aa-ff9e-441b-827d-3bd8e962990c'
  }, {
    firstName: 'Gregory',
    lastName: 'Goyle',
    note: 'Slytherin student in Harry\'s year. Slytherin Quidditch Beater and member of the Inquisitorial Squad.',
    tags: [ HARRY_POTTER_TAGS.slytherin, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.inquisitorialSquad ],
    id: '83b5219a-be6a-455d-b3a7-d714f32ec07d'
  }, {
    firstName: 'Hermione',
    lastName: 'Granger',
    note: 'Muggle-born Gryffindor student in Harry\'s year and one of his best friends. Prefect and co-founder of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.muggleBorn, HARRY_POTTER_TAGS.hogwartsPrefect ],
    id: '4fe1434c-1371-40d2-9c79-394b84d047f2'
  }, {
    firstName: 'Fenrir',
    lastName: 'Greyback',
    note: 'Werewolf working for the Death Eaters.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: 'd21d4d12-8e14-47c6-b24d-ce93f853fcbe'
  }, {
    firstName: 'Gellert',
    lastName: 'Grindelwald',
    note: 'Dark wizard who was jailed after Albus Dumbledore defeated him in the 1940s.',
    tags: [],
    id: '7b29ec67-00ab-45cd-958f-57df7bfc39bc'
  }, {
    firstName: 'Wilhelmina',
    lastName: 'Grubbly-Plank',
    note: 'Substitute Care of Magical Creatures professor during Harry\'s fourth and fifth years.',
    tags: [],
    id: 'c111c621-6c84-410a-b71f-b8e51fce9b57'
  }, {
    firstName: 'Rubeus',
    lastName: 'Hagrid',
    note: 'Half-giant Hogwarts gamekeeper',
    tags: [],
    id: '0360fb1a-ad34-491a-acc6-42bd721064b5'
  }, {
    firstName: 'Rolanda',
    lastName: 'Hooch',
    note: 'Hogwarts flying instructor and Quidditch referee.',
    tags: [],
    id: '2b4a90ba-2549-4a20-8080-a174736894e7'
  }, {
    firstName: 'Mafalda',
    lastName: 'Hopkirk',
    note: 'Witch who works in the Ministry of Magic. Impersonated by Hermione Granger.',
    tags: [],
    id: '6f25ce14-1663-425e-b9d2-40ac6d5ae172'
  }, {
    firstName: 'Angelina',
    lastName: 'Johnson',
    note: 'Gryffindor student two years above Harry. Quidditch Chaser and later team captain.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student ],
    id: '8ed57397-de35-42d9-a2e6-226ba3d55366'
  }, {
    firstName: 'Lee',
    lastName: 'Jordan',
    note: 'Gryffindor student two years above Harry. Hogwarts Quidditch commentator and good friend of Fred and George Weasley.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student ],
    id: 'ddc046f9-1b3d-4b82-b04c-fb2490121bb0'
  }, {
    firstName: 'Igor',
    lastName: 'Karkaroff',
    note: 'Reformed Death Eater. Headmaster of wizarding school Durmstrang.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '3a1f8888-5056-4eb0-b3e6-bbb41a679028'
  }, {
    firstName: 'Viktor',
    lastName: 'Krum',
    note: 'Bulgarian Quidditch Seeker and Durmstrang student who participated in the Triwizard Tournament.',
    tags: [HARRY_POTTER_TAGS.student],
    id: '106b67d9-6594-4f61-bb9b-c7dab52896a7'
  }, {
    firstName: 'Silvanus',
    lastName: 'Kettleburn',
    note: 'Care of Magical Creatures teacher until Harry\'s third year.',
    tags: [ HARRY_POTTER_TAGS.professor ],
    id: '8638ee92-6abe-4dd2-87d6-352c25d1237e'
  }, {
    firstName: 'Bellatrix',
    lastName: 'Lestrange',
    note: 'Cousin of Sirius Black. Death Eater who tortured Neville Longbottom\'s parents Frank and Alice into insanity. Killed by Molly Weasley during the Battle of Hogwarts.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: 'c8e39a15-42c5-45c5-9527-f0079fcb4225'
  }, {
    firstName: 'Rabastan',
    lastName: 'Lestrange',
    note: 'Death Eater. Brother of Rodolphus Lestrange.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '9428f069-8f9a-4576-b828-0b54fab3f802'
  }, {
    firstName: 'Rodolphus',
    lastName: 'Lestrange',
    note: 'Death Eater. Bellatrix\'s husband and Rabastan\'s brother.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '504aec2d-b257-4838-b60b-851c40343a25'
  }, {
    firstName: 'Gilderoy',
    lastName: 'Lockhart',
    note: 'Fraudulent celebrity author and Defence Against the Dark Arts teacher. Lost his memory after a memory charm backfired and resided in St. Mungo\'s afterwards.',
    tags: [ HARRY_POTTER_TAGS.professor ],
    id: '25c3bd2f-d13c-4967-a702-b880a6ebabae'
  }, {
    firstName: 'Alice',
    lastName: 'Longbottom',
    note: 'Neville Longbottom\'s parents. Aurors and members of the original Order of the Phoenix. Tortured into insanity by Bellatrix Lestrange.',
    tags: [ HARRY_POTTER_TAGS.auror ],
    id: '5d3a9ba9-2744-41f7-86e4-08e471d22694'
  }, {
    firstName: 'Frank',
    lastName: 'Longbottom',
    note: 'Neville Longbottom\'s parents. Aurors and members of the original Order of the Phoenix. Tortured into insanity by Bellatrix Lestrange.',
    tags: [ HARRY_POTTER_TAGS.auror ],
    id: '6faa6989-24c1-476c-91b9-72ce300c5a7d'
  }, {
    firstName: 'Augusta',
    lastName: 'Longbottom',
    note: 'Frank\'s mother and Neville\'s grandmother',
    tags: [],
    id: '26c8c253-9808-4c9d-9f7a-6f392d5fa0fc'
  }, {
    firstName: 'Neville',
    lastName: 'Longbottom',
    note: 'Gryffindor student in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: 'a074c90a-2e9b-4625-adcf-f249a96dc4cc'
  }, {
    firstName: 'Luna',
    lastName: 'Lovegood',
    note: 'Xenophilius Lovegood\'s daughter and Ravenclaw student one year below Harry. Member of Dumbledore\'s Army and wife of Newt Scamander\'s grandson Rolf.',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '416af89e-5232-4e5b-ab89-7ea3ee06ddb4'
  }, {
    firstName: 'Xenophilius',
    lastName: 'Lovegood',
    note: 'Luna\'s father. Editor of tabloid magazine The Quibbler.',
    tags: [],
    id: 'cf0423bf-fdf9-47bb-b94d-7ddec788deac'
  }, {
    firstName: 'Remus',
    lastName: 'Lupin',
    note: 'Lycanthropic Gryffindor student before Harry\'s time who befriended Sirius Black and James Potter. Professor of Defence Against the Dark Arts in Harry\'s third year',
    tags: [ HARRY_POTTER_TAGS.gryffindor ],
    id: '81ee69e9-5065-47c5-99ef-9ea447d4f8c9'
  }, {
    firstName: 'Teddy',
    lastName: 'Lupin',
    note: 'Son of Remus Lupin and Nymphadora Tonks',
    tags: [],
    id: '5d390e7b-3a13-4640-8cb3-071a03c79aca'
  }, {
    firstName: 'Walden',
    lastName: 'Macnair',
    note: 'Death Eater and Committee of Disposal of Dangerous Creatures\' executioner. Injured badly by Hagrid during the Battle of Hogwarts.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '6cde8ef0-8d7d-4ead-be64-7df37c51877e'
  }, {
    firstName: 'Draco',
    lastName: 'Malfoy',
    note: 'Slytherin student in Harry\'s year. Quidditch Seeker',
    tags: [ HARRY_POTTER_TAGS.slytherin, HARRY_POTTER_TAGS.student ],
    id: 'fb1f3783-fc18-43bb-936f-d3648de634e2'
  }, {
    firstName: 'Lucius',
    lastName: 'Malfoy',
    note: 'Draco\'s father and an influential Death Eater. Governor of Hogwarts early in the series.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '1c3ac646-8c2f-445d-be6c-8a81279b0495'
  }, {
    firstName: 'Narcissa',
    lastName: 'Malfoy',
    note: 'Lucius\' wife and Draco\'s mother. Sister of Bellatrix Lestrange and Andromeda Tonks.',
    tags: [],
    id: '1b0a2223-1aee-42c4-b5ff-9aea0d673e46'
  }, {
    firstName: 'Scorpius',
    lastName: 'Malfoy',
    note: 'Son of Draco Malfoy and Astoria Greengrass.',
    tags: [],
    id: 'cf7abd95-3b5a-4e7c-ad45-f428a72d65b9'
  }, {
    firstName: 'Madam',
    lastName: 'Malkin',
    note: 'Clothing shop owner in Diagon Alley.',
    tags: [],
    id: 'abafd873-7ef5-4cfa-bd67-69735514a657'
  }, {
    firstName: 'Griselda',
    lastName: 'Marchbanks',
    note: 'Governor of the Wizarding Examinations Authority which ran the O.W.L',
    tags: [],
    id: '6c7b67bc-3c50-4e91-ab25-7d06175f22f7'
  }, {
    firstName: 'Olympe',
    lastName: 'Maxime',
    note: 'Half-giantess. Headmistress of Beauxbatons.',
    tags: [],
    id: '1b36c167-4434-46f7-b464-80251e1e477e'
  }, {
    firstName: 'Ernie',
    lastName: 'Macmillan',
    note: 'Hufflepuff student in Harry\'s year. Prefect and member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.hufflepuff, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.hogwartsPrefect ],
    id: '08082920-3726-4bba-9c7d-fbed733d06d0'
  }, {
    firstName: 'Minerva',
    lastName: 'McGonagall',
    note: 'Hogwarts Transfiguration professor',
    tags: [],
    id: 'fccadbe6-e309-4f29-b3bb-5bf82b226c42'
  }, {
    firstName: 'Cormac',
    lastName: 'McLaggen',
    note: 'Gryffindor student one year above Harry Potter. Quidditch Keeper and member of Horace Slughorn\'s Slug Club.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student ],
    id: '825a6dd2-0818-421c-b7d7-30c06baf9a54'
  }, {
    firstName: 'Graham',
    lastName: 'Montague',
    note: 'Slytherin Quidditch Chaser who became trapped inside a Vanishing Cabinet for six months.',
    tags: [ HARRY_POTTER_TAGS.slytherin ],
    id: 'dc4ff55c-9da4-49ea-b339-be49f33218a5'
  }, {
    firstName: 'Alastor',
    lastName: 'Moody',
    note: 'Retired Auror and member of the Order of the Phoenix. Impersonated by Barty Crouch Jr. in his scheme to enter Harry into the Triwizard Tournament. Killed by Voldemort.',
    tags: [ HARRY_POTTER_TAGS.auror, HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: '303e57a6-5d7b-469b-9c9c-7ec861ea4d15'
  }, {
    firstName: 'Theodore',
    lastName: 'Nott',
    note: 'Slytherin student in the same year as Harry Potter',
    tags: [ HARRY_POTTER_TAGS.slytherin, HARRY_POTTER_TAGS.student ],
    id: '5077cedb-67ab-4a9c-a6be-f8a3239e12a8'
  }, {
    firstName: 'Bob',
    lastName: 'Ogden',
    note: 'Leader of the Department of Magical Law Enforcement Squad in the 1920s. Turned the Gaunt family over to the Wizengamot for using magic in front of a Muggle. Died before Harry Potter\'s sixth year.',
    tags: [],
    id: '5c070527-d2c4-4783-ae0a-643758072acc'
  }, {
    firstName: 'Garrick',
    lastName: 'Ollivander',
    note: 'Wandmaker and owner of the Ollivanders wand shop. Kidnapped by the Malfoy family for several months until freed by Harry',
    tags: [],
    id: '75fb8434-9dfb-4da8-a259-07d9877c5220'
  }, {
    firstName: 'Pansy',
    lastName: 'Parkinson',
    note: 'Slytherin student in Harry\'s year. Prefect and member of the Inquisitorial Squad.',
    tags: [ HARRY_POTTER_TAGS.slytherin, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.hogwartsPrefect, HARRY_POTTER_TAGS.inquisitorialSquad ],
    id: '1a690ed6-726c-4a96-aad0-d773277a19d0'
  }, {
    firstName: 'Padma',
    lastName: 'Patil',
    note: 'Ravenclaw student in Harry\'s year. Identical twin sister of Gryffindor student Parvati Patil',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.student ],
    id: '3be31a62-d133-4aac-9d82-8fa7e637b3c4'
  }, {
    firstName: 'Parvati',
    lastName: 'Patil',
    note: 'Gryffindor student in Harry\'s year and Padma\'s identical twin sister. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '97461328-e83a-4384-bc74-c2965950f3e1'
  }, {
    firstName: 'Peter',
    lastName: 'Pettigrew',
    note: 'Death Eater and former school friend of James Potter',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '8e2012ac-fe3a-49b6-a162-c5291e420ee1'
  }, {
    firstName: 'Irma',
    lastName: 'Pince',
    note: 'Hogwarts librarian.',
    tags: [],
    id: '0ce40792-3d66-4d4d-a9ca-9b92769b2dec'
  }, {
    firstName: 'Sturgis',
    lastName: 'Podmore',
    note: 'Member of the Order of the Phoenix.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: 'c13f87ae-c59a-4bf3-9f71-471fe6f4c6c9'
  }, {
    firstName: 'Poppy',
    lastName: 'Pomfrey',
    note: 'Hogwarts school nurse.',
    tags: [],
    id: '7f62a265-bf45-443f-b8a4-89f34904720d'
  }, {
    firstName: 'Harry',
    lastName: 'Potter',
    note: 'The main character of the series. Orphaned son of James and Lily Potter',
    tags: [HARRY_POTTER_TAGS.halfBlood, HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.quidditch],
    id: 'dc562c4b-8fbf-4977-84d6-68fafd944ac9'
  }, {
    firstName: 'James',
    lastName: 'Potter',
    note: 'Harry Potter\'s father and member of the Order of the Phoenix. Killed along with his wife Lily by Lord Voldemort prior to the start of the series.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: '730f1d70-1f14-40fe-a18d-b4f447e36996'
  }, {
    firstName: 'Lily',
    lastName: 'Potter',
    note: 'Harry Potter\'s mother and member of the Order of the Phoenix. Killed by Lord Voldemort.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: '103594b7-b2f2-46c9-af09-ef23321bd1eb'
  }, {
    firstName: 'Albus Severus',
    lastName: 'Potter',
    note: 'Second child of Harry Potter and Ginny Weasley.',
    tags: [],
    id: '39bd95f6-abca-4630-9c8e-b0d5c2e1d140'
  }, {
    firstName: 'James Sirius',
    lastName: 'Potter',
    note: 'Harry and Ginny\'s first child.',
    tags: [],
    id: 'f22500d6-5b4d-49fc-b2db-1cfcd7774c02'
  }, {
    firstName: 'Lily Luna',
    lastName: 'Potter',
    note: 'Harry and Ginny\'s third child.',
    tags: [],
    id: '6476b2e2-da1b-4ee4-914a-621f42332444'
  }, {
    firstName: 'Quirinus',
    lastName: 'Quirrell',
    note: 'Defence Against the Dark Arts professor in Harry Potter\'s first year. Possessed by Lord Voldemort.',
    tags: [],
    id: '360c80cc-addf-4d69-97b4-a4f91d9d67b8'
  }, {
    firstName: 'Helena',
    lastName: 'Ravenclaw',
    note: 'Daughter of house founder Rowena Ravenclaw. Stole and hid her mother\'s diadem',
    tags: [ HARRY_POTTER_TAGS.ravenclaw ],
    id: '7bb98689-da02-4e38-8951-7d101e48227e'
  }, {
    firstName: 'Mary',
    lastName: 'Riddle',
    note: 'Thomas Riddle\'s Muggle wife',
    tags: [],
    id: '0a88bca8-4904-44c3-84df-4ec1eab9b0a7'
  }, {
    firstName: 'Tom Marvolo',
    lastName: 'Riddle',
    note: 'Slytherin student who became Lord Voldemort.',
    tags: [ HARRY_POTTER_TAGS.slytherin ],
    id: '9f51da41-6cde-475e-b202-ac0b9d851dfa'
  }, {
    firstName: 'Demelza',
    lastName: 'Robins',
    note: 'Gryffindor student and Quidditch Chaser.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.quidditch ],
    id: '6264a616-13ab-4cf7-9a08-3353b1bcfe30'
  }, {
    firstName: 'Augustus',
    lastName: 'Rookwood',
    note: 'Death Eater and spy working in the Department of Mysteries.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '25eb0e4d-c053-4d48-8b30-6bec6f7ad490'
  }, {
    firstName: 'Thorfinn',
    lastName: 'Rowle',
    note: 'Death Eater.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '5523ccda-827a-498a-b452-09630b72ba1d'
  }, {
    firstName: 'Albert',
    lastName: 'Runcorn',
    note: 'Ministry of Magic employee whose chief function was as an investigator of alleged Muggle-borns.',
    tags: [HARRY_POTTER_TAGS.muggleBorn],
    id: '8c6fcbf9-49e4-4226-8c92-89ea4b2869e6'
  }, {
    firstName: 'Newt',
    lastName: 'Scamander',
    note: 'Magizoologist and author of Fantastic Beasts and Where to Find Them. Main character in the Fantastic Beasts film series. Expelled Hogwarts student who excels in curing different sicknesses.',
    tags: [],
    id: 'e80b3290-51e8-4985-aa0e-afb35fffbda4'
  }, {
    firstName: 'Rufus',
    lastName: 'Scrimgeour',
    note: 'Head of the Auror Office who replaces Cornelius Fudge as Minister for Magic. Killed by Death Eaters.',
    tags: [ HARRY_POTTER_TAGS.auror ],
    id: 'e52730df-1305-4a9f-8be0-ef83653fb112'
  }, {
    firstName: 'Kingsley',
    lastName: 'Shacklebolt',
    note: 'Auror and member of the Order of the Phoenix. Replaces Pius Thicknesse as Minister for Magic.',
    tags: [ HARRY_POTTER_TAGS.auror, HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: 'b1a00bb6-ed8a-495f-b7ab-ea3986250a37'
  }, {
    firstName: 'Stan',
    lastName: 'Shunpike',
    note: 'Conductor of the triple-decker Knight Bus. Jailed in Azkaban on suspicions of being a Death Eater.',
    tags: [],
    id: '422df591-d785-4956-9354-780c806c0649'
  }, {
    firstName: 'Aurora',
    lastName: 'Sinistra',
    note: 'Astronomy professor at Hogwarts.',
    tags: [ HARRY_POTTER_TAGS.auror ],
    id: '97139548-479d-465e-a69a-78c218659223'
  }, {
    firstName: 'Rita',
    lastName: 'Skeeter',
    note: 'Reporter and tabloid journalist for the Daily Prophet.',
    tags: [],
    id: 'e14eea97-8d30-4189-a05a-ce0e1939197e'
  }, {
    firstName: 'Horace',
    lastName: 'Slughorn',
    note: 'Former Hogwarts Potions professor and Head of Slytherin House',
    tags: [ HARRY_POTTER_TAGS.slytherin ],
    id: '41a7d851-0fe6-471f-9537-9c8000b02e4f'
  }, {
    firstName: 'Salazar',
    lastName: 'Slytherin',
    note: 'One of the four founders of Hogwarts School of Witchcraft and Wizardry',
    tags: [ HARRY_POTTER_TAGS.slytherin ],
    id: 'db41bb0b-f240-492c-883d-8d16b2bc732c'
  }, {
    firstName: 'Zacharias',
    lastName: 'Smith',
    note: 'Hufflepuff Quidditch Chaser in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.hufflepuff, HARRY_POTTER_TAGS.quidditch ],
    id: 'a0a2ad2e-188a-4c77-8b7e-374d73be660e'
  }, {
    firstName: 'Severus',
    lastName: 'Snape',
    note: 'Potions and later Defence Against the Dark Arts professor at Hogwarts. Head of Slytherin House',
    tags: [ HARRY_POTTER_TAGS.slytherin ],
    id: '40bd0963-c9cc-44a0-8cb7-c9f4fdf3d41c'
  }, {
    firstName: 'Alicia',
    lastName: 'Spinnet',
    note: 'Gryffindor student two years above Harry. Quidditch Chaser and member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.quidditch ],
    id: 'f4e0e0c0-5243-498f-ac6e-a33ea66f2f5e'
  }, {
    firstName: 'Pomona',
    lastName: 'Sprout',
    note: 'Hogwarts Herbology professor and Head of Hufflepuff House.',
    tags: [ HARRY_POTTER_TAGS.hufflepuff ],
    id: '18c920fb-7a8d-4985-af31-9eeeb447eea9'
  }, {
    firstName: 'Pius',
    lastName: 'Thicknesse',
    note: 'Minister for Magic while under the Imperius Curse. Replaced by Kingsley Shacklebolt.',
    tags: [],
    id: '8cae6593-fd0b-412b-939f-91eabec62304'
  }, {
    firstName: 'Dean',
    lastName: 'Thomas',
    note: 'Gryffindor student in Harry\'s year. Member of Dumbledore\'s Army.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.student ],
    id: '47a76d8b-7cc3-47e5-9283-76131f4b02ee'
  }, {
    firstName: 'Andromeda',
    lastName: 'Tonks',
    note: 'Sister of Bellatrix Lestrange and Narcissa Malfoy',
    tags: [],
    id: '3cfc17ed-1071-46a2-9189-0c82d38312db'
  }, {
    firstName: 'Nymphadora',
    lastName: 'Tonks',
    note: 'Ted and Andromeda\'s daughter. Auror and member of the Order of the Phoenix. She marries Remus Lupin and becomes the mother of a son',
    tags: [ HARRY_POTTER_TAGS.auror, HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: '90d6b23d-557d-4d7a-ac7a-b584f0acedc1'
  }, {
    firstName: 'Ted',
    lastName: 'Tonks',
    note: 'Andromeda\'s Muggle-born husband',
    tags: [HARRY_POTTER_TAGS.muggleBorn],
    id: 'b0d2745f-5851-4228-994d-00c3ec10d83b'
  }, {
    firstName: 'Sybill',
    lastName: 'Trelawney',
    note: 'Hogwarts Divination professor. Predicted the prophecy that prompted Lord Voldemort to go after the Potters.',
    tags: [],
    id: '12cb38a4-1df5-4589-b09c-3990e5d3d2ac'
  }, {
    firstName: 'Wilkie',
    lastName: 'Twycross',
    note: 'Hogwarts Apparition instructor who works in the Department of Magical Transportation.',
    tags: [],
    id: '74c94eb9-e37b-4e6d-aef1-530233508f06'
  }, {
    firstName: 'Dolores',
    lastName: 'Umbridge',
    note: 'Senior Undersecretary to the Minister for Magic',
    tags: [],
    id: 'f0be9eca-8b3a-42e9-8174-f510bc1ed02c'
  }, {
    firstName: 'Emmeline',
    lastName: 'Vance',
    note: 'Member of the Order of the Phoenix. Killed by Death Eaters.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: '474a6215-689f-410a-9d51-7eada2ffaa87'
  }, {
    firstName: 'Romilda',
    lastName: 'Vane',
    note: 'Gryffindor student who unsuccessfully tries to romance Harry.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student ],
    id: 'b1e61eea-e695-422d-bc9f-140b76040dbe'
  }, {
    firstName: 'Septima',
    lastName: 'Vector',
    note: 'Arithmancy professor at Hogwarts.',
    tags: [],
    id: '0b2521b1-6c09-48b7-9269-3ba598507e13'
  }, {
    firstName: 'Tom',
    lastName: 'Riddle',
    note: 'The villain of the series. Murderer of Harry Potter\'s parents and many others in his quest for immortality and absolute power.',
    tags: [],
    id: '7b87cefe-8874-4260-abf5-6358f0077dbd'
  }, {
    firstName: 'Moaning',
    lastName: 'Myrtle',
    note: 'Muggle-born Ravenclaw student during Tom Riddle\'s time at Hogwarts. Killed by the Basilisk in a girls\' bathroom',
    tags: [ HARRY_POTTER_TAGS.ravenclaw, HARRY_POTTER_TAGS.student, HARRY_POTTER_TAGS.muggleBorn ],
    id: 'f042fe0d-643b-49dc-a246-4a7cf4c39f88'
  }, {
    firstName: 'Arthur',
    lastName: 'Weasley',
    note: 'Muggle-obsessed Ministry of Magic employee',
    tags: [],
    id: 'dc0ebd7d-c979-48de-91ed-bed28a8c5f53'
  }, {
    firstName: 'Bill',
    lastName: 'Weasley',
    note: 'Oldest son of Arthur and Molly Weasley',
    tags: [],
    id: 'bbf06b38-e9e0-41fe-afa7-8a0bc794d1f9'
  }, {
    firstName: 'Charlie',
    lastName: 'Weasley',
    note: 'Second son of Arthur and Molly Weasley. Member of the Order of the Phoenix. Works with dragons in Romania.',
    tags: [ HARRY_POTTER_TAGS.orderOfThePhoenix ],
    id: 'd26681ef-c35c-4e6d-beaa-3aa3b92629df'
  }, {
    firstName: 'Fred',
    lastName: 'Weasley',
    note: 'Son of Arthur and Molly Weasley and identical twin brother of George Weasley. Gryffindor Quidditch Beater and member of Dumbledore\'s Army',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.quidditch ],
    id: 'd649106e-a130-439b-82cc-d20ff1ad36d1'
  }, {
    firstName: 'George',
    lastName: 'Weasley',
    note: 'Son of Arthur and Molly Weasley and identical twin brother of Fred Weasley. Gryffindor Quidditch Beater and member of Dumbledore\'s Army. Co-owner of Weasleys\' Wizard Wheezes.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.dumbledoresArmy, HARRY_POTTER_TAGS.quidditch ],
    id: '950ff64e-5cd9-4958-9789-c5c09a869469'
  }, {
    firstName: 'Ginny',
    lastName: 'Weasley',
    note: 'Only daughter and youngest child of Arthur and Molly Weasley. Gryffindor student one year below Harry',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.student ],
    id: '84e23fa6-1532-4bb7-957c-a018593e7450'
  }, {
    firstName: 'Hugo',
    lastName: 'Weasley',
    note: 'Son of Ron Weasley and Hermione Granger',
    tags: [],
    id: '5d08f952-9ecd-4b22-914e-c4d7097d190e'
  }, {
    firstName: 'Molly',
    lastName: 'Weasley',
    note: 'Wife of Arthur Weasley and mother of Bill',
    tags: [],
    id: '5675cff4-d075-449b-87f7-decaca3039fc'
  }, {
    firstName: 'Percy',
    lastName: 'Weasley',
    note: 'Third son of Arthur and Molly Weasley. Gryffindor prefect and Head Boy',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.hogwartsPrefect ],
    id: '6cf76a01-7ccd-47ae-a14f-ddab2a0c246e'
  }, {
    firstName: 'Ron',
    lastName: 'Weasley',
    note: 'Youngest son of Arthur and Molly Weasley who is best friends with Harry Potter and Hermione Granger. Gryffindor Quidditch Keeper',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.pureBlood, HARRY_POTTER_TAGS.quidditch ],
    id: '7d5468e5-572c-4c9f-8b5b-a0e6d0db6998'
  }, {
    firstName: 'Oliver',
    lastName: 'Wood',
    note: 'Gryffindor Quidditch Keeper and captain four years above Harry.',
    tags: [ HARRY_POTTER_TAGS.gryffindor, HARRY_POTTER_TAGS.quidditch ],
    id: '3c2ab504-7989-48ca-82dc-0c4d718efc3f'
  }, {
    firstName: 'Rose',
    lastName: 'Weasley',
    note: 'Daughter of Ron Weasley and Hermione Granger. Sister of Hugo Weasley.',
    tags: [],
    id: '3a80d7d1-9042-46ca-a93b-0254ec2e472d'
  }, {
    firstName: 'Corban',
    lastName: 'Yaxley',
    note: 'Death Eater. Head of Magical Law Enforcement under Voldemort\'s regime.',
    tags: [ HARRY_POTTER_TAGS.deathEater ],
    id: '4aff9ecf-c18f-4d7f-9ca3-83881a8a192f'
  }, {
    firstName: 'Blaise',
    lastName: 'Zabini',
    note: 'Slytherin student in Harry\'s year.',
    tags: [ HARRY_POTTER_TAGS.slytherin, HARRY_POTTER_TAGS.student ],
    id: '7bdf3f12-f9cd-4c5d-87fb-13d986ef2930'
  }
];
