/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const headerStyles = css`
  position: relative;
  overflow: hidden;
  .header-pic {
    position: relative;
  }
  #main {
    position: relative;
    z-index: -100;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    text-align: center;
  }
  .header-heading h2 {
    font-size: 2rem;
    margin: 0;
  }
  .header-heading h1 {
    font-size: 4rem;
    margin: 0;
    span {
      color: #ff0000;
    }
  }
  .details {
    margin: 20px 0;
    font-size: 1.2rem;
  }
  .header-btns .header-btn {
    background: #ff0000;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
    &:hover {
      background: #cc0000;
    }
  }
`;
