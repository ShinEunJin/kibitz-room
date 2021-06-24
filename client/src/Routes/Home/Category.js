import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const LeftColumn = styled.div`
  opacity: 0.3;
  position: absolute;
  bottom: 3rem;
  left: 29%;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }
`

const MapColumn = styled.section`
  padding: 2rem;
  height: 10vh;
  width: 20vw;
  border: 1px solid black;
  color: white;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px black;
  &:hover {
    transform: scale(1.005);
  }
  display: flex;
  align-items: center;
`

const RightColumn = styled.div`
  opacity: 0.3;
  position: absolute;
  bottom: 3rem;
  right: 29%;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }
`

const SearchColumn = styled.section`
  padding: 2rem;
  height: 10vh;
  width: 20vw;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px black;
  &:hover {
    transform: scale(1.005);
  }
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Title = styled.div``

const Contents = styled.div``

function Category({ time }) {
  const [loadImage, setLoadImage] = useState([])

  useEffect(() => {
    setLoadImage(["logo/menu/menu1.jpg", "logo/menu/menu2.jpg"])
  }, [])

  return (
    <>
      <LeftColumn>
        <Fade when={time} left distance="0.5rem" delay={4000} duration={200}>
          <Link to="/find_map">
            <MapColumn
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), url(${loadImage[0]}) center/cover`,
              }}
            >
              <Contents>
                <Title>지도로 구경하기</Title>
                <img
                  style={{
                    marginLeft: "0.5rem",
                    width: "3rem",
                    height: "3rem",
                  }}
                  src="logo/map.png"
                />
              </Contents>
            </MapColumn>
          </Link>
        </Fade>
      </LeftColumn>
      <RightColumn>
        <Fade when={time} right distance="0.5rem" delay={4000} duration={200}>
          <Link to="/find_search">
            <SearchColumn
              style={{
                background: `linear-gradient(to left, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), url(${loadImage[1]}) center/cover`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Title>검색으로 구경하기</Title>
                <Contents>
                  <img
                    style={{
                      marginRight: "0.5rem",
                      width: "3rem",
                      height: "3rem",
                    }}
                    src="logo/search.png"
                  />
                </Contents>
              </div>
            </SearchColumn>
          </Link>
        </Fade>
      </RightColumn>
    </>
  )
}

export default Category
