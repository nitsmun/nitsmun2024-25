import React from "react";
import styles from "./Blog3.module.scss";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Blog3 = () => {
  return (
    <div className={styles.pagecontainer}>
      <Link to="/blog" className={styles.backbtn}>
        <IoArrowBack size={24} />
      </Link>
      <div className={styles.section}>
        <div className={styles.overlay}>
          <div className={styles.section1}>
            <h1>
              <u>EVOLUTION OF POLITICAL PARTIES IN INDIA</u>
            </h1>
            <p>
              Political parties in India have evolved from the Congress's
              post-independence hegemony to a dynamic battlefield dominated by
              regional titans and the meteoric rise of the BJP, reshaping the
              nation's political landscape. This shift reflects changing
              socio-political dynamics, including increased regionalism,
              coalition politics, and the BJP's emergence as a major national
              force.
            </p>
          </div>
          <div className={styles.section2}>
            <h2>IN THE BEGINNING</h2>
            <p>
              The Indian National Congress, founded in 1885, initially pursued
              moderate reforms but adopted non-violent non-cooperation under
              Gandhi in the 1920s and '30s, notably with the 1930 Salt March. It
              was during this period that the Communist Party of India (CPI),
              the first Communist party in India, was formed in 1925, resisting
              British rule and advocating for land reform. Congress launched the
              Quit India Movement in 1942, leading to its leaders' imprisonment,
              and India gained independence in August 1947, with its
              constitution taking effect in January 1950.
            </p>
            <div className={styles.imgc1}></div>
            <p>
              After independence, Congress lost its unifying purpose, leading to
              a growing Hindu tint under President Rajendra Prasad, causing some
              effervescent leaders to leave. In 1948, J.P. Narayan formed the
              Socialist Party, and in 1951, J.B. Kripalani founded the KMPP
              (Kisan Mazdoor Praja Party), both accusing Congress of betraying
              its commitment to the poor and claiming to uphold old Gandhian
              ideals. The Congress also faced external challenges from :
            </p>
            <ul>
              <li>
                Jana Sangh which sought to consolidate India’s largest religious
                grouping, the Hindus into one solid voting bank.{" "}
              </li>
              <li>
                Hindu parties that were even more orthodox than Jana Sangh-
                Hindu Mahasabha & Ram Rajya Parishad.{" "}
              </li>
              <li>CPI & its many splinter groups of the left. </li>
              <li>
                Regional parties based on affiliation of ethnicity & religion:
                Dravida Kazhagam (Tamil pride), Akalis in Punjab, Jharkhand
                Party demanding separate state for tribals.{" "}
              </li>
            </ul>
          </div>
          <div className={styles.section3}>
            <h2>THE EARLY ELECTIONS</h2>
            <p>
              1951-52 saw the first general election of India, drawn up with the
              British parliamentary system as a model. However, the biggest let
              down of the polls was that an abysmally low figure of 15% amongst
              the 176 million eligible people were literate. Congress passed the
              first litmus test of democracy, winning a landslide victory,
              winning 364 of the 489 seats in the parliament. Congress, however,
              suffered some unexpected setbacks in three southern states – Tamil
              Nadu, Andhra Pradesh and Kerala– where the party failed to win a
              majority in the face of strong support of the CPI. Nehru led
              Congress to victory again in the 1957 polls, largely unchallenged
              in North India after charismatic leaders departed from Jana Sangh
              and socialists.
            </p>
            <div className={styles.imgc2}></div>
            <p>
              From 1951 to 1964, Jawaharlal Nehru dominated Congress, securing
              landslide wins in the elections of 1951–52, 1957, and 1962. The
              landscape shifted dramatically in the 1967 elections, where only
              eight out of 16 states returned Congress with absolute majorities
              in state legislatures. The general slump in the popularity of the
              Congress had been accentuated in different regions by regional
              grievances.
            </p>
            <ul>
              <li>
                In Madras, the main issue that swept the Dravida Munnetra
                Khazagam to power was fear of the imposition of Hindi as the
                sole official language of India.{" "}
              </li>
              <li>
                In Punjab, the fall in Congress stock was largely due to
                squabbles attending the partition of the two states.{" "}
              </li>
              <li>
                In Uttar Pradesh and Delhi, the Jan Sangh gathered a large
                number of votes through its agitation against cow slaughter.
              </li>
            </ul>
            <p>
              Despite internal dissent and growing disenchantment, Congress
              faced challenges due to complacency after two decades in power.
              Infighting led to expulsions and resignations, with ex-Congress
              members forming rival parties in West Bengal, Orissa, and Bihar.
              In other states, Congressmen covertly allied with opposition
              candidates. Breakaway parties like Bangla Congress, Jana Congress,
              Jana Kranti Dal, and Swatantra Party gained prominence, each with
              distinct social and economic stances. The Swatantra Party stood
              out for opposing economic planning and communalism, contributing
              to the diversity of Indian democracy.
            </p>
          </div>
          <div className={styles.section4}>
            <h2>FURTHER ELECTIONS</h2>
            <p>
              In 1967 Indira Gandhi faced open revolt within the party, and in
              1969 she was expelled from the party by a group called the
              “Syndicate.” Nevertheless, her New Congress Party scored a
              landslide victory in the 1971 elections on grounds of policies
              like garibi hatao, abolition of privy purse and nationalization of
              14 largest banks, defeating the pre-poll alliance with Samyukta
              Socialist Party (SSP), Praja Socialist Party (PSP), the Swatantra
              Party and Bharatiya Jana Sangh (BJS) and several other regional
              parties. In the mid-1970s, the New Congress Party, led by Indira
              Gandhi, saw its support wane, leading to uncertainty over the true
              inheritor of the Indian National Congress legacy. Meanwhile, the
              Swatantra Party dissolved in 1974 after its founder,
              Rajagopalachari, passed away, with many members joining the
              Bharatiya Lok Dal under Charan Singh. Indira Gandhi's government
              grew increasingly authoritarian from 1975 onward, facing rising
              opposition due to economic issues like unemployment, poverty,
              inflation, and shortages.
            </p>
            <div className={styles.imgc3}></div>
            <p>
              In response to the Emergency imposed by Indira Gandhi between 1975
              and 1977, the Janata Party emerged as a coalition of opposition
              parties. In the 1977 elections, the Janata Party won decisively,
              securing 295 seats in the Lok Sabha against 153 for Congress.
              Morarji Desai became the first non-Congress Prime Minister in
              independent India's history, while Indira Gandhi lost her seat to
              a Janata candidate. In January 1978, Indira Gandhi and her
              supporters formed a new party known as Congress (I), with the "I"
              symbolizing Indira. The Janata government reversed Emergency-era
              policies and initiated investigations into abuses. However,
              internal conflicts and ideological differences hampered its
              ability to effectively govern. By mid-1979, Morarji Desai
              resigned, and Chaudhary Charan Singh briefly served as Prime
              Minister until Congress (I) withdrew its support. In November 1979
              Gandhi
            </p>
            <p>
              In 1982 her son Rajiv Gandhi became nominal head of the party,
              and, upon her assassination in October 1984, he became prime
              minister. In December he led the Congress Party to an overwhelming
              victory in which it secured 401 seats in the legislature. Although
              the Congress Party remained the largest party in parliament in
              1989, Rajiv Gandhi was unseated as prime minister by a coalition
              of opposition parties. While campaigning to regain power in May
              1991, he was assassinated by a suicide bomber associated with the
              Tamil Tigers, a separatist group in Sri Lanka. He was succeeded as
              party leader by P.V. Narasimha Rao, who was elected prime minister
              in June 1991. In contrast to the party’s historical socialist
              policies, Rao embraced economic liberalization. By 1996 the
              party’s image was suffering from various reports of corruption,
              and in elections that year the Congress Party was reduced to 140
              seats, its lowest number in the Lok Sabha to that point, becoming
              parliament’s second largest party. Rao subsequently resigned as
              prime minister and, in September, as party president. He was
              succeeded as president by Sitaram Kesri, the party’s first
              non-Brahman leader. In 1996, the United Front (UF) government, a
              coalition of 13 parties, took power with Congress Party support.
              However, as the largest opposition party after the Bharatiya
              Janata Party (BJP), Congress played a crucial role in both
              supporting and opposing the UF.
            </p>
            <div className={styles.imgc4}></div>
            <p>
              In November 1997, Congress withdrew its support from the UF,
              leading to elections in February 1998. To strengthen the party's
              appeal, Sonia Gandhi, widow of Rajiv Gandhi, took leadership at
              the urging of party leaders. Despite BJP forming a government with
              Atal Bihari Vajpayee as Prime Minister in 1998, Congress and its
              allies prevented BJP from gaining an absolute majority in the Lok
              Sabha. After the 1998 elections, Kesri resigned as party
              president, and Sonia Gandhi assumed leadership of the Congress
              Party. In May of that year, Vajpayee's decision to conduct nuclear
              weapons tests sparked international condemnation. After 13 months,
              his coalition lost a crucial vote of confidence in the Lok Sabha
              by a single vote when coalition partner All India Dravidian
              Progressive Federation withdrew support. In 1999, national
              elections saw the BJP leading the NDA coalition of over 20 parties
              to a majority victory. Vajpayee returned as prime minister with
              the BJP securing 182 seats. Despite active campaigning, Congress
              fared poorly, winning only 114 seats, marking a decline from
              previous elections in 1996 and 1998.
            </p>
            <div className={styles.imgc5}></div>
            <p>
              Nevertheless, in the 2004 national elections the party scored a
              surprising victory and returned to power. Gandhi, however,
              declined an invitation to become prime minister and instead
              supported Manmohan Singh, a former finance minister, who in May
              2004 became the country’s first Sikh prime minister. Although
              Vajpayee sought to resolve the country’s long-standing conflict
              with Pakistan over the Kashmir region and made India a world
              leader in information technology, the coalition lost its majority
              in the 2004 parliamentary elections to the Congress Party’s United
              Progressive Alliance (UPA) coalition, and Vajpayee resigned from
              office. In the 2009 elections, Congress further surprised by
              increasing its Lok Sabha seats from 153 to 206, its strongest
              performance since 1991. Meanwhile, the BJP's seats decreased from
              137 to 116, cementing the UPA coalition's victory once again. By
              the 2014 Lok Sabha elections, the party had lost significant
              support due to poor economic conditions and corruption scandals.
              Despite promoting its legislative efforts to aid the poor and
              rural areas and fielding Rahul Gandhi as its prime ministerial
              candidate, it struggled to regain favor. The BJP, led by Narendra
              Modi, won a decisive victory in the mid-May elections, marking the
              Congress Party's worst performance with only 44 seats. As a
              result, Congress couldn't assume the official opposition role,
              which requires at least 55 seats. Singh left office on May 26,
              when Modi became prime minister. The BJP went on to win the 2019
              elections with an increased majority, but in 2024, it won 240
              seats, losing its singular majority. The NDA secured 293 seats,
              while the INDIA coalition won 234 seats, including 99 for
              Congress, earning it the Official Opposition status. Seven
              independents and ten non-aligned party candidates also won seats
              in the Lok Sabha.
            </p>
          </div>
          <div className={styles.section5}>
            <h2>THE ROLE OF REGIONAL PARTIES</h2>
            <div className={styles.imgc6}></div>
            <p>
              India's political landscape features eight national parties and
              numerous regional parties. Regional parties saw significant growth
              in the late 1980s and early 1990s, stabilizing their vote share
              around 50% in subsequent elections. Two general elections, 2014
              and 2019, saw a single party (BJP) on its own getting the full
              majority, breaking the 25 years of compulsions of coalition
              politics. Yet again, in 2024, BJP led-NDA was dependent on
              regional parties like JDU and TDP winning 12 and 16 seats in Bihar
              and Andhra Pradesh, respectively to form the national government.
              Meanwhile, the Opposition's INDIA bloc managed to put up a tough
              contest against the NDA, partly because of its allies, such as the
              Samajwadi Party (SP) in Uttar Pradesh and the DMK in Tamil Nadu.
              More notable mentions are Mamata Banerjee's TMC in West Bengal and
              the Shiv Sena in Maharashtra. There's also previously prominent
              regional parties like BSP in UP, BJD in Odisha, BRS in Telangana,
              YSRCP in Andhra Pradesh, AIADMK in Tamil Nadu and SAD in Punjab
              which failed to replicate their previous success in recent
              elections.
            </p>
          </div>
          <div className={styles.section6}>
            <h2>CONCLUSION</h2>
            <p>
              The evolution of political parties in India reflects a dynamic and
              often tumultuous journey marked by shifts in ideology, leadership,
              and electoral fortunes. Several key conclusions can be drawn from
              this evolution:
            </p>
            <ul>
              <li>
                India's diversity and pluralism is a reflection of India's
                complex social fabric and the decentralized nature of its
                governance.
              </li>
              <li>
                The evolution of Congress from a nationalist movement to a
                mainstream political party illustrates its adaptation to
                changing socio-political contexts and challenges.
              </li>
              <li>
                Over time, regional parties have gained prominence, often
                playing crucial roles in coalition governments at the national
                level.
              </li>
              <li>
                The era of coalition politics, particularly since the 1990s, has
                reshaped India's political landscape.
              </li>
              <li>
                Political parties in India have shown flexibility in adapting
                their ideologies to appeal to a broad electorate. This includes
                shifts from socialism to economic liberalization, as seen in the
                Congress Party under Narasimha Rao and the BJP under Vajpayee.
              </li>
              <li>
                Indian elections demonstrate high levels of voter volatility,
                with significant swings in voter preferences across different
                elections.{" "}
              </li>
            </ul>
            <p>
              Overall, the evolution of political parties in India underscores
              the vibrancy and complexity of its democratic framework, shaped by
              historical legacies, socio-economic changes, and regional
              dynamics. Adaptation, coalition-building, and leadership have been
              critical factors in navigating India's political landscape and
              addressing the diverse needs of its population.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
