import React from 'react'
import styled from 'styled-components'

const Header = styled.h3`
  font-family: 'Cinzel';
  margin-bottom: 10px;
`

const Text = styled.div`
  margin-bottom: 10px;
`

const Caption = styled.div`
  font-family: 'Cinzel';
  font-size: 0.7em;
`

const Container = styled.div`
  & ${Header}:not(:first-child) {
    margin-top: 20px;
  }

  a {
    color: #a39683;
    text-decoration: underline;
    &:hover {
      color: #d3b725;
    }
  }
`

const SideImage = styled.div`
  float: right;
  margin: 10px;
  width: 250px;
  text-align: center;

  img {
    margin: 0;
  }
`

const List = styled.ul`
  margin-left: 40px;

  li {
    margin: 0;
  }
`

const ProgramPage = () => (
  <Container>
    <Header>WELCOMING THE GROOM</Header>
    <SideImage>
      <img
        src="https://i.pinimg.com/originals/59/3e/35/593e356a316220de996ba776ea6b468f.jpg"
        alt="Nathaswaram (left); Thavil (right)"
      />
      <Caption>Nathaswaram (left); Thavil (right)</Caption>
    </SideImage>
    <Text>
      Amrit arrives at the wedding venue accompanied by the best man / tholan,
      Anurjan (Kavitha’s brother), his family and relatives. Upon
      arrival at the wedding hall, Kavitha’s family welcomes Amrit with a flower
      garland. The best man sprinkles water on Amrit’s feet, a gesture lavished
      on an honoured guest, and in return Amrit gifts him a gold ring. To the
      accompaniment of the{' '}
      <a href="https://en.wikipedia.org/wiki/Nadaswaram">nathaswaram</a> (wind
      instrument) and <a href="https://en.wikipedia.org/wiki/Thavil">thavil</a>{' '}
      (percussion instrument), the best man and Amrit’s family lead the groom to
      the altar, where the priest awaits to perform the ceremony.
    </Text>
    <Header>DIVINE PURIFICATION AND PROTECTION</Header>
    <Text>
      Before performing any ceremony, Hindus first and foremost worship{' '}
      <a href="https://en.wikipedia.org/wiki/Ganesha">Lord Ganesha</a>, as he is
      the destroyer of all obstacles and hurdles. At the auspicious hour, the
      priest sprinkles holy water sanctifying the ceremonial area. He then
      performs the Ganesha pooja - a prayer to Lord Ganesha, invoking his
      blessings and protection for the wedding to take place without any
      unforeseen hindrances.
    </Text>
    <Text>
      To enlist divine protection from the unforeseen, the priest conducts
      Puniyathanam by giving Amrit a ring of special grass (thetpai as seen on
      the right) on his right ring finger as an indication of purity of mind. He
      also ties on a{' '}
      <a href="https://en.wikipedia.org/wiki/Mauli_(thread)">
        holy sacred saffron thread
      </a>{' '}
      around Amrit’s right wrist, which serves as a shield from harm and evil to
      anyone who wears it. A male representative from the family breaks a
      coconut. The breaking of coconuts throughout the wedding represents a
      bloodless sacrifice and the destruction of the ego to reveal the purity
      within; the sweet coconut water signifying love, the shedding of
      selfishness. Five married women, symbolizing divine witnesses, from both
      parties are called to sow the nine varieties of traditional grain (<a href="https://pbs.twimg.com/media/Ci6wmGIVEAAFoYJ.jpg">
        Navathaaniam
      </a>) in an{' '}
      <a href="https://en.wikipedia.org/wiki/Matki_(earthen_pot)">
        earthen pot
      </a>, to ensure a blessing of fertile life for the couple.
    </Text>
    <Header>ARRIVAL OF THE BRIDE</Header>
    <SideImage>
      <img
        src="https://parvathyramesh12.files.wordpress.com/2016/07/mrg1.png?w=680"
        alt="Sacred Fire"
      />
      <Caption>Sacred Fire</Caption>
    </SideImage>
    <Text>
      Kavitha now enters the hall accompanied by her family and bridesmaids
      wearing a saree (the first saree / Manavarai Saree). She is then
      escorted by her maid of honour / tholi, Pooja (Amrit’s sister),
      and takes her place at the altar to
      the right of Amrit. A Ganesha pooja is held to sanctify and protect the bride;
      however the ring and thread are worn on her left ring finger and left
      wrist respectively. This is because the image of{' '}
      <a href="https://en.wikipedia.org/wiki/Ardhanarishvara">
        Arthanareeswarar
      </a>{' '}
      is depicted as half male and half female, split down the middle. The right
      half is the male Shiva, while Parvati is the left half. This symbolises
      the equality of man and woman. When the saffron thread is tied around her
      wrist, a male representative from her family breaks a coconut.
    </Text>
    <Text>
      Next is the Shiva-Parvathi (Shakthi) pooja, symbolizing the enactment of
      the wedding of{' '}
      <a href="https://en.wikipedia.org/wiki/Shiva">Lord Shiva</a> and{' '}
      <a href="https://en.wikipedia.org/wiki/Parvati">Goddess Parvathi</a> (The
      Thirukalyanam), followed by a pooja to the nine planets (<a href="https://en.wikipedia.org/wiki/Navagraha">
        Navakiraka
      </a>) invoking the blessings of the nine holy planets. The sacred fire
      (Omum) is now lit invoking the deity{' '}
      <a href="https://en.wikipedia.org/wiki/Agni">Agni</a> (God of Fire) to
      bear witness to the marriage (Agni Saatchi).
    </Text>
    <Header>GIVING AWAY OF THE BRIDE (Kanyaa Thanam)</Header>
    <Text>
      The Kanyaa Thanam ritualis the most sentimental part of the wedding. It is
      where Kavitha’s parents give their daughter’s hand in marriage to Amrit,
      making Kavitha a member of Amrit’s family. The priest calls the mothers of
      both Kavitha and Amrit to the altar who greet each other by sprinkling
      scented water and placing turmeric on
      each other's foreheads. Kavitha’s mother, holding a with betel leaf and coconut in her hands,
      takes her daughter's hand and places it in Amrit’s hand indicating that he accept,
      cherish, and protect her all through life. She gives Amrit a gold coin
      symbolic of giving away the bride. Amrit accepts the coin and in turn
      gives it to his mother. This signifies the acceptance of Kavitha by Amrit
      and his family.
    </Text>
    <Header>BLESSING OF THE SAREE AND THAALI</Header>
    <SideImage>
      <img
        src="https://c1.staticflickr.com/6/5181/5664931643_801200ba5c_b.jpg"
        alt="Kumbam"
      />
      <Caption>Kumbam</Caption>
    </SideImage>
    <Text>
     Amrit gives a tray, containing the
      second Koorai saree,{' '}
      <a href="https://en.wikipedia.org/wiki/Mangala_sutra">thaali</a> (gold
      necklace symbolising marriage) and other adornments to Kavitha.
      The tray blessed by the priest and then is presented
      to the guests for their blessing. Kavitha then leaves the altar
      accompanied by her mother and maid of honour/tholi and returns to her
      bridal suite to change into the Koorai saree. The priest consecrates the
      thaali by placing it on a kumbam in which the{' '}
      <a href="https://en.wikipedia.org/wiki/Lakshmi">Goddess Lakshmi</a>{' '}
      (Goddess of Wealth and Prosperity) is invoked and a pooja seeking her
      blessing is performed. The kumbam is a brass pot of water with a coconut
      and mango leaves placed on it, representing the deity. Kavitha then
      returns to the altar with her family and bridesmaids dressed in her Koorai
      saree carrying a garland expressing her consent and acceptance and takes
      her seat next to Amrit.
    </Text>
    <Header>TYING THE SACRED THAALI</Header>
    <SideImage>
      <img
        src="https://i.pinimg.com/originals/52/9e/60/529e60bd0264bd90b3772be7b10fdfa9.jpg"
        alt="Thaali"
      />
      <Caption>Thaali</Caption>
    </SideImage>
    <Text>
      The crowning moment of the wedding is the thaali ceremony. The thaali is a
      gold pendant with embossed sacred emblems strung on a kodi (gold chain). It
      is a cherished symbol of a married woman and represents eternal love
      and a pledge to remain faithful in the presence of God. The sacred thaali
      will rest next to her heart. To begin the thaali ceremony, at the very
      auspicious moment (Muhurtham), the priest calls for the Kettimelam:{' '}
      <a href="https://en.wikipedia.org/wiki/Thavil">thavil</a> (percussion instrument) accompanied by{' '}
      <a href="https://en.wikipedia.org/wiki/Nadaswaram">nathaswaram</a> (wind instrument) rising
      to a crescendo, meant to drown out negative vibrations and other sounds in
      the wedding hall. The priest consecrates the thaali and gives it to Amrit,
      who stands to the right of Kavitha and ties the thaali around her neck.
      This signifies their union as husband and wife, and is accompanied by the
      cutting of a coconut and a showering of flowers by the guests to bless the
      couple. With his finger, Amrit spots Kavitha’s forehead with kunkumam
      (vermilion powder), another symbol of a married woman. In respect to Odissi
      culture, Amrit then puts a red glass bangle on KAvitha's wrist to 
      symbolise the marriage. The priest
      holds high a lit oil lamp symbolizing the divine light witnessing the
      nuptial knot. The married couple now exchange{' '}
      <a href="https://en.wikipedia.org/wiki/Garland">garlands</a> (mala
      matruthal) three times and Amrit moves to accommodate Kavitha on his left,
      Parvati’s place beside Shiva. They also feed each other a mixture of
      fruit, milk, and honey, as a promise of the sweet and endless love they hope
      to share.
    </Text>
    <Header>HOLY STEPS AROUND THE FIRE</Header>
    <SideImage>
      <img
        src="https://aninfinitejourney.files.wordpress.com/2017/10/indian-wedding-toe-ring-photos.jpg"
        alt="Metti (Toe Ring)"
      />
      <Caption>Metti (Toe Ring)</Caption>
    </SideImage>
    <Text>
      Tradition has it that marriage be formalized in the presence of Agni, the
      God of Fire. Here he stands as the universal witness to the union (Agni
      Saatchi). Accompanied by the tholan &amp; tholi, Kavitha and Amrit will
      take their first steps as husband and wife, circling the sacred fire
      clockwise three times to pay their respect to Agni. Having God as their
      guide, the couple will walk seven steps together to pledge their
      commitment towards the seven goals for spiritual evolution, and this is
      called Sapatapadi.
    </Text>
    <List>
      <li>The first step is for health, wealth and prosperity.</li>
      <li>
        The second step is for them to flourish through righteous means
        (Dharma).
      </li>
      <li>The third step is for physical, mental and spiritual strength.</li>
      <li>
        The fourth step is for happiness and harmony through mutual love and
        trust.
      </li>
      <li>The fifth step is for blessing of progeny (descendants).</li>
      <li>
        The sixth step is to remain in a lasting union with peace and
        tranquility.
      </li>
      <li>The seventh step is for spiritual union and merger of souls.</li>
    </List>
    <SideImage>
      <img
        src="http://www.awesomewedding.in/wp-content/uploads/2015/09/wedding-game.jpg"
        alt="Wedding Fun and Games"
      />
      <Caption>Wedding Fun and Games</Caption>
    </SideImage>
    <Text>
      As they go around the Agni certain rituals are performed in keeping with
      tradition. Amrit places Kavitha’s right foot on a granite stone and puts a
      silver ring (metti) on her second toe. He repeats the same for the left
      foot. In the process, the groom blesses her with a will as strong and
      steadfast as the stone to help lead a happy married life with courage and
      faith despite any adversities that may come up in life. The metti also
      indicates the marital status of the bride. The priest points to the star
      Arundhathi who was known to be the ideal wife. The priest then drops a
      ring into a pit filled with water for the couple to find the ring. This
      provides for a lighter moment eliciting giggles and chuckles as fingers
      play and flounder for the ring in the privacy of the pot. The purpose of
      this ceremony is to highlight the importance of compromis and
      understanding in a relationship. Tradition has it that the one
      who finds the ring is said to be the
      one who ‘commands’ the family. The couple makes an offering to Agni, seeking
      divine blessing (Poorna Ahuthi).
    </Text>
    <Header>BLESSINGS</Header>
    <Text>
      The priest, the parents, and the guests bless the couple by sprinkling
      them with rice to wish them prosperity and happiness. The
      blessing is completed by the performance of an aarthi - the circular
      movement of a tray with lighted wicks - by two ladies. A new era dawns in
      the life of the newly married couple.
    </Text>
    <Header>THANK YOU</Header>
    <Text>
      To our family and friends who will be joining us this day, and to those
      who cannot be with us, we thank you. We love you all and thank you for your love and
      friendship. It means so much to us to have you celebrate the beginning of
      our lives together. We hope you enjoy our celebrations, music, and food!
      ❤️
    </Text>
  </Container>
)

export default ProgramPage
