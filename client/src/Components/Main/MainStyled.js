import styled from 'styled-components'


export const MainUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    /* margin-bottom:100px ; */

    justify-content: space-around;
    /* justify-content: space-between; */

    width: 1400px;
    /* height: 100%; */
    /* width: 1200px; */

    /* background-color: blanchedalmond; */
`

export const MainArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: aqua;
`

export const MainImg = styled.div`
  background-image: url(${props => props.src || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  height: 400px;
  background-color: chartreuse;
`

export const MainP = styled.p`
  margin: 0;
  padding: 20px;
  background-color: blueviolet;
  font-size: 17px;
  /* text-align: center; */
  color: white;
`