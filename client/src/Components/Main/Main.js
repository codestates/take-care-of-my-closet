import React from "react";
import { Link } from "react-router-dom";

import { dummyMainPosts } from "../../dummyData/dummyData";
import {FlexMain} from '../Flex'
import {A11yHidden} from '../Common'
import {MainUl, MainArticle, MainImg, MainP} from './MainStyled'




function Main({ contents, handleContentClick }) {
  // if (contents.length === 0) {
  //   return <div>게시글이 없습니다.</div>;
  // }

  return (
    <FlexMain>
      {/* <h2 className="a11yHidden">메인 페이지</h2> */}
      <A11yHidden>메인 페이지</A11yHidden>
      <MainUl>
        {dummyMainPosts.data.map((el) => {
          return (
            <Link to="/content"  style={{ textDecoration: 'none' }}>
              <li key={el.id} onClick={() => handleContentClick(el.id)}>
                <MainArticle>
                  <MainP>{el.title}</MainP>
                  {/* <MainTitle>{el.title}</MainTitle> */}
                  < MainImg src={el.image} alt="img-thumbnail"/>
                  {/* <img src=s{el.image} alt="img-thumbnail"/> */}
                  <MainP>@{el.user.nickname}</MainP>
                </MainArticle>
              </li>
            </Link>
          );
        })}
        {/* <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="dd" />
            Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="dd" />
            Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="dd" />
            Content
          </article>
        </li> */}
      </MainUl>
    </FlexMain>
  );
}

export default Main;
