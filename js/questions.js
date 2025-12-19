// Question bank for Canadian Citizenship Test DOJO
// Format: Each question has id, chapter, question, options (array), correctAnswer (0-indexed), explanation

const QUESTIONS = [
  {
    id: 1,
    chapter: "Rights and Responsibilities",
    question: "Which of the following responsibilities are LEGALLY required of Canadian citizens?",
    options: [
      "Voting in elections and volunteering in the community",
      "Obeying the law and serving on a jury when called",
      "Protecting the environment and helping others",
      "Getting a job and taking care of your family"
    ],
    correctAnswer: 1,
    explanation: "Only two responsibilities are legally required: obeying Canada's laws and serving on a jury when called. Voting, volunteering, and caring for family are important values but not legal requirements."
  },
  {
    id: 2,
    chapter: "Who We Are",
    question: "What are the three founding peoples of Canada?",
    options: [
      "English, French, and American",
      "Aboriginal, French, and British",
      "First Nations, Inuit, and Métis",
      "Acadian, Québécois, and English"
    ],
    correctAnswer: 1,
    explanation: "The three founding peoples of Canada are Aboriginal peoples, French, and British."
  },
  {
    id: 3,
    chapter: "Canada's History",
    question: "Which battle in 1917 is often considered the 'birth of the nation' for Canada?",
    options: [
      "Battle of the Plains of Abraham",
      "Battle of Vimy Ridge",
      "War of 1812",
      "D-Day at Juno Beach"
    ],
    correctAnswer: 1,
    explanation: "The Battle of Vimy Ridge (1917) is considered an iconic Canadian victory and often referred to as the 'birth of the nation' because all four Canadian divisions fought together for the first time."
  },
  {
    id: 4,
    chapter: "Modern Canada",
    question: "Who discovered insulin, which has saved millions of lives?",
    options: [
      "Alexander Graham Bell and Reginald Fessenden",
      "Sir Frederick Banting and Charles Best",
      "Dr. Wilder Penfield and Dr. John A. Hopps",
      "Joseph-Armand Bombardier and Sir Sandford Fleming"
    ],
    correctAnswer: 1,
    explanation: "Sir Frederick Banting and Charles Best discovered insulin, which treats diabetes and has saved millions of lives."
  },
  {
    id: 5,
    chapter: "How Canadians Govern Themselves",
    question: "What are the three parts of Parliament?",
    options: [
      "Prime Minister, Cabinet, and Senate",
      "House of Commons, Senate, and Supreme Court",
      "Sovereign, Senate, and House of Commons",
      "Governor General, Prime Minister, and Cabinet"
    ],
    correctAnswer: 2,
    explanation: "Parliament has three parts: the Sovereign (King or Queen), the Senate (Upper House), and the House of Commons (elected representatives)."
  },
  {
    id: 6,
    chapter: "Federal Elections",
    question: "What is required to vote in a federal election?",
    options: [
      "Be a permanent resident and 16 years of age or older",
      "Be a Canadian citizen and 18 years of age or older",
      "Be a Canadian citizen and 21 years of age or older",
      "Be a resident of Canada for at least 5 years"
    ],
    correctAnswer: 1,
    explanation: "To vote in a federal election, you must be a Canadian citizen and at least 18 years old on election day."
  },
  {
    id: 7,
    chapter: "Canadian Symbols",
    question: "What is Canada's national winter sport?",
    options: [
      "Curling",
      "Ice hockey",
      "Lacrosse",
      "Skiing"
    ],
    correctAnswer: 1,
    explanation: "Ice hockey is Canada's national winter sport. Lacrosse is the national summer sport."
  },
  {
    id: 8,
    chapter: "Canada's Regions",
    question: "Which province is the only officially bilingual province in Canada?",
    options: [
      "Quebec",
      "Ontario",
      "New Brunswick",
      "Manitoba"
    ],
    correctAnswer: 2,
    explanation: "New Brunswick is the only officially bilingual province in Canada, with about one-third of the population being French-speaking."
  },
  {
    id: 9,
    chapter: "Canada's Economy",
    question: "What percentage of Canadian exports go to the United States?",
    options: [
      "About 50%",
      "About 75%",
      "About 90%",
      "About 25%"
    ],
    correctAnswer: 1,
    explanation: "About 75% of Canadian exports go to the United States, making it Canada's largest trading partner."
  },
  {
    id: 10,
    chapter: "The Justice System",
    question: "What does 'presumption of innocence' mean?",
    options: [
      "The police must prove you committed a crime before arresting you",
      "You are innocent until proven guilty in a fair trial",
      "Only innocent people can serve on a jury",
      "The judge decides if you are innocent before the trial"
    ],
    correctAnswer: 1,
    explanation: "Presumption of innocence means you are considered innocent until proven guilty in a fair trial. This is a fundamental principle of Canadian justice."
  },
  {
    id: 11,
    chapter: "Canada's History",
    question: "Who was the first Prime Minister of Canada?",
    options: [
      "Sir Wilfrid Laurier",
      "Sir John A. Macdonald",
      "Sir George-Étienne Cartier",
      "Lord Durham"
    ],
    correctAnswer: 1,
    explanation: "Sir John A. Macdonald was the first Prime Minister of Canada (1867) and is known as a Father of Confederation."
  },
  {
    id: 12,
    chapter: "Canada's History",
    question: "When did Confederation occur, and which were the founding provinces?",
    options: [
      "1867 - Ontario, Quebec, Nova Scotia, New Brunswick",
      "1867 - Ontario, Quebec, British Columbia, Manitoba",
      "1871 - Ontario, Quebec, Nova Scotia, British Columbia",
      "1859 - Upper Canada, Lower Canada, Nova Scotia, New Brunswick"
    ],
    correctAnswer: 0,
    explanation: "Confederation occurred on July 1, 1867. The four founding provinces were Ontario, Quebec, Nova Scotia, and New Brunswick."
  },
  {
    id: 13,
    chapter: "Rights and Responsibilities",
    question: "The Canadian tradition of ordered liberty dates back to which document signed in 1215?",
    options: [
      "The Constitution Act",
      "The British North America Act",
      "The Magna Carta",
      "The Royal Proclamation"
    ],
    correctAnswer: 2,
    explanation: "The Magna Carta (Great Charter of Freedoms) was signed in England in 1215 and is the foundation for Canada's tradition of ordered liberty."
  },
  {
    id: 14,
    chapter: "Who We Are",
    question: "What percentage of Aboriginal peoples are First Nations?",
    options: [
      "About 30%",
      "About 4%",
      "About 65%",
      "About 50%"
    ],
    correctAnswer: 2,
    explanation: "About 65% of Aboriginal peoples are First Nations, about 30% are Métis, and about 4% are Inuit."
  },
  {
    id: 15,
    chapter: "Canadian Symbols",
    question: "When was the current Canadian flag with the maple leaf adopted?",
    options: [
      "1867",
      "1921",
      "1965",
      "1982"
    ],
    correctAnswer: 2,
    explanation: "The current Canadian flag was adopted on February 15, 1965 (now National Flag of Canada Day). It replaced the Canadian Red Ensign."
  },
  {
    id: 16,
    chapter: "How Canadians Govern Themselves",
    question: "Who is the Head of State in Canada?",
    options: [
      "The Prime Minister",
      "The Governor General",
      "The Sovereign (King or Queen)",
      "The Chief Justice"
    ],
    correctAnswer: 2,
    explanation: "The Head of State is the Sovereign (currently King Charles III). The Prime Minister is the Head of Government. The Governor General represents the Sovereign in Canada."
  },
  {
    id: 17,
    chapter: "How Canadians Govern Themselves",
    question: "Who gives Royal Assent to bills to make them law?",
    options: [
      "The Prime Minister",
      "The Speaker of the House",
      "The Governor General",
      "The Chief Justice"
    ],
    correctAnswer: 2,
    explanation: "The Governor General gives Royal Assent on behalf of the Sovereign, which is the final step for a bill to become law."
  },
  {
    id: 18,
    chapter: "Modern Canada",
    question: "Who ran the Marathon of Hope to raise money for cancer research in 1980?",
    options: [
      "Rick Hansen",
      "Wayne Gretzky",
      "Terry Fox",
      "Donovan Bailey"
    ],
    correctAnswer: 2,
    explanation: "Terry Fox, a British Columbian amputee, ran the Marathon of Hope across Canada in 1980 to raise money for cancer research. He is considered a national hero."
  },
  {
    id: 19,
    chapter: "Canada's Regions",
    question: "Who chose Ottawa as the national capital?",
    options: [
      "Sir John A. Macdonald",
      "Queen Victoria",
      "King George III",
      "The Fathers of Confederation"
    ],
    correctAnswer: 1,
    explanation: "Queen Victoria chose Ottawa as the national capital in 1857."
  },
  {
    id: 20,
    chapter: "Canada's History",
    question: "What was the outcome of the War of 1812?",
    options: [
      "Canada became part of the United States",
      "The United States gained control of Upper Canada",
      "Canada's separation from the United States was confirmed",
      "France regained control of Quebec"
    ],
    correctAnswer: 2,
    explanation: "The War of 1812 confirmed Canada's separation from the United States and helped shape the modern border between the two countries."
  },
  {
    id: 21,
    chapter: "Rights and Responsibilities",
    question: "What are the four fundamental freedoms in Canada?",
    options: [
      "Freedom of speech, voting, movement, and employment",
      "Freedom of conscience/religion, thought/expression, peaceful assembly, and association",
      "Freedom of press, education, healthcare, and housing",
      "Freedom of travel, property, privacy, and family"
    ],
    correctAnswer: 1,
    explanation: "The four fundamental freedoms are: freedom of conscience and religion; freedom of thought, belief, opinion and expression (including freedom of speech and press); freedom of peaceful assembly; and freedom of association."
  },
  {
    id: 22,
    chapter: "Canada's History",
    question: "Which province was the first to abolish slavery in the British Empire?",
    options: [
      "Nova Scotia",
      "Quebec",
      "Upper Canada (Ontario)",
      "New Brunswick"
    ],
    correctAnswer: 2,
    explanation: "Upper Canada (now Ontario) was the first province to abolish slavery in 1793 under John Graves Simcoe. The full British Empire abolished slavery in 1833."
  },
  {
    id: 23,
    chapter: "Modern Canada",
    question: "When did women gain the right to vote in federal elections?",
    options: [
      "1867",
      "1918",
      "1940",
      "1960"
    ],
    correctAnswer: 1,
    explanation: "Most women gained the right to vote in federal elections in 1918. Manitoba was the first province to grant women's suffrage in 1916, and Quebec was the last in 1940."
  },
  {
    id: 24,
    chapter: "Modern Canada",
    question: "When was the Official Languages Act passed?",
    options: [
      "1867",
      "1969",
      "1982",
      "1995"
    ],
    correctAnswer: 1,
    explanation: "The Official Languages Act was passed in 1969, guaranteeing English and French equality in federal government institutions across Canada."
  },
  {
    id: 25,
    chapter: "Canada's History",
    question: "What did the Quebec Act of 1774 do?",
    options: [
      "Created the province of Quebec",
      "Granted French Canadians religious freedom and allowed French civil law",
      "Made French the only official language",
      "Established Quebec City as the capital"
    ],
    correctAnswer: 1,
    explanation: "The Quebec Act of 1774 granted Catholics religious freedom and allowed the use of French civil law, helping keep Quebec loyal to Britain during the American Revolution."
  },
  {
    id: 26,
    chapter: "Canada's Regions",
    question: "Which three oceans border Canada?",
    options: [
      "Atlantic, Pacific, and Indian",
      "Atlantic, Pacific, and Arctic",
      "Pacific, Arctic, and Southern",
      "Atlantic, Arctic, and Southern"
    ],
    correctAnswer: 1,
    explanation: "Canada is bordered by three oceans: the Pacific Ocean (west), the Atlantic Ocean (east), and the Arctic Ocean (north)."
  },
  {
    id: 27,
    chapter: "Canada's Regions",
    question: "Which province is the largest by area, and which is the most populous?",
    options: [
      "Ontario is largest; Quebec is most populous",
      "Quebec is largest; Ontario is most populous",
      "British Columbia is largest; Ontario is most populous",
      "Quebec is largest; British Columbia is most populous"
    ],
    correctAnswer: 1,
    explanation: "Quebec is the largest province by area. Ontario is the most populous province, with over one-third of Canada's population (~15 million)."
  },
  {
    id: 28,
    chapter: "Canadian Symbols",
    question: "When did 'O Canada' officially become Canada's national anthem?",
    options: [
      "1867",
      "1880",
      "1965",
      "1980"
    ],
    correctAnswer: 3,
    explanation: "O Canada officially became the national anthem in 1980, although it was first sung in 1880 in Quebec."
  },
  {
    id: 29,
    chapter: "Canadian Symbols",
    question: "What is Canada's national motto and what does it mean?",
    options: [
      "E Pluribus Unum - Out of Many, One",
      "A Mari Usque Ad Mare - From Sea to Sea",
      "In God We Trust - Faith in the Divine",
      "Peace, Order, and Good Government"
    ],
    correctAnswer: 1,
    explanation: "Canada's motto is 'A Mari Usque Ad Mare' which means 'From Sea to Sea' in Latin. It comes from Psalm 72:8."
  },
  {
    id: 30,
    chapter: "Canadian Symbols",
    question: "What is commemorated on Remembrance Day (November 11)?",
    options: [
      "The end of World War II",
      "The Battle of Vimy Ridge",
      "The sacrifices of Canadian veterans in all wars",
      "Canada's Confederation"
    ],
    correctAnswer: 2,
    explanation: "Remembrance Day (November 11) honours the sacrifices made by Canadian veterans and soldiers in all wars. Canadians wear poppies to remember them."
  },
  {
    id: 31,
    chapter: "Modern Canada",
    question: "Who invented the snowmobile?",
    options: [
      "Alexander Graham Bell",
      "Joseph-Armand Bombardier",
      "Sir Sandford Fleming",
      "Reginald Fessenden"
    ],
    correctAnswer: 1,
    explanation: "Joseph-Armand Bombardier invented the snowmobile, which became essential for transportation in snowy Canadian winters."
  },
  {
    id: 32,
    chapter: "Modern Canada",
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Guglielmo Marconi",
      "Alexander Graham Bell",
      "Reginald Fessenden"
    ],
    correctAnswer: 2,
    explanation: "Alexander Graham Bell invented the telephone. He developed the idea at his summer home in Canada."
  },
  {
    id: 33,
    chapter: "Modern Canada",
    question: "Who invented the cardiac pacemaker?",
    options: [
      "Dr. Wilder Penfield",
      "Sir Frederick Banting",
      "Dr. John A. Hopps",
      "Charles Best"
    ],
    correctAnswer: 2,
    explanation: "Dr. John A. Hopps invented the cardiac pacemaker, which has saved countless lives by regulating heartbeats."
  },
  {
    id: 34,
    chapter: "Modern Canada",
    question: "What is the Canadarm?",
    options: [
      "A Canadian-made firearm",
      "A robotic arm used in space exploration",
      "A type of Canadian coat of arms",
      "A military vehicle"
    ],
    correctAnswer: 1,
    explanation: "The Canadarm is a robotic arm developed by SPAR Aerospace and the National Research Council. It has been used on NASA space shuttles and the International Space Station."
  },
  {
    id: 35,
    chapter: "Canada's History",
    question: "What year was the North West Mounted Police (now RCMP) established?",
    options: [
      "1867",
      "1873",
      "1885",
      "1920"
    ],
    correctAnswer: 1,
    explanation: "The North West Mounted Police was established in 1873 to pacify the West. They later became the Royal Canadian Mounted Police (RCMP), known as 'Mounties'."
  },
  {
    id: 36,
    chapter: "Modern Canada",
    question: "When did Aboriginal peoples gain the right to vote in federal elections?",
    options: [
      "1867",
      "1918",
      "1948",
      "1960"
    ],
    correctAnswer: 3,
    explanation: "Aboriginal peoples gained the full right to vote in federal elections in 1960. Japanese-Canadians had their voting restrictions lifted in 1948."
  },
  {
    id: 37,
    chapter: "Modern Canada",
    question: "How many Canadians were killed in the Korean War (1950-1953)?",
    options: [
      "About 100",
      "About 500",
      "About 2,000",
      "About 10,000"
    ],
    correctAnswer: 1,
    explanation: "About 500 Canadians were killed in the Korean War (1950-1953), with approximately 1,000 wounded."
  },
  {
    id: 38,
    chapter: "Canada's Regions",
    question: "What is the capital of British Columbia?",
    options: [
      "Vancouver",
      "Victoria",
      "Kelowna",
      "Surrey"
    ],
    correctAnswer: 1,
    explanation: "Victoria is the capital of British Columbia, located on Vancouver Island. Vancouver is the largest city but not the capital."
  },
  {
    id: 39,
    chapter: "Canada's Regions",
    question: "What is the capital of Alberta?",
    options: [
      "Calgary",
      "Red Deer",
      "Edmonton",
      "Banff"
    ],
    correctAnswer: 2,
    explanation: "Edmonton is the capital of Alberta. Calgary is the largest city but not the capital."
  },
  {
    id: 40,
    chapter: "Canada's Economy",
    question: "What percentage of Canadians work in service industries?",
    options: [
      "About 25%",
      "About 50%",
      "More than 75%",
      "About 90%"
    ],
    correctAnswer: 2,
    explanation: "More than 75% of Canadians work in service industries, which include transportation, education, health care, construction, banking, communications, retail, tourism, and government."
  },
  {
    id: 41,
    chapter: "Canada's History",
    question: "When did British Columbia join Confederation?",
    options: [
      "1867",
      "1870",
      "1871",
      "1905"
    ],
    correctAnswer: 2,
    explanation: "British Columbia joined Confederation in 1871, after Ottawa promised to build a railway (the Canadian Pacific Railway) connecting it to the rest of Canada."
  },
  {
    id: 42,
    chapter: "Canada's History",
    question: "When did Newfoundland join Canada?",
    options: [
      "1867",
      "1905",
      "1949",
      "1999"
    ],
    correctAnswer: 2,
    explanation: "Newfoundland (now Newfoundland and Labrador) was the last province to join Canada, in 1949."
  },
  {
    id: 43,
    chapter: "Canada's Regions",
    question: "When was the territory of Nunavut created?",
    options: [
      "1867",
      "1949",
      "1982",
      "1999"
    ],
    correctAnswer: 3,
    explanation: "Nunavut ('our land' in Inuktitut) was created in 1999. It is Canada's newest territory, with about 85% Inuit population."
  },
  {
    id: 44,
    chapter: "Canada's History",
    question: "Who was Louis Riel?",
    options: [
      "The first Prime Minister of Canada",
      "A Métis leader who led resistance movements for Métis rights",
      "The founder of the RCMP",
      "The explorer who named Canada"
    ],
    correctAnswer: 1,
    explanation: "Louis Riel was a Métis leader who led the Red River Resistance (1869-70) and the North-West Rebellion (1885) fighting for Métis rights. Manitoba was created partly due to his efforts. He was executed in 1885."
  },
  {
    id: 45,
    chapter: "Canada's History",
    question: "When was the Canadian Pacific Railway completed?",
    options: [
      "1867",
      "1871",
      "1885",
      "1905"
    ],
    correctAnswer: 2,
    explanation: "The Canadian Pacific Railway was completed in 1885, creating the first transcontinental railway link across Canada."
  },
  {
    id: 46,
    chapter: "Modern Canada",
    question: "Who invented standard time zones?",
    options: [
      "Alexander Graham Bell",
      "Sir Sandford Fleming",
      "Sir John A. Macdonald",
      "Joseph-Armand Bombardier"
    ],
    correctAnswer: 1,
    explanation: "Sir Sandford Fleming invented standard time zones, which helped coordinate railway schedules and became the worldwide standard."
  },
  {
    id: 47,
    chapter: "Who We Are",
    question: "What is the most common non-official language spoken in Canadian homes?",
    options: [
      "Spanish",
      "Punjabi",
      "Chinese languages",
      "German"
    ],
    correctAnswer: 2,
    explanation: "Chinese languages are the most common non-official languages spoken in Canadian homes, especially in Vancouver and Toronto."
  },
  {
    id: 48,
    chapter: "Canada's History",
    question: "Who founded Quebec City in 1608?",
    options: [
      "Jacques Cartier",
      "Samuel de Champlain",
      "John Cabot",
      "Count Frontenac"
    ],
    correctAnswer: 1,
    explanation: "Samuel de Champlain founded Quebec City in 1608 as a fur trading post. He is known as the 'Father of New France'."
  },
  {
    id: 49,
    chapter: "Canada's History",
    question: "What was the 'Great Upheaval' (1755-1763)?",
    options: [
      "A major earthquake in Quebec",
      "The deportation of more than two-thirds of the Acadians",
      "The rebellion in Upper Canada",
      "The construction of the railway"
    ],
    correctAnswer: 1,
    explanation: "The Great Upheaval (also called the Great Deportation) was the deportation of more than two-thirds of the Acadians from the Maritime provinces during the war between Britain and France (1755-1763)."
  },
  {
    id: 50,
    chapter: "How Canadians Govern Themselves",
    question: "What is 'responsible government'?",
    options: [
      "A government that pays its debts",
      "A government where Cabinet must have the confidence of the elected House of Commons",
      "A government that protects the environment",
      "A government elected every four years"
    ],
    correctAnswer: 1,
    explanation: "Responsible government means the Cabinet (Prime Minister and ministers) must maintain the confidence of the elected House of Commons to stay in power."
  },
  {
    id: 51,
    chapter: "Federal Elections",
    question: "What is a 'majority government'?",
    options: [
      "A government supported by more than 50% of voters",
      "A government where the ruling party has more than half the seats in the House of Commons",
      "A government with representatives from all provinces",
      "A government that wins every riding"
    ],
    correctAnswer: 1,
    explanation: "A majority government occurs when the ruling party has more than half the seats in the House of Commons, allowing them to pass legislation without support from other parties."
  },
  {
    id: 52,
    chapter: "Federal Elections",
    question: "What voting system does Canada use?",
    options: [
      "Proportional representation",
      "Ranked ballot",
      "First-past-the-post",
      "Electoral college"
    ],
    correctAnswer: 2,
    explanation: "Canada uses the first-past-the-post system, where the candidate with the most votes in each riding wins, even without a majority."
  },
  {
    id: 53,
    chapter: "The Justice System",
    question: "What does 'rule of law' mean?",
    options: [
      "The police make all the rules",
      "Everyone must obey the law, including the government and police",
      "Only citizens must follow the law",
      "Laws are made by judges"
    ],
    correctAnswer: 1,
    explanation: "Rule of law means everyone must obey the law - no one is above it, including the government, police, and all citizens."
  },
  {
    id: 54,
    chapter: "Canada's Regions",
    question: "Which are the Prairie Provinces?",
    options: [
      "British Columbia, Alberta, and Saskatchewan",
      "Manitoba, Saskatchewan, and Alberta",
      "Ontario, Manitoba, and Saskatchewan",
      "Alberta, Saskatchewan, and Northwest Territories"
    ],
    correctAnswer: 1,
    explanation: "The Prairie Provinces are Manitoba, Saskatchewan, and Alberta, known for their fertile farmland and energy resources."
  },
  {
    id: 55,
    chapter: "Canada's Regions",
    question: "Which are the Atlantic Provinces?",
    options: [
      "Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador",
      "Nova Scotia, New Brunswick, Quebec, and Ontario",
      "Prince Edward Island, Nova Scotia, Maine, and New Brunswick",
      "Newfoundland and Labrador, Nova Scotia, and Quebec"
    ],
    correctAnswer: 0,
    explanation: "The Atlantic Provinces are Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador."
  },
  {
    id: 56,
    chapter: "Modern Canada",
    question: "What were the Quebec sovereignty referendum years?",
    options: [
      "1970 and 1985",
      "1980 and 1995",
      "1990 and 2000",
      "1976 and 1982"
    ],
    correctAnswer: 1,
    explanation: "Quebec held sovereignty referendums in 1980 and 1995. Both were defeated, keeping Quebec within Canada."
  },
  {
    id: 57,
    chapter: "Modern Canada",
    question: "What was the 'Quiet Revolution'?",
    options: [
      "A peaceful transfer of power in Ottawa",
      "A period of rapid social and cultural change in Quebec in the 1960s",
      "The creation of the Canadian Charter of Rights",
      "The end of World War II"
    ],
    correctAnswer: 1,
    explanation: "The Quiet Revolution was a period of rapid social and cultural change in Quebec during the 1960s, modernizing Quebec society."
  },
  {
    id: 58,
    chapter: "Canada's History",
    question: "Where did the name 'Canada' come from?",
    options: [
      "A French word meaning 'northern land'",
      "An Iroquoian word 'kanata' meaning 'village'",
      "An English word meaning 'great nation'",
      "A Latin word meaning 'from sea to sea'"
    ],
    correctAnswer: 1,
    explanation: "The name 'Canada' comes from the Iroquoian word 'kanata' meaning 'village'. Jacques Cartier used this name for the land he explored."
  },
  {
    id: 59,
    chapter: "Canada's History",
    question: "Who mapped the East Coast of Canada for England in 1497?",
    options: [
      "Jacques Cartier",
      "Samuel de Champlain",
      "John Cabot",
      "Henry Hudson"
    ],
    correctAnswer: 2,
    explanation: "John Cabot mapped the East Coast of Canada for England in 1497, claiming the land for the English crown."
  },
  {
    id: 60,
    chapter: "How Canadians Govern Themselves",
    question: "How many members are in the Senate?",
    options: [
      "75",
      "105",
      "150",
      "338"
    ],
    correctAnswer: 1,
    explanation: "The Senate has 105 members (senators) who are appointed on the Prime Minister's advice and serve until age 75."
  },
  {
    id: 61,
    chapter: "How Canadians Govern Themselves",
    question: "What are the responsibilities of the federal government?",
    options: [
      "Education, health care, and highways",
      "National defence, foreign policy, criminal law, and citizenship",
      "Property rights, municipal institutions, and natural resources",
      "Fire departments, local roads, and garbage collection"
    ],
    correctAnswer: 1,
    explanation: "Federal government responsibilities include national defence, foreign policy, trade and commerce, currency, banking, criminal law, and citizenship."
  },
  {
    id: 62,
    chapter: "How Canadians Govern Themselves",
    question: "What are the responsibilities of provincial governments?",
    options: [
      "National defence, currency, and criminal law",
      "Foreign policy and international trade",
      "Education, health care, natural resources, and highways",
      "Postal service and banking"
    ],
    correctAnswer: 2,
    explanation: "Provincial government responsibilities include education, health care, natural resources, property and civil rights, highways, and municipal institutions."
  },
  {
    id: 63,
    chapter: "Canada's History",
    question: "What happened at the Battle of the Plains of Abraham in 1759?",
    options: [
      "Canada gained independence from Britain",
      "The British defeated the French, ending French rule in America",
      "The Americans invaded Canada",
      "The Métis won their rights"
    ],
    correctAnswer: 1,
    explanation: "In 1759, the British defeated the French at the Battle of the Plains of Abraham near Quebec City. Both commanders (Wolfe and Montcalm) were killed. This marked the end of the French empire in America."
  },
  {
    id: 64,
    chapter: "Modern Canada",
    question: "Who was the first female Member of Parliament?",
    options: [
      "Nellie McClung",
      "Agnes Macphail",
      "Kim Campbell",
      "Emily Murphy"
    ],
    correctAnswer: 1,
    explanation: "Agnes Macphail was the first female Member of Parliament, elected in 1921."
  },
  {
    id: 65,
    chapter: "Modern Canada",
    question: "Who invented basketball?",
    options: [
      "Wayne Gretzky",
      "Terry Fox",
      "James Naismith",
      "Donovan Bailey"
    ],
    correctAnswer: 2,
    explanation: "James Naismith, a Canadian, invented basketball in 1891."
  },
  {
    id: 66,
    chapter: "Canadian Symbols",
    question: "What animal is on the Canadian nickel (5-cent coin)?",
    options: [
      "Moose",
      "Beaver",
      "Bear",
      "Caribou"
    ],
    correctAnswer: 1,
    explanation: "The beaver is on the Canadian nickel. The beaver is an official symbol of Canada, important in the early fur trade."
  },
  {
    id: 67,
    chapter: "Canada's History",
    question: "What document first guaranteed Aboriginal territorial rights in 1763?",
    options: [
      "The Constitution Act",
      "The Royal Proclamation",
      "The Quebec Act",
      "The British North America Act"
    ],
    correctAnswer: 1,
    explanation: "The Royal Proclamation of 1763 by King George III first guaranteed Aboriginal territorial rights and became the basis for treaties with Aboriginal peoples."
  },
  {
    id: 68,
    chapter: "Who We Are",
    question: "In what year did the House of Commons recognize the Québécois as a nation within a united Canada?",
    options: [
      "1995",
      "2000",
      "2006",
      "2010"
    ],
    correctAnswer: 2,
    explanation: "In 2006, the House of Commons recognized the Québécois as a nation within a united Canada."
  },
  {
    id: 69,
    chapter: "Rights and Responsibilities",
    question: "What does Canada have NO tolerance for?",
    options: [
      "Immigration and diversity",
      "Freedom of speech and religion",
      "Barbaric cultural practices such as forced marriage and honour killings",
      "Democratic elections"
    ],
    correctAnswer: 2,
    explanation: "Canada has no tolerance for barbaric cultural practices such as forced marriage, honour killings, female genital mutilation, spousal abuse, or other gender-based violence. These are crimes and are severely punished."
  },
  {
    id: 70,
    chapter: "Modern Canada",
    question: "When was oil discovered in Alberta, beginning its modern energy industry?",
    options: [
      "1905",
      "1929",
      "1947",
      "1967"
    ],
    correctAnswer: 2,
    explanation: "Oil was discovered in Alberta in 1947, marking the beginning of Alberta's modern energy industry."
  },
  {
    id: 71,
    chapter: "Canada's Regions",
    question: "What is the capital of Saskatchewan?",
    options: [
      "Saskatoon",
      "Regina",
      "Moose Jaw",
      "Prince Albert"
    ],
    correctAnswer: 1,
    explanation: "Regina is the capital of Saskatchewan. It is also home to the RCMP training academy."
  },
  {
    id: 72,
    chapter: "Canada's Regions",
    question: "What is the capital of Manitoba?",
    options: [
      "Brandon",
      "Churchill",
      "Winnipeg",
      "Thompson"
    ],
    correctAnswer: 2,
    explanation: "Winnipeg is the capital of Manitoba. It has large Ukrainian and Aboriginal populations."
  },
  {
    id: 73,
    chapter: "Canada's Regions",
    question: "What is Canada's oldest national park?",
    options: [
      "Jasper National Park",
      "Banff National Park",
      "Pacific Rim National Park",
      "Gros Morne National Park"
    ],
    correctAnswer: 1,
    explanation: "Banff National Park, established in 1885 in Alberta, is Canada's oldest national park."
  },
  {
    id: 74,
    chapter: "Canada's History",
    question: "What was the first representative assembly in Canada?",
    options: [
      "The House of Commons in Ottawa",
      "The Legislative Assembly of Quebec",
      "The Nova Scotia assembly in 1758",
      "The Ontario provincial parliament"
    ],
    correctAnswer: 2,
    explanation: "Nova Scotia had the first representative assembly in Canada in 1758."
  },
  {
    id: 75,
    chapter: "Canada's History",
    question: "Who were the United Empire Loyalists?",
    options: [
      "French settlers who came to New France",
      "People who fled the United States after American independence to remain loyal to the British Crown",
      "Aboriginal peoples who allied with the British",
      "British soldiers stationed in Canada"
    ],
    correctAnswer: 1,
    explanation: "United Empire Loyalists were people who fled the United States after American independence (1776) to remain loyal to the British Crown. About 40,000-50,000 came to Canada."
  },
  {
    id: 76,
    chapter: "Canadian Symbols",
    question: "When was the Stanley Cup first presented?",
    options: [
      "1867",
      "1892",
      "1917",
      "1942"
    ],
    correctAnswer: 1,
    explanation: "The Stanley Cup was donated by Lord Stanley in 1892 and is awarded to the NHL hockey championship team."
  },
  {
    id: 77,
    chapter: "Modern Canada",
    question: "What is Dr. Wilder Penfield known for?",
    options: [
      "Discovering insulin",
      "Inventing the telephone",
      "Pioneering brain surgery",
      "Creating the Canadarm"
    ],
    correctAnswer: 2,
    explanation: "Dr. Wilder Penfield was a pioneering brain surgeon who made significant advances in treating epilepsy and mapping the brain."
  },
  {
    id: 78,
    chapter: "Canada's History",
    question: "When did the federal government apologize for residential schools?",
    options: [
      "1988",
      "1999",
      "2006",
      "2008"
    ],
    correctAnswer: 3,
    explanation: "The federal government apologized for residential schools in 2008. From the 1800s to 1980s, many Aboriginal children were placed in these schools where they experienced hardship and abuse."
  },
  {
    id: 79,
    chapter: "Canada's Economy",
    question: "What is the symbol of Canada-U.S. friendship at the border?",
    options: [
      "The Statue of Liberty",
      "The Peace Arch",
      "The Ambassador Bridge",
      "The Thousand Islands Bridge"
    ],
    correctAnswer: 1,
    explanation: "The Peace Arch at Blaine (BC/Washington border) is a symbol of friendship and the close ties between Canada and the United States."
  },
  {
    id: 80,
    chapter: "How Canadians Govern Themselves",
    question: "What is the role of the Official Opposition?",
    options: [
      "To support all government bills",
      "To hold the government accountable and offer alternative policies",
      "To appoint judges",
      "To represent the Sovereign"
    ],
    correctAnswer: 1,
    explanation: "The Official Opposition (the second-largest party) holds the government accountable, questions its policies, and offers alternatives."
  },
  {
    id: 81,
    chapter: "Canadian Symbols",
    question: "What is the fleur-de-lys?",
    options: [
      "A Canadian flower species",
      "An ancient symbol of French royalty, now on Quebec's flag",
      "A type of Canadian food",
      "A military medal"
    ],
    correctAnswer: 1,
    explanation: "The fleur-de-lys (lily flower) is an ancient symbol of French royalty dating back to 496 AD. It appears on Quebec's flag, which was adopted in 1948."
  },
  {
    id: 82,
    chapter: "Modern Canada",
    question: "Who wheeled around the globe to raise money for spinal cord research in 1985?",
    options: [
      "Terry Fox",
      "Rick Hansen",
      "Wayne Gretzky",
      "Steve Nash"
    ],
    correctAnswer: 1,
    explanation: "Rick Hansen, a British Columbian, wheeled around the globe in 1985 to raise money for spinal cord research."
  },
  {
    id: 83,
    chapter: "Canada's Regions",
    question: "Which province produces the most hydro-electricity in the world?",
    options: [
      "Ontario",
      "British Columbia",
      "Quebec",
      "Manitoba"
    ],
    correctAnswer: 2,
    explanation: "Quebec is the world's largest producer of hydro-electricity."
  },
  {
    id: 84,
    chapter: "Canada's Regions",
    question: "What is the largest freshwater lake in the world?",
    options: [
      "Lake Ontario",
      "Lake Winnipeg",
      "Lake Superior",
      "Great Bear Lake"
    ],
    correctAnswer: 2,
    explanation: "Lake Superior, on the Ontario-US border, is the largest freshwater lake in the world."
  },
  {
    id: 85,
    chapter: "Canada's History",
    question: "Who was Sir Wilfrid Laurier?",
    options: [
      "The first Prime Minister of Canada",
      "The first French-Canadian Prime Minister",
      "The Governor General during Confederation",
      "A famous explorer"
    ],
    correctAnswer: 1,
    explanation: "Sir Wilfrid Laurier was the first French-Canadian Prime Minister. He encouraged immigration to settle the West, including Ukrainians and Poles."
  },
  {
    id: 86,
    chapter: "Canada's History",
    question: "How many Canadians died in World War I?",
    options: [
      "About 10,000",
      "About 44,000",
      "About 60,000",
      "About 100,000"
    ],
    correctAnswer: 2,
    explanation: "About 60,000 Canadians were killed in World War I. Over 600,000 Canadians served in the war."
  },
  {
    id: 87,
    chapter: "Canada's History",
    question: "What poem, written by a Canadian, is associated with Remembrance Day?",
    options: [
      "O Canada",
      "In Flanders Fields",
      "The Maple Leaf Forever",
      "This Land Is Your Land"
    ],
    correctAnswer: 1,
    explanation: "'In Flanders Fields' was written by Canadian Lieutenant Colonel John McCrae during World War I. It is associated with Remembrance Day and the tradition of wearing poppies."
  },
  {
    id: 88,
    chapter: "How Canadians Govern Themselves",
    question: "How many justices are on the Supreme Court of Canada?",
    options: [
      "5",
      "7",
      "9",
      "12"
    ],
    correctAnswer: 2,
    explanation: "The Supreme Court of Canada has 9 justices, appointed by the Governor General on the Prime Minister's advice."
  },
  {
    id: 89,
    chapter: "Rights and Responsibilities",
    question: "What does the Canadian Charter of Rights and Freedoms begin with?",
    options: [
      "\"O Canada! Our home and native land!\"",
      "\"We the people of Canada...\"",
      "\"Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law\"",
      "\"All Canadians are born free and equal\""
    ],
    correctAnswer: 2,
    explanation: "The Canadian Charter of Rights and Freedoms begins: \"Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law.\""
  },
  {
    id: 90,
    chapter: "Modern Canada",
    question: "What major group of refugees did Canada welcome after 1975?",
    options: [
      "Hungarian refugees",
      "Vietnamese \"boat people\"",
      "Syrian refugees",
      "Irish refugees"
    ],
    correctAnswer: 1,
    explanation: "Canada welcomed over 50,000 Vietnamese refugees (\"boat people\") after 1975, following the Vietnam War."
  },
  {
    id: 91,
    chapter: "Canada's Regions",
    question: "What is Prince Edward Island known for?",
    options: [
      "Oil and gas production",
      "Being the largest province",
      "Agriculture (potatoes), red soil, and Anne of Green Gables",
      "The highest mountain in Canada"
    ],
    correctAnswer: 2,
    explanation: "Prince Edward Island, the smallest province, is known for agriculture (especially potatoes), its red soil, beautiful beaches, and being the birthplace of Confederation. It's also the setting for 'Anne of Green Gables'."
  },
  {
    id: 92,
    chapter: "Canada's Regions",
    question: "What is special about the Bay of Fundy?",
    options: [
      "It has the coldest water in Canada",
      "It has the world's highest tides",
      "It is the largest bay in Canada",
      "It was the site of a famous battle"
    ],
    correctAnswer: 1,
    explanation: "The Bay of Fundy, between Nova Scotia and New Brunswick, has the world's highest tides."
  },
  {
    id: 93,
    chapter: "The Oath of Citizenship",
    question: "To whom do Canadians swear the Oath of Citizenship?",
    options: [
      "The Prime Minister",
      "The Governor General",
      "The Sovereign (King or Queen)",
      "The Canadian flag"
    ],
    correctAnswer: 2,
    explanation: "Canadians swear the Oath of Citizenship to the Sovereign (King or Queen), pledging loyalty to the Crown."
  },
  {
    id: 94,
    chapter: "Canada's History",
    question: "What Canadian beach did troops land on during D-Day (June 6, 1944)?",
    options: [
      "Omaha Beach",
      "Utah Beach",
      "Juno Beach",
      "Gold Beach"
    ],
    correctAnswer: 2,
    explanation: "Canadian troops landed on Juno Beach during the D-Day invasion on June 6, 1944, playing a key role in the liberation of Europe."
  },
  {
    id: 95,
    chapter: "Modern Canada",
    question: "What organization did Canada help found in 1970 for French-speaking countries?",
    options: [
      "NATO",
      "The United Nations",
      "La Francophonie",
      "The Commonwealth"
    ],
    correctAnswer: 2,
    explanation: "Canada helped found La Francophonie in 1970, an international association of French-speaking countries."
  },
  {
    id: 96,
    chapter: "Canada's Regions",
    question: "What does 'Nunavut' mean in Inuktitut?",
    options: [
      "Cold land",
      "Our land",
      "Northern territory",
      "Frozen water"
    ],
    correctAnswer: 1,
    explanation: "Nunavut means 'our land' in Inuktitut, the language of the Inuit. About 85% of Nunavut's population is Inuit."
  },
  {
    id: 97,
    chapter: "Canada's Economy",
    question: "What trade agreement replaced NAFTA in 2020?",
    options: [
      "CETA",
      "TPP",
      "USMCA (United States-Mexico-Canada Agreement)",
      "FTA"
    ],
    correctAnswer: 2,
    explanation: "USMCA (United States-Mexico-Canada Agreement) replaced NAFTA in 2020, continuing free trade between the three North American countries."
  },
  {
    id: 98,
    chapter: "Canadian Symbols",
    question: "What is the Order of Canada?",
    options: [
      "A type of government document",
      "An award recognizing outstanding achievement and service to Canada",
      "A military unit",
      "A religious organization"
    ],
    correctAnswer: 1,
    explanation: "The Order of Canada, established in 1967, recognizes outstanding achievement and service to Canada."
  },
  {
    id: 99,
    chapter: "Canada's Regions",
    question: "What is Canada's longest river?",
    options: [
      "St. Lawrence River",
      "Fraser River",
      "Mackenzie River",
      "Saskatchewan River"
    ],
    correctAnswer: 2,
    explanation: "The Mackenzie River in the Northwest Territories is Canada's longest river."
  },
  {
    id: 100,
    chapter: "Rights and Responsibilities",
    question: "Is military service compulsory in Canada?",
    options: [
      "Yes, for all citizens over 18",
      "Yes, but only during wartime",
      "No, there is no compulsory military service",
      "Yes, for men only"
    ],
    correctAnswer: 2,
    explanation: "There is no compulsory military service in Canada. Serving in the Canadian Armed Forces is voluntary and considered a noble way to contribute to Canada."
  },
  {
    id: 101,
    chapter: "Canada's Regions",
    question: "What is the capital of Ontario?",
    options: [
      "Ottawa",
      "Toronto",
      "Hamilton",
      "London"
    ],
    correctAnswer: 1,
    explanation: "Toronto is the capital of Ontario and Canada's largest city. It is also the financial centre of Canada."
  },
  {
    id: 102,
    chapter: "Canada's Regions",
    question: "What is the capital of Quebec?",
    options: [
      "Montreal",
      "Quebec City",
      "Laval",
      "Gatineau"
    ],
    correctAnswer: 1,
    explanation: "Quebec City is the capital of Quebec. It was founded in 1608 by Samuel de Champlain."
  },
  {
    id: 103,
    chapter: "Canada's Regions",
    question: "What is the capital of Nova Scotia?",
    options: [
      "Sydney",
      "Dartmouth",
      "Halifax",
      "Truro"
    ],
    correctAnswer: 2,
    explanation: "Halifax is the capital of Nova Scotia. It is the most populous Atlantic province and has a major port and naval base."
  },
  {
    id: 104,
    chapter: "Canada's Regions",
    question: "What is the capital of Newfoundland and Labrador?",
    options: [
      "Corner Brook",
      "St. John's",
      "Gander",
      "Labrador City"
    ],
    correctAnswer: 1,
    explanation: "St. John's is the capital of Newfoundland and Labrador. It is the most easterly city in North America."
  },
  {
    id: 105,
    chapter: "Canada's Regions",
    question: "What is the capital of the Yukon?",
    options: [
      "Dawson City",
      "Whitehorse",
      "Watson Lake",
      "Yellowknife"
    ],
    correctAnswer: 1,
    explanation: "Whitehorse is the capital of Yukon. The territory is known for the 1890s Gold Rush."
  },
  {
    id: 106,
    chapter: "Canada's Regions",
    question: "What is the capital of the Northwest Territories?",
    options: [
      "Whitehorse",
      "Iqaluit",
      "Yellowknife",
      "Inuvik"
    ],
    correctAnswer: 2,
    explanation: "Yellowknife is the capital of the Northwest Territories, known as the 'diamond capital of North America'."
  },
  {
    id: 107,
    chapter: "Canada's Regions",
    question: "What is the capital of Nunavut?",
    options: [
      "Yellowknife",
      "Rankin Inlet",
      "Iqaluit",
      "Cambridge Bay"
    ],
    correctAnswer: 2,
    explanation: "Iqaluit is the capital of Nunavut, Canada's newest territory created in 1999."
  },
  {
    id: 108,
    chapter: "Modern Canada",
    question: "Who invented the electric light bulb?",
    options: [
      "Thomas Edison alone",
      "Matthew Evans and Henry Woodward (Canadians who sold their patent to Edison)",
      "Alexander Graham Bell",
      "Nikola Tesla"
    ],
    correctAnswer: 1,
    explanation: "Canadians Matthew Evans and Henry Woodward invented the electric light bulb and sold their patent to Thomas Edison."
  },
  {
    id: 109,
    chapter: "Modern Canada",
    question: "Who sent the first wireless voice message (radio telephony)?",
    options: [
      "Alexander Graham Bell",
      "Guglielmo Marconi",
      "Reginald Fessenden",
      "Nikola Tesla"
    ],
    correctAnswer: 2,
    explanation: "Reginald Fessenden, a Canadian, sent the first wireless voice message, pioneering radio telephony."
  },
  {
    id: 110,
    chapter: "Modern Canada",
    question: "Who created the BlackBerry smartphone?",
    options: [
      "Steve Jobs",
      "Bill Gates",
      "Mike Lazaridis and Jim Balsillie",
      "Elon Musk"
    ],
    correctAnswer: 2,
    explanation: "Canadians Mike Lazaridis and Jim Balsillie of Research In Motion (RIM) created the BlackBerry smartphone."
  },
  {
    id: 111,
    chapter: "Canada's History",
    question: "Who explored the St. Lawrence River and used the name 'Canada'?",
    options: [
      "John Cabot",
      "Samuel de Champlain",
      "Jacques Cartier",
      "Henry Hudson"
    ],
    correctAnswer: 2,
    explanation: "Jacques Cartier explored the St. Lawrence River (1534-1542) and used the name 'Canada' from the Iroquoian word 'kanata' meaning village."
  },
  {
    id: 112,
    chapter: "Canada's History",
    question: "When did the Vikings reach Canada?",
    options: [
      "About 500 years ago",
      "About 1,000 years ago",
      "About 2,000 years ago",
      "About 5,000 years ago"
    ],
    correctAnswer: 1,
    explanation: "The Vikings reached Canada about 1,000 years ago. The archaeological site at L'Anse aux Meadows in Newfoundland is a UNESCO World Heritage Site."
  },
  {
    id: 113,
    chapter: "Canada's History",
    question: "What was the Hudson's Bay Company?",
    options: [
      "A fishing company",
      "A fur trading company with exclusive rights over Rupert's Land",
      "A railway company",
      "A shipping company"
    ],
    correctAnswer: 1,
    explanation: "The Hudson's Bay Company, established in 1670, was given exclusive trading rights over the watershed draining into Hudson Bay (Rupert's Land). It dominated the fur trade."
  },
  {
    id: 114,
    chapter: "Canada's History",
    question: "What was the Great Peace of Montreal (1701)?",
    options: [
      "A treaty ending the War of 1812",
      "A peace agreement between the French and Iroquois nations",
      "The founding document of Canada",
      "A treaty with the United States"
    ],
    correctAnswer: 1,
    explanation: "The Great Peace of Montreal (1701) was a peace agreement between the French and the Iroquois nations, ending decades of conflict."
  },
  {
    id: 115,
    chapter: "Who We Are",
    question: "What does 'Inuit' mean?",
    options: [
      "The north",
      "The people",
      "The land",
      "The hunters"
    ],
    correctAnswer: 1,
    explanation: "'Inuit' means 'the people' in Inuktitut. The Inuit live in small communities across the Arctic and make up about 4% of Aboriginal peoples."
  },
  {
    id: 116,
    chapter: "Who We Are",
    question: "Who are the Métis?",
    options: [
      "French settlers in Quebec",
      "A distinct people of mixed Aboriginal and European ancestry",
      "British soldiers who stayed in Canada",
      "Inuit people from the Arctic"
    ],
    correctAnswer: 1,
    explanation: "The Métis are a distinct people of mixed Aboriginal and European ancestry, mostly in the Prairie provinces. They make up about 30% of Aboriginal peoples."
  },
  {
    id: 117,
    chapter: "Who We Are",
    question: "Who are the Acadians?",
    options: [
      "Aboriginal peoples from British Columbia",
      "Descendants of French colonists who settled in the Maritime provinces starting in 1604",
      "English settlers in Ontario",
      "Scottish immigrants"
    ],
    correctAnswer: 1,
    explanation: "The Acadians are descendants of French colonists who settled in the Maritime provinces starting in 1604. Many were deported during the Great Upheaval (1755-1763)."
  },
  {
    id: 118,
    chapter: "Canada's History",
    question: "Who led Aboriginal and British forces in the War of 1812?",
    options: [
      "Louis Riel and Sir John A. Macdonald",
      "Tecumseh and Sir Isaac Brock",
      "Joseph Brant and Samuel de Champlain",
      "Gabriel Dumont and Lord Durham"
    ],
    correctAnswer: 1,
    explanation: "Tecumseh (Shawnee leader) and Sir Isaac Brock led Aboriginal and British forces against the American invasion during the War of 1812."
  },
  {
    id: 119,
    chapter: "Canada's History",
    question: "Who was Sir George-Étienne Cartier?",
    options: [
      "The first Prime Minister",
      "A key Quebec Father of Confederation and ally of Sir John A. Macdonald",
      "The first Governor General",
      "A famous explorer"
    ],
    correctAnswer: 1,
    explanation: "Sir George-Étienne Cartier was a key Quebec leader and Father of Confederation who worked closely with Sir John A. Macdonald to create Canada."
  },
  {
    id: 120,
    chapter: "How Canadians Govern Themselves",
    question: "What type of government does Canada have?",
    options: [
      "A republic",
      "A constitutional monarchy",
      "A direct democracy",
      "A dictatorship"
    ],
    correctAnswer: 1,
    explanation: "Canada is a constitutional monarchy, the only one in North America. The Sovereign (King or Queen) is the Head of State."
  },
  {
    id: 121,
    chapter: "Federal Elections",
    question: "What do municipal governments do?",
    options: [
      "Handle national defence and foreign policy",
      "Manage education and health care",
      "Handle local matters like roads, sanitation, snow removal, and local police",
      "Print currency and manage banks"
    ],
    correctAnswer: 2,
    explanation: "Municipal governments handle local matters including roads, sanitation, snow removal, fire/police/ambulance services, recreation, transit, and planning."
  },
  {
    id: 122,
    chapter: "The Justice System",
    question: "What types of police forces exist in Canada?",
    options: [
      "Only federal police",
      "RCMP (federal), provincial police (Ontario/Quebec), and municipal police",
      "Only municipal police",
      "Military police only"
    ],
    correctAnswer: 1,
    explanation: "Canada has RCMP (federal and provincial policing in most provinces), provincial police (OPP in Ontario, Sûreté du Québec in Quebec), and municipal/local police in most cities."
  },
  {
    id: 123,
    chapter: "Modern Canada",
    question: "Who painted the rugged Canadian wilderness as the 'Group of Seven'?",
    options: [
      "A group of Quebec sculptors",
      "A group of landscape painters who captured the Canadian wilderness in the 1920s",
      "A group of war artists",
      "A group of portrait painters"
    ],
    correctAnswer: 1,
    explanation: "The Group of Seven were landscape painters in the 1920s who captured the rugged Canadian wilderness in their distinctive style."
  },
  {
    id: 124,
    chapter: "Modern Canada",
    question: "What is Emily Carr known for?",
    options: [
      "Inventing the telephone",
      "Painting West Coast forests and Aboriginal artifacts",
      "Writing poetry",
      "Leading women's suffrage movement"
    ],
    correctAnswer: 1,
    explanation: "Emily Carr is famous for her paintings of West Coast forests and Aboriginal artifacts."
  },
  {
    id: 125,
    chapter: "Canadian Symbols",
    question: "When is Victoria Day celebrated?",
    options: [
      "July 1",
      "The Monday before May 25",
      "November 11",
      "The second Monday in October"
    ],
    correctAnswer: 1,
    explanation: "Victoria Day is celebrated on the Monday before May 25, honouring Queen Victoria."
  },
  {
    id: 126,
    chapter: "Canadian Symbols",
    question: "When is Canada Day?",
    options: [
      "January 1",
      "July 1",
      "July 4",
      "November 11"
    ],
    correctAnswer: 1,
    explanation: "Canada Day is July 1, celebrating Confederation in 1867. It was formerly called Dominion Day until 1982."
  },
  {
    id: 127,
    chapter: "Canadian Symbols",
    question: "When is Thanksgiving in Canada?",
    options: [
      "The last Thursday in November",
      "The first Monday in September",
      "The second Monday in October",
      "The third Thursday in November"
    ],
    correctAnswer: 2,
    explanation: "Canadian Thanksgiving is the second Monday in October, different from American Thanksgiving."
  },
  {
    id: 128,
    chapter: "Canadian Symbols",
    question: "What is the Peace Tower?",
    options: [
      "A monument in Vancouver",
      "The central tower of the Parliament Buildings, a memorial to World War I",
      "A lighthouse in Nova Scotia",
      "A tower in Toronto"
    ],
    correctAnswer: 1,
    explanation: "The Peace Tower (1927) is the central tower of the Parliament Buildings in Ottawa. It is a memorial to World War I and contains the Memorial Chamber with Books of Remembrance."
  },
  {
    id: 129,
    chapter: "Canada's History",
    question: "What was the Constitutional Act of 1791?",
    options: [
      "The act that created Canada",
      "The act that divided Quebec into Upper and Lower Canada with elected assemblies",
      "The act that abolished slavery",
      "The act that created the Senate"
    ],
    correctAnswer: 1,
    explanation: "The Constitutional Act of 1791 divided Quebec into Upper Canada (Ontario) and Lower Canada (Quebec), each with an elected assembly."
  },
  {
    id: 130,
    chapter: "Canada's History",
    question: "What did Lord Durham's Report lead to?",
    options: [
      "Canadian independence",
      "The union of Upper and Lower Canada and responsible government",
      "The creation of the RCMP",
      "Women's suffrage"
    ],
    correctAnswer: 1,
    explanation: "Lord Durham's Report (after the 1837-38 rebellions) led to the union of Upper and Lower Canada (1840) and eventually responsible government."
  },
  {
    id: 131,
    chapter: "Modern Canada",
    question: "Who is Wayne Gretzky?",
    options: [
      "A famous Canadian politician",
      "One of the greatest hockey players of all time",
      "A famous Canadian singer",
      "An Olympic swimmer"
    ],
    correctAnswer: 1,
    explanation: "Wayne Gretzky is considered one of the greatest hockey players of all time, known as 'The Great One'."
  },
  {
    id: 132,
    chapter: "Modern Canada",
    question: "Who was Donovan Bailey?",
    options: [
      "A hockey player",
      "A world record sprinter who won double Olympic gold in 1996",
      "A politician",
      "A scientist"
    ],
    correctAnswer: 1,
    explanation: "Donovan Bailey was a Canadian sprinter who set a world record and won double Olympic gold medals at the 1996 Atlanta Olympics."
  },
  {
    id: 133,
    chapter: "Modern Canada",
    question: "Who is Chantal Petitclerc?",
    options: [
      "A figure skater",
      "A world champion wheelchair racer and Paralympic gold medalist",
      "A singer",
      "A politician"
    ],
    correctAnswer: 1,
    explanation: "Chantal Petitclerc is a world champion wheelchair racer who won multiple Paralympic gold medals."
  },
  {
    id: 134,
    chapter: "Canada's History",
    question: "How many Canadians died in World War II?",
    options: [
      "About 10,000",
      "About 25,000",
      "About 44,000",
      "About 100,000"
    ],
    correctAnswer: 2,
    explanation: "About 44,000 Canadians were killed in World War II. Over one million Canadians served in the war."
  },
  {
    id: 135,
    chapter: "Canada's History",
    question: "What country did Canada help liberate in World War II?",
    options: [
      "France only",
      "The Netherlands",
      "Germany",
      "Japan"
    ],
    correctAnswer: 1,
    explanation: "Canadian forces played a key role in liberating the Netherlands from Nazi occupation during World War II. The Dutch still celebrate this liberation."
  },
  {
    id: 136,
    chapter: "Canada's History",
    question: "What regrettable wartime policy affected Japanese-Canadians?",
    options: [
      "They were drafted into the military",
      "They were interned (imprisoned) during World War II",
      "They were denied education",
      "They were forced to leave Canada"
    ],
    correctAnswer: 1,
    explanation: "Japanese-Canadians were interned (imprisoned) during World War II, a regrettable action for which the government apologized in 1988."
  },
  {
    id: 137,
    chapter: "Modern Canada",
    question: "When was the Canadian Charter of Rights and Freedoms added to the Constitution?",
    options: [
      "1867",
      "1969",
      "1982",
      "2000"
    ],
    correctAnswer: 2,
    explanation: "The Canadian Charter of Rights and Freedoms was added to the Constitution in 1982."
  },
  {
    id: 138,
    chapter: "Rights and Responsibilities",
    question: "What right allows Canadians to live and work anywhere in Canada?",
    options: [
      "Freedom of religion",
      "Mobility rights",
      "Freedom of speech",
      "Property rights"
    ],
    correctAnswer: 1,
    explanation: "Mobility rights allow Canadians to live and work anywhere in Canada, to enter and leave Canada freely, and to apply for a passport."
  },
  {
    id: 139,
    chapter: "Canada's Economy",
    question: "What is Canada's largest trading partner?",
    options: [
      "China",
      "United Kingdom",
      "United States",
      "Japan"
    ],
    correctAnswer: 2,
    explanation: "The United States is Canada's largest trading partner. Canada and the U.S. share the world's largest bilateral trading relationship."
  },
  {
    id: 140,
    chapter: "Canada's Economy",
    question: "Is Canada a member of the G7?",
    options: [
      "No, Canada is too small",
      "Yes, Canada is one of the world's major economies",
      "Canada used to be but was removed",
      "Canada is only an observer"
    ],
    correctAnswer: 1,
    explanation: "Yes, Canada is a member of the G7 (Group of Seven), representing one of the world's largest economies."
  },
  {
    id: 141,
    chapter: "Canada's Regions",
    question: "What is the 'Land of the Midnight Sun'?",
    options: [
      "British Columbia",
      "The Northern Territories where the sun shines 24 hours in summer",
      "Nova Scotia",
      "Quebec"
    ],
    correctAnswer: 1,
    explanation: "The Northern Territories (Yukon, Northwest Territories, Nunavut) are called the 'Land of the Midnight Sun' because the sun can shine 24 hours a day in summer."
  },
  {
    id: 142,
    chapter: "Canada's Regions",
    question: "What province is known as the 'breadbasket of the world'?",
    options: [
      "Ontario",
      "British Columbia",
      "Saskatchewan",
      "Quebec"
    ],
    correctAnswer: 2,
    explanation: "Saskatchewan is known as the 'breadbasket of the world' for its wheat and oilseed production."
  },
  {
    id: 143,
    chapter: "Canada's Regions",
    question: "Which province leads Canada in oil and gas production?",
    options: [
      "British Columbia",
      "Saskatchewan",
      "Alberta",
      "Ontario"
    ],
    correctAnswer: 2,
    explanation: "Alberta is Canada's leader in oil and gas production, with the industry beginning after oil was discovered in 1947."
  },
  {
    id: 144,
    chapter: "Canada's Regions",
    question: "Which province has the most valuable forestry industry?",
    options: [
      "Ontario",
      "Quebec",
      "British Columbia",
      "New Brunswick"
    ],
    correctAnswer: 2,
    explanation: "British Columbia has Canada's most valuable forestry industry."
  },
  {
    id: 145,
    chapter: "How Canadians Govern Themselves",
    question: "What is the name of elected representatives in Quebec's legislature?",
    options: [
      "MLAs (Members of the Legislative Assembly)",
      "MNAs (Members of the National Assembly)",
      "MPPs (Members of Provincial Parliament)",
      "MPs (Members of Parliament)"
    ],
    correctAnswer: 1,
    explanation: "In Quebec, elected representatives are called MNAs (Members of the National Assembly). Different provinces use different names."
  },
  {
    id: 146,
    chapter: "How Canadians Govern Themselves",
    question: "What is the name of elected representatives in Ontario's legislature?",
    options: [
      "MLAs",
      "MNAs",
      "MPPs (Members of Provincial Parliament)",
      "MPs"
    ],
    correctAnswer: 2,
    explanation: "In Ontario, elected representatives are called MPPs (Members of Provincial Parliament)."
  },
  {
    id: 147,
    chapter: "How Canadians Govern Themselves",
    question: "Who appoints the Lieutenant Governor of a province?",
    options: [
      "The Premier",
      "The Governor General on the Prime Minister's advice",
      "The voters",
      "The provincial legislature"
    ],
    correctAnswer: 1,
    explanation: "Lieutenant Governors are appointed by the Governor General on the Prime Minister's advice, usually for a 5-year term."
  },
  {
    id: 148,
    chapter: "Canada's History",
    question: "When did Manitoba join Confederation?",
    options: [
      "1867",
      "1870",
      "1871",
      "1905"
    ],
    correctAnswer: 1,
    explanation: "Manitoba joined Confederation in 1870, created partly due to the Red River Resistance led by Louis Riel."
  },
  {
    id: 149,
    chapter: "Canada's History",
    question: "When did Alberta and Saskatchewan join Confederation?",
    options: [
      "1867",
      "1870",
      "1885",
      "1905"
    ],
    correctAnswer: 3,
    explanation: "Alberta and Saskatchewan both joined Confederation in 1905."
  },
  {
    id: 150,
    chapter: "Canada's History",
    question: "When did Prince Edward Island join Confederation?",
    options: [
      "1867",
      "1870",
      "1873",
      "1905"
    ],
    correctAnswer: 2,
    explanation: "Prince Edward Island joined Confederation in 1873, despite being the birthplace of Confederation."
  },
  {
    id: 151,
    chapter: "Canada's History",
    question: "What is 'habeas corpus'?",
    options: [
      "A type of Canadian law",
      "The right to challenge unlawful detention by the government",
      "A legal term for citizenship",
      "A type of court"
    ],
    correctAnswer: 1,
    explanation: "Habeas corpus is the right to challenge unlawful detention by the government, an important principle from English common law."
  },
  {
    id: 152,
    chapter: "Canada's History",
    question: "What was the original name of the Constitution in 1867?",
    options: [
      "The Constitution Act",
      "The Canada Act",
      "The British North America Act",
      "The Charter of Rights"
    ],
    correctAnswer: 2,
    explanation: "The original Constitution (1867) was called the British North America Act. It was renamed the Constitution Act in 1982."
  },
  {
    id: 153,
    chapter: "Canadian Symbols",
    question: "Where does the word 'Dominion' in 'Dominion of Canada' come from?",
    options: [
      "The French language",
      "An Aboriginal word",
      "Psalm 72 in the Bible",
      "The British Parliament"
    ],
    correctAnswer: 2,
    explanation: "The word 'Dominion' comes from Psalm 72:8 in the Bible: 'He shall have dominion from sea to sea.' Sir John A. Macdonald suggested the name."
  },
  {
    id: 154,
    chapter: "Modern Canada",
    question: "What is the Bank of Canada?",
    options: [
      "A commercial bank for savings",
      "Canada's central bank, established in 1934",
      "A provincial bank",
      "An American bank operating in Canada"
    ],
    correctAnswer: 1,
    explanation: "The Bank of Canada is Canada's central bank, established in 1934 during the Great Depression."
  },
  {
    id: 155,
    chapter: "Modern Canada",
    question: "What happened in 1951 regarding Canadian living standards?",
    options: [
      "Canada entered a recession",
      "For the first time, most Canadians could afford adequate food, shelter, and clothing",
      "Canada declared independence",
      "The Charter was created"
    ],
    correctAnswer: 1,
    explanation: "In 1951, for the first time, the majority of Canadians could afford adequate food, shelter, and clothing, marking improved living standards."
  },
  {
    id: 156,
    chapter: "Modern Canada",
    question: "What international organizations did Canada join during the Cold War?",
    options: [
      "Only the United Nations",
      "NATO and NORAD",
      "The European Union",
      "ASEAN"
    ],
    correctAnswer: 1,
    explanation: "Canada joined NATO (North Atlantic Treaty Organization) and NORAD (North American Aerospace Defense Command with the U.S.) during the Cold War."
  },
  {
    id: 157,
    chapter: "Modern Canada",
    question: "How many Hungarian refugees did Canada welcome in 1956?",
    options: [
      "About 5,000",
      "About 37,000",
      "About 100,000",
      "About 500"
    ],
    correctAnswer: 1,
    explanation: "Canada welcomed about 37,000 Hungarian refugees in 1956 after the failed Hungarian uprising against Soviet rule."
  },
  {
    id: 158,
    chapter: "Canada's Regions",
    question: "What is the National Capital Region?",
    options: [
      "Toronto and surrounding area",
      "Ottawa and surrounding area spanning Ontario and Quebec",
      "Vancouver and surrounding area",
      "Montreal and surrounding area"
    ],
    correctAnswer: 1,
    explanation: "The National Capital Region is Ottawa and the surrounding area, spanning both Ontario and Quebec."
  },
  {
    id: 159,
    chapter: "Canada's Regions",
    question: "How many provinces and territories does Canada have?",
    options: [
      "10 provinces and 2 territories",
      "10 provinces and 3 territories",
      "12 provinces and 3 territories",
      "8 provinces and 4 territories"
    ],
    correctAnswer: 1,
    explanation: "Canada has 10 provinces and 3 territories (Yukon, Northwest Territories, and Nunavut)."
  },
  {
    id: 160,
    chapter: "Canada's Regions",
    question: "What is the population of Canada approximately?",
    options: [
      "About 20 million",
      "About 30 million",
      "About 41 million",
      "About 60 million"
    ],
    correctAnswer: 2,
    explanation: "Canada's population is approximately 41 million (as of 2025). Most Canadians live in cities and towns near the U.S. border."
  },
  {
    id: 161,
    chapter: "Canadian Symbols",
    question: "What is the Victoria Cross?",
    options: [
      "A religious symbol",
      "The highest military honour for valour",
      "A type of medal for sports",
      "A civilian award"
    ],
    correctAnswer: 1,
    explanation: "The Victoria Cross is the highest military honour for valour. Canada has had its own version since 1993. 98 Canadians have been awarded the original VC."
  },
  {
    id: 162,
    chapter: "Canadian Symbols",
    question: "What is Canada's national summer sport?",
    options: [
      "Hockey",
      "Soccer",
      "Lacrosse",
      "Baseball"
    ],
    correctAnswer: 2,
    explanation: "Lacrosse is Canada's national summer sport. Hockey is the national winter sport."
  },
  {
    id: 163,
    chapter: "Canadian Symbols",
    question: "What is the Royal Anthem of Canada?",
    options: [
      "O Canada",
      "God Save the King",
      "The Maple Leaf Forever",
      "In Flanders Fields"
    ],
    correctAnswer: 1,
    explanation: "God Save the King (or Queen) is the Royal Anthem, played for royal occasions. O Canada is the national anthem."
  },
  {
    id: 164,
    chapter: "Canadian Symbols",
    question: "What does the Canadian coat of arms include?",
    options: [
      "Only the maple leaf",
      "Symbols of England, Scotland, France, and Ireland, plus maple leaves",
      "Only the beaver",
      "Only the Crown"
    ],
    correctAnswer: 1,
    explanation: "The Canadian coat of arms (granted 1921) includes symbols of England (lion), Scotland (unicorn), France (fleurs-de-lys), Ireland (harp), and three red maple leaves."
  },
  {
    id: 165,
    chapter: "Canada's History",
    question: "Who was Joseph Brant?",
    options: [
      "A French explorer",
      "A Mohawk leader who led Loyalist First Nations settlers to Canada",
      "A British general",
      "The first Prime Minister"
    ],
    correctAnswer: 1,
    explanation: "Joseph Brant was a Mohawk leader who led Loyalist First Nations settlers to Canada after the American Revolution."
  },
  {
    id: 166,
    chapter: "Canada's History",
    question: "Who were the Black Loyalists?",
    options: [
      "British soldiers",
      "About 3,000 Black Loyalists who fled to Canada after the American Revolution",
      "French settlers",
      "Aboriginal allies"
    ],
    correctAnswer: 1,
    explanation: "About 3,000 Black Loyalists (freed slaves and free Black people loyal to Britain) fled to Canada after the American Revolution, settling mainly in Nova Scotia."
  },
  {
    id: 167,
    chapter: "Canada's History",
    question: "What was the Underground Railroad?",
    options: [
      "A subway system",
      "A secret network that helped escaped slaves reach freedom in Canada",
      "A railway company",
      "A mining operation"
    ],
    correctAnswer: 1,
    explanation: "The Underground Railroad was a secret network that helped escaped slaves from the United States reach freedom in Canada, especially after 1833."
  },
  {
    id: 168,
    chapter: "How Canadians Govern Themselves",
    question: "What are the three branches of government?",
    options: [
      "Federal, provincial, and municipal",
      "Executive, legislative, and judicial",
      "Senate, House of Commons, and Supreme Court",
      "Prime Minister, Governor General, and Sovereign"
    ],
    correctAnswer: 1,
    explanation: "The three branches of government are Executive (runs day-to-day government), Legislative (makes laws), and Judicial (interprets and applies laws)."
  },
  {
    id: 169,
    chapter: "How Canadians Govern Themselves",
    question: "What does the Executive branch do?",
    options: [
      "Makes laws",
      "Interprets laws",
      "Proposes laws and runs day-to-day government",
      "Elects the Prime Minister"
    ],
    correctAnswer: 2,
    explanation: "The Executive branch proposes laws and runs the day-to-day operations of government. It consists of the Prime Minister and Cabinet at the federal level."
  },
  {
    id: 170,
    chapter: "How Canadians Govern Themselves",
    question: "What does the Judicial branch do?",
    options: [
      "Makes laws",
      "Runs the government",
      "Interprets and applies laws independently",
      "Collects taxes"
    ],
    correctAnswer: 2,
    explanation: "The Judicial branch interprets and applies laws independently. Courts settle disputes fairly according to law."
  },
  {
    id: 171,
    chapter: "Federal Elections",
    question: "Is voting in Canada done by secret ballot?",
    options: [
      "No, votes are public",
      "Yes, voting is private and no one can watch or force you",
      "Only in federal elections",
      "Only for citizens over 21"
    ],
    correctAnswer: 1,
    explanation: "Yes, voting in Canada is by secret ballot. No one can watch you vote or force you to vote a certain way."
  },
  {
    id: 172,
    chapter: "Federal Elections",
    question: "How often must federal elections be held?",
    options: [
      "Every 2 years",
      "At least every 4 years",
      "Every 5 years exactly",
      "Every 6 years"
    ],
    correctAnswer: 1,
    explanation: "Federal elections must be held at least every 4 years, though they can be called earlier if the government loses the confidence of the House of Commons."
  },
  {
    id: 173,
    chapter: "Federal Elections",
    question: "How many electoral districts (ridings) are there in Canada?",
    options: [
      "About 200",
      "About 338",
      "About 500",
      "About 105"
    ],
    correctAnswer: 1,
    explanation: "There are 338 electoral districts (ridings) in Canada, each represented by one Member of Parliament."
  },
  {
    id: 174,
    chapter: "The Justice System",
    question: "What is the highest court in Canada?",
    options: [
      "Federal Court of Canada",
      "Provincial Superior Court",
      "Supreme Court of Canada",
      "Court of Appeal"
    ],
    correctAnswer: 2,
    explanation: "The Supreme Court of Canada is the highest court in the country, serving as the final court of appeal."
  },
  {
    id: 175,
    chapter: "The Justice System",
    question: "Why are judges independent?",
    options: [
      "To make laws",
      "To ensure fair and impartial justice",
      "To run the government",
      "To collect taxes"
    ],
    correctAnswer: 1,
    explanation: "Judges are independent (appointed, with guaranteed salary and tenure) to ensure they can make fair and impartial decisions without political interference."
  },
  {
    id: 176,
    chapter: "Who We Are",
    question: "What is the largest religious group in Canada?",
    options: [
      "Muslim",
      "Hindu",
      "Christian (Catholic being the largest denomination)",
      "Jewish"
    ],
    correctAnswer: 2,
    explanation: "The majority of Canadians identify as Christian, with Catholic being the largest denomination, followed by various Protestant denominations."
  },
  {
    id: 177,
    chapter: "Who We Are",
    question: "Does Canada protect gay and lesbian Canadians from discrimination?",
    options: [
      "No",
      "Yes, they enjoy full legal protection and access to civil marriage",
      "Only in some provinces",
      "Only for employment"
    ],
    correctAnswer: 1,
    explanation: "Yes, gay and lesbian Canadians enjoy full legal protection, equal treatment, and access to civil marriage."
  },
  {
    id: 178,
    chapter: "Canada's Regions",
    question: "What is Vancouver known as?",
    options: [
      "The Capital of Canada",
      "Canada's Pacific Gateway",
      "The Breadbasket",
      "The Diamond Capital"
    ],
    correctAnswer: 1,
    explanation: "Vancouver is known as Canada's Pacific Gateway because the Port of Vancouver handles billions of dollars in goods traded with Asia and the Pacific."
  },
  {
    id: 179,
    chapter: "Canada's Regions",
    question: "What is Toronto known as?",
    options: [
      "The Capital of Canada",
      "Canada's financial centre and largest city",
      "The Pacific Gateway",
      "The Diamond Capital"
    ],
    correctAnswer: 1,
    explanation: "Toronto is Canada's financial centre and largest city. It is the capital of Ontario."
  },
  {
    id: 180,
    chapter: "Canada's Regions",
    question: "What is the coldest temperature ever recorded in Canada?",
    options: [
      "-45°C",
      "-53°C",
      "-63°C in Yukon",
      "-72°C"
    ],
    correctAnswer: 2,
    explanation: "The coldest temperature recorded in Canada was -63°C in the Yukon."
  },
  {
    id: 181,
    chapter: "Modern Canada",
    question: "What is Kenojuak Ashevak known for?",
    options: [
      "Hockey",
      "Pioneering modern Inuit art",
      "Politics",
      "Music"
    ],
    correctAnswer: 1,
    explanation: "Kenojuak Ashevak pioneered modern Inuit art, creating famous prints, etchings, and sculptures."
  },
  {
    id: 182,
    chapter: "Modern Canada",
    question: "What are Les Automatistes?",
    options: [
      "A hockey team",
      "Quebec pioneers of modern abstract art in the 1950s",
      "A political party",
      "A musical group"
    ],
    correctAnswer: 1,
    explanation: "Les Automatistes were Quebec painters in the 1950s who pioneered modern abstract art. Jean-Paul Riopelle was a notable member."
  },
  {
    id: 183,
    chapter: "Canada's Economy",
    question: "What are natural resources industries in Canada?",
    options: [
      "Banking and insurance",
      "Forestry, fishing, agriculture, mining, and energy",
      "Retail and tourism",
      "Healthcare and education"
    ],
    correctAnswer: 1,
    explanation: "Natural resources industries include forestry, fishing, agriculture, mining, and energy (oil and gas). These have historically been very important to Canada's economy."
  },
  {
    id: 184,
    chapter: "Canada's Economy",
    question: "What was NAFTA?",
    options: [
      "A Canadian political party",
      "A free trade agreement between Canada, the U.S., and Mexico (1994)",
      "A military alliance",
      "An environmental agreement"
    ],
    correctAnswer: 1,
    explanation: "NAFTA (North American Free Trade Agreement) was a free trade agreement between Canada, the U.S., and Mexico from 1994 until it was replaced by USMCA in 2020."
  },
  {
    id: 185,
    chapter: "Canada's Regions",
    question: "What is the capital of New Brunswick?",
    options: [
      "Saint John",
      "Moncton",
      "Fredericton",
      "Halifax"
    ],
    correctAnswer: 2,
    explanation: "Fredericton is the capital of New Brunswick, the only officially bilingual province."
  },
  {
    id: 186,
    chapter: "Canada's Regions",
    question: "What is the capital of Prince Edward Island?",
    options: [
      "Summerside",
      "Charlottetown",
      "Souris",
      "Montague"
    ],
    correctAnswer: 1,
    explanation: "Charlottetown is the capital of Prince Edward Island. It is known as the 'Birthplace of Confederation' because the Fathers of Confederation met there in 1864."
  },
  {
    id: 187,
    chapter: "Canada's History",
    question: "Who was Charles de Salaberry?",
    options: [
      "A famous explorer",
      "A hero of the War of 1812 who defended Canada against American invasion",
      "The first Prime Minister",
      "A railway builder"
    ],
    correctAnswer: 1,
    explanation: "Charles de Salaberry was a hero of the War of 1812 who led Canadian forces in defending against American invasion."
  },
  {
    id: 188,
    chapter: "Canada's History",
    question: "What was the Red River Resistance (1869-1870)?",
    options: [
      "A war with the United States",
      "An uprising led by Louis Riel for Métis rights",
      "A gold rush",
      "A railway strike"
    ],
    correctAnswer: 1,
    explanation: "The Red River Resistance (1869-1870) was led by Louis Riel to protect Métis rights. It led to the creation of Manitoba."
  },
  {
    id: 189,
    chapter: "Modern Canada",
    question: "What social programs does Canada have?",
    options: [
      "No social programs",
      "Employment Insurance, Old Age Security, Canada Pension Plan, and universal healthcare",
      "Only healthcare",
      "Only pensions"
    ],
    correctAnswer: 1,
    explanation: "Canada has many social programs including Employment Insurance (1940), Old Age Security (1952), Canada and Quebec Pension Plans (1965), and publicly funded healthcare (Canada Health Act)."
  },
  {
    id: 190,
    chapter: "Rights and Responsibilities",
    question: "What does equality mean in Canada?",
    options: [
      "Only citizens are equal",
      "Men and women are equal under the law",
      "Only some people are equal",
      "Equality is not protected"
    ],
    correctAnswer: 1,
    explanation: "In Canada, men and women are equal under the law. Equality is a fundamental Canadian value protected by the Charter."
  },
  {
    id: 191,
    chapter: "Canada's History",
    question: "What was the Great Depression?",
    options: [
      "A war",
      "An economic crisis in the 1930s that caused widespread unemployment",
      "A political scandal",
      "A natural disaster"
    ],
    correctAnswer: 1,
    explanation: "The Great Depression (1929-1930s) was a severe worldwide economic crisis that caused widespread unemployment and hardship in Canada."
  },
  {
    id: 192,
    chapter: "Who We Are",
    question: "What is Canada's value system built on?",
    options: [
      "Only British traditions",
      "Peace, order, and good government",
      "Only French traditions",
      "American values"
    ],
    correctAnswer: 1,
    explanation: "Canada is known for its values of peace, order, and good government, which are foundational to Canadian society."
  },
  {
    id: 193,
    chapter: "Canada's Regions",
    question: "Where do most Canadians live?",
    options: [
      "In the North",
      "In cities and towns near the U.S. border",
      "In rural areas",
      "On the coasts only"
    ],
    correctAnswer: 1,
    explanation: "Most Canadians live in cities and towns near the U.S. border, where the climate is more temperate."
  },
  {
    id: 194,
    chapter: "Who We Are",
    question: "How many Anglophones (English first language) are there in Canada?",
    options: [
      "About 7 million",
      "About 18 million",
      "About 30 million",
      "About 5 million"
    ],
    correctAnswer: 1,
    explanation: "There are about 18 million Anglophones (people with English as their first language) in Canada."
  },
  {
    id: 195,
    chapter: "Who We Are",
    question: "How many Francophones (French first language) are there in Canada?",
    options: [
      "About 2 million",
      "About 7 million",
      "About 15 million",
      "About 20 million"
    ],
    correctAnswer: 1,
    explanation: "There are about 7 million Francophones (people with French as their first language) in Canada, with the majority in Quebec."
  },
  {
    id: 196,
    chapter: "The Oath of Citizenship",
    question: "What does the Oath of Citizenship include pledging to observe?",
    options: [
      "Only the laws of Canada",
      "The laws of Canada, the Constitution, and First Nations, Inuit and Métis rights",
      "Only the Charter",
      "Only the provincial laws"
    ],
    correctAnswer: 1,
    explanation: "The Oath of Citizenship includes pledging to observe the laws of Canada, the Constitution, and specifically mentions First Nations, Inuit, and Métis peoples."
  },
  {
    id: 197,
    chapter: "Canada's Regions",
    question: "What are Canadian Rangers?",
    options: [
      "A professional sports team",
      "A reserve force that uses Indigenous knowledge to protect Arctic sovereignty",
      "Park rangers only",
      "RCMP officers"
    ],
    correctAnswer: 1,
    explanation: "Canadian Rangers are a reserve force that uses Indigenous knowledge to protect Canada's Arctic sovereignty."
  },
  {
    id: 198,
    chapter: "Canada's History",
    question: "When was the first FTA (Free Trade Agreement) with the U.S. signed?",
    options: [
      "1967",
      "1988",
      "1994",
      "2000"
    ],
    correctAnswer: 1,
    explanation: "The first Free Trade Agreement (FTA) between Canada and the United States was signed in 1988."
  },
  {
    id: 199,
    chapter: "Canadian Symbols",
    question: "When is Sir John A. Macdonald Day?",
    options: [
      "July 1",
      "January 11",
      "November 11",
      "April 9"
    ],
    correctAnswer: 1,
    explanation: "Sir John A. Macdonald Day is January 11, commemorating Canada's first Prime Minister."
  },
  {
    id: 200,
    chapter: "Canadian Symbols",
    question: "When is Vimy Day?",
    options: [
      "July 1",
      "November 11",
      "April 9",
      "May 25"
    ],
    correctAnswer: 2,
    explanation: "Vimy Day is April 9, commemorating the Battle of Vimy Ridge (1917), a defining moment in Canadian history."
  },
  {
    id: 201,
    chapter: "Rights and Responsibilities",
    question: "What are the sources of Canadian law?",
    options: [
      "Only laws passed by Parliament",
      "Laws passed by Parliament/legislatures, English common law, French civil code, and the unwritten British constitution",
      "Only the Canadian Charter of Rights and Freedoms",
      "Only the Constitution Act of 1982"
    ],
    correctAnswer: 1,
    explanation: "Canadian law comes from four sources: laws passed by Parliament and provincial legislatures, English common law, the civil code of France, and the unwritten constitution inherited from Great Britain."
  },
  {
    id: 202,
    chapter: "Canada's History",
    question: "What was the Chinese Head Tax, and when did the government apologize for it?",
    options: [
      "A tax on Chinese imports; apology in 1988",
      "A discriminatory tax on Chinese railway workers and immigrants; apology in 2006",
      "A fee for Chinese businesses; apology in 1999",
      "A tax on Chinese goods; never apologized"
    ],
    correctAnswer: 1,
    explanation: "The Chinese Head Tax was discriminatory legislation against Chinese workers who helped build the Canadian Pacific Railway. The federal government apologized in 2006."
  },
  {
    id: 203,
    chapter: "How Canadians Govern Themselves",
    question: "What is the correct order of steps for a bill to become law?",
    options: [
      "Royal Assent, Senate, House of Commons vote",
      "First reading, Second reading, Committee, Report stage, Third reading, Senate process, Royal Assent",
      "Prime Minister approval, Senate vote, Governor General signature",
      "House vote, Prime Minister signature, publication"
    ],
    correctAnswer: 1,
    explanation: "A bill goes through: First reading (introduction), Second reading (debate), Committee stage (detailed study), Report stage (amendments), Third reading (final vote), then the same process in the Senate, and finally Royal Assent by the Governor General."
  },
  {
    id: 204,
    chapter: "Canada's History",
    question: "Who were Jean Talon, Bishop Laval, and Count Frontenac?",
    options: [
      "Fathers of Confederation",
      "Leaders of Royal New France in the 1600s",
      "Explorers who mapped the Arctic",
      "British generals in the War of 1812"
    ],
    correctAnswer: 1,
    explanation: "Jean Talon, Bishop Laval, and Count Frontenac were important leaders of Royal New France in the 1600s who helped establish the French colony."
  },
  {
    id: 205,
    chapter: "Canada's History",
    question: "Who were the voyageurs and coureurs des bois?",
    options: [
      "French military officers",
      "Fur traders and canoe paddlers who traveled through the wilderness",
      "Farmers in New France",
      "Missionaries to the Aboriginal peoples"
    ],
    correctAnswer: 1,
    explanation: "Voyageurs and coureurs des bois were fur traders and canoe paddlers who traveled through the Canadian wilderness during the fur trade era. Their interactions with Aboriginal peoples contributed to the birth of the Métis."
  },
  {
    id: 206,
    chapter: "Modern Canada",
    question: "When was the Canadian Space Agency established?",
    options: [
      "1969",
      "1981",
      "1989",
      "2001"
    ],
    correctAnswer: 2,
    explanation: "The Canadian Space Agency was established in 1989. Canada has contributed the Canadarm robotic arm and sent astronauts into space."
  },
  {
    id: 207,
    chapter: "Modern Canada",
    question: "Which Canadian scientists have won Nobel Prizes?",
    options: [
      "Alexander Graham Bell and Sir Sandford Fleming",
      "Gerhard Herzberg and John Polanyi",
      "Frederick Banting and Terry Fox",
      "Wilder Penfield and John Hopps"
    ],
    correctAnswer: 1,
    explanation: "Gerhard Herzberg and John Polanyi are among Canadian Nobel Prize-winning scientists recognized for their contributions to chemistry and physics."
  },
  {
    id: 208,
    chapter: "Federal Elections",
    question: "When are federal elections normally held under the fixed-date law?",
    options: [
      "The first Monday in November every 5 years",
      "The third Monday in October in the fourth year after the previous election",
      "July 1 every 4 years",
      "Any day chosen by the Prime Minister"
    ],
    correctAnswer: 1,
    explanation: "Under the fixed-date election law, federal elections are held on the third Monday in October in the fourth year after the previous election, though elections can be called earlier if the government loses confidence."
  },
  {
    id: 209,
    chapter: "The Justice System",
    question: "What does the Federal Court of Canada handle?",
    options: [
      "All criminal cases in Canada",
      "Federal matters such as immigration and intellectual property",
      "Only appeals from provincial courts",
      "Municipal by-law violations"
    ],
    correctAnswer: 1,
    explanation: "The Federal Court of Canada handles federal matters including immigration cases, intellectual property disputes, and other issues under federal jurisdiction."
  },
  {
    id: 210,
    chapter: "The Justice System",
    question: "What types of specialized courts exist in Canada?",
    options: [
      "Only criminal courts",
      "Small claims, family, traffic, and youth courts",
      "Only federal and provincial courts",
      "Military courts only"
    ],
    correctAnswer: 1,
    explanation: "Canada has specialized courts including small claims courts (for low-value civil matters), family courts, traffic courts, and youth courts, in addition to regular provincial and superior courts."
  },
  {
    id: 211,
    chapter: "The Justice System",
    question: "What famous quote expresses a key principle of Canadian justice?",
    options: [
      "\"Justice delayed is justice denied\"",
      "\"It is better that ten guilty persons escape than that one innocent suffer\"",
      "\"An eye for an eye\"",
      "\"The law is the law\""
    ],
    correctAnswer: 1,
    explanation: "The quote \"It is better that ten guilty persons escape than that one innocent suffer\" expresses the importance of presumption of innocence and the high standard required to convict someone in Canada's justice system."
  },
  {
    id: 212,
    chapter: "Federal Elections",
    question: "What are the three major federal political parties in Canada?",
    options: [
      "Liberal Party, Reform Party, Green Party",
      "Liberal Party, Conservative Party, New Democratic Party (NDP)",
      "Progressive Conservative, Social Credit, Bloc Québécois",
      "Democratic Party, Republican Party, Independent Party"
    ],
    correctAnswer: 1,
    explanation: "The three major federal political parties are the Liberal Party of Canada, the Conservative Party of Canada, and the New Democratic Party (NDP)."
  },
  {
    id: 213,
    chapter: "Federal Elections",
    question: "What is Elections Canada?",
    options: [
      "A political party",
      "An independent agency that runs federal elections",
      "A government department under the Prime Minister",
      "A provincial organization"
    ],
    correctAnswer: 1,
    explanation: "Elections Canada is an independent, non-partisan agency responsible for running federal elections, maintaining the voters' list, and ensuring fair electoral processes."
  },
  {
    id: 214,
    chapter: "Federal Elections",
    question: "What is a voter information card?",
    options: [
      "A card showing your political party membership",
      "A card sent by Elections Canada telling you when and where to vote",
      "A card required to become a citizen",
      "A credit card for campaign donations"
    ],
    correctAnswer: 1,
    explanation: "A voter information card is sent by Elections Canada to registered voters, showing when and where to vote. You can also register or update your information on election day."
  },
  {
    id: 215,
    chapter: "The Justice System",
    question: "What is legal aid?",
    options: [
      "A type of law degree",
      "Government-funded free or low-cost legal help for those who qualify",
      "Insurance for lawyers",
      "A legal document"
    ],
    correctAnswer: 1,
    explanation: "Legal aid is government-funded assistance that provides free or low-cost legal help to people who cannot afford a lawyer and meet eligibility requirements."
  },
  {
    id: 216,
    chapter: "Canada's History",
    question: "Who was Laura Secord?",
    options: [
      "The first female Prime Minister of Canada",
      "A heroine who walked 30 km to warn British forces of an American attack in 1813",
      "The founder of women's suffrage in Canada",
      "The first woman elected to Parliament"
    ],
    correctAnswer: 1,
    explanation: "Laura Secord walked 30 km (19 miles) through wilderness in 1813 to warn British forces of an American attack, contributing to victory at the Battle of Beaver Dams during the War of 1812."
  },
  {
    id: 217,
    chapter: "Canada's History",
    question: "Who was the first Canadian to receive the Victoria Cross?",
    options: [
      "Billy Bishop",
      "Alexander Roberts Dunn",
      "William Hall",
      "Filip Konowal"
    ],
    correctAnswer: 1,
    explanation: "Lieutenant Alexander Roberts Dunn was the first Canadian to receive the Victoria Cross, awarded for bravery in the Charge of the Light Brigade at Balaclava during the Crimean War in 1854."
  },
  {
    id: 218,
    chapter: "Canada's History",
    question: "Who was the first Black man to receive the Victoria Cross?",
    options: [
      "Alexander Roberts Dunn",
      "William Hall",
      "Filip Konowal",
      "Robert Hampton Gray"
    ],
    correctAnswer: 1,
    explanation: "Able Seaman William Hall of Horton, Nova Scotia, whose parents were American slaves, was the first Black man to receive the Victoria Cross for his role in the Siege of Lucknow during the Indian Rebellion of 1857."
  },
  {
    id: 219,
    chapter: "Canada's History",
    question: "Who was the last Canadian to receive the Victoria Cross?",
    options: [
      "Billy Bishop",
      "Paul Triquet",
      "Robert Hampton Gray",
      "Filip Konowal"
    ],
    correctAnswer: 2,
    explanation: "Lieutenant Robert Hampton Gray was the last Canadian to receive the Victoria Cross, killed while bombing and sinking a Japanese warship in August 1945, just days before the end of WWII."
  },
  {
    id: 220,
    chapter: "Canada's History",
    question: "What was the Battle of Amiens (August 8, 1918) called by the Germans?",
    options: [
      "The birth of the nation",
      "The black day of the German Army",
      "The Great Canadian Victory",
      "The turning point"
    ],
    correctAnswer: 1,
    explanation: "The Battle of Amiens on August 8, 1918 was called 'the black day of the German Army' by the Germans due to the decisive Allied victory led by Canadian and Australian forces."
  },
  {
    id: 221,
    chapter: "Canada's History",
    question: "Who was called 'Canada's greatest soldier'?",
    options: [
      "Isaac Brock",
      "Sir Arthur Currie",
      "Billy Bishop",
      "Tecumseh"
    ],
    correctAnswer: 1,
    explanation: "General Sir Arthur Currie was called 'Canada's greatest soldier' for his leadership of the Canadian Corps during World War I."
  },
  {
    id: 222,
    chapter: "Canada's History",
    question: "How many Canadians served in World War I, and how many were killed or wounded?",
    options: [
      "300,000 served; 30,000 killed",
      "600,000 served; 60,000 killed and 170,000 wounded",
      "1 million served; 100,000 killed",
      "500,000 served; 44,000 killed"
    ],
    correctAnswer: 1,
    explanation: "Over 600,000 Canadians served in World War I. About 60,000 were killed and 170,000 were wounded."
  },
  {
    id: 223,
    chapter: "Canada's History",
    question: "Who founded the women's suffrage movement in Canada and was the first Canadian woman to practice medicine?",
    options: [
      "Agnes Macphail",
      "Emily Stowe",
      "Thérèse Casgrain",
      "Nellie McClung"
    ],
    correctAnswer: 1,
    explanation: "Dr. Emily Stowe was the first Canadian woman to practice medicine in Canada and founded the women's suffrage movement."
  },
  {
    id: 224,
    chapter: "Canada's History",
    question: "Who led the campaign that won Quebec women the right to vote in 1940?",
    options: [
      "Agnes Macphail",
      "Emily Stowe",
      "Thérèse Casgrain",
      "Laura Secord"
    ],
    correctAnswer: 2,
    explanation: "Thérèse Casgrain led the campaign that won Quebec women the right to vote in 1940, the last province to grant women's suffrage."
  },
  {
    id: 225,
    chapter: "Canada's History",
    question: "What was the South African War (Boer War) and when was it fought?",
    options: [
      "A war against Germany, 1914-1918",
      "Canada's first overseas war, 1899-1902",
      "A conflict with the United States, 1812",
      "A war in Asia, 1950-1953"
    ],
    correctAnswer: 1,
    explanation: "The South African War (Boer War) from 1899-1902 was Canada's first overseas war. Over 7,000 Canadians volunteered and more than 260 died."
  },
  {
    id: 226,
    chapter: "Canada's History",
    question: "Who was Gabriel Dumont?",
    options: [
      "The first French-Canadian Prime Minister",
      "The Métis military leader during the 1885 rebellion",
      "A Father of Confederation",
      "The founder of the RCMP"
    ],
    correctAnswer: 1,
    explanation: "Gabriel Dumont was the Métis military leader who fought alongside Louis Riel during the North-West Rebellion of 1885."
  },
  {
    id: 227,
    chapter: "Canada's History",
    question: "What was the British Commonwealth Air Training Plan during WWII?",
    options: [
      "A plan to bomb Germany",
      "A program that trained over 130,000 Allied aircrew in Canada",
      "A plan to defend Canadian airspace",
      "A program to build aircraft in Canada"
    ],
    correctAnswer: 1,
    explanation: "The British Commonwealth Air Training Plan trained over 130,000 Allied aircrew in Canada during WWII, making a crucial contribution to the war effort."
  },
  {
    id: 228,
    chapter: "Canada's History",
    question: "How large was Canada's navy by the end of World War II?",
    options: [
      "The largest in the world",
      "The third-largest in the world",
      "The fifth-largest in the world",
      "The tenth-largest in the world"
    ],
    correctAnswer: 1,
    explanation: "By the end of World War II, Canada had the third-largest navy in the world, playing a crucial role in the Battle of the Atlantic."
  },
  {
    id: 229,
    chapter: "Canada's History",
    question: "When did British Parliament prohibit the buying and selling of slaves?",
    options: [
      "1793",
      "1807",
      "1833",
      "1865"
    ],
    correctAnswer: 1,
    explanation: "British Parliament prohibited the buying and selling of slaves in 1807. Full abolition throughout the British Empire came in 1833."
  },
  {
    id: 230,
    chapter: "Canadian Symbols",
    question: "When is National Flag of Canada Day?",
    options: [
      "July 1",
      "February 15",
      "November 11",
      "January 11"
    ],
    correctAnswer: 1,
    explanation: "National Flag of Canada Day is February 15, commemorating the day the current maple leaf flag was first raised in 1965."
  },
  {
    id: 231,
    chapter: "Canadian Symbols",
    question: "When is Sir Wilfrid Laurier Day?",
    options: [
      "January 11",
      "November 20",
      "July 1",
      "April 9"
    ],
    correctAnswer: 1,
    explanation: "Sir Wilfrid Laurier Day is November 20, commemorating Canada's first French-Canadian Prime Minister."
  },
  {
    id: 232,
    chapter: "Canadian Symbols",
    question: "When is Fête nationale (Saint-Jean-Baptiste Day) celebrated in Quebec?",
    options: [
      "July 1",
      "June 24",
      "May 24",
      "November 11"
    ],
    correctAnswer: 1,
    explanation: "Fête nationale (Saint-Jean-Baptiste Day) is celebrated on June 24 in Quebec, the Feast of St. John the Baptist."
  },
  {
    id: 233,
    chapter: "Canadian Symbols",
    question: "What is the Clarkson Cup?",
    options: [
      "A trophy for men's hockey",
      "A trophy for women's hockey, established in 2005",
      "A trophy for lacrosse",
      "A trophy for Canadian football"
    ],
    correctAnswer: 1,
    explanation: "The Clarkson Cup, established in 2005 by Adrienne Clarkson (the 26th Governor General and first of Asian origin), is awarded for women's hockey."
  },
  {
    id: 234,
    chapter: "Canadian Symbols",
    question: "Who donated the Stanley Cup?",
    options: [
      "Sir John A. Macdonald",
      "Lord Stanley, the Governor General, in 1892",
      "Queen Victoria in 1867",
      "Sir Wilfrid Laurier in 1900"
    ],
    correctAnswer: 1,
    explanation: "The Stanley Cup was donated by Lord Stanley, the Governor General, in 1892 and is awarded to the NHL championship team."
  },
  {
    id: 235,
    chapter: "Canadian Symbols",
    question: "Which sport has the most registered players in Canada?",
    options: [
      "Ice hockey",
      "Soccer",
      "Lacrosse",
      "Canadian football"
    ],
    correctAnswer: 1,
    explanation: "Soccer has the most registered players of any sport in Canada, though ice hockey remains the most popular spectator sport."
  },
  {
    id: 236,
    chapter: "Canada's Economy",
    question: "What is inscribed on the Peace Arch at the Canada-U.S. border?",
    options: [
      "From sea to sea",
      "Children of a common mother and brethren dwelling together in unity",
      "True North strong and free",
      "Peace, order, and good government"
    ],
    correctAnswer: 1,
    explanation: "The Peace Arch at Blaine (B.C./Washington border) is inscribed with 'children of a common mother' and 'brethren dwelling together in unity,' symbolizing Canada-U.S. friendship."
  },
  {
    id: 237,
    chapter: "Canada's Regions",
    question: "What is the Confederation Bridge?",
    options: [
      "A bridge connecting Ontario and Quebec",
      "One of the world's longest multispan bridges, connecting PEI to mainland Canada",
      "A bridge over the St. Lawrence River",
      "A historic bridge in Ottawa"
    ],
    correctAnswer: 1,
    explanation: "The Confederation Bridge connects Prince Edward Island to mainland Canada and is one of the longest continuous multispan bridges in the world."
  },
  {
    id: 238,
    chapter: "Canada's Regions",
    question: "Who wrote Anne of Green Gables?",
    options: [
      "Margaret Atwood",
      "Lucy Maud Montgomery",
      "Margaret Laurence",
      "Alice Munro"
    ],
    correctAnswer: 1,
    explanation: "Anne of Green Gables was written by Lucy Maud Montgomery and is set in Prince Edward Island. It tells the story of a red-headed orphan girl."
  },
  {
    id: 239,
    chapter: "Canada's Regions",
    question: "What percentage of Canada's arable land is in Saskatchewan?",
    options: [
      "20%",
      "40%",
      "60%",
      "80%"
    ],
    correctAnswer: 1,
    explanation: "Saskatchewan has 40% of Canada's arable land and is known as the 'breadbasket of the world' for its grain and oilseed production."
  },
  {
    id: 240,
    chapter: "Canada's Regions",
    question: "Which province has the largest Aboriginal population as a percentage?",
    options: [
      "British Columbia",
      "Manitoba",
      "Saskatchewan",
      "Quebec"
    ],
    correctAnswer: 1,
    explanation: "Manitoba has the largest Aboriginal population of any province, at over 15% of the population."
  },
  {
    id: 241,
    chapter: "Canada's Regions",
    question: "What is the second-longest river system in North America?",
    options: [
      "St. Lawrence River",
      "Mackenzie River",
      "Fraser River",
      "Churchill River"
    ],
    correctAnswer: 1,
    explanation: "The Mackenzie River at 4,200 km is the second-longest river system in North America after the Mississippi, draining 1.8 million square kilometres."
  },
  {
    id: 242,
    chapter: "Canada's Regions",
    question: "What was Iqaluit formerly called, and who was it named after?",
    options: [
      "Yellowknife, named after gold miners",
      "Frobisher Bay, named after explorer Martin Frobisher",
      "Whitehorse, named after rapids",
      "Churchill, named after the British PM"
    ],
    correctAnswer: 1,
    explanation: "Iqaluit was formerly called Frobisher Bay, named after Martin Frobisher, the English explorer who explored the Arctic for Queen Elizabeth I in 1576."
  },
  {
    id: 243,
    chapter: "Canada's Regions",
    question: "What is Yellowknife known as?",
    options: [
      "The oil capital of Canada",
      "The diamond capital of North America",
      "The wheat capital of the world",
      "The financial capital of Canada"
    ],
    correctAnswer: 1,
    explanation: "Yellowknife, capital of the Northwest Territories, is known as the 'diamond capital of North America' due to its diamond mining industry."
  },
  {
    id: 244,
    chapter: "Canada's Regions",
    question: "What is the most famous street intersection in Canada?",
    options: [
      "Bay and King in Toronto",
      "Portage and Main in Winnipeg",
      "Granville and Robson in Vancouver",
      "Ste-Catherine and Peel in Montreal"
    ],
    correctAnswer: 1,
    explanation: "Portage and Main in Winnipeg's Exchange District is considered the most famous street intersection in Canada."
  },
  {
    id: 245,
    chapter: "Canada's History",
    question: "When did Prince Edward Island first have a representative assembly?",
    options: [
      "1758",
      "1773",
      "1785",
      "1867"
    ],
    correctAnswer: 1,
    explanation: "Prince Edward Island established its first representative assembly in 1773, following Nova Scotia (1758) and before New Brunswick (1785)."
  }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS;
}
