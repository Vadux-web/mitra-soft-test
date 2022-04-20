import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #adb1b8;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }

  .navbar {
    margin-bottom: 20px;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 10px;
  }

  .info {
    display: flex;
    flex-direction: column;
    color: #adb1b8;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export default Styles;
