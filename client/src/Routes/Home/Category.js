import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`

const Container = styled.div`
  width: 80%;
  height: 100%;
  padding: 4% 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MapColumn = styled.section`
  padding: 2rem;
  height: 40vh;
  width: 100%;
  border: 1px solid black;
  color: white;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px black;
  &:hover {
    transform: scale(1.005);
  }
`

const SearchColumn = styled.section`
  padding: 2rem;
  height: 40vh;
  width: 100%;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px black;
  &:hover {
    transform: scale(1.005);
  }
  color: white;
`

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  padding: 0 2rem;
`

const Contents = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const Span = styled.span`
  display: block;
  margin-bottom: 8px;
`

function Category() {
  const [loadImage, setLoadImage] = useState([])

  useEffect(() => {
    setLoadImage(["logo/menu/menu1.jpg", "logo/menu/menu2.jpg"])
  }, [])

  return (
    <BackGround id="find">
      <Container>
        <Link to="/find_map">
          <MapColumn
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), url(${loadImage[0]}) center/cover`,
            }}
          >
            <Title>지도로 찾기</Title>
            <Contents>
              <img
                style={{ marginRight: 30, width: 200, height: 200 }}
                src="logo/map.png"
              />
              <div style={{ fontSize: 25, textAlign: "center" }}>
                <Span>지도를 사용해</Span>
                <Span>장소를 찾아보세요</Span>
              </div>
            </Contents>
          </MapColumn>
        </Link>
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
              <Title>검색으로 찾기</Title>
              <Contents>
                <div style={{ fontSize: 25, textAlign: "center" }}>
                  <Span>검색을 통해</Span>
                  <Span>장소를 찾아보세요</Span>
                </div>
                <img
                  style={{ marginLeft: 30, width: 200, height: 200 }}
                  src="logo/search.png"
                />
              </Contents>
            </div>
          </SearchColumn>
        </Link>
      </Container>
    </BackGround>
  )
}

export default Category
