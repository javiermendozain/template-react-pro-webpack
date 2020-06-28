// Dependencies
import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { OpenCloseModal } from '../../../redux/types/modalActionsTypes';
import { Button } from 'reactstrap';


// Styles
//import styles from './Home.scss';


const Home = (props) => {
  const { OpenCloseModal } = props;

  return (
    <Fragment>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      <br/>
      <Button onClick={() => OpenCloseModal()} >
        Open Modal
      </Button>

    </Fragment>
  );
};

const mapDispatchToProps = {
  OpenCloseModal
};


export default connect(null,mapDispatchToProps)(Home);
