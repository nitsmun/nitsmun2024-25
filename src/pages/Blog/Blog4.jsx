import React from "react";
import styles from "./Blog4.module.scss";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Blog4 = () => {
  return (
    <div className={styles.pagecontainer}>
      <Link to="/blog" className={styles.backbtn}>
        <IoArrowBack size={24} />
      </Link>
      <div className={styles.section}>
        <div className={styles.section1}>
          <div className={styles.overlay}>
            <h1>
              <u>Evolution of Rashtriya Swayamsevak Sangh (RSS)</u>
            </h1>
            <div className={styles.imgd1}></div>
            <p>
              Some consider RSS to be a political group, others a social one,
              perhaps it’s both, perhaps it’s neither; or like most things, it
              depends on the perspective of the different people analysing it.
              In 1925, a doctor created an organisation whose aim was to prepare
              Hindu Society against the atrocities of the British Raj. At the
              time, no one would have thought this small organisation would one
              day evolve to be the world’s largest Non Government Organisation
              (NGO). This association, in 2025 will be 100 years old. RSS is a
              name which holds great importance in the corridors of politics.
              Within society, RSS has subconsciously been recognised as the
              largest family like system of India. The question isn’t what RSS
              stands for, but whether it is a social organisation or a political
              one, whether it works as a cultural group or a political one, or
              whether it is in a league of its own.
            </p>
            <div className={styles.imgd2}></div>
            <p>
              We delve into the pages of history to know how this organisation
              came to be, what it stands for and how it has affected the people
              of our nation through history.
            </p>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.overlay}>
            <h2>History of RSS</h2>
            <div className={styles.imgd3}>
              <div className={styles.imgd3text}>
                Dr. Keshav Baliram Hedgewar
              </div>
            </div>
            <p>
              In 1907, the revolutionaries in Bengal formed the Anushilan Samiti
              in the struggle for freedom. Keshav “Ram” Baliram Hedgewar, who
              had come from Nagpur to study medicine, became a part of this
              committee and even went to prison. Dada Bhai Naoroji, at that time
              had invited the hot headed thinker, LokManya Bal Gangadhar Tilak
              to join the Congress, so Hedgewar accompanied him to be a part of
              Congress. He worked for Congress for quite a period, but in 1917,
              in opposition to the fall of the Khalifa in Turkey, the Khilafat
              Movement started with fervour in India. Under the leadership of
              Mahatma Gandhi, the Congress stood in support of this movement as
              well. But Dr. Hedgewar felt disturbed by the decision of Congress
              to join the Khilafat Movement. He interpreted this support as a
              political play of Muslim appeasement. Even with this
              disappointment, he continued to be a member of Congress. As a
              matter of fact, he was present in both the 1922 Nagpur and 1925
              Calcutta sessions. <br />
              But after this incident, something else started brewing in Dr.
              Hedgewar’s thoughts. He made up his mind that he would create an
              organisation whose purpose would be to work for the progress and
              well-being of Hindus. He started this committee from his own home,
              it is said that at the very first meeting only 12 people came to
              listen to Dr. Hedgewar, but it did not take long to go from 12 to
              1200. Slowly, things were progressing and there came a time when
              people in the number of thousands were being influenced by Dr.
              Hedgewar’s thoughts and beliefs. With this, the path for the
              establishment of the organisation could be seen clearly. But this
              was not an easy task for him. This path had many obstacles and
              problems laid out. It is said that Dr. Hedgewar himself started
              arranging Shakhas. These shakhas, along with Yoga, Surya Namaskar
              and Lathi Training, also included intellectual discussions.
            </p>
            <div className={styles.imgd5}></div>
            <p>
              Slowly, people were being influenced by his words and started to
              become part of his campaign. Soon, the number of people coming to
              his shakhas multiplied to a great extent. The time had come when
              Dr. Hedgewar thought about giving the committee an official
              semblance. In 1925 on the day of VijayaDashmi, Dr. Hedgewar laid
              down the foundation of RSS in Nagpur. The organisation established
              its feet in several places of Maharashtra, like Nashik, Pune,
              Amravati and Yavatmal. Along with Maharashtra, the shakhas also
              began to expand into Central India. People joining these shakhas
              was an immense development; and this development of the committee
              aimed for social work of the nation but gradually it became the
              roundabout around which the fabric of politics seems to be woven.{" "}
              <br />
              The members of the organisation increased monumentally, but
              outside of Maharashtra, the group had hardly any influence. RSS
              was ready to expand and it found the chance to set its feet
              outside of Maharashtra when Dr. Hedgewar got the opportunity to
              visit Banaras Hindu University around 1930. He came to BHU and met
              Pandit Madan Mohan Malviya, who gave him permission to set up an
              office of RSS on the premises of BHU Campus. Dr. Hedgewar got to
              meet Madhav Rao Sadashiv Golwalkar, who was pursuing his M Sc.
              Degree in BHU; he also taught as a professor and hence everyone
              called him ‘Guruji’. Through Dr. Hedgewar, Golwalkar became active
              in RSS and eventually joined the organisation. Unfortunately, Dr.
              Hedgewar passed away in 1940 and with popular consent, Golwalkar
              took over as the RSS chief. Under the leadership of Golwalkar, the
              values and beliefs of RSS expanded to the rest of India including
              Delhi, Kolkata, Chennai and Lahore.
            </p>
            <div className={styles.imgd6}>
              <div className={styles.imgd6text}>Madhav Rao Golwalkar</div>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.overlay}>
            <h2>Organisational Set-Up of RSS</h2>
            <p>
              Now we see how RSS works and where the reach of its branches has
              spread to. Regarding the constructive arrangement of RSS, it is
              divided into 11 parts:
              <br />
              <ul>
                <li>Hub (Kendra)</li>
                <li>Region (Kshetra)</li>
                <li>Province (Praant)</li>
                <li>Department (Vibhaag)</li>
                <li>District (Zila)</li>
                <li>Taluka (Taaluka)</li>
                <li>Town (Nagar)</li>
                <li>Block (Khand)</li>
                <li>Circle (Mandal)</li>
                <li>Gram (Graam)</li>
                <li>Branch (Shakha)</li>
              </ul>
              <br />
              If we talk about the branches or the shakhas it is of 5 types:
              <br />
              <ul>
                <li>Prabhat Branch: Meeting that happened in the morning</li>
                <li>Evening Branch </li>
                <li>Night Branch</li>
                <li>Milan: Meeting that happened once or twice in a week</li>
                <li>Sangh Mandali: Meeting that happened once in a month</li>
              </ul>
              <br />
              It is surprising to know that the organisation consists of about 1
              crore trained members. There exist about 80, both small and large
              committees under the family organisation of RSS. In Uttar Pradesh
              itself, RSS has more than 8000 branches. Even a state like Kerala
              where Hindu Population is comparatively less, has about 5000
              branches of RSS. This is just the story within India, on the other
              hand in more than 40 countries of the world, there exist about
              57000 branches of RSS. On a daily basis, more than 50 lakh members
              come to all these branches. The shakhas of this organisation are
              set up daily in all districts and 60000 villages of India.
              <br />
              Now what do these shakhas mean? Branch or Shakha means the meeting
              that is held in RSS in the mornings or evenings, which is held in
              any open ground for 1 hour. These branches are considered the
              foundation of RSS and they are the reason why such a big
              organisation is running till this day. Everyday in the mornings
              and evenings, shakhas are arranged, where all the volunteers
              interact with each other. During this, everyone prays, performs
              yoga and plays games. Along with this, they also hold discussions
              on prayers and other cultural aspects. The SarSanghChalak
              (Leader/Chief) of RSS is also chosen during these meetings, each
              chief appoints their successor keeping in mind the development of
              their community. Currently, the SarSanghChalak of RSS is Shri
              Mohan Bhagwat. The people who volunteer for RSS are known as
              Swayamsevaks.
              <br />
              <div className={styles.imgd8}>
                <div className={styles.imgd8text}>Shri Mohan Bhagwat</div>
              </div>
              If we talk about the expansion of RSS, all across the world RSS
              has about 55 subsidiary organisations, some of them are:
              <br />
              <ul>
                <li>Bharatiya Janata Party</li>
                <li>Bajrang Dal</li>
                <li>Hindu Jagran Manch</li>
                <li>Indian Farmers Association</li>
                <li>Hindu Swayamsevak Sangh</li>
                <li>Rashtra Sevika Samiti</li>
                <li>All India World Council</li>
                <li>Vidya Bharti</li>
                <li>Saraswati Shishu Mandir</li>
                <li>Vanvasi Kalyan Ashram</li>
                <li>Muslim National Forum</li>
                <li>National Sikh Sangat</li>
                <li>World Dialogue Centre</li>
                <li>Swadeshi Jagran Manch</li>
                <li>Laghu Udyog Bharti</li>
                <li>Vivekananda Kendra</li>
                <li>Indian Labour Union</li>
                <li>Seva Bharti</li>
                <li>Vishwa Hindu Parishad</li>
              </ul>
              RSS is often accused of causing Hindu Muslim disparity and said to
              be working only for the improvement of Hindu Society but this list
              proves otherwise as its subsidiaries include a Muslim centric
              organisation ‘Muslim National Forum’.
            </p>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.overlay}>
            <h2>Functions and Contributions of RSS</h2>
            <p>
              Now we will discuss what RSS works for and what its contribution
              to Indian society has been. RSS, along with social service and
              improvement, also works towards rescue and rehabilitation. The
              volunteers of this organisation work for the poor and needy
              sections of society along with disaster management. RSS also aims
              to end casteism and promote cultural nationalism in the country.
              To promote the ideology of their organisation, the committee
              releases magazines, circulated among lakhs of people. These
              include the main magazine ‘Panchjanya’ and a magazine ‘Devputra’
              for teenagers and children.
              <br />
              <div className={styles.imgd9}></div>
              Talking about the contributions of RSS till date:
              <ul>
                <li>
                  When the government under Jawaharlal Nehru was aiming for the
                  merge of Kashmir into India, Sardar Patel advised him to ask
                  for help from RSS Chief Golwalkar, who then persuaded Maharaja
                  Hari Singh to agree to the Kashmir merge.
                </li>
                <li>
                  The organisation also played an important role in the merge of
                  Dadra and Nagar Haveli as well as Goa into India. On 22nd July
                  1954, Dadra was liberated from the rule of portuguese. On 28th
                  July, under the leadership of Chief Wakankar, the swayamsevaks
                  of RSS attacked the Naroli police station and overpowered the
                  Portuguese staffers, forcing them to surrender. On seeing the
                  liberation forces getting closer to their goals, Portuguese
                  forces led by Captain Virgilio Fidalgo retreated to Dadra
                  Capital, Silvassa. The liberation forces asked Captain Fidalgo
                  to surrender and when he refused, RSS volunteers in large
                  numbers along with other members of liberation forces marched
                  towards Silvassa. The Portuguese backed down and on the
                  morning 2nd August 1954, the swayamsevaks took down the
                  Portuguese flag and hoisted the Tiranga. In this way, the
                  whole of Dadra and Nagar Haveli was relieved from the
                  oppression of the Portuguese and handed over to the Indian
                  Government.
                </li>
                <li>
                  In 1962, during the Indo-China War, the RSS came forward to
                  help the soldiers by tracking army routes, administrative
                  tasks, arranging food for the army and also to help army
                  families for which they were appreciated by the people of our
                  nation. Seeing the efforts of the organisation and their
                  relentless patriotism, Prime Minister Jawaharlal Nehru
                  specially invited RSS to the Republic Day Parade of 1963.
                  Within a notice of 2 days, 3000 swayamsevaks donned their
                  uniform and marched across the Rajpath.
                </li>
                <div className={styles.imgd10}></div>
                <li>
                  In 1965 during the Indo-Pak War, then Prime Minister Lal
                  Bahadur Shastri called upon the RSS swayamsevaks, who stepped
                  up in large numbers and donated blood to the wounded soldiers.
                </li>
                <li>
                  Aside from this, the RSS swayamsevaks played a huge role in
                  providing rehabilitation services; in 1971, from the
                  disastrous cyclones in Odisha to the unfortunate gas tragedy
                  in Bhopal; in 1984, from the Sikh riots to the Gujarat
                  earthquake and tsunami catastrophe, Uttarakhand floods and
                  rescue operations for the wounded during the Kargil War. This
                  organisation has always stood at the forefront when it comes
                  to service to the nation and its people.
                </li>
                <li>
                  And not just to this country; as a matter of fact, RSS also
                  provided relief during the earthquake in Nepal as well as the
                  tsunami in both Sri Lanka and Sumatra.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className={styles.section5}>
          <div className={styles.overlay}>
            <h2>When was RSS banned?</h2>
            <p>
              Despite having performed so many selfless acts for humanity not
              just in this country but worldwide, RSS has always been caught up
              in some controversy or the other. RSS has often been blamed for
              interference in politics, and at times, the government has even
              advocated to ban the organisation and its activities.
              <br />
              Time and again, RSS has been surrounded by criticism and
              controversies.
              <ul>
                <li>
                  The first time, in 1948 when Mahatma Gandhi was assassinated
                  by Nathuram Godse, Pandit Nehru held RSS accountable and hence
                  it was banned.
                </li>
                <li>
                  The second time, in 1975, when Indira Gandhi declared national
                  emergency in India, even then RSS was banned.{" "}
                </li>
                <li>
                  The third time, in 1992, when Babri Masjid was demolished,
                  again RSS was blamed and banned by the government.
                </li>
              </ul>
              Although, RSS was meant to be a social organisation, it has had a
              deep connection with Indian politics throughout history.
            </p>
          </div>
        </div>
        <div className={styles.section6n7}>
          <div className={styles.section6}>
            <div className={styles.overlay}>
              <h2>RSS and Politics</h2>
              <p>
                Before as well as after independence, despite being a social
                organisation, RSS has stayed connected to Indian politics, to
                some degree. In 1975, during Emergency, the name of RSS appeared
                in politics at a large level. Not many people know this, but
                even Rajiv Gandhi at one instance had to bow before RSS. This
                incident is from 1989, when Rajiv Gandhi felt his political
                power slipping away due to the ongoing controversy of Ram
                Janmabhoomi. At that time, he contacted RSS to try to talk about
                the Ayodhya issue but they refused to discuss it as the
                organisation was not interested in politicising this issue. RSS
                did not want to drag Ayodhya into politics during that time
                after which Rajiv Gandhi was ousted from power.
                <div className={styles.imgd12}></div>
                On the other hand, Lal Krishna Advani, a leader of RSS, gave
                support to VP Singh’s government but when VP Singh played the
                card of reservation, all tables were turned. This was a major
                shock to the organisation which made RSS realise that politics
                had to be brought into Ayodhya. During this time, the talk about
                reservations was causing political unrest. The organisation
                became active in this issue and decided to participate in the
                Ayodhya Ram Janmabhoomi Agitation along with Vishva Hindu
                Parishad. Because of its socio-political views, RSS has always
                been surrounded by criticism. This is due to the fact that the
                organisation follows the ideology of Veer Savarkar which has
                prompted the critics to name RSS as a Right-Wing Fascist Hindu
                Organisation even though RSS has tried to raise voices in the
                interest of Hindus against political appeasement. In the general
                sense, RSS does not have any single set major philosophy but it
                follows three main philosophies:
                <ul>
                  <li>
                    Akhand Bharat: RSS believes that since the primitive period,
                    Pakistan, Bangladesh, Sri Lanka, Myanmar, Afghanistan and
                    Iran were a part of India or ‘Akhand Bharat’.
                    <div className={styles.imgd13}></div>
                  </li>
                  <li>
                    Integral Humanism: This philosophy was given by DeenDayal
                    Upadhyay, it states that humanity should be the foremost
                    priority along with rural/social development of the masses.
                  </li>
                  <li>
                    Hindutva: Hindu Dharm has been considered supreme and RSS
                    believes that all people who reside in India follow Hinduism
                    to some extent. The organisation uses Bhagwa Dhwaj instead
                    of the Tiranga in its programs, which is why the Indian flag
                    is not hoisted in its offices. This has caused RSS to be
                    caught in a lot of controversies. RSS considers Bhagwa Dhwaj
                    to be supreme and from time to time, RSS shows its political
                    activity. Many leaders of BJP like Shri Atal Bihari
                    Vajpayee, Lal Krishna Advani, Amit Shah and Narendra Modi
                    were also associated with RSS. That is why their work often
                    reflects the organisation’s ideology.
                  </li>
                </ul>
                <div className={styles.imgd14}></div>
              </p>
            </div>
          </div>
          <div className={styles.section7}>
            <div className={styles.overlay}>
              <h2>Conclusion</h2>
              <p>
                The organisation which started from one room has spread not just
                nationwide but across the entire globe. It is doubtful that
                there exists any other organisation in the world which has been
                criticised as much as RSS has been, yet the organisation remains
                determined about its beliefs and moves forward with its motto.
                Today, RSS is so popular that its existence is felt deeply in
                every corner of the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
