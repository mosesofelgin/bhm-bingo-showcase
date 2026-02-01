export interface Hero {
  id: number;
  name: string;
  bioSummary: string;
  keyAccomplishment: string;
  era: string;
  category: string;
  bioFull: string;
  imageUrl?: string;
}

export const heroDatabase: Hero[] = [
  {
    id: 1,
    name: "Rosa Parks",
    bioSummary: "Civil rights activist and seamstress who sparked the Montgomery Bus Boycott.",
    keyAccomplishment: "Refused to give up her bus seat, igniting the civil rights movement",
    era: "1913-2005",
    category: "Civil Rights",
    bioFull: "Rosa Louise McCauley Parks was an American civil rights activist whom the U.S. Congress called 'the first lady of civil rights' and 'the mother of the freedom movement.' On December 1, 1955, in Montgomery, Alabama, Parks refused to give up her seat to a white passenger, which sparked the Montgomery Bus Boycott. This act of civil disobedience became a pivotal moment in the Civil Rights Movement, leading to the desegregation of public transportation.",
    imageUrl: "/images/heroes/rosa-parks.jpg"
  },
  {
    id: 2,
    name: "Martin Luther King Jr.",
    bioSummary: "Civil rights leader and Baptist minister who championed nonviolent resistance.",
    keyAccomplishment: "Delivered the 'I Have a Dream' speech and led the Civil Rights Movement",
    era: "1929-1968",
    category: "Civil Rights",
    bioFull: "Martin Luther King Jr. was an American Baptist minister and activist who became the most visible spokesperson and leader in the Civil Rights Movement from 1954 until his assassination in 1968. Inspired by Mahatma Gandhi's nonviolent resistance, King led numerous peaceful protests and delivered his iconic 'I Have a Dream' speech during the 1963 March on Washington for Jobs and Freedom.",
    imageUrl: "/images/heroes/martin-luther-king-jr.jpg"
  },
  {
    id: 3,
    name: "Harriet Tubman",
    bioSummary: "Escaped enslaved woman who led others to freedom via the Underground Railroad.",
    keyAccomplishment: "Conducted approximately 70 enslaved people to freedom",
    era: "1820-1913",
    category: "Civil Rights",
    bioFull: "Harriet Ross Tubman was an American abolitionist and political activist who was born into slavery. After escaping, she made some thirteen missions back to the South and guided approximately 70 enslaved people to freedom along the route of the Underground Railroad. She earned the nickname 'Moses' for leading her people to the promised land of freedom.",
    imageUrl: "/images/heroes/harriet-tubman.jpg"
  },
  {
    id: 4,
    name: "George Washington Carver",
    bioSummary: "Agricultural scientist and inventor who revolutionized Southern agriculture.",
    keyAccomplishment: "Developed hundreds of products from peanuts and sweet potatoes",
    era: "1864-1943",
    category: "Science & Medicine",
    bioFull: "George Washington Carver was an American scientist, botanist, and inventor who spent his career teaching at Tuskegee Institute. He developed hundreds of products from peanuts, sweet potatoes, and soybeans, including plastics, paints, and cosmetics. His work transformed Southern agriculture and demonstrated the potential of crop rotation.",
    imageUrl: "/images/heroes/george-washington-carver.jpg"
  },
  {
    id: 5,
    name: "Mae Jemison",
    bioSummary: "Astronaut and physician who was the first African American woman in space.",
    keyAccomplishment: "Flew on Space Shuttle Endeavour as a mission specialist",
    era: "1956-present",
    category: "Science & Medicine",
    bioFull: "Mae Carol Jemison is an American astronaut, physician, engineer, and entrepreneur. On September 12, 1992, she became the first African American woman to travel into space when she flew on the Space Shuttle Endeavour. She conducted experiments in life sciences and material sciences during the eight-day mission.",
    imageUrl: "/images/heroes/mae-jemison.jpg"
  },
  {
    id: 6,
    name: "Maya Angelou",
    bioSummary: "Poet, memoirist, and civil rights activist known for powerful storytelling.",
    keyAccomplishment: "Wrote 'I Know Why the Caged Bird Sings,' a memoir of resilience",
    era: "1928-2014",
    category: "Arts & Culture",
    bioFull: "Maya Angelou was an American poet, memoirist, and civil rights activist. Her autobiography 'I Know Why the Caged Bird Sings' tells the story of her childhood and is considered a classic of American literature. She was also a celebrated poet, dancer, actress, and professor, known for her powerful voice and inspiring messages.",
    imageUrl: "/images/heroes/maya-angelou.jpg"
  },
  {
    id: 7,
    name: "Oprah Winfrey",
    bioSummary: "Media mogul and philanthropist who became one of the most influential women.",
    keyAccomplishment: "Built a media empire and became a global cultural icon",
    era: "1954-present",
    category: "Business & Entrepreneurship",
    bioFull: "Oprah Gail Winfrey is an American media executive, actress, and talk show host. She is best known for her talk show 'The Oprah Winfrey Show,' which was the highest-rated television program of its kind in history. She has built a media empire and is one of the most influential and wealthiest women in the world.",
    imageUrl: "/images/heroes/oprah-winfrey.jpg"
  },
  {
    id: 8,
    name: "Barack Obama",
    bioSummary: "44th President of the United States and first African American president.",
    keyAccomplishment: "Elected as the first African American President of the United States",
    era: "1961-present",
    category: "Politics & Law",
    bioFull: "Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. He was the first African American to hold the office. Before his presidency, Obama was a civil rights attorney and constitutional law professor.",
    imageUrl: "/images/heroes/barack-obama.jpg"
  },
  {
    id: 9,
    name: "Michael Jordan",
    bioSummary: "Basketball legend widely considered the greatest player of all time.",
    keyAccomplishment: "Won 6 NBA championships and 5 MVP awards",
    era: "1963-present",
    category: "Sports",
    bioFull: "Michael Jeffrey Jordan is an American former professional basketball player and businessman. He played 15 seasons in the NBA for the Chicago Bulls, winning six championships. He is widely considered the greatest basketball player of all time and has become a global icon.",
    imageUrl: "/images/heroes/michael-jordan.jpg"
  },
  {
    id: 10,
    name: "Serena Williams",
    bioSummary: "Tennis champion with the most Grand Slam titles in the Open Era.",
    keyAccomplishment: "Won 23 Grand Slam singles titles",
    era: "1981-present",
    category: "Sports",
    bioFull: "Serena Jameka Williams is an American professional tennis player who is widely regarded as one of the greatest tennis players of all time. She has won 23 Grand Slam singles titles, more than any other player in the Open Era. She is known for her powerful serve and competitive spirit.",
    imageUrl: "/images/heroes/serena-williams.jpg"
  },
  {
    id: 11,
    name: "Malcolm X",
    bioSummary: "Civil rights leader and minister who advocated for Black nationalism.",
    keyAccomplishment: "Founded the Organization of Afro-American Unity",
    era: "1925-1965",
    category: "Civil Rights",
    bioFull: "Malcolm X was an American Muslim minister and human rights activist who was a prominent figure in the Nation of Islam. He advocated for Black nationalism and self-defense. After leaving the Nation of Islam, he founded the Organization of Afro-American Unity and became an influential voice for African American rights.",
    imageUrl: "/images/heroes/malcolm-x.jpg"
  },
  {
    id: 12,
    name: "Thurgood Marshall",
    bioSummary: "Supreme Court Justice and civil rights lawyer who argued Brown v. Board.",
    keyAccomplishment: "First African American Supreme Court Justice",
    era: "1908-1993",
    category: "Politics & Law",
    bioFull: "Thurgood Marshall was an American lawyer and civil rights activist who served as an Associate Justice of the Supreme Court of the United States. He was the first African American to serve on the Supreme Court. Before his appointment, he was a renowned civil rights lawyer who argued the landmark case Brown v. Board of Education.",
    imageUrl: "/images/heroes/thurgood-marshall.jpg"
  },
  {
    id: 13,
    name: "Frederick Douglass",
    bioSummary: "Abolitionist and orator who escaped slavery and became a powerful voice.",
    keyAccomplishment: "Wrote influential slave narrative and fought for abolition",
    era: "1818-1895",
    category: "Civil Rights",
    bioFull: "Frederick Douglass was an American social reformer, abolitionist, orator, writer, and statesman. Born into slavery, he escaped and became a leading figure in the abolitionist movement. His autobiography 'Narrative of the Life of Frederick Douglass, an American Slave' is considered one of the most powerful critiques of slavery.",
    imageUrl: "/images/heroes/frederick-douglass.jpg"
  },
  {
    id: 14,
    name: "Ida B. Wells",
    bioSummary: "Journalist and activist who investigated and documented lynching.",
    keyAccomplishment: "Pioneered investigative journalism exposing racial violence",
    era: "1862-1931",
    category: "Civil Rights",
    bioFull: "Ida Bell Wells-Barnett was an American investigative journalist, educator, and early leader in the civil rights movement. She documented and investigated lynching in the United States and was a vocal advocate for racial justice. Her work as an investigative journalist was groundbreaking and helped expose the horrors of racial violence.",
    imageUrl: "/images/heroes/ida-b-wells.jpg"
  },
  {
    id: 15,
    name: "Langston Hughes",
    bioSummary: "Poet and writer who was a central figure in the Harlem Renaissance.",
    keyAccomplishment: "Created influential poetry and literature celebrating Black culture",
    era: "1901-1967",
    category: "Arts & Culture",
    bioFull: "James Mercer Langston Hughes was an American poet, social activist, and novelist who was a central figure in the Harlem Renaissance. He is famous for his poetry, novels, and plays that celebrated African American culture and addressed themes of racial injustice. His work continues to influence American literature.",
    imageUrl: "/images/heroes/langston-hughes.jpg"
  },
  {
    id: 16,
    name: "Zora Neale Hurston",
    bioSummary: "Anthropologist and author known for celebrating African American folklore.",
    keyAccomplishment: "Wrote 'Their Eyes Were Watching God,' a masterpiece of American literature",
    era: "1891-1960",
    category: "Arts & Culture",
    bioFull: "Zora Neale Hurston was an American author, anthropologist, and filmmaker who was associated with the Harlem Renaissance. She is best known for her novel 'Their Eyes Were Watching God,' which is considered a classic of American literature. Her work celebrated African American culture and folklore.",
    imageUrl: "/images/heroes/zora-neale-hurston.jpg"
  },
  {
    id: 17,
    name: "Duke Ellington",
    bioSummary: "Jazz composer and bandleader who revolutionized American music.",
    keyAccomplishment: "Composed thousands of works and pioneered jazz music",
    era: "1899-1974",
    category: "Arts & Culture",
    bioFull: "Edward Kennedy 'Duke' Ellington was an American composer, pianist, and bandleader who is widely regarded as one of the most important figures in jazz music. He composed thousands of works and led his orchestra for nearly 50 years. His music had a profound influence on American culture and music.",
    imageUrl: "/images/heroes/duke-ellington.jpg"
  },
  {
    id: 18,
    name: "Aretha Franklin",
    bioSummary: "Singer and songwriter known as the 'Queen of Soul.'",
    keyAccomplishment: "Won 18 Grammy Awards and became an icon of soul music",
    era: "1942-2018",
    category: "Arts & Culture",
    bioFull: "Aretha Louise Franklin was an American singer, songwriter, and pianist who was called the 'Queen of Soul.' She is one of the most influential and respected recording artists of all time. Her powerful voice and emotional delivery made her an icon of soul, R&B, and gospel music.",
    imageUrl: "/images/heroes/aretha-franklin.jpg"
  },
  {
    id: 19,
    name: "Katherine Johnson",
    bioSummary: "Mathematician whose calculations were crucial for NASA space missions.",
    keyAccomplishment: "Calculated trajectories for NASA's space program",
    era: "1918-2020",
    category: "Science & Medicine",
    bioFull: "Katherine Coleman Goble Johnson was an American mathematician who calculated trajectories for NASA's space program. Her precise mathematical work was critical to the success of U.S. spaceflights, including the Apollo missions. She was recognized late in life for her groundbreaking contributions to science and space exploration.",
    imageUrl: "/images/heroes/katherine-johnson.jpg"
  },
  {
    id: 20,
    name: "Jesse Owens",
    bioSummary: "Track and field athlete who won four gold medals at the 1936 Olympics.",
    keyAccomplishment: "Won four gold medals at the Berlin Olympics, defying Nazi ideology",
    era: "1913-1980",
    category: "Sports",
    bioFull: "James Cleveland 'Jesse' Owens was an American track and field athlete who won four gold medals at the 1936 Berlin Olympics. His victories challenged the Nazi ideology of racial superiority. Owens is considered one of the greatest athletes of all time and a pioneer in breaking racial barriers in sports.",
    imageUrl: "/images/heroes/jesse-owens.jpg"
  },
  {
    id: 21,
    name: "John Lewis",
    bioSummary: "Civil rights leader and congressman who fought for voting rights.",
    keyAccomplishment: "Led the Freedom Rides and March on Washington",
    era: "1940-2020",
    category: "Civil Rights",
    bioFull: "John Robert Lewis was an American civil rights leader and politician who served in the U.S. House of Representatives. He was a key figure in the Civil Rights Movement, known for his nonviolent activism and moral courage. He participated in the Freedom Rides, the March on Washington, and the Selma to Montgomery marches.",
    imageUrl: "/images/heroes/john-lewis.jpg"
  },
  {
    id: 22,
    name: "Shirley Chisholm",
    bioSummary: "Congresswoman and presidential candidate who broke barriers.",
    keyAccomplishment: "First Black woman elected to Congress and ran for president",
    era: "1924-2005",
    category: "Politics & Law",
    bioFull: "Shirley Anita St. Hill Chisholm was an American politician, educator, and author who was the first Black woman elected to the U.S. House of Representatives. In 1972, she became the first Black candidate to seek the Democratic Party's nomination for president. She was a champion of civil rights and women's rights.",
    imageUrl: "/images/heroes/shirley-chisholm.jpg"
  },
  {
    id: 23,
    name: "Reverend Jesse Jackson",
    bioSummary: "Civil rights activist and minister who fought for social justice.",
    keyAccomplishment: "Founded Rainbow PUSH Coalition and ran for president",
    era: "1941-present",
    category: "Faith & Leadership",
    bioFull: "Jesse Louis Jackson Sr. is an American civil rights activist, Baptist minister, and politician. He was a key figure in the Civil Rights Movement and has been a prominent voice for social justice. He founded the Rainbow PUSH Coalition and ran for president in 1984 and 1988.",
    imageUrl: "/images/heroes/reverend-jesse-jackson.jpg"
  },
  {
    id: 24,
    name: "Haile Selassie I",
    bioSummary: "Ethiopian emperor and spiritual leader revered in Rastafarian faith.",
    keyAccomplishment: "Led Ethiopia and became a symbol of African independence",
    era: "1892-1975",
    category: "Faith & Leadership",
    bioFull: "Haile Selassie I was the Emperor of Ethiopia from 1930 to 1974. He is revered as a spiritual leader in the Rastafarian faith. He led Ethiopia during the Italian invasion and was a prominent voice for African independence and unity at the League of Nations.",
    imageUrl: "/images/heroes/haile-selassie-i.jpg"
  },
  {
    id: 25,
    name: "Stevie Wonder",
    bioSummary: "Musician and producer who overcame blindness to become a legend.",
    keyAccomplishment: "Won 25 Grammy Awards and created timeless music",
    era: "1950-present",
    category: "Arts & Culture",
    bioFull: "Stevland Morris, known professionally as Stevie Wonder, is an American singer, songwriter, and musician who is blind. He is one of the most influential musicians of the 20th century, known for his innovative use of synthesizers and his socially conscious lyrics. He has won 25 Grammy Awards.",
    imageUrl: "/images/heroes/stevie-wonder.jpg"
  },
  {
    id: 26,
    name: "Toni Morrison",
    bioSummary: "Nobel Prize-winning author who explored African American experiences.",
    keyAccomplishment: "Won the Nobel Prize in Literature",
    era: "1931-2019",
    category: "Arts & Culture",
    bioFull: "Toni Morrison was an American novelist, essayist, and professor who won the Nobel Prize in Literature in 1993. She is best known for her novels exploring African American identity and history. Her works include 'Song of Solomon,' 'Beloved,' and 'Sula,' which are considered classics of American literature.",
    imageUrl: "/images/heroes/toni-morrison.jpg"
  },
  {
    id: 27,
    name: "Jackie Robinson",
    bioSummary: "Baseball player who broke the color barrier in Major League Baseball.",
    keyAccomplishment: "First African American to play in Major League Baseball",
    era: "1919-1972",
    category: "Sports",
    bioFull: "Jack Roosevelt Robinson was an American professional baseball player who became the first African American to play in Major League Baseball in the modern era. He broke the color barrier in 1947 and became a civil rights icon. He was inducted into the Baseball Hall of Fame in 1962.",
    imageUrl: "/images/heroes/jackie-robinson.jpg"
  },
  {
    id: 28,
    name: "Ella Baker",
    bioSummary: "Grassroots organizer and civil rights activist who empowered communities.",
    keyAccomplishment: "Organized the Student Nonviolent Coordinating Committee",
    era: "1903-1986",
    category: "Civil Rights",
    bioFull: "Ella Josephine Baker was an American civil rights activist and organizer. She played a crucial role in organizing grassroots movements and was instrumental in founding the Student Nonviolent Coordinating Committee (SNCC). She believed in empowering ordinary people to lead social change.",
    imageUrl: "/images/heroes/ella-baker.jpg"
  },
  {
    id: 29,
    name: "Henrietta Lacks",
    bioSummary: "Woman whose cells revolutionized medical research without her knowledge.",
    keyAccomplishment: "Her cells (HeLa) became fundamental to medical research",
    era: "1920-1951",
    category: "Science & Medicine",
    bioFull: "Henrietta Pearce Lacks was an African American woman whose cancer cells were used in countless medical research projects without her knowledge or consent. Her cells, known as HeLa cells, became one of the most important tools in medical research, leading to breakthroughs in vaccines and treatments. Her story raised important questions about medical ethics and informed consent.",
    imageUrl: "/images/heroes/henrietta-lacks.jpg"
  },
  {
    id: 30,
    name: "W.E.B. Du Bois",
    bioSummary: "Sociologist, historian, and civil rights activist who co-founded the NAACP.",
    keyAccomplishment: "Co-founded the NAACP and wrote 'The Souls of Black Folk'",
    era: "1868-1963",
    category: "Civil Rights",
    bioFull: "William Edward Burghardt Du Bois was an American sociologist, historian, and civil rights activist. He was one of the founders of the NAACP and a leading voice for African American rights. His book 'The Souls of Black Folk' is a seminal work in African American literature and sociology.",
    imageUrl: "/images/heroes/w.e.b.-du-bois.jpg"
  },
];
