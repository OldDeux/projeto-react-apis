import React, { useContext, useEffect, useState } from "react";
import { BaseStats, Container, ContainerDetail, ContainerMoves, DetailPage, Div, Div2, H5, Id, ImgFront_Back, ImgOfficial, InfoAndMoves, ProgressBar, ProgressBarContainer, TypeMoves } from "./detailsStyle";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { Type, Types } from "../../pages/details/detailsStyle";

function DetailsPage({ details }) {
  const context = useContext(GlobalContext)
  const { typeColor, backgroundColor, statsColor, imageByType} = context

  const [img, setImg] = useState({ img: "" })
  const [frontImg, setFrontImg] = useState({ img: "" })
  const [backImg, setBackImg] = useState({ img: "" })
  const [id, setId] = useState("")
  const [type1, setType1] = useState({ name: "" })
  const [type2, setType2] = useState({ name: "" })
  const [name, setName] = useState("");
  const [stats, setStats] = useState([])
  const [moves, setMoves] = useState([])
  const statName = stats.map((stat) => stat.stat.name);

  useEffect(() => { detailsPokemon() }, [])

  console.log({ name })

  const detailsPokemon = async () => {
    try {
      const response = await axios.get(details?.url)
      setId(response.data.id)
      setName(details.name)
      setImg({ img: response.data.sprites.other["official-artwork"].front_default })
      setFrontImg({ img: response.data.sprites.front_default })
      setBackImg({ img: response.data.sprites.back_default })
      setType1({ name: response.data.types[0]?.type.name })
      setType2({ name: response.data.types[1]?.type.name })
      setStats(response.data.stats)
      setMoves(response.data.moves)
    } catch (err) {
      console.log(err.response);
    }

  }




  return (
    <Container>

      <div>
        <h1>Detalhes</h1>
      </div>
      <ContainerDetail color={backgroundColor(type1.name)}>
        <ImgFront_Back>
          <div>
            <img src={frontImg.img} />
          </div>
          <div>
            <img src={backImg.img} />
          </div>
        </ImgFront_Back>
        <BaseStats>

          <h2>Base stats:</h2>
          <Div>
            {stats.map((stat, index) => (
              <Div2>
                <H5>{stat.base_stat}</H5>
                <ProgressBarContainer>
                  <ProgressBar color={statsColor(statName[index])} progress={stat.base_stat}>.</ProgressBar>
                </ProgressBarContainer>
                <hr />
              </Div2>
            ))}
          </Div>
          <div>
            <p>Total: {stats.length > 0 ? stats.reduce((accumulator, currentStat) => accumulator + currentStat.base_stat, 0) : 0}</p>
          </div>

        </BaseStats>
        <InfoAndMoves>
          <div>
            {id < 10 ? <Id>#0{id}</Id> : <Id>#{id}</Id>}
            <h1>{name}</h1>
          </div>
          <hr />
          <Types>
            <Type color={typeColor(type1.name)}> <img src={imageByType(type1.name)}/> {type1.name}</Type>
            {type2.name && <Type color={typeColor(type2.name)}> <img src={imageByType(type2.name)}/> {type2.name}</Type>}
          </Types>

          <ContainerMoves>
            <h2>Moves:</h2>
            <div>
              {moves?.filter((move, index) => index < 4).map((move) => {
                return (
                  <div>
                    <TypeMoves>
                      {move.move.name}
                    </TypeMoves>
                  </div>
                )
              })}
            </div>
          </ContainerMoves>

        </InfoAndMoves>



        <ImgOfficial>
          <img src={img.img} alt="" />
        </ImgOfficial>
      </ContainerDetail>


    </Container>
  );
}

export default DetailsPage;




