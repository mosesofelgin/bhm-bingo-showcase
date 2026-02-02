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
  // Additional 45 heroes (31-75)
  {
    id: 31,
    name: "Sojourner Truth",
    bioSummary: "Abolitionist and women's rights activist who delivered the famous 'Ain't I a Woman?' speech.",
    keyAccomplishment: "Championed abolition and women's suffrage with powerful oratory",
    era: "1797-1883",
    category: "Civil Rights",
    bioFull: "Sojourner Truth was an African American abolitionist and women's rights activist born into slavery. After escaping with her infant daughter in 1826, she became a powerful speaker for abolition and women's rights. Her famous 'Ain't I a Woman?' speech, delivered at the 1851 Women's Rights Convention, remains one of the most powerful statements on intersectionality and equality.",
    imageUrl: "/images/heroes/sojourner-truth.jpg"
  },
  {
    id: 32,
    name: "Ralph Bunche",
    bioSummary: "Diplomat and political scientist who won the Nobel Peace Prize for mediating Middle East conflicts.",
    keyAccomplishment: "First African American to win the Nobel Peace Prize in 1950",
    era: "1903-1971",
    category: "Civil Rights",
    bioFull: "Ralph Johnson Bunche was an American political scientist, diplomat, and leading scholar who received the Nobel Peace Prize in 1950 for his mediation in Palestine. He was the first African American and first person of color to receive the award. Bunche served as Under-Secretary-General of the United Nations and was a key figure in the civil rights movement.",
    imageUrl: "/images/heroes/ralph-bunche.jpg"
  },
  {
    id: 33,
    name: "Mary McLeod Bethune",
    bioSummary: "Educator and civil rights leader who founded Bethune-Cookman University.",
    keyAccomplishment: "Founded a college and advised four U.S. presidents on minority affairs",
    era: "1875-1955",
    category: "Civil Rights",
    bioFull: "Mary Jane McLeod Bethune was an American educator, stateswoman, philanthropist, humanitarian, and civil rights activist. She founded the National Council of Negro Women in 1935, established the Bethune-Cookman University, and served as an advisor to President Franklin D. Roosevelt, becoming one of the most influential African American women of her time.",
    imageUrl: "/images/heroes/mary-mcleod-bethune.jpeg"
  },
  {
    id: 34,
    name: "Medgar Evers",
    bioSummary: "Civil rights activist and NAACP field secretary assassinated for his work.",
    keyAccomplishment: "Led voter registration drives and boycotts in Mississippi",
    era: "1925-1963",
    category: "Civil Rights",
    bioFull: "Medgar Wiley Evers was an American civil rights activist and NAACP field secretary in Mississippi who was assassinated by a white supremacist in 1963. He worked to overturn segregation at the University of Mississippi, organized voter-registration efforts, and led boycotts. His murder galvanized the civil rights movement and his killer was finally convicted in 1994.",
    imageUrl: "/images/heroes/medgar-evers.jpg"
  },
  {
    id: 35,
    name: "Fannie Lou Hamer",
    bioSummary: "Voting rights activist and civil rights leader who fought for Black political power.",
    keyAccomplishment: "Co-founded the Mississippi Freedom Democratic Party",
    era: "1917-1977",
    category: "Civil Rights",
    bioFull: "Fannie Lou Hamer was an American voting and women's rights activist, community organizer, and a leader in the civil rights movement. She was instrumental in organizing Mississippi Freedom Summer for the Student Nonviolent Coordinating Committee (SNCC) and co-founded the Mississippi Freedom Democratic Party. Her powerful testimony at the 1964 Democratic National Convention brought national attention to the plight of African Americans in the South.",
    imageUrl: "/images/heroes/fannie-lou-hamer.jpg"
  },
  {
    id: 36,
    name: "Bayard Rustin",
    bioSummary: "Civil rights organizer who was the chief architect of the 1963 March on Washington.",
    keyAccomplishment: "Organized the March on Washington for Jobs and Freedom",
    era: "1912-1987",
    category: "Civil Rights",
    bioFull: "Bayard Rustin was an American leader in social movements for civil rights, socialism, nonviolence, and gay rights. He was the chief organizer of the 1963 March on Washington for Jobs and Freedom, which is credited with helping to pass the Civil Rights Act of 1964. Despite facing discrimination for his sexuality, Rustin remained a key strategist and activist throughout his life.",
    imageUrl: "/images/heroes/bayard-rustin.jpg"
  },
  {
    id: 37,
    name: "A. Philip Randolph",
    bioSummary: "Labor leader who organized the Brotherhood of Sleeping Car Porters.",
    keyAccomplishment: "Led the first predominantly Black labor union",
    era: "1889-1979",
    category: "Civil Rights",
    bioFull: "Asa Philip Randolph was a leader in the civil rights movement, the American labor movement, and socialist political parties. He organized and led the Brotherhood of Sleeping Car Porters, the first predominantly African American labor union. His threat of a march on Washington in 1941 pressured President Franklin D. Roosevelt to issue Executive Order 8802, banning discrimination in defense industries.",
    imageUrl: "/images/heroes/a-philip-randolph.png"
  },
  {
    id: 38,
    name: "Dorothy Height",
    bioSummary: "Civil rights and women's rights activist who led the National Council of Negro Women.",
    keyAccomplishment: "Championed both civil rights and women's equality for over 60 years",
    era: "1912-2010",
    category: "Civil Rights",
    bioFull: "Dorothy Irene Height was an African American civil rights and women's rights activist. She focused on the issues of African American women, including unemployment, illiteracy, and voter awareness. Height was the president of the National Council of Negro Women for 40 years and received the Presidential Medal of Freedom in 1994 and the Congressional Gold Medal in 2004.",
    imageUrl: "/images/heroes/dorothy-height.jpg"
  },
  {
    id: 39,
    name: "James Farmer",
    bioSummary: "Civil rights activist who co-founded the Congress of Racial Equality (CORE).",
    keyAccomplishment: "Organized the Freedom Rides to challenge segregation",
    era: "1920-1999",
    category: "Civil Rights",
    bioFull: "James Leonard Farmer Jr. was an American civil rights activist and leader in the Civil Rights Movement who pushed for nonviolent resistance. He co-founded the Congress of Racial Equality (CORE) in 1942 and served as its national director from 1961 to 1966. Farmer organized the Freedom Rides, which challenged segregation in interstate transportation.",
    imageUrl: "/images/heroes/james-farmer.jpg"
  },
  {
    id: 40,
    name: "Stokely Carmichael",
    bioSummary: "Civil rights activist who popularized the term 'Black Power.'",
    keyAccomplishment: "Led the Student Nonviolent Coordinating Committee and promoted Black Power",
    era: "1941-1998",
    category: "Civil Rights",
    bioFull: "Stokely Carmichael, later known as Kwame Ture, was a prominent organizer in the civil rights movement and the global Pan-African movement. He grew up in the United States and became an activist while attending Howard University. He popularized the term 'Black Power' and was one of the original Freedom Riders, challenging segregation in the South.",
    imageUrl: "/images/heroes/stokely-carmichael.jpg"
  },
  {
    id: 41,
    name: "Booker T. Washington",
    bioSummary: "Educator and author who founded Tuskegee Institute.",
    keyAccomplishment: "Built Tuskegee into a leading institution for Black education",
    era: "1856-1915",
    category: "Civil Rights",
    bioFull: "Booker Taliaferro Washington was an American educator, author, orator, and adviser to several presidents. He was the dominant leader in the African American community from 1890 to 1915. Washington founded Tuskegee Normal and Industrial Institute (now Tuskegee University) in Alabama, which grew immensely and focused on training African Americans in agricultural pursuits.",
    imageUrl: "/images/heroes/booker-t-washington.jpg"
  },
  {
    id: 42,
    name: "Marcus Garvey",
    bioSummary: "Political activist who founded the Universal Negro Improvement Association.",
    keyAccomplishment: "Led the largest mass movement in African American history",
    era: "1887-1940",
    category: "Civil Rights",
    bioFull: "Marcus Mosiah Garvey Jr. was a Jamaican political activist, publisher, journalist, entrepreneur, and orator. He founded the Universal Negro Improvement Association and African Communities League (UNIA-ACL), through which he declared himself Provisional President of Africa. His Black nationalism and Pan-Africanism inspired movements worldwide and influenced leaders like Malcolm X and Martin Luther King Jr.",
    imageUrl: "/images/heroes/marcus-garvey.jpg"
  },
  {
    id: 43,
    name: "Coretta Scott King",
    bioSummary: "Civil rights activist and author, wife of Martin Luther King Jr.",
    keyAccomplishment: "Continued civil rights work after MLK's assassination, established King Center",
    era: "1927-2006",
    category: "Civil Rights",
    bioFull: "Coretta Scott King was an American author, activist, and civil rights leader. The widow of Martin Luther King Jr., she was an active advocate for African American equality and played a prominent role in the civil rights movement. She founded the King Center in Atlanta and worked to make her husband's birthday a federal holiday, which was achieved in 1986.",
    imageUrl: "/images/heroes/coretta-scott-king.jpg"
  },
  {
    id: 44,
    name: "Benjamin Banneker",
    bioSummary: "Self-taught mathematician, astronomer, and surveyor who helped design Washington D.C.",
    keyAccomplishment: "Created almanacs and helped survey the nation's capital",
    era: "1731-1806",
    category: "Science & Medicine",
    bioFull: "Benjamin Banneker was a free African American almanac author, surveyor, landowner, and farmer who had knowledge of mathematics and natural history. In 1791, he assisted in surveying the borders of the original District of Columbia. Banneker's Pennsylvania, Delaware, Maryland, and Virginia Almanac and Ephemeris was published annually from 1792 to 1797.",
    imageUrl: "/images/heroes/benjamin-banneker.jpg"
  },
  {
    id: 45,
    name: "Charles Drew",
    bioSummary: "Surgeon and medical researcher who pioneered blood plasma preservation.",
    keyAccomplishment: "Developed large-scale blood banks during World War II",
    era: "1904-1950",
    category: "Science & Medicine",
    bioFull: "Charles Richard Drew was an American surgeon and medical researcher who improved techniques for blood storage and organized the first large-scale blood bank in the United States. He protested against the practice of racial segregation in blood donation, as it lacked scientific foundation. His research and organizational skills were pivotal in saving thousands of lives during World War II.",
    imageUrl: "/images/heroes/charles-drew.jpg"
  },
  {
    id: 46,
    name: "Percy Julian",
    bioSummary: "Chemist who synthesized medicinal drugs from plants.",
    keyAccomplishment: "Pioneered the synthesis of cortisone and birth control pills",
    era: "1899-1975",
    category: "Science & Medicine",
    bioFull: "Percy Lavon Julian was an American research chemist and a pioneer in the chemical synthesis of medicinal drugs from plants. He was the first to synthesize physostigmine and was a pioneer in the industrial large-scale chemical synthesis of the human hormones progesterone and testosterone from plant sterols. His work laid the groundwork for the steroid drug industry.",
    imageUrl: "/images/heroes/percy-julian.jpg"
  },
  {
    id: 47,
    name: "Daniel Hale Williams",
    bioSummary: "Surgeon who performed the first successful open-heart surgery.",
    keyAccomplishment: "Pioneered cardiac surgery and founded Provident Hospital",
    era: "1856-1931",
    category: "Science & Medicine",
    bioFull: "Daniel Hale Williams was an American general surgeon who performed the first documented, successful pericardium surgery in the United States to repair a wound. He founded Provident Hospital in 1891, the first non-segregated hospital in the United States with an interracial staff, and also founded an associated nursing school for African Americans.",
    imageUrl: "/images/heroes/daniel-hale-williams.jpg"
  },
  {
    id: 48,
    name: "Garrett Morgan",
    bioSummary: "Inventor who created the traffic signal and gas mask.",
    keyAccomplishment: "Invented the three-position traffic signal and safety hood",
    era: "1877-1963",
    category: "Science & Medicine",
    bioFull: "Garrett Augustus Morgan was an African American inventor, businessman, and community leader. His most notable inventions were a three-position traffic signal and a smoke hood (a predecessor to the gas mask). He used his smoke hood to rescue workers trapped in a tunnel explosion beneath Lake Erie, demonstrating its effectiveness and saving many lives.",
    imageUrl: "/images/heroes/garrett-morgan.jpg"
  },
  {
    id: 49,
    name: "Guion Bluford",
    bioSummary: "Astronaut and engineer who was the first African American in space.",
    keyAccomplishment: "Flew on Space Shuttle Challenger in 1983",
    era: "1942-present",
    category: "Science & Medicine",
    bioFull: "Guion Stewart Bluford Jr. is an American aerospace engineer, retired U.S. Air Force officer and fighter pilot, and former NASA astronaut. He became the first African American to travel to space when he flew aboard the Space Shuttle Challenger in August 1983. Bluford completed four space shuttle missions and logged over 688 hours in space.",
    imageUrl: "/images/heroes/guion-bluford.jpg"
  },
  {
    id: 50,
    name: "Neil deGrasse Tyson",
    bioSummary: "Astrophysicist and science communicator who popularized astronomy.",
    keyAccomplishment: "Director of Hayden Planetarium and host of Cosmos",
    era: "1958-present",
    category: "Science & Medicine",
    bioFull: "Neil deGrasse Tyson is an American astrophysicist, author, and science communicator. He is the Frederick P. Rose Director of the Hayden Planetarium and has hosted numerous science programs including Cosmos: A Spacetime Odyssey. Tyson has played a crucial role in popularizing science and making it accessible to the general public through his engaging presentations and media appearances.",
    imageUrl: "/images/heroes/neil-degrasse-tyson.jpg"
  },
  {
    id: 51,
    name: "Ernest Just",
    bioSummary: "Pioneering biologist who studied cell development and fertilization.",
    keyAccomplishment: "Advanced understanding of cell biology and marine organisms",
    era: "1883-1941",
    category: "Science & Medicine",
    bioFull: "Ernest Everett Just was a pioneering African American biologist, academic, and science writer. His primary legacy is his recognition of the fundamental role of the cell surface in the development of organisms. Despite racial barriers, Just became an internationally recognized authority on cell development and fertilization, publishing over 50 scientific papers and two major books.",
    imageUrl: "/images/heroes/ernest-just.jpg"
  },
  {
    id: 52,
    name: "James Baldwin",
    bioSummary: "Writer and social critic who explored racial and sexual identity in America.",
    keyAccomplishment: "Wrote seminal works like 'The Fire Next Time' and 'Giovanni's Room'",
    era: "1924-1987",
    category: "Arts & Culture",
    bioFull: "James Arthur Baldwin was an American novelist, playwright, essayist, poet, and activist. His essays explore the complexities of racial, sexual, and class distinctions in Western society, most notably in mid-20th-century America. Baldwin's work, including 'Go Tell It on the Mountain,' 'Notes of a Native Son,' and 'The Fire Next Time,' influenced the civil rights movement and continues to resonate today.",
    imageUrl: "/images/heroes/james-baldwin.jpg"
  },
  {
    id: 53,
    name: "Richard Wright",
    bioSummary: "Author whose novels exposed the harsh realities of racism in America.",
    keyAccomplishment: "Wrote 'Native Son' and 'Black Boy,' landmark works of American literature",
    era: "1908-1960",
    category: "Arts & Culture",
    bioFull: "Richard Nathaniel Wright was an American author of novels, short stories, poems, and non-fiction. His work helped change race relations in the United States in the mid-20th century. His novel 'Native Son' (1940) was a bestseller and the first Book-of-the-Month Club selection by an African American author. His autobiography 'Black Boy' (1945) describes his childhood and young adulthood in the South.",
    imageUrl: "/images/heroes/richard-wright.jpg"
  },
  {
    id: 54,
    name: "Gwendolyn Brooks",
    bioSummary: "Poet who was the first African American to win the Pulitzer Prize for Poetry.",
    keyAccomplishment: "Won Pulitzer Prize for 'Annie Allen' in 1950",
    era: "1917-2000",
    category: "Arts & Culture",
    bioFull: "Gwendolyn Elizabeth Brooks was an American poet, author, and teacher. Her work often dealt with the personal celebrations and struggles of ordinary people in her community. She won the Pulitzer Prize for Poetry in 1950 for 'Annie Allen,' making her the first African American to receive the prize. Brooks was appointed Poet Laureate of Illinois in 1968 and Consultant in Poetry to the Library of Congress in 1985.",
    imageUrl: "/images/heroes/gwendolyn-brooks.jpg"
  },
  {
    id: 55,
    name: "John Coltrane",
    bioSummary: "Jazz saxophonist and composer who revolutionized modern jazz.",
    keyAccomplishment: "Created groundbreaking albums like 'A Love Supreme'",
    era: "1926-1967",
    category: "Arts & Culture",
    bioFull: "John William Coltrane was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz. His album 'A Love Supreme' is considered one of the greatest jazz recordings of all time. Coltrane's influence on jazz is immeasurable and continues to inspire musicians today.",
    imageUrl: "/images/heroes/john-coltrane.jpg"
  },
  {
    id: 56,
    name: "Marian Anderson",
    bioSummary: "Opera singer who broke racial barriers in classical music.",
    keyAccomplishment: "First African American to perform at the Metropolitan Opera",
    era: "1897-1993",
    category: "Arts & Culture",
    bioFull: "Marian Anderson was an American contralto. She performed a wide range of music, from opera to spirituals. Anderson became an important figure in the struggle for African American artists to overcome racial prejudice. In 1939, after being denied the use of Constitution Hall by the DAR, she performed a historic concert at the Lincoln Memorial. In 1955, she became the first African American to perform at the Metropolitan Opera.",
    imageUrl: "/images/heroes/marian-anderson.jpg"
  },
  {
    id: 57,
    name: "Billie Holiday",
    bioSummary: "Jazz singer known for her unique vocal style and emotional depth.",
    keyAccomplishment: "Pioneered jazz vocal style and recorded 'Strange Fruit'",
    era: "1915-1959",
    category: "Arts & Culture",
    bioFull: "Billie Holiday, born Eleanora Fagan, was an American jazz and swing music singer. Nicknamed 'Lady Day,' she had a seminal influence on jazz music and pop singing. Her vocal style, strongly inspired by jazz instrumentalists, pioneered a new way of manipulating phrasing and tempo. Her song 'Strange Fruit,' about lynching, became an anthem of the civil rights movement.",
    imageUrl: "/images/heroes/billie-holiday.jpg"
  },
  {
    id: 58,
    name: "Louis Armstrong",
    bioSummary: "Jazz trumpeter and singer who became one of the most influential figures in jazz.",
    keyAccomplishment: "Revolutionized jazz with his virtuoso trumpet playing and scat singing",
    era: "1901-1971",
    category: "Arts & Culture",
    bioFull: "Louis Daniel Armstrong, nicknamed 'Satchmo' or 'Pops,' was an American trumpeter, composer, vocalist, and actor who was among the most influential figures in jazz. His career spanned five decades, and he is known for songs like 'What a Wonderful World,' 'Hello, Dolly!,' and 'La Vie En Rose.' Armstrong's charismatic stage presence and innovative musical ideas helped spread jazz around the world.",
    imageUrl: "/images/heroes/louis-armstrong.jpg"
  },
  {
    id: 59,
    name: "Ella Fitzgerald",
    bioSummary: "Jazz singer known as the 'First Lady of Song' for her pure tone and impeccable diction.",
    keyAccomplishment: "Won 13 Grammy Awards and sold over 40 million albums",
    era: "1917-1996",
    category: "Arts & Culture",
    bioFull: "Ella Jane Fitzgerald was an American jazz singer, sometimes referred to as the 'First Lady of Song,' 'Queen of Jazz,' and 'Lady Ella.' She was noted for her purity of tone, impeccable diction, phrasing, timing, intonation, and a 'horn-like' improvisational ability, particularly in her scat singing. Fitzgerald won 13 Grammy Awards and was awarded the National Medal of Arts by Ronald Reagan.",
    imageUrl: "/images/heroes/ella-fitzgerald.jpg"
  },
  {
    id: 60,
    name: "Nina Simone",
    bioSummary: "Singer, pianist, and civil rights activist known for her powerful voice and activism.",
    keyAccomplishment: "Created music that became anthems of the civil rights movement",
    era: "1933-2003",
    category: "Arts & Culture",
    bioFull: "Nina Simone, born Eunice Kathleen Waymon, was an American singer, songwriter, pianist, arranger, and civil rights activist. Her music spanned styles including classical, jazz, blues, folk, R&B, gospel, and pop. Songs like 'Mississippi Goddam,' 'To Be Young, Gifted and Black,' and 'Four Women' became anthems of the civil rights movement. Simone's powerful voice and uncompromising stance on racial justice made her an icon.",
    imageUrl: "/images/heroes/nina-simone.jpg"
  },
  {
    id: 61,
    name: "James Brown",
    bioSummary: "Singer and bandleader known as the 'Godfather of Soul.'",
    keyAccomplishment: "Pioneered funk music and influenced generations of musicians",
    era: "1933-2006",
    category: "Arts & Culture",
    bioFull: "James Joseph Brown was an American singer, dancer, musician, record producer, and bandleader. A progenitor of funk music and a major figure of 20th-century music, he is often referred to as the 'Godfather of Soul' and 'Soul Brother No. 1.' Brown's music emphasized rhythm and groove, and his energetic performances and innovative musical style influenced the development of several music genres.",
    imageUrl: "/images/heroes/james-brown.jpg"
  },
  {
    id: 62,
    name: "Jacob Lawrence",
    bioSummary: "Painter known for his dynamic cubism and portrayals of African American life.",
    keyAccomplishment: "Created 'The Migration Series,' depicting the Great Migration",
    era: "1917-2000",
    category: "Arts & Culture",
    bioFull: "Jacob Armstead Lawrence was an American painter known for his portrayal of African American historical subjects and contemporary life. His 'Migration Series' (1940-41), depicting the Great Migration of African Americans from the rural South to the urban North, brought him national recognition at age 23. Lawrence's dynamic, modernist style and narrative approach made him one of the most celebrated American artists of the 20th century.",
    imageUrl: "/images/heroes/jacob-lawrence.jpg"
  },
  {
    id: 63,
    name: "Jean-Michel Basquiat",
    bioSummary: "Neo-expressionist artist who rose from street art to international acclaim.",
    keyAccomplishment: "Became one of the youngest artists to exhibit at major museums",
    era: "1960-1988",
    category: "Arts & Culture",
    bioFull: "Jean-Michel Basquiat was an American artist of Haitian and Puerto Rican descent. He first achieved fame as part of the graffiti duo SAMO in New York City. His art focused on dichotomies such as wealth versus poverty, integration versus segregation, and inner versus outer experience. Basquiat's work is notable for its commentary on power structures and systemic racism, and his paintings now sell for millions of dollars.",
    imageUrl: "/images/heroes/jean-michel-basquiat.jpg"
  },
  {
    id: 64,
    name: "Madame C. J. Walker",
    bioSummary: "Entrepreneur and philanthropist who became America's first female self-made millionaire.",
    keyAccomplishment: "Built a beauty empire and became the wealthiest self-made woman in America",
    era: "1867-1919",
    category: "Business & Entrepreneurship",
    bioFull: "Madam C. J. Walker, born Sarah Breedlove, was an African American entrepreneur, philanthropist, and political and social activist. She is recorded as the first female self-made millionaire in America in the Guinness Book of World Records. Walker made her fortune by developing and marketing a line of cosmetics and hair care products for Black women through her company, Madam C. J. Walker Manufacturing Company.",
    imageUrl: "/images/heroes/madame-cj-walker.jpg"
  },
  {
    id: 65,
    name: "Reginald F. Lewis",
    bioSummary: "Businessman and philanthropist who became one of the richest African Americans.",
    keyAccomplishment: "Created TLC Beatrice International, a billion-dollar company",
    era: "1942-1993",
    category: "Business & Entrepreneurship",
    bioFull: "Reginald Francis Lewis was an American businessman who was one of the richest African American men in the 1980s. He was the first African American to build a billion-dollar company, TLC Beatrice International Holdings Inc. Lewis was also a generous philanthropist, donating millions to educational institutions. His success story inspired a generation of African American entrepreneurs.",
    imageUrl: "/images/heroes/reginald-lewis.jpg"
  },
  {
    id: 66,
    name: "Robert F. Smith",
    bioSummary: "Investor and philanthropist who became one of the wealthiest African Americans.",
    keyAccomplishment: "Founded Vista Equity Partners and paid off Morehouse College student debt",
    era: "1962-present",
    category: "Business & Entrepreneurship",
    bioFull: "Robert Frederick Smith is an American businessman, investor, and philanthropist. He is the founder, chairman, and CEO of Vista Equity Partners, an investment firm focused on software, data, and technology-enabled businesses. In 2019, Smith made headlines by announcing he would pay off the student loan debt of the entire Morehouse College graduating class, totaling about $34 million.",
    imageUrl: "/images/heroes/robert-f-smith.jpg"
  },
  {
    id: 67,
    name: "Hiram Revels",
    bioSummary: "First African American to serve in the U.S. Senate.",
    keyAccomplishment: "Broke the color barrier in the U.S. Senate in 1870",
    era: "1827-1901",
    category: "Politics & Law",
    bioFull: "Hiram Rhodes Revels was an American Republican politician, minister in the African Methodist Episcopal Church, and college administrator. He was the first African American to serve in the United States Senate, representing Mississippi in 1870 and 1871 during the Reconstruction Era. Revels was a moderate who worked to restore voting rights and civil rights to former Confederates while also advocating for African American equality.",
    imageUrl: "/images/heroes/hiram-revels.jpg"
  },
  {
    id: 68,
    name: "Colin Powell",
    bioSummary: "Four-star general who became the first African American Secretary of State.",
    keyAccomplishment: "Served as Chairman of the Joint Chiefs of Staff and Secretary of State",
    era: "1937-2021",
    category: "Politics & Law",
    bioFull: "Colin Luther Powell was an American politician, statesman, diplomat, and United States Army officer who served as the 65th United States Secretary of State from 2001 to 2005. He was the first African American Secretary of State. Prior to this, Powell served as the 12th Chairman of the Joint Chiefs of Staff, making him the highest-ranking African American military officer in U.S. history at the time.",
    imageUrl: "/images/heroes/colin-powell.jpg"
  },
  {
    id: 69,
    name: "Kamala Harris",
    bioSummary: "First female, first Black, and first South Asian Vice President of the United States.",
    keyAccomplishment: "Broke multiple barriers as Vice President",
    era: "1964-present",
    category: "Politics & Law",
    bioFull: "Kamala Devi Harris is an American politician and attorney serving as the 49th vice president of the United States since 2021. She is the first female vice president, the highest-ranking female official in U.S. history, and the first African American and first Asian American vice president. Before her vice presidency, Harris served as a U.S. senator from California and as the state's attorney general.",
    imageUrl: "/images/heroes/kamala-harris.jpg"
  },
  {
    id: 70,
    name: "Condoleezza Rice",
    bioSummary: "Political scientist and diplomat who served as Secretary of State.",
    keyAccomplishment: "First African American woman to serve as Secretary of State",
    era: "1954-present",
    category: "Politics & Law",
    bioFull: "Condoleezza Rice is an American diplomat and political scientist who served as the 66th United States Secretary of State from 2005 to 2009. She was the first African American woman to hold this position. Prior to this, Rice served as the 19th U.S. National Security Advisor. She is currently the director of the Hoover Institution at Stanford University.",
    imageUrl: "/images/heroes/condoleezza-rice.jpg"
  },
  {
    id: 71,
    name: "Adam Clayton Powell Jr.",
    bioSummary: "Congressman and civil rights leader who fought for social justice.",
    keyAccomplishment: "First African American from New York elected to Congress",
    era: "1908-1972",
    category: "Politics & Law",
    bioFull: "Adam Clayton Powell Jr. was an American Baptist pastor and politician who represented the Harlem neighborhood of New York City in the United States House of Representatives from 1945 to 1971. He was the first African American from New York elected to Congress. Powell was a powerful advocate for civil rights legislation and used his position to fight discrimination and promote social justice.",
    imageUrl: "/images/heroes/adam-clayton-powell-jr.jpg"
  },
  {
    id: 72,
    name: "Joe Louis",
    bioSummary: "Boxing champion who held the heavyweight title for 12 years.",
    keyAccomplishment: "Dominated boxing and became a symbol of American strength",
    era: "1914-1981",
    category: "Sports",
    bioFull: "Joseph Louis Barrow, known professionally as Joe Louis, was an American professional boxer who competed from 1934 to 1951. He reigned as the world heavyweight champion from 1937 to 1949, and is considered one of the greatest heavyweight boxers of all time. Louis's victory over German boxer Max Schmeling in 1938 made him a national hero and symbol of American democracy over Nazi ideology.",
    imageUrl: "/images/heroes/joe-louis.jpg"
  },
  {
    id: 73,
    name: "Wilma Rudolph",
    bioSummary: "Olympic track and field champion who overcame polio to become the fastest woman in the world.",
    keyAccomplishment: "Won three gold medals at the 1960 Olympics",
    era: "1940-1994",
    category: "Sports",
    bioFull: "Wilma Glodean Rudolph was an American sprinter who overcame childhood polio to become a world-record-holding Olympic champion and international sports icon. She won three gold medals in track and field at the 1960 Summer Olympics in Rome, becoming the first American woman to win three gold medals in a single Olympic Games. Rudolph's achievements helped elevate women's track and field in the United States.",
    imageUrl: "/images/heroes/wilma-rudolph.jpg"
  },
  {
    id: 74,
    name: "Arthur Ashe",
    bioSummary: "Tennis champion and civil rights activist who broke racial barriers in tennis.",
    keyAccomplishment: "First Black man to win Wimbledon, U.S. Open, and Australian Open",
    era: "1943-1993",
    category: "Sports",
    bioFull: "Arthur Robert Ashe Jr. was an American professional tennis player who won three Grand Slam singles titles. He was the first Black player selected to the United States Davis Cup team and the only Black man ever to win the singles title at Wimbledon, the US Open, and the Australian Open. Beyond tennis, Ashe was a prominent civil rights activist and advocate for social justice and AIDS awareness.",
    imageUrl: "/images/heroes/arthur-ashe.jpg"
  },
  {
    id: 75,
    name: "Dorie Miller",
    bioSummary: "Navy cook who became a hero at Pearl Harbor.",
    keyAccomplishment: "Manned anti-aircraft guns during Pearl Harbor attack despite no training",
    era: "1919-1943",
    category: "Military",
    bioFull: "Doris 'Dorie' Miller was a United States Navy cook who was the first African American to be awarded the Navy Cross, the third-highest honor awarded by the U.S. Navy at the time, for his actions during the attack on Pearl Harbor on December 7, 1941. Despite having no training, Miller manned anti-aircraft guns and moved wounded sailors to safety. He was killed in action in 1943 when his ship was torpedoed.",
    imageUrl: "/images/heroes/dorie-miller.jpg"
  },
  // ANCIENT PHILOSOPHY & ROOTS
  {
    id: 76,
    name: "Imhotep",
    bioSummary: "Ancient Egyptian polymath, architect, and physician",
    keyAccomplishment: "Designed the Step Pyramid and pioneered medicine",
    era: "2650-2600 BCE",
    category: "Science & Medicine",
    bioFull: "Imhotep was an Egyptian chancellor, architect, physician, and high priest who designed the Step Pyramid at Saqqara. He was later deified as the god of medicine and healing. His contributions to architecture and medicine influenced civilizations for millennia.",
    imageUrl: "/images/heroes/imhotep.jpg"
  },
  {
    id: 77,
    name: "Queen Amanirenas",
    bioSummary: "Kushite queen who defeated the Roman Empire",
    keyAccomplishment: "Led successful military campaigns against Rome",
    era: "40 BCE - 10 BCE",
    category: "Politics & Law",
    bioFull: "Queen Amanirenas was a Kushite queen who led her armies against the Roman Empire and successfully negotiated a favorable peace treaty. She is celebrated as one of the greatest military strategists of ancient Africa.",
    imageUrl: "/images/heroes/queen-amanirenas.webp"
  },
  {
    id: 78,
    name: "Zera Yacob",
    bioSummary: "Ethiopian philosopher and rationalist thinker",
    keyAccomplishment: "Developed rationalist philosophy independent of European thought",
    era: "1599-1692",
    category: "Faith & Leadership",
    bioFull: "Zera Yacob was an Ethiopian philosopher who developed a rationalist philosophy emphasizing the use of reason to understand God and morality. His work predated European Enlightenment philosophers and demonstrated African philosophical traditions.",
    imageUrl: "/images/heroes/zera-yacob.png"
  },
  {
    id: 79,
    name: "Nana Asma'u",
    bioSummary: "West African poet, teacher, and Islamic scholar",
    keyAccomplishment: "Established education system for women in Sokoto Caliphate",
    era: "1793-1864",
    category: "Faith & Leadership",
    bioFull: "Nana Asma'u was a princess, poet, teacher, and daughter of Usman dan Fodio. She created a network of female teachers and wrote extensively in Arabic, Fula, and Hausa, promoting women's education across West Africa.",
    imageUrl: "/images/heroes/nana-asmau.jpeg"
  },
  {
    id: 80,
    name: "Ezana of Axum",
    bioSummary: "Ethiopian king and philosopher who adopted Christianity",
    keyAccomplishment: "Established Christianity in Ethiopia and expanded the Aksumite Empire",
    era: "320-360 CE",
    category: "Faith & Leadership",
    bioFull: "King Ezana ruled the Kingdom of Aksum and was the first monarch to adopt Christianity as the state religion. His reign marked a golden age of trade, culture, and philosophical thought in ancient Ethiopia.",
    imageUrl: "/images/heroes/ezana-of-axum.jpeg"
  },
  {
    id: 81,
    name: "Mansa Musa",
    bioSummary: "Malian emperor and wealthiest person in history",
    keyAccomplishment: "Built centers of learning and spread Islamic scholarship",
    era: "1280-1337",
    category: "Business & Entrepreneurship",
    bioFull: "Mansa Musa was the tenth emperor of the Mali Empire and is considered the wealthiest person in history. His famous pilgrimage to Mecca distributed so much gold it caused inflation across the Mediterranean. He built the University of Sankore in Timbuktu.",
    imageUrl: "/images/heroes/mansa-musa.jpg"
  },
  {
    id: 82,
    name: "Queen Nzinga",
    bioSummary: "Angolan queen who resisted Portuguese colonization",
    keyAccomplishment: "Led 30-year resistance against Portuguese invasion",
    era: "1583-1663",
    category: "Politics & Law",
    bioFull: "Queen Nzinga of Ndongo and Matamba was a brilliant military strategist and diplomat who resisted Portuguese colonization for decades. She formed alliances with the Dutch and led her armies personally into battle well into her 60s.",
    imageUrl: "/images/heroes/queen-nzinga.png"
  },
  {
    id: 83,
    name: "Sundiata Keita",
    bioSummary: "Founder of the Mali Empire",
    keyAccomplishment: "Established one of Africa's greatest empires",
    era: "1217-1255",
    category: "Politics & Law",
    bioFull: "Sundiata Keita founded the Mali Empire after uniting Mandinka tribes. His reign established trade routes, promoted agriculture, and created a stable government that lasted for centuries. His story is preserved in the Epic of Sundiata.",
    imageUrl: "/images/heroes/sundiata-keita.jpeg"
  },
  {
    id: 84,
    name: "Hatshepsut",
    bioSummary: "Egyptian pharaoh who ruled as king",
    keyAccomplishment: "One of the most successful pharaohs, expanded trade",
    era: "1507-1458 BCE",
    category: "Politics & Law",
    bioFull: "Hatshepsut was one of the few female pharaohs of Egypt. She ruled for over 20 years, overseeing ambitious building projects and establishing trade networks that brought great wealth to Egypt.",
    imageUrl: "/images/heroes/hatshepsut.jpg"
  },
  {
    id: 85,
    name: "Askia Muhammad",
    bioSummary: "Emperor of Songhai and patron of learning",
    keyAccomplishment: "Expanded Songhai Empire and promoted Islamic scholarship",
    era: "1443-1538",
    category: "Faith & Leadership",
    bioFull: "Askia Muhammad I was the first ruler of the Askia dynasty of the Songhai Empire. He expanded the empire, established Islamic schools, and made Timbuktu a center of learning and trade.",
    imageUrl: "/images/heroes/askia-muhammad.png"
  },
  {
    id: 86,
    name: "Sister Rosetta Tharpe",
    bioSummary: "Godmother of rock and roll",
    keyAccomplishment: "Pioneered electric guitar and influenced rock music",
    era: "1915-1973",
    category: "Arts & Culture",
    bioFull: "Sister Rosetta Tharpe was a gospel singer and guitarist who pioneered the use of electric guitar in popular music. Her innovative style influenced Chuck Berry, Elvis Presley, and countless rock musicians.",
    imageUrl: "/images/heroes/sister-rosetta-tharpe.jpg"
  },
  {
    id: 87,
    name: "Fela Kuti",
    bioSummary: "Pioneer of Afrobeat music and political activist",
    keyAccomplishment: "Created Afrobeat genre and challenged Nigerian government",
    era: "1938-1997",
    category: "Arts & Culture",
    bioFull: "Fela Kuti was a Nigerian musician who created Afrobeat by fusing jazz, funk, and traditional African music. He used his music as a tool for political activism, criticizing corruption and military rule in Nigeria.",
    imageUrl: "/images/heroes/fela-kuti.jpg"
  },
  {
    id: 88,
    name: "Thelonious Monk",
    bioSummary: "Jazz pianist and composer",
    keyAccomplishment: "Pioneered bebop and composed jazz standards",
    era: "1917-1982",
    category: "Arts & Culture",
    bioFull: "Thelonious Monk was one of the most important figures in jazz. His unique improvisational style and compositions like 'Round Midnight' and 'Straight, No Chaser' became jazz standards.",
    imageUrl: "/images/heroes/thelonious-monk.jpg"
  },
  {
    id: 89,
    name: "J Dilla",
    bioSummary: "Hip-hop producer and beatmaker",
    keyAccomplishment: "Revolutionized hip-hop production techniques",
    era: "1974-2006",
    category: "Arts & Culture",
    bioFull: "J Dilla (James Yancey) was a hip-hop producer whose innovative sampling techniques and off-kilter beats influenced an entire generation of producers. His album 'Donuts' is considered a masterpiece.",
    imageUrl: "/images/heroes/j-dilla.jpg"
  },
  {
    id: 90,
    name: "Gordon Parks",
    bioSummary: "Photographer, filmmaker, and writer",
    keyAccomplishment: "First Black director of a major Hollywood film",
    era: "1912-2006",
    category: "Arts & Culture",
    bioFull: "Gordon Parks was a photographer for Life magazine and the first Black director of a major Hollywood film (Shaft, 1971). His photography documented poverty, racism, and the Civil Rights Movement.",
    imageUrl: "/images/heroes/gordon-parks.jpg"
  },
  {
    id: 91,
    name: "August Wilson",
    bioSummary: "Playwright and chronicler of Black American experience",
    keyAccomplishment: "Wrote the Pittsburgh Cycle of 10 plays",
    era: "1945-2005",
    category: "Arts & Culture",
    bioFull: "August Wilson wrote a cycle of ten plays documenting the African American experience in each decade of the 20th century. He won two Pulitzer Prizes for 'Fences' and 'The Piano Lesson.'",
    imageUrl: "/images/heroes/august-wilson.jpg"
  },
  {
    id: 92,
    name: "Max Roach",
    bioSummary: "Jazz drummer and composer",
    keyAccomplishment: "Pioneered bebop drumming and civil rights jazz",
    era: "1924-2007",
    category: "Arts & Culture",
    bioFull: "Max Roach was a pioneering jazz drummer who helped develop bebop. His album 'We Insist! Freedom Now Suite' was a powerful statement on civil rights, combining jazz with political activism.",
    imageUrl: "/images/heroes/max-roach.jpg"
  },
  {
    id: 93,
    name: "Miriam Makeba",
    bioSummary: "South African singer and anti-apartheid activist",
    keyAccomplishment: "Brought African music to global audience",
    era: "1932-2008",
    category: "Arts & Culture",
    bioFull: "Miriam Makeba, known as 'Mama Africa,' was a South African singer who brought African music to international audiences. She was exiled for 31 years for her opposition to apartheid.",
    imageUrl: "/images/heroes/miriam-makeba.jpg"
  },
  {
    id: 94,
    name: "Bob Marley",
    bioSummary: "Reggae legend and global icon",
    keyAccomplishment: "Popularized reggae music worldwide",
    era: "1945-1981",
    category: "Arts & Culture",
    bioFull: "Bob Marley was a Jamaican singer-songwriter who brought reggae music to the world stage. His songs about love, peace, and social justice made him a global icon and voice for the oppressed.",
    imageUrl: "/images/heroes/bob-marley.jpg"
  },
  {
    id: 95,
    name: "Tupac Shakur",
    bioSummary: "Rapper, actor, and poet",
    keyAccomplishment: "One of the most influential rappers of all time",
    era: "1971-1996",
    category: "Arts & Culture",
    bioFull: "Tupac Shakur was a rapper and actor whose music addressed contemporary social issues including racism, police brutality, and poverty. He is one of the best-selling music artists of all time.",
    imageUrl: "/images/heroes/tupac-shakur.jpg"
  },
  {
    id: 96,
    name: "Lauryn Hill",
    bioSummary: "Singer, rapper, and songwriter",
    keyAccomplishment: "First hip-hop artist to win Album of the Year Grammy",
    era: "1975-present",
    category: "Arts & Culture",
    bioFull: "Lauryn Hill's album 'The Miseducation of Lauryn Hill' won five Grammy Awards and broke barriers for women in hip-hop. She is known for blending rap, soul, and reggae.",
    imageUrl: "/images/heroes/lauryn-hill.jpg"
  },
  {
    id: 97,
    name: "Kendrick Lamar",
    bioSummary: "Rapper and Pulitzer Prize winner",
    keyAccomplishment: "First non-classical, non-jazz musician to win Pulitzer Prize",
    era: "1987-present",
    category: "Arts & Culture",
    bioFull: "Kendrick Lamar is a rapper whose album 'DAMN.' won the Pulitzer Prize for Music in 2018. His work addresses racism, violence, and the Black experience in America with poetic complexity.",
    imageUrl: "/images/heroes/kendrick-lamar.jpg"
  },
  {
    id: 99,
    name: "Prince",
    bioSummary: "Musical genius and multi-instrumentalist",
    keyAccomplishment: "Pioneered Minneapolis sound and fought for artist rights",
    era: "1958-2016",
    category: "Arts & Culture",
    bioFull: "Prince was a musical innovator who played 27 instruments and created the 'Minneapolis sound.' He fought for artists' rights to own their music and pushed boundaries in fashion and performance.",
    imageUrl: "/images/heroes/prince.jpg"
  },
  {
    id: 100,
    name: "Beyoncé",
    bioSummary: "Singer, performer, and cultural icon",
    keyAccomplishment: "Most Grammy-winning artist in history",
    era: "1981-present",
    category: "Arts & Culture",
    bioFull: "Beyoncé is the most awarded artist in Grammy history. Her visual albums and performances celebrate Black culture, feminism, and social justice. She has redefined what it means to be a global superstar.",
    imageUrl: "/images/heroes/beyonce.jpg"
  },
  {
    id: 103,
    name: "Annie Turnbo Malone",
    bioSummary: "Hair care entrepreneur and philanthropist",
    keyAccomplishment: "One of the first Black women millionaires",
    era: "1869-1957",
    category: "Business & Entrepreneurship",
    bioFull: "Annie Turnbo Malone developed hair care products for Black women and built a cosmetics empire. She was one of the first Black women to become a millionaire and donated millions to charity.",
    imageUrl: "/images/heroes/annie-turnbo-malone.jpg"
  },
  {
    id: 104,
    name: "Berry Gordy",
    bioSummary: "Founder of Motown Records",
    keyAccomplishment: "Created the Motown sound and launched legendary careers",
    era: "1929-present",
    category: "Business & Entrepreneurship",
    bioFull: "Berry Gordy founded Motown Records in 1959 and created the 'Motown Sound' that dominated popular music. He launched the careers of Diana Ross, Stevie Wonder, Marvin Gaye, and many others.",
    imageUrl: "/images/heroes/berry-gordy.jpg"
  },
  {
    id: 105,
    name: "A.G. Gaston",
    bioSummary: "Business tycoon and civil rights supporter",
    keyAccomplishment: "Built business empire during segregation",
    era: "1892-1996",
    category: "Business & Entrepreneurship",
    bioFull: "A.G. Gaston built a business empire in Birmingham, Alabama during segregation, including insurance companies, banks, and a motel. He supported the Civil Rights Movement financially.",
    imageUrl: "/images/heroes/ag-gaston.jpg"
  },
  {
    id: 106,
    name: "Maggie Lena Walker",
    bioSummary: "First Black woman to charter a bank",
    keyAccomplishment: "Founded St. Luke Penny Savings Bank",
    era: "1864-1934",
    category: "Business & Entrepreneurship",
    bioFull: "Maggie Lena Walker was the first Black woman to charter a bank in the United States. She founded the St. Luke Penny Savings Bank in Richmond, Virginia in 1903.",
    imageUrl: "/images/heroes/maggie-lena-walker.jpg"
  },
  {
    id: 108,
    name: "Jay-Z",
    bioSummary: "Rapper, entrepreneur, and billionaire",
    keyAccomplishment: "First hip-hop billionaire",
    era: "1969-present",
    category: "Business & Entrepreneurship",
    bioFull: "Jay-Z (Shawn Carter) is a rapper and entrepreneur who became hip-hop's first billionaire through music, Roc Nation, Tidal, and investments in companies like Uber. He advocates for criminal justice reform.",
    imageUrl: "/images/heroes/jay-z.jpg"
  },
  {
    id: 109,
    name: "Tyler Perry",
    bioSummary: "Filmmaker, actor, and studio owner",
    keyAccomplishment: "Built Tyler Perry Studios, largest Black-owned studio",
    era: "1969-present",
    category: "Business & Entrepreneurship",
    bioFull: "Tyler Perry is a filmmaker who built Tyler Perry Studios, one of the largest film production studios in the US. He writes, directs, produces, and stars in his films and TV shows.",
    imageUrl: "/images/heroes/tyler-perry.jpg"
  },
  {
    id: 110,
    name: "Ursula Burns",
    bioSummary: "First Black woman CEO of Fortune 500 company",
    keyAccomplishment: "Led Xerox as CEO",
    era: "1958-present",
    category: "Business & Entrepreneurship",
    bioFull: "Ursula Burns was the first Black woman to be CEO of a Fortune 500 company (Xerox). She rose from intern to CEO and has served on numerous corporate boards.",
    imageUrl: "/images/heroes/ursula-burns.jpg"
  },
  {
    id: 111,
    name: "Kenneth Chenault",
    bioSummary: "Former CEO of American Express",
    keyAccomplishment: "Led American Express for 17 years",
    era: "1951-present",
    category: "Business & Entrepreneurship",
    bioFull: "Kenneth Chenault was CEO of American Express from 2001 to 2018. He is one of the most successful Black executives in corporate America and serves on multiple boards.",
    imageUrl: "/images/heroes/kenneth-chenault.jpg"
  },
  {
    id: 112,
    name: "Rihanna",
    bioSummary: "Singer, entrepreneur, and billionaire",
    keyAccomplishment: "Founded Fenty Beauty and became youngest self-made female billionaire",
    era: "1988-present",
    category: "Business & Entrepreneurship",
    bioFull: "Rihanna is a singer and entrepreneur who founded Fenty Beauty, revolutionizing the cosmetics industry with inclusive products. She became the youngest self-made female billionaire.",
    imageUrl: "/images/heroes/rihanna.jpg"
  },
  {
    id: 113,
    name: "Thomas Sankara",
    bioSummary: "Burkinabé revolutionary and president",
    keyAccomplishment: "Transformed Burkina Faso with anti-imperialist policies",
    era: "1949-1987",
    category: "Politics & Law",
    bioFull: "Thomas Sankara was president of Burkina Faso who implemented anti-imperialist policies, promoted women's rights, and fought corruption. He was assassinated in 1987 but remains an icon of African liberation.",
    imageUrl: "/images/heroes/thomas-sankara.jpeg"
  },
  {
    id: 114,
    name: "Patrice Lumumba",
    bioSummary: "First prime minister of independent Congo",
    keyAccomplishment: "Led Congo to independence from Belgium",
    era: "1925-1961",
    category: "Politics & Law",
    bioFull: "Patrice Lumumba was the first prime minister of the independent Democratic Republic of the Congo. He was a pan-Africanist who fought against colonialism and was assassinated in 1961.",
    imageUrl: "/images/heroes/patrice-lumumba.jpg"
  },
  {
    id: 115,
    name: "Septima Clark",
    bioSummary: "Civil rights educator and organizer",
    keyAccomplishment: "Created citizenship schools for voter registration",
    era: "1898-1987",
    category: "Civil Rights",
    bioFull: "Septima Clark, known as the 'Queen Mother of the Civil Rights Movement,' created citizenship schools that taught literacy and voter registration. Her work registered thousands of Black voters.",
    imageUrl: "/images/heroes/septima-clark.jpg"
  },
  {
    id: 116,
    name: "Kwame Nkrumah",
    bioSummary: "First president of Ghana and pan-Africanist",
    keyAccomplishment: "Led Ghana to independence and promoted African unity",
    era: "1909-1972",
    category: "Politics & Law",
    bioFull: "Kwame Nkrumah led Ghana to independence in 1957, making it the first sub-Saharan African country to gain independence. He was a leading pan-Africanist who advocated for African unity.",
    imageUrl: "/images/heroes/kwame-nkrumah.jpg"
  },
  {
    id: 117,
    name: "Nelson Mandela",
    bioSummary: "Anti-apartheid revolutionary and South African president",
    keyAccomplishment: "Ended apartheid and became first Black president of South Africa",
    era: "1918-2013",
    category: "Politics & Law",
    bioFull: "Nelson Mandela spent 27 years in prison for fighting apartheid. After his release, he became South Africa's first Black president and worked for reconciliation. He won the Nobel Peace Prize in 1993.",
    imageUrl: "/images/heroes/nelson-mandela.jpg"
  },
  {
    id: 118,
    name: "Desmond Tutu",
    bioSummary: "Archbishop and anti-apartheid activist",
    keyAccomplishment: "Led Truth and Reconciliation Commission",
    era: "1931-2021",
    category: "Faith & Leadership",
    bioFull: "Desmond Tutu was an Anglican archbishop who fought against apartheid in South Africa. He chaired the Truth and Reconciliation Commission and won the Nobel Peace Prize in 1984.",
    imageUrl: "/images/heroes/desmond-tutu.jpg"
  },
  {
    id: 119,
    name: "Steve Biko",
    bioSummary: "South African anti-apartheid activist",
    keyAccomplishment: "Founded Black Consciousness Movement",
    era: "1946-1977",
    category: "Civil Rights",
    bioFull: "Steve Biko was a South African anti-apartheid activist who founded the Black Consciousness Movement. He was killed in police custody in 1977, becoming a martyr for the anti-apartheid cause.",
    imageUrl: "/images/heroes/steve-biko.jpg"
  },
  {
    id: 120,
    name: "Winnie Mandela",
    bioSummary: "Anti-apartheid activist and politician",
    keyAccomplishment: "Fought apartheid while Nelson Mandela was imprisoned",
    era: "1936-2018",
    category: "Civil Rights",
    bioFull: "Winnie Mandela was an anti-apartheid activist who continued the fight while her husband Nelson was imprisoned. She faced harassment, imprisonment, and exile but remained a symbol of resistance.",
    imageUrl: "/images/heroes/winnie-mandela.jpg"
  },
  {
    id: 121,
    name: "Ta-Nehisi Coates",
    bioSummary: "Writer and journalist",
    keyAccomplishment: "Wrote 'Between the World and Me' and advocates for reparations",
    era: "1975-present",
    category: "Arts & Culture",
    bioFull: "Ta-Nehisi Coates is a writer and journalist known for his essays on race and his book 'Between the World and Me.' He has been a leading voice in the conversation about reparations for slavery.",
    imageUrl: "/images/heroes/ta-nehisi-coates.jpg"
  },
  {
    id: 122,
    name: "Ava DuVernay",
    bioSummary: "Filmmaker and director",
    keyAccomplishment: "Directed 'Selma' and '13th', first Black woman nominated for Best Director Golden Globe",
    era: "1972-present",
    category: "Arts & Culture",
    bioFull: "Ava DuVernay is a filmmaker known for 'Selma,' '13th,' and 'When They See Us.' She was the first Black woman nominated for a Golden Globe for Best Director.",
    imageUrl: "/images/heroes/ava-duvernay.jpg"
  },
  {
    id: 123,
    name: "Stacey Abrams",
    bioSummary: "Politician, voting rights activist, and author",
    keyAccomplishment: "Led voter registration efforts in Georgia",
    era: "1973-present",
    category: "Politics & Law",
    bioFull: "Stacey Abrams is a politician and voting rights activist who founded Fair Fight Action. Her voter registration efforts in Georgia are credited with helping flip the state in the 2020 election.",
    imageUrl: "/images/heroes/stacey-abrams.jpg"
  },
  {
    id: 124,
    name: "LeBron James",
    bioSummary: "Basketball player, entrepreneur, and activist",
    keyAccomplishment: "Founded I PROMISE School and advocates for social justice",
    era: "1984-present",
    category: "Sports",
    bioFull: "LeBron James is one of the greatest basketball players of all time. He founded the I PROMISE School in Akron, Ohio and has been a vocal advocate for social justice and education.",
    imageUrl: "/images/heroes/lebron-james.jpg"
  },
  {
    id: 125,
    name: "Simone Biles",
    bioSummary: "Olympic gymnast",
    keyAccomplishment: "Most decorated gymnast in World Championship history",
    era: "1997-present",
    category: "Sports",
    bioFull: "Simone Biles is the most decorated gymnast in World Championship history. She has advocated for mental health awareness and survivors of sexual abuse in sports.",
    imageUrl: "/images/heroes/simone-biles.jpg"
  },
];
