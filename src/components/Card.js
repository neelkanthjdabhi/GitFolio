import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);

  const { name, avatar_url, html_url, login, company, blog, bio, location, twitter_username } = githubUser;

  return <Wrapper>
    <header>
      <img src={avatar_url} alt={name} />
      <div>
        <h2>
          {name}
        </h2>
        <p>
          <a target="_blank" href={`${html_url}`}>@{login}</a>
        </p>
        <p className="bio">
          {bio || "Bio Not Available"}
        </p>
      </div>
    </header>

    <div className="links">
      <p>
        <MdBusiness></MdBusiness> {company || "Not Available"}
      </p>
      <p>
        <MdLocationOn></MdLocationOn> {location || "Not Available"}
      </p>
      <p>
        <a target="_blank" href={`${blog}`}> <MdLink></MdLink>{blog || "Not Available"}</a>
      </p>
    </div>
  </Wrapper>;
};
const Wrapper = styled.article`
  // padding: 1.5rem 2rem;
  position: relative;
  header {
    display: flex;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 170px;
      height: 170px;
      //margin-right: 0.8rem;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
      border-radius: 50%;
      border: 5px solid var(--accent);
    }
    h2 {
      color: var(--white);
      margin - bottom: 0.25rem;
      margin-top: 0.25rem;
    }
    p {
      display:flex;
      font-size: 1.3rem;
    }
    a {
      color: var(--accent);
      // color: var(--clr-primary-5);
      // border: 1px solid var(--clr-primary-5);
      // padding: 0.25rem 0.75rem;
      // border-radius: 1rem;
      // text-transform: capitalize;
      // letter-spacing: var(--spacing);
      // transition: var(--transition);
      // cursor: pointer;
      // &:hover {
      // background: var(--clr-primary-5);
      //   color: var(--clr-white);
      // }
    }
  }
  .bio {
      display:flex;
      font-size: 1.1rem;
      color: var(--white);
  }
  .links {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @media (min-width: 640px) {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
    column-gap: 3rem;
    align-items: center;
      p{
        color: var(--white);
       display: flex;
      },
      a {
      margin -top : 1rem;
      display: flex;
      align-items: center;
      svg {
        color: var(--accent);
         margin-right: 0.5rem;
        font-size: 1.5rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
      color: var(--accent);
        margin-right: 0.5rem;
        font-size: 1.5rem;
      }
      &:hover {
      color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
