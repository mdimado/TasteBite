import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";
import heroimg from "../assets/images/heroimg.png";
import tasty from "../assets/images/tastyim.png";
import thinking from "../assets/images/thinking.png";
import lesf from "../assets/images/leaf.png";
import spices from "../assets/images/spices.png";
import spice1 from "../assets/images/spice1.png"
import spice2 from "../assets/images/spice2.png"
import spice3 from "../assets/images/spice3.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExploreClick = () => {
    navigate("/recipes"); 
  };
  const navigate = useNavigate();


  const limit = 10; 
  const { data: products, loading } = useGetData("recipes", limit);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <p className="hero_subtitle">FOODS WITH RECIPES</p>
                <div className="h21">
                  <h2>
                    GOOD <img src={tasty} alt="" /> TASTE
                  </h2>
                </div>
                <div className="h21 mt-0">
                  <h2 className="colchange">
                    GOOD <img src={thinking} alt="" /> SENSE
                  </h2>
                </div>

                <p>
                  Discover delicious recipes and culinary inspiration to
                  elevate your cooking experience. Let's get cooking!
                </p>

               
                
                <div className="buttoon" onClick={handleExploreClick}>Explore</div>
               
              </div>
            </Col>
            <Col className="dffd" lg='6'>
            <img src={heroimg} alt="" className="heroimg"/>
            <img src={spice1} alt="" className="hoverimg" />
            <img src={lesf} alt="" className="hoverimg2" />
            <img src={lesf} alt="" className="hoverimg3" />
            <img src={spices} alt="" className="hoverimg5" />
            <img src={spice2} alt="" className="hoverimg6" />
            <img src={spice3} alt="" className="hoverimg7" />
          </Col>
          </Row>
        </Container>
      </section>

      <section className="trending__products">
        <Container>
          <Row className="ddffd">
            <Col lg="12" className="text-center">
              <h2 className="section__title">Try these !!</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={products} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
