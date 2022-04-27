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
    margin-right: 10px;
  }

  .info {
    display: flex;
    flex-direction: row;
    color: #adb1b8;
    font-size: 14px;
    margin-bottom: 30px;
    align-items: flex-end;
  }

  .info_text {
    margin-bottom: 0;
  }
`;

export default Styles;
