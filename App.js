import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/EvilIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const App = () => {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
      title: 'O Justiceiro',
      text:
        'Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro',
      release: 2018,
      img:
        'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg',
    },
    {
      title: 'Bad Boys for life',
      text:
        'Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.',
      release: 2020,
      img:
        'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg',
    },
    {
      title: 'Viúva Negra',
      text:
        'Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.',
      release: 2020,
      img:
        'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg',
    },
    {
      title: 'Top Gun',
      text:
        'Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.',
      release: 2020,
      img:
        'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg',
    },
    {
      title: 'BloodShot',
      text:
        'Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ',
      release: 2020,
      img:
        'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg',
    },
    {
      title: 'Free Guy',
      text:
        'Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.',
      release: 2020,
      img:
        'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg',
    },
  ]);

  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveItem] = useState(0);

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image style={styles.slideImg} source={{uri: item.img}} />
          <Text style={styles.slideText}>{item.title}</Text>
          <Icon style={styles.slideIcon} name="play" size={38} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <ScrollView style={styles.container}>
        <View style={{flex: 1, height: screenHeight}}>
          <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
            <ImageBackground
              source={{uri: background}}
              style={styles.background}
              blurRadius={4}>
              <View style={styles.search}>
                <TextInput style={styles.input} placeholder="Procura algo?" />
                <TouchableOpacity style={styles.btn} onPress={() => {}}>
                  <Icon name="search" size={24} color="#666" />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 25,
                  marginLeft: 10,
                  marginVertical: 10,
                  borderBottomWidth: 3,
                  borderBottomColor: '#fff',
                  width: '93%',
                }}>
                Novidades
              </Text>
              <View style={styles.slide}>
                <Carousel
                  style={styles.carousel}
                  ref={carouselRef}
                  data={lista}
                  renderItem={_renderItem}
                  sliderWidth={screenWidth}
                  itemWidth={200}
                  inactiveSlideOpacity={0.5}
                  onSnapToItem={(index) => {
                    setBackground(lista[index].img);
                    setActiveItem(index);
                  }}
                />
              </View>
              <View style={styles.info}>
                <View style={{marginTop: 10}}>
                  <Text style={styles.infoTilte}>
                    {lista[activeIndex].title}
                  </Text>
                  <Text style={styles.infoText}>{lista[activeIndex].text}</Text>
                  <Icon
                    style={styles.infoIcon}
                    name="plus"
                    size={32}
                    color="#f00"
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },
  search: {
    marginTop: 15,
    backgroundColor: '#fff',
    elevation: 8,
    borderRadius: 5,
    marginHorizontal: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: '95%',
    padding: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
  btn: {
    position: 'absolute',
    right: 5,
    top: 10,
  },
  slide: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  slideImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  slideText: {
    fontSize: 21,
    alignSelf: 'center',
    padding: 15,
    color: '#fff',
    position: 'absolute',
    bottom: -45,
  },
  slideIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  info: {
    backgroundColor: '#000',
    width: '98%',
    height: screenHeight,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    marginHorizontal: 4,
    padding: 8,
  },
  infoTilte: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    textAlign: 'justify',
  },
  infoIcon: {
    position: 'absolute',
    top: -5,
    right: 0,
  },
});

export default App;
