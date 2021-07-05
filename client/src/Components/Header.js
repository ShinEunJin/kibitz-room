import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import { Dropdown, Menu } from "antd"
import { MdAddAPhoto, MdCreateNewFolder } from "react-icons/md"
import { FaSearch, FaClipboardList, FaUser } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { logout } from "../_actions/user_action"
import dotenv from "dotenv"
import routes from "../routes"
dotenv.config()

const HeaderBar = styled.header`
  position: sticky;
  padding: 0 10%;
  margin: 0 auto;
  top: 0;
  width: 80%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 3px -5px rgba(255, 255, 255, 1);
  z-index: 5;
  background-color: black;
  font-weight: 600;
  color: white;
`

const SLink = styled(Link)`
  font-size: 1em;
  font-weight: 600;
  &:hover {
    color: wheat;
  }
`

const OnPage = styled.div`
  border-bottom: 2px solid
    ${(props) => (props.current ? "#8597ff" : "transparent")};
  margin: 0px 10px;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  transition: border-bottom 0.1s linear;
`

function Header(props) {
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const onLogoutHandler = () => {
    dispatch(logout()).then((res) => {
      if (res.payload.success) {
        props.history.push("/login")
      } else {
        alert("로그아웃 실패했습니다.")
      }
    })
  }

  const search = (
    <Menu>
      <Menu.Item>
        <SLink to={routes.findByMap}>지도로 찾기</SLink>
      </Menu.Item>
      <Menu.Item>
        <SLink to={routes.findBySearch}>검색으로 찾기</SLink>
      </Menu.Item>
    </Menu>
  )

  const upload = (
    <Menu style={{ padding: "0.3rem", fontWeight: 600, fontSize: "1em" }}>
      {user.userData && !user.userData.isAuth
        ? "로그인 하고 사진을 직접 올려보세요!"
        : "사진 업로드 하기"}
    </Menu>
  )

  const take = (
    <Menu>
      <Menu.Item>
        <SLink to={routes.userCart}>찜목록</SLink>
      </Menu.Item>
      <Menu.Item>
        <SLink to={routes.userMyProfile}>프로필</SLink>
      </Menu.Item>
    </Menu>
  )

  const board = (
    <Menu style={{ padding: "0.3rem", fontWeight: 600, fontSize: "1em" }}>
      자유게시판
    </Menu>
  )

  const loginAndRegister = (
    <Menu>
      <Menu.Item>
        <SLink to="/login">로그인</SLink>
      </Menu.Item>
      <Menu.Item>
        <SLink to="/register">회원가입</SLink>
      </Menu.Item>
    </Menu>
  )

  if (user.userData && !user.userData.isAuth) {
    /* 로그인 안한 상태 */
    return (
      <HeaderBar>
        {/* 로고 부분 */}
        <div>
          <OnPage>
            <SLink style={{ color: "white" }} to="/">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ height: "3rem", width: "3rem" }}
                  src="/logo/logo1.png"
                />
                <span style={{ paddingLeft: 3, fontSize: "1.5em" }}>
                  BGyeong
                </span>
              </div>
            </SLink>
          </OnPage>
        </div>
        {/* 아이콘 부분 */}
        <div style={{ display: "flex" }}>
          {/* 찾기 */}
          <OnPage
            current={
              props.location.pathname === "/find_map" ||
              props.location.pathname === "/find_search"
            }
          >
            <Dropdown overlay={search} placement="bottomRight" arrow>
              <FaSearch style={{ fontSize: "1.4em" }} />
            </Dropdown>
          </OnPage>
          {/* 업로드 */}
          <OnPage current={props.location.pathname === "/upload"}>
            <SLink to="/upload">
              <Dropdown overlay={upload} placement="bottomRight" arrow>
                <MdAddAPhoto style={{ fontSize: "1.4em" }} />
              </Dropdown>
            </SLink>
          </OnPage>
          {/* 자유게시판 */}
          <OnPage current={props.location.pathname === "/board"}>
            <SLink to="/board">
              <Dropdown overlay={board} placement="bottomRight" arrow>
                <FaClipboardList style={{ fontSize: "1.4em" }} />
              </Dropdown>
            </SLink>
          </OnPage>
          {/* 로그인 및 회원가입 */}
          <OnPage
            current={
              props.location.pathname === "/login" ||
              props.location.pathname === "/register"
            }
          >
            <Dropdown overlay={loginAndRegister} placement="bottomRight" arrow>
              <AiOutlineUser style={{ fontSize: "1.6em" }} />
            </Dropdown>
          </OnPage>
        </div>
      </HeaderBar>
    )
  } else {
    /* 로그인 상태 */
    return (
      <HeaderBar>
        {/* 로고 부분 */}
        <div>
          <OnPage>
            <SLink to="/">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ height: "3rem", width: "3rem" }}
                  src="/logo/logo1.png"
                />
                <span style={{ paddingLeft: 3, fontSize: "1.5em" }}>
                  BGyeong
                </span>
              </div>
            </SLink>
          </OnPage>
        </div>
        {/* 아이콘 부분 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* 찾기 */}
          <OnPage
            current={
              props.location.pathname === "/find_map" ||
              props.location.pathname === "/find_search"
            }
          >
            <Dropdown overlay={search} placement="bottomRight" arrow>
              <FaSearch style={{ fontSize: "1.4em" }} />
            </Dropdown>
          </OnPage>
          {/* 찜목록 */}
          <OnPage current={props.location.pathname === "/user/cart"}>
            <Dropdown overlay={take} placement="bottomRight" arrow>
              <FaUser style={{ fontSize: "1.5em" }} />
            </Dropdown>
          </OnPage>
          {/* 업로드 */}
          <OnPage current={props.location.pathname === "/upload"}>
            <SLink to="/upload">
              <Dropdown overlay={upload} placement="topRight" arrow>
                <MdAddAPhoto style={{ fontSize: "1.4em" }} />
              </Dropdown>
            </SLink>
          </OnPage>
          {/* 자유게시판 */}
          <OnPage current={props.location.pathname === "/board"}>
            <SLink to="/board">
              <Dropdown overlay={board} placement="bottomRight" arrow>
                <FaClipboardList style={{ fontSize: "1.4em" }} />
              </Dropdown>
            </SLink>
          </OnPage>
          {/* 로그아웃 */}
          <OnPage>
            <div
              style={{ fontSize: "1em", cursor: "pointer" }}
              onClick={onLogoutHandler}
            >
              Log out
            </div>
          </OnPage>
        </div>
      </HeaderBar>
    )
  }
}

export default withRouter(Header)
